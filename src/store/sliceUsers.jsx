import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchListRequest = createAsyncThunk(
    'list/fetchListRequest',
    async function () {
        const res = await fetch('https://raw.githubusercontent.com/YaroslavMikhnevich/data/main/internet-store.json')
        const data = await res.json()

        return data
    }
)



const sliceItems = createSlice({
    name: 'items',
    initialState: {
        items: [],
        orders: [],
        wishes: [],
        currentItem: null,
        orderModal: false,
        wishesModal: false,
        delateOrdersModal: false, 
        delateWishModal: false,
        alert: false
    },
    reducers: {
        showAlert(state, action){
            state.alert = action.payload
        },

        getCurrentItem(state, action) {
            state.currentItem = action.payload
        },

        addToOrders(state, action) {
            let isInArr = false;
            state.orders.forEach(el => {
                if (state.currentItem.id === el.id) {
                    isInArr = true
                }
            })
            if (!isInArr) {
                state.orders.push(action.payload)
            }
        },

        delateOrders(state, action) {
            let newOrders = []
            state.orders.forEach(el => {
                if (action.payload.id === el.id) {
                    return
                } else {
                    newOrders.push(el)
                }
            })
            state.orders = [...newOrders]

        },

        addToWishList(state, action) {
            let isInArr = false;
            state.wishes.forEach(el => {
                if (state.currentItem.id === el.id) {
                    isInArr = true
                }
            })
            if (!isInArr) {
                state.wishes.push(action.payload)
            }

        },

        delateWishes(state, action) {
            let newOrders = []
            state.wishes.forEach(el => {
                if (action.payload.id === el.id) {
                    return
                } else {
                    newOrders.push(el)
                }
            })
            state.wishes = [...newOrders]
        },

        showOrderModal(state, action) {
            state.orderModal = !state.orderModal
        },

        showWishesModal(state, action) {
            state.wishesModal = !state.wishesModal
        },

        showDelateModal(state, action) {
            state.delateOrdersModal = !state.delateOrdersModal
        }, 
        showDeleteWishesModal(state, action){
            state.delateWishModal = !state.delateWishModal
        }
    },
    extraReducers: {

        [fetchListRequest.fulfilled]: (state, action) => {
            state.items = action.payload
        }

    }

})


export const { 
    getCurrentItem, 
    addToOrders, 
    addToWishList, 
    showOrderModal, 
    showWishesModal, 
    delateWishes, 
    delateOrders, 
    showMessage, 
    showDelateModal , 
    showDeleteWishesModal,
    showAlert} = sliceItems.actions;
export default sliceItems.reducer;  /// Зверни увагу, тут ми експортуємо редюсер(в однені), а в стор ми імпортуємо вже під імям, яке зручне
