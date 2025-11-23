// src/config/environment.ts

export const environment = {
  BASE_URL: "http://localhost:5173/",
  PRODUCTS: {
    CREATE: "/products",
    GET_ALL: "/products",
    GET_BY_ID: (id: string | number) => `/products/${id}`,
    UPDATE: (id: string | number) => `/products/${id}`,
    DELETE: (id: string | number) => `/products/${id}`,
  },
};
