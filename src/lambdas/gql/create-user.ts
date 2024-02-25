import { CreateUserInput, User } from '../../graphql/types/graphql';
import { makeCreateUserUseCase } from '../../use-cases/users/factories/make-create-user';

export async function handler(input: CreateUserInput): Promise<User> {
  try {
    const useCase = makeCreateUserUseCase();
    return await useCase.execute(input);
  } catch (error: any) {
    console.log('[ERROR]', error?.message);
    throw new Error(error?.message);
  }
}
