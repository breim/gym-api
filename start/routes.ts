import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'nothing to see here 🙈' }
})

Route.group(() => {
  Route.post('sign_up', 'AuthController.sign_up')
  Route.post('sign_in', 'AuthController.sign_in')
  Route.group(() => {
    Route.get('users/me', 'UsersController.me')
    Route.resource('lessons', 'LessonsController').apiOnly()
  }).middleware('auth:api')
}).prefix('api')
