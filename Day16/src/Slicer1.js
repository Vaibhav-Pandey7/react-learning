import {createAsyncThunk,createSlice, isRejectedWithValue} from '@reduxjs/toolkit';

const fecthdata=createAsyncThunk(
    //Actions:type,payload
    'Coin/fetch',

    async (args,thunkAPI)=>{
        try{
            const response=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} - CoinGecko blocked the request.`);
            }

            const data=await response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
);

const slicer1=createSlice({
    name:"slice1",
    initialState:{data:[],loading:false,errormsg:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fecthdata.pending,(state)=>{
            state.loading=true,
            state.errormsg=null;

        })
        .addCase(fecthdata.fulfilled,(state,actions)=>{
            state.data=actions.payload,
            state.loading=false;
        })
        .addCase(fecthdata.rejected,(state,action)=>{
            state.errormsg = action.payload || action.error.message || "An unknown error occurred.";
            state.loading = false;
        })
    },
})

export {fecthdata};
export default slicer1.reducer;

