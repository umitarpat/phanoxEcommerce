import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import banners from './banners'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, banners],
}
