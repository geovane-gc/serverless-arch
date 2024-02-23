import { FetchCompaniesUseCase } from "./fetch-companies";
import { it, expect, describe, beforeEach } from "vitest";

let useCase: FetchCompaniesUseCase;

describe("fetch companies use case", () => {
    beforeEach(() => {
        useCase = new FetchCompaniesUseCase();
    });
    it("should return companies paginated", async () => {
        const response = await useCase.execute({
            status: "BASIC",
            startDate: "2024-05-01",
            endDate: "2024-05-02",
        });

        expect(response.data).toHaveLength(6);
    });
});
