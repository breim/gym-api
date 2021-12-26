import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddRoomNames extends BaseSchema {
  public up() {
    this.schema.alterTable('lessons', (table) => {
      table.string('room_name', 255)
    })
  }

  public down() {
    this.schema.alterTable('lessons', (table) => {
      table.dropColumn('room_name')
    })
  }
}
