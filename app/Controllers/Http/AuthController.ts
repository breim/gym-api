import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
import { CreateUserValidator } from '../../Validators/UserValidator'

export default class AuthController {
  public async sign_in({ request, auth }: HttpContextContract) {
    const { email, password } = request.all()

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '90 days',
    })

    return token.toJSON()
  }

  public async sign_up({ request, auth }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])

    await request.validate(CreateUserValidator)

    const user = await User.create(data)
    const token = await auth.use('api').login(user, {
      expiresIn: '90 days',
    })

    return token.toJSON()
  }
}