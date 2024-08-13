// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => ({
    getProductsAll: builder.query({
			query: () => `/`,
    }),
    getProductByName: builder.query({
      query: (name) => `/${name}`,
    }),
    
    getProductByCategory: builder.query({
        query: (name) => `category/${name}`,
      }),
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsAllQuery,useGetProductByNameQuery,useGetProductByCatergoryQuery } = productApi