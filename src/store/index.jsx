import { configureStore } from '@reduxjs/toolkit';
import sliceItems from './sliceUsers';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const combinedReduser = combineReducers({
   items : sliceItems
})

const persistedReduser = persistReducer({
   key: "root",
   storage
}, combinedReduser)
 
 const store = configureStore({
    reducer:  persistedReduser,
    middleware: [thunk]  
 });

 export const persistor = persistStore(store)
 export default store




