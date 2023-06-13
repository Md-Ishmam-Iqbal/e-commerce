export default async function fetchCategories() {
  const apiRes = await fetch(`https://fakestoreapi.com/products/categories`);

  if (!apiRes.ok) {
    throw new Error(`categories fetch not ok`);
  }

  return apiRes.json();
}
