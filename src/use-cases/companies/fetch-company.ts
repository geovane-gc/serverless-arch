import { FetchCompany, FetchCompanyInput } from "../../graphql/types/graphql";

export class FetchCompanyUseCase {
    constructor() { }

    async execute({
        companyId
    }: FetchCompanyInput): Promise<FetchCompany> {
        console.log(companyId);

        return {
            email: "comercial@nagro.com.br",
            document: "00623904000173",
            updatedAt: "2024-01-05",
            createdAt: "2024-01-05",
            approvalStatusUpdatedAt: "2024-01-03",
            status: "COMPLETE",
        };
    }
}
