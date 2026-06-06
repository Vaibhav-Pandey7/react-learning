import { Link, Outlet } from "react-router";
export default function Details(){
    return (
        <>
            <nav>
                <Link to="Hi">Hi</Link>
                <Link to="Hello">Hello</Link>
            </nav>
            <h1>Welcome to Detailspage</h1>

            <Outlet></Outlet>   
        </>
    );
}