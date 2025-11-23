// environment.ts

export const environment = {
  BASE_URL: "http://localhost:3001",

  PRODUCTS: {
    CREATE: "/products",
    GET_ALL: "/products",
    GET_BY_ID: (id: string | number) => `/products/${id}`,
    UPDATE: (id: string | number) => `/products/${id}`,
    DELETE: (id: string | number) => `/products/${id}`,
  },

  USERS: {
    LOGIN: "/users/login",
    REGISTER: "/users/register",
    PROFILE: "/users/profile",
  },

  ORDERS: {
    CREATE: "/orders",
    GET_ALL: "/orders",
    GET_BY_ID: (id: string | number) => `/orders/${id}`,
  },
};