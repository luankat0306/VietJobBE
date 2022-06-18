import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import userModel from '@models/user.model';
import { isEmpty } from '@utils/util';
import candidateModel from '@models/candidate.model';
import employerModel from '@models/employer.model';

class AuthService {
  public users = userModel;
  public candidate = candidateModel;
  public employer = employerModel;

  public async signup(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `Email ${userData.email} đã tồn tại`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await (
      await this.users.create({ ...userData, password: hashedPassword })
    ).toJSON({
      transform(doc, ret, options) {
        delete ret.password;
        return ret;
      },
    });

    if (createUserData?.role === 0) {
      await this.candidate.create({ user: createUserData._id });
    }

    if (createUserData?.role === 1) {
      await this.employer.create({ user: createUserData._id });
    }

    return createUserData;
  }

  public async login(userData: CreateUserDto): Promise<{ cookie: string; findUser: User }> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser = await this.users.findOne({ email: userData.email });
    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");
    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    const userTransform = findUser.toJSON({
      transform(doc, ret, options) {
        delete ret.password;
        ret.jwt = tokenData.token;
        return ret;
      },
    });
    return { cookie, findUser: userTransform };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email, password: userData.password });
    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

    return findUser;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id.toString() };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
