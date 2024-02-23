// graphql/modules/company/fetch-company.resolver.ts
import { util } from '@aws-appsync/utils';
function request(ctx) {
  const { companyId } = ctx.arguments.input;
  const PatternUUIDRegex =
    '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$';
  if (!util.matches(PatternUUIDRegex, companyId)) {
    return util.error('companyId inv\xE1lido. Deve ser um UUID.');
  }
  return {
    operation: 'Invoke',
    payload: {
      companyId,
    },
  };
}
function response(ctx) {
  if (ctx.error) {
    return util.error(ctx.error.message);
  }
  return ctx.result;
}
export { request, response };
