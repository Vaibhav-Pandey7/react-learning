import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github() {
    const { name } = useParams();
    
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchuser() {
            const response = await fetch(`https://api.github.com/users/${name}`);
            const data = await response.json();
            
            console.log("Data fetched:", data);
            
            setUserData(data); 
        }
        
        fetchuser();
    }, [name]); 

    // 4. Render the UI
    return (
        <>
            <h1>My Github Profile</h1>
            
            {userData ? (
                <div>
                    <h2>Name: {userData.name}</h2>
                    <p>Followers: {userData.followers}</p>
                    <img src={userData.avatar_url} alt="avatar" width="150" />
                </div>
            ) : (
                <h2>Loading data from GitHub...</h2>
            )}
        </>
    );
}