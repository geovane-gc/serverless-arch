import { CreateCompanyInput } from "../../graphql/types/graphql";
import { makeCreateCompanyUseCase } from "../../use-cases/companies/factories/make-update-company";

export async function handler(input: CreateCompanyInput) {
    try {
        const useCase = makeCreateCompanyUseCase();
        return await useCase.execute(input);
    } catch (error: any) {
        console.log("[ERROR]", error?.message);
        throw new Error(error?.message);
    }
}
