import React,{Component} from 'react';
import './student-id-card.css';


class StudentIdCard extends Component{
    constructor(props){
        super(props);

this.generateId = this.generateId.bind(this);
this.reset=this.reset.bind(this);
    }
generateId(e){
e.preventDefault();
    //get the name from input
    const name = document.getElementById('name');
    const nameValue = name.value;
    //assign the name to card name
    const cardName = document.getElementById('card-name');
    cardName.innerHTML = nameValue;

    //get the collegename
    const collegeName= document.getElementById('clg-name');
    const collegeNameValue =collegeName.value;
    //assign to card collegename
    const cardClgName = document.getElementById('card-clgname');
    cardClgName.innerHTML = collegeNameValue;

    //get the location
    const location= document.getElementById('location');
    const locationValue =location.value;
    //assign to card location
    const cardLocation = document.getElementById('card-location');
    cardLocation.innerHTML = locationValue;

 // Display final generated card to user  
 //const refreshSection = document.getElementById("form-input");
 
 document.getElementById("collegeCard").style.display = "block";
 //refreshSection.reload();

};

reset() {
  window.location.reload(false);
}
   
    render(){
       
        return(
            <>
            <div className='app-container'>
<div className='app-head'>
    <h2>ID Card Generator</h2>
</div>
<div className='app-body' id='app-body'>
    <div className='row'>
        <div className='col-md-6 col-sm-12 input-form' id='input-form'>
            <h3>Input Form</h3>
            <form>
  <div className="mb-3">
   
<label htmlFor="name" className="col-form-label">Enter Your Name</label>
<input type='text'name='name' id="name" className="form-control" placeholder='Enter Your Name' autoComplete='on'/>
<label htmlFor="clg-name" className="col-form-label">Enter Your College Name</label>
<input type='text'name='clg-name' id="clg-name" className="form-control"  placeholder='Enter Your College Name' autoComplete='on'/>
<label htmlFor="location" className="col-form-label">Enter Your Location</label>
<input type='text'name='location' id="location" className="form-control"  placeholder='Enter Your Location' autoComplete='on'/>  

</div>
  <button type="submit" className="btn btn-primary mb-3 me-3 ms-0" 
  onClick={this.generateId}>Generate Id</button>
  <button type="submit" className="btn btn-primary mb-3 me-3" onClick={this.reset}>Reset</button>

</form>
        </div>
        <div className='col-md-6 col-sm-12' id='collegeCard'>
            <h3>Generated Card</h3>
            <div className="card-container">
            <div className="card-wrapper">
            <div className="user-card">
                                <span className="user-photo">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
  <div className="card-body">
    <h5 className="card-title">Name : <span id='card-name'></span></h5>
    <h5 className="card-title">College Name : <span id='card-clgname'></span></h5>
    <h5 className="card-title">Location : <span id='card-location'></span></h5>

  </div>
</div>
</div>
        </div>

    </div>
</div>
            </div>
            </>
        );
    }
}

export default StudentIdCard;