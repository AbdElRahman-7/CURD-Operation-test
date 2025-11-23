// src/services/api/products.ts

const BASE_URL = "http://localhost:3001";

export interface Product {
  id?: number;
  name: string;
  price: number;
  description?: string;
  isActive?: boolean;
}

//  Get all products
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

//  Get product by ID
export const getProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error("Failed to fetch product");
  return response.json();
};

//  Create product
export const createProduct = async (product: Product): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("Failed to create product");
  return response.json();
};

//  Update product
export const updateProduct = async (
  id: number,
  product: Product
): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("Failed to update product");
  return response.json();
};

//  Delete product
export const deleteProduct = async (id: number): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete product");
  return true;
};