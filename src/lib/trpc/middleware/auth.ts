import { t } from '$lib/trpc/t';

export const auth = t.middleware(async ({ next, ctx }) => {
	//  Auth logic here
	// if (!ctx.userId) throw new TRPCError({ code: 'UNAUTHORIZED' });
	return next();
});
