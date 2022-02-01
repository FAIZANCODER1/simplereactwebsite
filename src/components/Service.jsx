import React from 'react';
import Cards from './Cards';
import Sdata from "./Sdata"

const Service = () => {
  return <div>
<div className="my-5">
  <h1 className="text-center">Our Services</h1>
</div>
  <div className="container-fluid mb-5">
    <div className="row ">
        <div className="col-10 mx-auto" >
          <div className="row  gy-5">
         
            {
Sdata.map((val,ind)=>{
 return  <Cards key={ind} title={val.title} imgsrc={val.imgsrc}/>  

})


            }
         


            </div>
         


</div>
</div>
</div>
</div>


      
  ;
};

export default Service;


