import React, { useEffect, useState } from 'react' 
import "./home.css" 
import axios from 'axios' 
const Home = () => { 
const [users, setUsers] =useState([]); 
console.log(users); 
useEffect(() => { 
axios.get("http://localhost:8000/users") 
.then(res=>{ 
// console.log(res.data); 
setUsers(res.data); 
}).catch(err=>console.log(err)) 
}, []) 
return ( 
<section id="homeBlock"> 
<article> 
<h1>List Of Users</h1> 
{ 
users && users.length > 0 ? ( <table> 
<thead> 
<tr> 
<th>Id</th> 
<th>Name</th> 
<th>Email</th> 
<th>Phone Number</th>
</tr> 
</thead> 
<tbody> 
{users.map(user=>( 
<tr key={user.id}> 
<td>{user.id}</td> 
<td>{user.Name}</td> 
<td>{user.Email}</td>
<td>{user.number}</td> 
</tr> 
))} 
</tbody> 
</table> ) : ( <h1>No Users Found</h1> ) 
} 
</article> 
</section> 
) 
} 
export default Home 