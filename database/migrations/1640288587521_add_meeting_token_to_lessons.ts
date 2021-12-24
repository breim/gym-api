import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddMeetingTokenToLessons extends BaseSchema {
  public up() {
    this.schema.alterTable('lessons', (table) => {
      table.string('meeting_token', 600)
    })
  }

  public down() {
    this.schema.alterTable('lessons', (table) => {
      table.dropColumn('meeting_token')
    })
  }
}
