export default {
    routes: [
        {
            method: 'GET',
            path: '/challenges/:slug',
            handler: 'challenge.findOne',
        }
    ]
}