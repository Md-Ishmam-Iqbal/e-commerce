export default function filterProductsByCategory(products, category) {
  return products.filter((product) => product.category === category);
}
