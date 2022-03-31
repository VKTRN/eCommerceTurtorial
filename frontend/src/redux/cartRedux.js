import {createSlice, current} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total:0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload.id)
      const productAlreadyExistsInCart = !!product

      console.log(action.payload)

      if(productAlreadyExistsInCart) {
        product.quantity += 1
      }
      else{
        state.quantity += 1
        state.products.push(action.payload)
      }
      state.total = state.products.reduce((a, b) => a + b.price * b.quantity,0)
    },

    removeProduct: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload.id)
      const quantityIsZero = product.quantity - 1 === 0 

      product.quantity -= 1

      if(quantityIsZero){
        state.products = state.products.filter((item) => item.id !== action.payload.id)
        state.quantity -= 1
      }
      state.total = state.products.reduce((a, b) => a + b.price * b.quantity,0)
      
    }
  }
}) 

export const {addProduct, removeProduct} = cartSlice.actions
export default cartSlice.reducer