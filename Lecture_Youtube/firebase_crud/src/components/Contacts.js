import React, {useState, useEffect} from "react";
import ContactForm from "./ContactForm";
import realTimeDB from '../firebase'

function Contacts() {
  const [contactObjs, setContactObjs] = useState({})
  const [currentId, setCurrentId] = useState("")

  const addOrEdit = obj =>{
    if(currentId === ""){
      realTimeDB.child('contacts').push(
        obj,
        err => {
          if(err) {
            console.log(err)
          } else {
            setCurrentId('')
            }
        })
    } else {
      realTimeDB.child(`contacts/${currentId}`).set(
        obj,
        err => {
          if(err) {
            console.log(err)
            } else {
              setCurrentId('')
            }
        })
    }
  }
  const handleDelete = (currentId) => {
    if(window.confirm('Are you sure to delete this record?')){
      realTimeDB.child(`contacts/${currentId}`).remove(
        err => {
          if(err) {
            console.log(err)
          } else {
            setCurrentId('')
            }
        })
    }
  }

  useEffect(() => {
    realTimeDB.child('contacts').on('value', snapshot => {
      if(snapshot.val() != null) {
        setContactObjs({
          ...snapshot.val()
        })
      } else {
        setContactObjs({})
      }
    })
  },[])

  return (
    <>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Contact Register</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-5">
        <ContactForm {...({ addOrEdit, currentId, contactObjs})}/>
      </div>
      <div className="col-md-7">
        <table className="table table-borderless table-stripped">
          <thead className="thead-light">
            <tr>
              <th>Full Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(contactObjs).map(id=>{ 
                //객체 그룹일 때 Object.keys 를 이용하여 배열화 시킬 수 있는데,
                //map 의 각 요소는 id(데이터베이스에서 임의로 만든 id값) 이다.  
                return (                
                <tr key={id}>
                  <td>{contactObjs[id].fullName}</td>
                  <td>{contactObjs[id].mobile}</td>
                  <td>{contactObjs[id].email}</td>
                  <td>
                    <div className="btn text-primary" onClick={() => setCurrentId(id)}>
                      <i className="fas fa-pencil-alt"></i>
                    </div>
                    <div className="btn text-danger" onClick={() => handleDelete(id)}>
                      <i className="fas fa-trash-alt"></i>
                    </div>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
  
}

export default Contacts;
