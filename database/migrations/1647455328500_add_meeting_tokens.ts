import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddMeetingTokens extends BaseSchema {
  public async up() {
    this.schema.alterTable('users', (table) => {
      table.text('meeting_token')
    })
  }

  public async down() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('meeting_token')
    })
  }
}
