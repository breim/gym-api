import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async me({ auth }: HttpContextContract) {
    const user = auth.user

    return user.serialize()
  }
}
