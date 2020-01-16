import {MigrationInterface, QueryRunner, Table} from 'typeorm';

//  Create -universities- table on DB through TypeORM
export class CreateUniversity1578969368793 implements MigrationInterface {
  private universityTable = new Table({
    name: 'universities',
    columns: [{
      name: 'id', type: 'INTEGER',
      isPrimary: true, isGenerated: true,
      generationStrategy: 'increment',
    }, {
      name: 'name', type: 'varchar',
      length: '255', isNullable: false,
    }, {
      name: 'city', type: 'varchar',
      length: '255', isNullable: false,
    }, {
      name: 'state', type: 'varchar',
      length: '255', isNullable: true,
    }, {
      name: 'country', type: 'varchar',
      length: '255', isNullable: false,
    }, {
      name: 'created_at', type: 'timestamptz',
      isNullable: false, default: 'now()',
    }, {
      name: 'updated_at', type: 'timestamptz',
      isNullable: false, default: 'now()',
    }],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.universityTable);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.universityTable);
  }
}
