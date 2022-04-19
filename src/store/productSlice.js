import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: "idel",
    ERROR: 'error',
    LODING: 'loding',
})

const productSlice = createSlice({

    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
        

    }

})

export const { setProducts,setStatus } = productSlice.actions
export default productSlice.reducer

// export function fetchProduct() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LODING))
//         try {
//             const res = await fetch('https://fakestoreapi.com/products')
//             const data = await res.json()
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }

export const fetchProduct = createAsyncThunk('product/fetch',async()=>{
    const res = await fetch('https://fakestoreapi.com/products')
     return await res.json()
})