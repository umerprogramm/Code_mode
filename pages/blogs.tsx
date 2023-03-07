import axios from 'axios'
import { ObjectEncodingOptions } from 'fs'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import {IBlog_Data} from '../components/types/types'


export default function Blogs(props: any) {
  const [data ] = useState<IBlog_Data[]>(props.data);
  const [search , setSearch ] = useState<string>('')
  return (
    <>
     <Nav/>   
     <Head>
        <title>Code Mode | blogs</title>
        <meta charSet="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head> 
      <main className='blog_main'>
      <input className='search_bar' onChange={e => setSearch(e.target.value)}  type="search" placeholder="Search" aria-label="Search"/>
      {
        data.filter(value =>{
          if(search === ""){
            return  value
          }else if(value.title.toLowerCase().includes(search.toLowerCase())){
            return value
          }else{
            alert("No data founded")
          }
        }).map((value , key) =>{
          return(
            
     <div className='blogs' key={key}>
      
       <span>{value.date}</span>
      <Link href={`blogs/${value.slug}`}>
      <h4>{value.title}</h4>
       </Link>
      <p>{value.content.substring(0,100)}...</p>
     </div>
          )
        })
      }
      </main>
    
    <Footer/>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_Url)
  const data = await res.json()

  return {
    props: {
     data
    } // will be passed to the page component as props
  }
}