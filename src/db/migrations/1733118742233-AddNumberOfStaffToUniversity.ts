import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddNumberOfStaffToUniversity1733118742233 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('universities', new TableColumn({
      name: 'number_of_staff',
      type: 'int',
      isNullable: true,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('universities', 'number_of_staff');
  }
}