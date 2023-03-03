import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function contact() {
  return (
    <>
         <Nav/>   
         <Head>
        <title>Code Mode | Contact us</title>
      </Head> 
         <form style={{height : "100vh", width : '50%',margin : "auto",marginTop:"80px" }}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label style={{color : 'white'}} htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-6">
      <label style={{color : 'white'}}  htmlFor="inputPassword4">Subject</label>
      <input type="text" className="form-control" id="inputPassword4" />
    </div>
  </div>
  <div className="form-group">
    <label style={{color : 'white'}} htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <button type="button" className="btn btn-success">Submit</button>
</form>
<Footer/>
    </>
  )
}
