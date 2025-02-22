/**
 * challenge controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::challenge.challenge', ({ strapi }) => ({
    async findOne(ctx) {
        const { slug } = ctx.params
        
        const data = await strapi.db.query("api::challenge.challenge").findOne({
            where: { slug },
            select: ['id', 'title', 'slug', 'problem', 'code', 'solution', 'levels'],
            populate: {
                lang: {
                    select: ['id', 'name', 'slug']
                }
            }
        })

        if (!data) {
            return ctx.notFound("Challenge not found");
        }

        const results = await this.sanitizeOutput(data, ctx);

        return results;
    }
}));
