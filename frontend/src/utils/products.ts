export async function getProducts() {
  const res = await fetch('http://localhost:3800/api/products');
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function getProduct(id: string | undefined) {
  const res = await fetch(`http://localhost:3800/api/products/${id}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}
