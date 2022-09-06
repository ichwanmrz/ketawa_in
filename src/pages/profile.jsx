import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
const profile = ({handleCreate, selectEdit, userEdit, actionEdit}) => {
  
const [Users, setUsers] = useState("")
const [UserEdit, setUserEdit] = useState("")
const [Username, setUsername] = useState("")
const [Post, setPost] = useState("")
const [Keyword, setKeyword] = useState('')


useEffect(() => {
  if (typeof userEdit === 'object') {
    setUsername(userEdit.username)
    setPost(userEdit.post)
    
  }

}, [userEdit])

const submitHandler = (e) => {
  e.preventDefault()
  let user = {
        username: Username, 
        post: Post, 
  }
  if (typeof userEdit === 'object' && userEdit.id) 
      actionEdit({...user, id: userEdit.id})
      // else
      // handleCreate(user)
}

// const selectEdit = (userId) => {
//   let user = Users.filter(user => user.id === userId)
//   setUserEdit(user[0]);
//    }

// const filteredPostData = () => {
//   return Posts.filter(post => new RegExp(Keyword, 'g').test(post.username) ||
//   new RegExp(Keyword, 'g').test(post.postMessage))
// }

  return (
<div>
  <h2 className="m-3">User Profile (Dashboard)</h2>
  <div className="container ml-5 text-left">
  <div className="row m-4 ">
    <div className="col-3 bg-secondary">
          <div className=' d-flex rounded-circle p-5 bg-light m-4'>
          <img src='/RE4wE9W.jpg' alt=''/>
          </div>
          <span className="fw-bold m-5">Username</span>
          
          <div className="row mt-4 m-3 bg-light">
            <div className="col-6">Post
            
            </div>
            <div className="col-6">Collection</div>
          </div>
    </div>
    <div className="col">
      <form onSubmit={e => submitHandler(e)}> 
          <label htmlFor="username" className="form-label">Username</label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control mb-3" id="username" value={Username}/>
      <div className="input-group mb-3">
          <span className="input-group-text bg-success"> What'ss your joke now ?</span>
          <textarea onChange={(e) => setPost(e.target.value)} type="text" className="form-control"  id="post" value={Post} placeholder='Type something here...'></textarea>
      </div>
      <div>
      <button type="button" className="btn btn-secondary me-5">Category</button>
      <button type="submit" className="btn btn-info">Post</button>
      </div>
      </form>
     <hr/>
    
      < div className="g-col-6 d-block mt-4">
        <h5 className="fw-bold">Post List</h5>

          {/* <table className="table mb-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Laugh</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr>
              <th scope="row">1</th>
              <td>User 1</td>
              <td>Posting 1</td>
              <a href='#'>Update</a>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>User 2</td>
              <td>Posting 2</td>
              <a href='#'>Update</a>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>User 3</td>
              <td>Posting 3</td>
              <a href="#">Update</a>
            </tr>
          </tbody> */}
          {/* <tbody>
                {Users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.post}</td>
                        <td><button onClick={() => selectEdit(user.id)} type='button' className="btn btn-primary">Edit</button></td>
                    </tr>
                ))}
            </tbody> */}
          {/* </table> */} 

          <hr/>
          <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">Username</th>
                <th scope="col">Post</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
                {/* {Users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.username}</td>
                    
                        <td>{user.post}</td>
                        <td><button onClick={() => selectEdit(user.id)} type='button' className="btn btn-primary">Edit</button></td>
                    </tr>
                ))} */}
            </tbody>
        </table> 

          <div className=" mb-2">
            <h4>Search</h4>
            <input type="text" className="form-control" placeholder="Search something here..." 
            onChange={(e) => setKeyword(e.target.value)} value={Keyword}/>
          </div>
          <hr/>

          <h5 className="fw-bold">Collection List</h5>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Username</div>
                  Content for post item
                </div>
                <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Username</div>
                    Content for post item
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Username</div>
                    Content for post item
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
            </li>
          </ol>
      </div>
    </div>
  </div>
</div>

</div>

    
  )
}

export default profile