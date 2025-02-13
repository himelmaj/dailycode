/**
 * challenge controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::challenge.challenge', ({ strapi }) => ({
    async findOne(ctx) {

        const { slug } = ctx.params;

        if (!/^(day\d{1,5})$/.test(slug)) {
            return ctx.badRequest('Invalid slug format');
        }

        const data = await strapi.db.query('api::challenge.challenge').findOne({ where: { slug } });

        if (!data) {
            return ctx.notFound("Challenge not found");
        }

        const results = await this.sanitizeOutput(data, ctx);

        return results;
    },
}));
