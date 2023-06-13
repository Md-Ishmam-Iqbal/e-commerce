export default async function fetchProducts() {
  const apiRes = await fetch(`https://fakestoreapi.com/products`);

  if (!apiRes.ok) {
    throw new Error(`products fetch not ok`);
  }

  return apiRes.json();
}
