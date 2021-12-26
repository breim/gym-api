import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddBreakRooms extends BaseSchema {
  protected tableName = 'add_break_rooms'

  public up() {
    this.schema.alterTable('lessons', (table) => {
      table.boolean('break_room').defaultTo(false)
    })
  }

  public down() {
    this.schema.alterTable('lessons', (table) => {
      table.dropColumn('break_room')
    })
  }
}
