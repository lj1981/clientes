import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Novos, NovosRelations} from '../models';

export class NovosRepository extends DefaultCrudRepository<
  Novos,
  typeof Novos.prototype.id,
  NovosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Novos, dataSource);
  }
}
