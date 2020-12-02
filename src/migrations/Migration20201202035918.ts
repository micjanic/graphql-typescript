import { Migration } from '@mikro-orm/migrations';

export class Migration20201202035251 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null, "password" text not null);');
    this.addSql('alter table "user" add constraint "user_title_unique" unique ("title");');
  }

}
