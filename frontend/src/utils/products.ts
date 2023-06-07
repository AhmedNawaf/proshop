import { IProduct } from '../types/product';
export async function getProducts(): Promise<IProduct[]> {
  const url = import.meta.env.VITE_API_URL + '/api/products';
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Could not fetch products');
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
}

export async function getProduct(id: string | undefined): Promise<IProduct> {
  const url = import.meta.env.VITE_API_URL + `/api/products/${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}
