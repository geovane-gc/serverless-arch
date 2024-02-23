import { beforeEach, describe, expect, it } from "vitest";
import { FetchCompany } from "../../graphql/types/graphql";
import { FetchCompanyUseCase } from "./fetch-company";

let useCase: FetchCompanyUseCase;

describe("fetch company use case", () => {
    beforeEach(() => {
        useCase = new FetchCompanyUseCase();
    });
    it("should return a single company", async () => {
        const response = await useCase.execute({
            companyId: "976f7d33-35b7-4fba-bd55-ecf0e8436650",
        });

        expect(response).toEqual({
            email: response.email,
            document: response.document,
            status: response.status,
            updatedAt: response.updatedAt,
            createdAt: response.createdAt,
            approvalStatusUpdatedAt: response.approvalStatusUpdatedAt,
        } as FetchCompany);
    });
});
