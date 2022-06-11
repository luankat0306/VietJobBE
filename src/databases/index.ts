import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = {
  // url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  url: 'mongodb+srv://luan:96Ek7045VKjyQc2F@cluster0.ypls7.mongodb.net/vietjob?retryWrites=true&w=majority',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
