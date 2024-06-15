import React, { useEffect, useState } from 'react'

const MultipleReturn = () => {
  const [user ,setUser] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [error,setError]= useState(null);
  useEffect(()=>{
    async function fetchUser(){
      try{
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUser(data);
        setIsLoding(false);
      }
      catch(error){
        setError(error);
        setIsLoding(false);
      }
    }
    fetchUser();
  }, []);
  if(isLoding){
    return <p>Loading</p>
  }

  if(error){
    return <p>Errpr : {error.message}</p>
  }
  
  return (
    <div>
      <ul>
        {user.map((users)=>{
          return <li key = {user.id}>
            {users.login}
          </li>
        })}
      </ul>
    </div>
  )
}

export default MultipleReturn