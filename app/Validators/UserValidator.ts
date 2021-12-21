import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {
    this.ctx = ctx
  }

  public schema = schema.create({
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string({}, [rules.confirmed(), rules.minLength(4)]),
  })

  public messages = {
    'email.required': 'must be provided',
    'email.unique': 'already exists',
    'password.minLength': 'must be greater than 4 characters',
  }
}