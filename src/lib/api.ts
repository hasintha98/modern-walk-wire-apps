import { Product } from "./types";
const API_URL =  process.env.NEXT_PUBLIC_FAKESTORE_API_URL

export async function getFlashSaleProducts(limit: number = 20, sort: string = 'desc') {
    const response = await fetch(`${API_URL}/products?limit=${limit}&sort=${sort}`);
    const products = (await response.json()) as Product[];
  
    // Filter to include only men's clothing and women's clothing
    const filteredProducts = products.filter((product) =>
      ['men\'s clothing', 'women\'s clothing'].includes(product.category.toLowerCase())
    );
  
    return filteredProducts;
  }
  
export async function getCategoryProducts(
    category: string,
    limit: number = 10,
    sort: string = 'desc'
) {
    const response = await fetch(
      `${API_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}&sort=${sort}`
    );
    return (await response.json()) as Product[];
}