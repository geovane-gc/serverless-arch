import { FetchCompanyUseCase } from "../fetch-company";

export function makeFetchCompanyUseCase() {
    const useCase = new FetchCompanyUseCase();
    return useCase;
}
