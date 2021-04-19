import React, {useState, useEffect} from "react";

function ContactForm( { addOrEdit, currentId, contactObjs} ) {
  const initialFieldValues = {
    fullName:"",
    mobile:"",
    email:"",
    address:""
  }

  const[values, setValues] = useState(initialFieldValues);
  const handleInputChange = e =>{
    const { name, value } = e.target;
    setValues({...values, [name]: value})
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  }
  //edit 을 클릭하면 id 값이 전달된다.
  useEffect(()=>{
    if(currentId === ""){
      setValues({...initialFieldValues})
    } else {
      setValues({...contactObjs[currentId]})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentId, contactObjs])

  return (
    <form action="" autoComplete="off" onSubmit={handleFormSubmit}>
      <div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName} onChange={handleInputChange}/>
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Mobile Number" name="mobile" value={values.mobile} onChange={handleInputChange}/>
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input className="form-control" placeholder="E-mail" name="email" value={values.email} onChange={handleInputChange}/>
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-home"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Address" name="address" value={values.address} onChange={handleInputChange}/>
        </div>
      </div>
      <div className="form-group submit">
        <input type="submit" value={currentId === "" ? "Save":"Update"} className="btn btn-primary btn-block"/>
      </div>
    </form>
    )
}

export default ContactForm;
