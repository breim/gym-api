import { schema } from '@ioc:Adonis/Core/Validator'
import BaseValidator from './BaseValidator'

export default class WalletValidator extends BaseValidator {
  public static store = schema.create({
    name: schema.string({}, []),
  })
}
