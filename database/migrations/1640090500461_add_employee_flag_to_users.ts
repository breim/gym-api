import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddEmployeeFlagToUsers extends BaseSchema {
  public up() {
    this.schema.alterTable('users', (table) => {
      table.boolean('employee').defaultTo(false)
    })
  }

  public down() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('employee')
    })
  }
}
