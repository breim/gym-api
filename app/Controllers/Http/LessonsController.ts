import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Lesson from '../../Models/Lesson'
import LessonValidator from 'App/Validators/LessonValidator'

export default class LessonsController {
  public async index({ auth }: HttpContextContract) {
    const lessons = await Lesson.query().preload('user').where('user_id', auth.user.id)

    return lessons
  }

  public async store({ request, auth }) {
    const data = request.only(['name'])

    request.requestData = { ...data, user_id: auth.user.id }

    await request.validate({ schema: LessonValidator.store })

    const lesson = await Lesson.create({
      ...data,
      user_id: auth.user.id,
    })

    return lesson
  }

  public async update({ params, request }) {
    const data = request.only(['amount', 'frequency'])
    const lesson = await Lesson.findOrFail(params.id)

    await request.validate({ schema: LessonValidator.store })

    lesson.merge(data)

    const response = await lesson.save()

    return response
  }
}
