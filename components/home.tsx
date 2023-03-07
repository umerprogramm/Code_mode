import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import laptop from './assets/laptop.png'
import image  from './assets/logo.png'
import AOS from 'aos';
import "aos/dist/aos.css";



export default function Main() {
  useEffect(() => {
    AOS.init({
      duration :2000
  })
  }, [])
  return (
    <>
    <main className='main'>
      <div style={{paddingTop : 200 , paddingLeft : 50, paddingRight : 100 }}>
      <h1 data-aos="fade-right"  style={{color : "orange"}}>Turn on your Code mode</h1>
      <h3 data-aos="fade-left" style={{color : "lightgreen"}}>and lrean something new</h3>
      </div>
 <div className='image_div' data-aos="zoom-in">
  <Image  className='image' src={laptop} alt='this is laptop coding image'/>
 </div>
    </main>
    <section>
      <h1 data-aos="fade-up">How to lrean Coding?🤔</h1>
      <h3 data-aos="fade-left">Step 1</h3>
      <p data-aos="fade-left">Choose a <span>programming language</span>(Like python , javascript etc...)</p>
      <h3 data-aos="fade-right">Step 2</h3>
      <p data-aos="fade-right">Find <span>learning resources</span>: There are plenty of online resources available to learn coding, like <span>Code Mode</span>,Codecademy</p>
      <h3 data-aos="fade-left">Step 3</h3>
      <p data-aos="fade-left">Practice : <span>The best way to learn coding</span> is to practice writing code. Start with small <span>projects</span> and gradually work your way</p>
    </section>

    <section className='second_section'>
    <h1>Our Channel</h1>
    <div className="container">
  <div className="row">
    <div data-aos="fade-down" className="col-sm ">
    <Link target='_blank' href="https://www.youtube.com/channel/UCPd5Bzp4pY8uBHXV40o_X5Q">
      <Image  style={{ borderRadius : "50%"}} src={image} alt='This is ummi code site image'/>
      <h3>code_mode</h3> 
      </Link>
    </div>
    <div data-aos="fade-up"  style={{paddingTop : "10px"}} className="col-sm ">
    <p>The YouTube channel <span>"@code_mode"</span> appears to be a programming-related channel, primarily focused on web development, software engineering.It offers <span>tutorials</span>, <span>tips</span>, and tricks on various programming topics, including HTML, CSS, JavaScript, Python, and others.</p>
    </div> 
   
  </div>
</div>
    </section>
   
    </>
  )
}
