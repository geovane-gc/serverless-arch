// graphql/modules/company/fetch-companies.resolver.ts
import { util } from '@aws-appsync/utils';
function request(ctx) {
  const { status, limit, paginationToken, startDate, endDate } =
    ctx.arguments.input;
  return {
    operation: 'Invoke',
    payload: {
      status,
      limit,
      paginationToken,
      startDate,
      endDate,
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
