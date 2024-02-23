import {
  FetchCompanies,
  FetchCompaniesInput,
} from '../../graphql/types/graphql';

export class FetchCompaniesUseCase {
  constructor() {}

  async execute({
    endDate,
    limit,
    paginationToken,
    startDate,
    status,
  }: FetchCompaniesInput): Promise<FetchCompanies> {
    console.log(endDate, limit, paginationToken, startDate, status);

    return {
      data: [
        {
          companyId: '976f7d33-35b7-4fba-bd55-ecf0e8436650',
          email: 'nostra@gmail.com',
          document: '59736347000140',
          updatedAt: '2024-01-03',
          createdAt: '2024-01-03',
          approvalStatusUpdatedAt: '2024-01-03',
          status: 'BASIC',
        },
        {
          companyId: 'f94259ab-b2f0-462e-a897-9542560b4c1d',
          email: 'real@gmail.com',
          document: '91492812000157',
          updatedAt: '2024-01-05',
          createdAt: '2024-01-05',
          approvalStatusUpdatedAt: '2024-01-03',
          status: 'INCOMPLETE',
        },
        {
          companyId: '68caeb96-c6b9-427f-9a70-c71770af1ca3',
          email: 'comercial@nagro.com.br',
          document: '00623904000173',
          updatedAt: '2024-01-05',
          createdAt: '2024-01-05',
          approvalStatusUpdatedAt: '2024-01-03',
          status: 'COMPLETE',
        },
        {
          companyId: '6f41a946-b735-4439-8774-94d6a9e75040',
          email: 'evil@gmail.com',
          document: '17879916000166',
          updatedAt: '2024-01-05',
          createdAt: '2024-01-05',
          approvalStatusUpdatedAt: '2024-01-03',
          status: 'BASIC',
        },
        {
          companyId: '6f41a946-b735-4439-8774-94d6a9e75040',
          email: 'good@gmail.com',
          document: '17879916000166',
          updatedAt: '2024-01-05',
          createdAt: '2024-01-05',
          approvalStatusUpdatedAt: '2024-01-03',
          status: 'COMPLETE',
        },
        {
          companyId: '6f41a946-b735-4439-8774-94d6a9e75040',
          email: 'bounce@gmail.com',
          document: '17879916000166',
          updatedAt: '2024-01-05',
          createdAt: '2024-01-05',
          approvalStatusUpdatedAt: '2024-01-03',
          status: 'COMPLETE',
        },
      ],
      paginationToken: '',
    };
  }
}
