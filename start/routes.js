'use strict'

const Route = use('Route')
Route.post('/login', 'AuthController.login')
Route.resource('users', 'UserController')
  .apiOnly()
  .validator(new Map([
    [['users.store'], ['StoreUser']]
  ]))

Route.group(() => {

})
  .middleware(['auth'])
