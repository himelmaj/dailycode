import { z } from 'zod';

const envSchema = z.object({
    STRAPI_URL: z.string().url().default('STRAPI_URL_REQUIRED'),
    STRAPI_TOKEN: z.string().default('STRAPI_TOKEN_REQUIRED'),
});

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  console.error("❌  Environment variable validation error: ", error.format());
  throw new Error(`Invalid environment variables: ${JSON.stringify(error.format(), null, 2)}`);
}

export const { 
    STRAPI_URL,
    STRAPI_TOKEN
} = data;