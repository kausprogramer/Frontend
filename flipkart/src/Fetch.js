import React, { useEffect, useState } from 'react'

function Fetch() {
    var [user, setUser] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => setUser(data));
    }, []);
  return (
    <div>
        <h1>
            Users
        </h1>
        {user.map(users =>
        {
        return <li key={users.id}>
            <a href={users.html_url}>{users.login}</a>
        </li>
        }
        )}
    </div>
  )
}

export default Fetch