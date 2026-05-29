export default function  Increment(props){
    return(
        <>
            <h1 onClick={()=>{props.func(props.count+1)}}>Child Counter is: {props.count}</h1>
            <button onClick={()=>{props.func(props.count+1)}}>Increment</button>
        </>
    );
}