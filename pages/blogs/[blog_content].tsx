import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import axios from 'axios';
import { IBlog_Data } from '../../components/types/types';
import Head from 'next/head';

export default function blog_content(props:any) {
  
   const [data ] = useState<IBlog_Data[]>(props.data);

  return (
    
    

      
      
      
        <>
        <Nav/>
    <Head>
        <title>Code Mode</title>
      
        <meta charSet="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head> 
    <div className='blog_content'>
      {
        data.map((value , key) =>{
          if(value.error){
            return(
              <div key={key}>
                <h1>{value.error}</h1>
                </div>
              )
          }else{
            return(
              <div key={key}>
                <h1>{value.title}</h1>
                <p>{value.content}</p>
                </div>
              )
          }
       
          })
      }
  
    </div>
    </>
        
    
    )
  
}



export async function getServerSideProps(context) {
  const slug = context.query.blog_content
  const res = await fetch(process.env.NEXT_PUBLIC_GetBlog + slug)
  const data = await res.json()
  if(data.message){
    return {
      props: {
       data : [{error :"no data founded"}]
      } // will be passed to the page component as props
    }
  }else{
    return {
      props: {
       data : [data]
      } // will be passed to the page component as props
    }
  }
 
}


