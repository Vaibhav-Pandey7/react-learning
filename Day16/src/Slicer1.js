import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';

const fecthdata=createAsyncThunk(
    //Actions:type,payload
    'Coin/fetch',

    async (args,thunkAPI)=>{
        try{
            const response=await fecth(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)

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
        .addCase(fecthdata.rejected,(state,actions)=>{
            state.errormsg=actions.payload,
            state.loading=false;
        })
    },
})

export {fecthdata};
export default slicer1.reducer;

