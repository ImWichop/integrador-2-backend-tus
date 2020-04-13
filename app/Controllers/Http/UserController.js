'use strict'
const User = use('App/Models/User')
class UserController {
  async index ({ request, response }) {
    const users = await User.all()

    return response.ok(users)
  }

  async store ({ request, response }) {
    const userData = request.only(User.store)
    const user = await User.create(userData)

    return response.created({
      status: true,
      data: user
    })
  }
}

module.exports = UserController
