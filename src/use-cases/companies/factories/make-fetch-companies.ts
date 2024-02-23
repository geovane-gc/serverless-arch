import { FetchCompaniesUseCase } from "../fetch-companies";

export function makeFetchCompaniesUseCase() {
    const useCase = new FetchCompaniesUseCase();
    return useCase;
}
