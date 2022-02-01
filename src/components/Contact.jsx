import React from 'react';
import {useState} from 'react'


const Contact = () => {
const [data, setdata] = useState({
  name:"",
  phone:"",
  email:"",
  message:""
});

const formsubmit =(e)=>{
e.preveDefault()
alert(`my name is ${data.name} my number is ${data.phone} and my email is ${data.email} and my message is ${data.message}`)
}
const inputevent=(event)=>{
const {name , value} = event.target
setdata((datas)=>{
  return{
    ...datas,
    [name]:value,
  }

})
}

  return <div>

<div className="my-5">
  <h1 className='text-center'>Contact Us</h1>

</div>
<div className="container contact_div ">
  <div className="row">
    <div className="col-md-6 mx-auto">
      <form onSubmit={formsubmit}>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name"
  name='name'
  value={data.name}
  onChange={inputevent}
  />
</div>
<div className="mb-3">


<label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="Mobile number"
    name='phone'
    value={data.phone}
    onChange={inputevent}
  />
</div>
<div className="mb-3">


<label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
    name='email'
    value={data.email}
    onChange={inputevent}
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={data.message} onChange={inputevent}></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>

      </form>
    </div>
  </div>
</div>
      
  </div>;
};

export default Contact;


