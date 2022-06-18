import App from './app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import CandidatesRoute from './routes/candidates.route';
import ApplicationRoute from '@routes/application.route';
import EmployerRoute from '@routes/employer.route';
import PostRoute from '@routes/post.route';
import ProvinceRoute from '@routes/province.route';
import CareerRoute from '@routes/career.route';
import EducationRoute from '@routes/education.route';
import ExperienceRoute from '@routes/experience.route';
import CertificateRoute from '@routes/certificate.route';
import SkillRoute from '@routes/skill.route';
import SkillCandidateRoute from '@routes/skillCandidate.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new CandidatesRoute(),
  new ApplicationRoute(),
  new EmployerRoute(),
  new PostRoute(),
  new ProvinceRoute(),
  new CareerRoute(),
  new CertificateRoute(),
  new EducationRoute(),
  new ExperienceRoute(),
  new SkillRoute(),
  new SkillCandidateRoute(),
]);

app.listen();
