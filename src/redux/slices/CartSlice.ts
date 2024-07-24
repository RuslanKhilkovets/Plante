import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TProductFullData } from '../../types/IProductItem';
import ICartState from '../../types/ICartState';


const initialState: ICartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<TProductFullData>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].count++;
            } else {
                state.items.push({ ...action.payload, count: 1});
            }
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItemCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.count = action.payload.count;
            }
        }
    }
});

export const { addItemToCart, removeItemFromCart, updateItemCount } = cartSlice.actions;

export default cartSlice.reducer;