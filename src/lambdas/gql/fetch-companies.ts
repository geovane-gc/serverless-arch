import { FetchCompaniesInput } from "../../graphql/types/graphql";
import { makeFetchCompaniesUseCase } from "../../use-cases/companies/factories/make-fetch-companies";

export async function handler(input: FetchCompaniesInput) {
    try {
        const useCase = makeFetchCompaniesUseCase();
        const response = await useCase.execute(input);

        return response;
    } catch (error: any) {
        console.log("[ERROR]", error?.message);
        throw new Error(error?.message);
    }
}
