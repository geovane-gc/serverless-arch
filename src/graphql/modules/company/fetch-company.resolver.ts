import { FetchCompanyInput, Company } from "../../types/graphql";
import { util, LambdaRequest, Context } from "@aws-appsync/utils";

export function request(ctx: Context): LambdaRequest {
  const { companyId } = ctx.arguments.input as FetchCompanyInput;

  const PatternUUIDRegex =
    "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$";

  if (!util.matches(PatternUUIDRegex, companyId)) {
    return util.error("companyId inválido. Deve ser um UUID.");
  }

  return {
    operation: "Invoke",
    payload: {
      companyId,
    },
  };
}

export function response(ctx: Context): Company {
  if (ctx.error) {
    return util.error(ctx.error.message);
  }

  return ctx.result;
}
