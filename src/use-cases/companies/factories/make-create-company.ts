import { CreateCompanyUseCase } from '../create-company';

export function makeCreateCompanyUseCase() {
  const useCase = new CreateCompanyUseCase();
  return useCase;
}
