"use server"
const API_URL = process.env.API_URL;

export async function fetchProducts() {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
}