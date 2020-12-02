import { Migration } from '@mikro-orm/migrations';

export class Migration20201202050001 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "title" to "username";');


    this.addSql('alter table "user" drop constraint "user_title_unique";');

    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}
