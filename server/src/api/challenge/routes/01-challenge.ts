export default {
    routes: [
        {
            method: 'GET',
            path: '/challenges/:slug(day\\d{1,5})',
            handler: 'challenge.findOne',
        }
    ]
}