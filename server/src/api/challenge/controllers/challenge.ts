/**
 * challenge controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::challenge.challenge', ({ strapi }) => ({
    async findOne(ctx) {

        const { id: slug } = ctx.params;

        const data = await strapi.db.query('api::challenge.challenge').findOne({ where: { slug } });

        const results = await this.sanitizeOutput(data, ctx);

        return results;
    },
}));
