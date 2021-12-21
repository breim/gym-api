import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lessons extends BaseSchema {
  protected tableName = 'lessons'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('name', 255)
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
