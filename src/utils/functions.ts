import { IProduct } from './interfaces';

export const handleSearch = (product: IProduct, query: string) => {
  if (!query) return true;

  const value = product['name'];

  if (typeof value === 'string' || typeof value === 'number') {
    return value.toString().toLowerCase().includes(query.toLowerCase());
  } else {
    return false;
  }
}

export const handleFilter = (product: IProduct, filters: string[]) => {
  if (filters.length === 0) return true;

  for (const filter of filters) {
    if (product.category.name === filter) return true
  }

  return false;
}
