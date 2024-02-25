import { util, LambdaRequest, Context } from '@aws-appsync/utils';
import { CreateUserInput, User } from '../../types/graphql';

export function request(ctx: Context): LambdaRequest {
    const { email, password } = ctx.arguments
        .input as CreateUserInput;

    return {
        operation: 'Invoke',
        payload: {
            email,
            password,
        },
    };
}

export function response(ctx: Context): User {
    if (ctx.error) {
        return util.error(ctx.error.message);
    }

    return ctx.result;
}
