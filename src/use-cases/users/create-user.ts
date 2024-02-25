import { User, CreateUserInput } from '../../graphql/types/graphql';

export class CreateUserUseCase {
  constructor() {}

  async execute({ email, password }: CreateUserInput): Promise<User> {
    console.log(password, email);

    return {
      userId: '1',
      email: 'geovane@teste.com',
      password: '123456',
      status: 'ACTIVE',
    };
  }
}
