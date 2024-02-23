import { FetchCompany, FetchCompanyInput, } from "../../graphql/types/graphql";
import { makeFetchCompanyUseCase } from "../../use-cases/companies/factories/make-fetch-company";

export async function handler(input: FetchCompanyInput): Promise<FetchCompany> {
    try {
        const useCase = makeFetchCompanyUseCase();
        const response = await useCase.execute(input);

        return response;
    } catch (error: any) {
        console.log("[ERROR]", error?.message);
        throw new Error(error?.message);
    }
}
