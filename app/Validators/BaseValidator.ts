import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    this.ctx = ctx
  }

  public messages = {
    unique: '{{ field }} already exists',
    required: '{{ field }} must be provided',
    range: '{{ field }} must be between {{ options.start }} and {{ options.stop }}',
  }
}
