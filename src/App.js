import {useState} from 'react'
import InputBox from './inputBox'
import './App.css';

export const Form  =  () =>{
    const [formData,setFormData] = useState({
    })
    const [isDisabled,setIsDisabled] = useState(false)
    const [issuccess,setIsSuccess] = useState(false)

    const handleChange = (e) =>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsDisabled(true)
        try{
            fetch("http://localhost:8000/feedback",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            'Access-Control-Allow-Origin':'*'
        },
        body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then((r)=>{
        console.log(r)
        if(r.affectedRows>0){
            setIsSuccess(true)
            setIsDisabled(false)
            alert("Message send successfully")
        }
        else{
            setIsSuccess(false)
            setIsDisabled(false)
        }
    })
    .catch((e)=>{
        console.log(e)
        setIsDisabled(false)
    })
        }
        catch{
            console.log(e)
            setIsDisabled(false)
        }
}
    return(
        
        <div className='div'>
        <div className="container">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      <h1 className="text">Registration Form</h1>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label className="col-xs-6 col-md-6" htmlFor='fname'>First Name</label>
            <label className="col-xs-6 col-md-6" htmlFor='lname'>Last Name</label>
            <input type="text" name="firstname" className="col-xs-6 col-md-6" value={formData.firstname} onChange={(e)=>{handleChange(e)}}/>
            <input type="text" name="lastname"  className="col-xs-6 col-md-6" value={formData.lastname} onChange={(e)=>{handleChange(e)}}/>
          </div>
          <div className="field">
            <label className="col-xs-6 col-md-6" htmlFor='fname'>Father's Name</label>
            <label className="col-xs-6 col-md-6" htmlFor='mname'>Mother's Name</label>
            <input type="text" name="fname" className="col-xs-6 col-md-6" value={formData.username} onChange={(e)=>{handleChange(e)}}/>
            <input type="text" name="mname" className="col-xs-6 col-md-6" value={formData.username} onChange={(e)=>{handleChange(e)}}/>
          </div>
          <div className="field">
            <label className="col-4 col-sm-6" htmlFor='email'>Email</label>
            <label className="col-4 col-sm-6" htmlFor='dob'>DOB</label><br/>
            <input type="text" name="email" className="col-xs-6 col-md-6" value={formData.email} onChange={(e)=>{handleChange(e)}}/>
            <input type="date" name="dob" className="col-xs-6 col-md-6" value={formData.dob} onChange={(e)=>{handleChange(e)}}/>
          </div>
          <div className="field">
            <label className="col-xs-6 col-md-6" htmlFor='address'>Address</label>
            <label className="col-xs-6 col-md-6" htmlFor='mobNo'>Mobile No.</label><br/>
            <input type="text" name="address" className="col-xs-6 col-md-6" value={formData.address} onChange={(e)=>{handleChange(e)}}/>
            <input type="text" name="mobNo" className="col-xs-6 col-md-6" value={formData.mobNo} onChange={(e)=>{handleChange(e)}}/>
          </div>
          <div className="field">
            <label className="col-xs-6 col-md-12" htmlFor='gender'>Select Gender</label>
            <p className="col-xs-6 col-md-6"></p>
            <select name="gender" value={formData.gender} className="col-xs-6 col-sm-12" onChange={(e)=>{handleChange(e)}}>
              <option>select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
          <label className="col-xs-6 col-md-6" htmlFor='doj'>Date of Joining</label><br/>
            <input type="date" name="doj" value={formData.doj} className="col-xs-6 col-md-12" onChange={(e)=>{handleChange(e)}}/>
          </div>
          <h2>HSC Details</h2>
          <div className="field">
            <label className="col-xs-6 col-md-6" htmlFor='hscname'>School name</label>
            <label className="col-xs-6 col-md-6" htmlFor='hscpercentage'>Percentage</label><br/>
            <input type="text" name="hscname" className="col-xs-4 col-sm-6" value={formData.hscname} onChange={(e)=>{handleChange(e)}}/>
            <input type="number" name="hscpercentage" className="col-xs-6 col-md-6" value={formData.hscpercentage} onChange={(e)=>{handleChange(e)}}/><br/>
            <label className="col-xs-4 col-sm-12">Submit marksheet</label>
            <input type="file" name="hscmarksheet" className="col-xs-6 col-md-12" value={formData.hscmarksheet} onChange={(e)=>{handleChange(e)}}/>
          </div>
          <h2>HSSC Details</h2>
          <div className="field">
            <label className="col-xs-6 col-md-6" htmlFor='hsscname'>School name</label>
            <label className="col-xs-6 col-md-6" htmlFor='hsscpercentage'>Percentage</label><br/>
            <input type="text" name="hsscname" className="col-xs-6 col-md-6" value={formData.hsscname} onChange={(e)=>{handleChange(e)}}/>
            <input type="number" name="hsscpercentage" className="col-xs-6 col-md-6" value={formData.hsscpercentage} onChange={(e)=>{handleChange(e)}}/>
            <label className="col-4 col-sm-12" htmlFor='hsscdoc'>Submit marksheet</label>
            <input type="file" name="hsscdoc" className="col-4 col-sm-12" value={formData.hsscdoc} onChange={(e)=>{handleChange(e)}}/>
          </div>
          <h2>Grads Details</h2>
          <div className="field">
            <label className="col-xs-6 col-md-6" htmlFor='name'>Institute Name</label>
            <label className="col-xs-6 col-md-6" htmlFor='name'>UG Percentage</label><br/>
            <input type="text" name="ugname" className="col-xs-6 col-md-6" value={formData.ugname} onChange={(e)=>{handleChange(e)}}/>
            <input type="number" name="ugpercentage" className="col-xs-6 col-md-6" value={formData.ugpercentage} onChange={(e)=>{handleChange(e)}}/><br/>
            <label className="col-xs-6 col-md-6" htmlFor='name'>Degree</label>
            <label className="col-xs-6 col-md-6" htmlFor='name'>Marksheet</label>
            <input type="file" name="ugdegree" className="col-xs-6 col-md-6" value={formData.ugdegree} onChange={(e)=>{handleChange(e)}}/>
            <input type="file" name="ugmarksheet" className="col-xs-6 col-md-6" value={formData.ugmarksheet} onChange={(e)=>{handleChange(e)}}/>
          </div>
          <h2>Post Grads Details</h2>
          <div className="field">
            <label className="col-xs-6 col-md-6" htmlFor='name'>Institute Name</label>
            <label className="col-xs-6 col-md-6" htmlFor='name'>UG Percentage</label><br/>
            <input type="text" name="pgname" className="col-xs-6 col-md-6" value={formData.pgname} onChange={(e)=>{handleChange(e)}}/>
            <input type="number" name="pgercentage" className="col-xs-6 col-md-6" value={formData.pgercentage} onChange={(e)=>{handleChange(e)}}/><br/>
            <label className="col-xs-6 col-md-6" htmlFor='name'>Degree</label>
            <label className="col-xs-6 col-md-6" htmlFor='name'>Marksheet</label><br/>
            <input type="file" name="pgdegree" className="col-xs-6 col-md-6" value={formData.pgdegree} onChange={(e)=>{handleChange(e)}}/>
            <input type="file" name="pgmarksheet" className="col-xs-6 col-md-6" value={formData.pgmarksheet} onChange={(e)=>{handleChange(e)}}/>
          </div>
          <h2>CDAC Details</h2>
          <div className="field">
            <label>Select Course</label><br/>
            <select name="gender" value={formData.gender} onChange={(e)=>{handleChange(e)}}>
              <option value="dac">DAC</option>
              <option value="dbda">DBDA</option>
            </select>
          </div>
          <div className="field"></div>
          
          <input type='submit' value="submit" disabled={isDisabled}/>
        </div>
      </form>
    </div>
        </div>
    )
}

export default Form