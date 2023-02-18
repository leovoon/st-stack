import { logger } from '$lib/trpc/middleware/logger';
import { z } from 'zod';
import { t } from '$lib/trpc/t';

export const greeting = t.router({
	sayHi: t.procedure
		.use(logger)
		.input(z.string().optional())
		.query(({ input }) => {
			const randomWholeNumber = Math.floor(Math.random() * 10);
			return {
				hi: `Hello ${input}. Random digit: ` + randomWholeNumber
			};
		})
});
