import { Company, CreateCompanyInput } from '../../graphql/types/graphql';

export class CreateCompanyUseCase {
  constructor() {}

  async execute({ document, email }: CreateCompanyInput): Promise<Company> {
    console.log(document, email);

    return {
      approvalStatusUpdatedAt: '2024-01-03',
      companyId: '1',
      email: 'geovane@teste.com',
      document: '125.125.125-12',
      status: 'ACTIVE',
      updatedAt: '2024-01-03',
      createdAt: '2024-01-03',
    };
  }
}
