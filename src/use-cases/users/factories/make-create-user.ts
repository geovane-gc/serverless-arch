import { CreateUserUseCase } from '../create-user';

export function makeCreateUserUseCase() {
  const useCase = new CreateUserUseCase();
  return useCase;
}
