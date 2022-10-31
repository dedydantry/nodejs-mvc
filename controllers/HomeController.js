const {User} = require('../models/index')

const HomeController = {
    async index(ctx) {
        const user = await User.findAll()
        ctx.body = user
    }
}

module.exports = HomeController