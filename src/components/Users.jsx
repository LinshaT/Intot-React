

import React,{useEffect,useState} from "react";



function Users(){
    
    const [users,setUsers]=useState([{
        
        fname:'',
        email:'',
        phone:'',
        password:'',
        subject:''
    }])

    useEffect(()=> {
        fetch("/users").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes =>setUsers(jsonRes));
    })
    
return <div>
     {users.map(user=>
     <div>
        <h1>{user.fname}</h1>
        <p>{user.email}{user.phone}{user.password}{user.subject}</p>
        </div>
        )}
</div>
}

export default Users;

