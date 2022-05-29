import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Novos} from '../models';
import {NovosRepository} from '../repositories';

export class ClienteController {
  constructor(
    @repository(NovosRepository)
    public novosRepository : NovosRepository,
  ) {}

  @post('/novos')
  @response(200, {
    description: 'Novos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Novos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Novos, {
            title: 'NewNovos',
            exclude: ['id'],
          }),
        },
      },
    })
    novos: Omit<Novos, 'id'>,
  ): Promise<Novos> {
    return this.novosRepository.create(novos);
  }

  @get('/novos/count')
  @response(200, {
    description: 'Novos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Novos) where?: Where<Novos>,
  ): Promise<Count> {
    return this.novosRepository.count(where);
  }

  @get('/novos')
  @response(200, {
    description: 'Array of Novos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Novos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Novos) filter?: Filter<Novos>,
  ): Promise<Novos[]> {
    return this.novosRepository.find(filter);
  }

  @patch('/novos')
  @response(200, {
    description: 'Novos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Novos, {partial: true}),
        },
      },
    })
    novos: Novos,
    @param.where(Novos) where?: Where<Novos>,
  ): Promise<Count> {
    return this.novosRepository.updateAll(novos, where);
  }

  @get('/novos/{id}')
  @response(200, {
    description: 'Novos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Novos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Novos, {exclude: 'where'}) filter?: FilterExcludingWhere<Novos>
  ): Promise<Novos> {
    return this.novosRepository.findById(id, filter);
  }

  @patch('/novos/{id}')
  @response(204, {
    description: 'Novos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Novos, {partial: true}),
        },
      },
    })
    novos: Novos,
  ): Promise<void> {
    await this.novosRepository.updateById(id, novos);
  }

  @put('/novos/{id}')
  @response(204, {
    description: 'Novos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() novos: Novos,
  ): Promise<void> {
    await this.novosRepository.replaceById(id, novos);
  }

  @del('/novos/{id}')
  @response(204, {
    description: 'Novos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.novosRepository.deleteById(id);
  }
}
