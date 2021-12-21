import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'

import User from '../Models/User'

export default class LessonPolicy extends BasePolicy {
  public async canHandle(user: User) {
    return user.employee
  }
}
