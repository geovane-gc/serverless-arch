import {
  FetchCompaniesInput,
  FetchCompanies,
} from "../../types/graphql";
import { util, LambdaRequest, Context } from "@aws-appsync/utils";

export function request(ctx: Context): LambdaRequest {
  const { status, limit, paginationToken, startDate, endDate } = ctx.arguments
    .input as FetchCompaniesInput;

  return {
    operation: "Invoke",
    payload: {
      status,
      limit,
      paginationToken,
      startDate,
      endDate,
    },
  };
}

export function response(ctx: Context): FetchCompanies {
  if (ctx.error) {
    return util.error(ctx.error.message);
  }

  return ctx.result;
}
