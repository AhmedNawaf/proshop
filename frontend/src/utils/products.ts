import { IProduct } from '../types/product';

export function getProducts(): Promise<IProduct[]> {
  return fetch(import.meta.env.VITE_API_URL + '/api/products').then((res) =>
    res.json()
  );
}

export function getProduct(id: string | undefined): Promise<IProduct> {
  return fetch(import.meta.env.VITE_API_URL + '/api/products/' + id).then(
    (res) => res.json()
  );
}
