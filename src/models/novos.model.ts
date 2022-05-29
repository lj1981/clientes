import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Novos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nome: string;

  @property({
    type: 'string',
    required: true,
  })
  Sexo: string;

  @property({
    type: 'number',
    required: true,
  })
  Idade: number;

  @property({
    type: 'number',
    required: true,
  })
  Contato: number;

  @property({
    type: 'boolean',
    required: true,
  })
  Renda: boolean;

  @property({
    type: 'string',
    required: true,
  })
  Endereco: string;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  complemento?: string[];

  @property({
    type: 'string',
    required: true,
  })
  Bairro: string;

  @property({
    type: 'date',
    required: true,
  })
  Data: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Novos>) {
    super(data);
  }
}

export interface NovosRelations {
  // describe navigational properties here
}

export type NovosWithRelations = Novos & NovosRelations;
