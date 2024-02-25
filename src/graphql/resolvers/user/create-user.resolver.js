// graphql/modules/user/create-user.resolver.ts
import { util } from '@aws-appsync/utils';
function request(ctx) {
  const { email, password } = ctx.arguments.input;
  return {
    operation: 'Invoke',
    payload: {
      email,
      password,
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
