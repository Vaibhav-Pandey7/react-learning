import { useDispatch, useSelector } from "react-redux";
import { fecthdata } from "../Slicer1";
import { useEffect } from "react";

export default function CoinCreate(){

  const dispatch=useDispatch();

  const {data,loading,errormsg}=useSelector((state)=>state.slice1);
  console.log("Current Redux State: ", {data, loading, errormsg});

  useEffect(()=>{
    dispatch(fecthdata(20));
  },[])

  if(loading){
    return (
      <>
      <h1>Loading...</h1>
      </>
    );
  }else if(errormsg){
    return (
      <>
      <h1>{errormsg}</h1>
      </>
    );
  }
  return(
    <>
    {
      data.map((value,index)=>
          <div key={value.id} style={{margin:"5px",textAlign:"center",border:"2px solid black",boxShadow:"1px 7px 7px 4px gray",borderRadius:"7px"}} >
            <h1>{value.name}</h1>
            <p>Price:{value.current_price}</p>
            <img src={value.image}/>
          </div>
      )
    }
    </>
  );
}