import { Company, CreateCompanyInput } from "../../graphql/types/graphql";

export class CreateCompanyUseCase {
    constructor() { }

    async execute({ document, email }: CreateCompanyInput): Promise<Company> {
        return {
            companyId: "1",
            email,
            document,
            status: "ACTIVE",
            updatedAt: "2024-01-03",
            createdAt: "2024-01-03",
        };
    }
}
