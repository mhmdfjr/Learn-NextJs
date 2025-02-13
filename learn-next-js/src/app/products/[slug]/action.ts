"use server"
const API_URL = process.env.API_URL;

export const fetchProduct = async (slug: string) => {
  try {
    const response = await fetch(`${API_URL}/products/${slug}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
