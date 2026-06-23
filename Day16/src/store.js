import {configureStore} from '@reduxjs/toolkit';
import slice1reducer from './Slicer1.js'

const store=configureStore({
    reducer:{
        slice1:slice1reducer,
    }
});

export default store;