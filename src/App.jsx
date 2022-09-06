import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Homepage";
import Profile from "./pages/profile";
// import CollectionForm from "./components/CollectionList"
// import PostListForm form "./components/PostListForm"

import { useState } from 'react';
// import { Link, Outlet } from "react-router-dom";
// import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';


function App() {

  let defaultUserData = [
    {
        id : 1,
        username : "admin",
        post : "test"
    },
  ]
  const [Users, setUsers] = useState(defaultUserData)
  const [UserEdit, setUserEdit] = useState("")
  const [Keyword, setKeyword] = useState('')

  const addUser = (newUser) => {
    newUser.id = Math.max(...Users.map(user => user.id))+1
    console.log(newUser.id);
    setUsers(Users => [...Users, newUser])
  }

  const selectEdit = (userId) => {
    let user = Users.filter(user => user.id === userId)
    setUserEdit(user[0]);
     }
  
     const actionEdit  = (user) => {
      console.log(`going to edit user with username ${user.username}`)
      const indexToEdit = Users.findIndex(item => item.id === user.id)
      console.log(`the user index to be edit is ${indexToEdit}`);
    
      let copyUsers = [...Users]
      copyUsers[indexToEdit] = user
    
      setUsers(copyUsers)
    
    }  

    const filteredUserData = () => {
      return Users.filter(user => new RegExp(Keyword, 'g').test(user.username) ||
      new RegExp(Keyword, 'g').test(user.post))
    }

  return (
    <div className="App">
      
      <Home/>
      {/* <Profile users={filteredUserData()} selectEdit={selectEdit} /> */}
      <Profile handleCreate={addUser} userEdit={UserEdit} actionEdit={actionEdit}/>
    </div>
  );
}

export default App;
