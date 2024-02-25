import { CreateUserInput, User, UserStatus } from '../../graphql/types/graphql';

export class CreateUserUseCase {
    constructor() { }

    async execute({ email, password }: CreateUserInput): Promise<User> {
        console.log(password, email);

        return {
            userId: '1',
            email: 'geovane@teste.com',
            password: '123456',
            status: UserStatus.Active,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            deletedAt: null,
        };
    }
}
