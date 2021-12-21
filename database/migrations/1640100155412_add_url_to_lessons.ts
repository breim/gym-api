import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddUrlToLessons extends BaseSchema {
  protected tableName = 'add_url_to_lessons'

  public up() {
    this.schema.alterTable('lessons', (table) => {
      table.string('room_url', 255)
    })
  }

  public down() {
    this.schema.alterTable('lessons', (table) => {
      table.dropColumn('room_url')
    })
  }
}
