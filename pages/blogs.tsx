import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import {IBlog_Data} from '../components/types/types'


export default function Blogs() {

  const [data, setData] = useState<IBlog_Data[]>([]);
  const [search , setSearch ] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:1337/api/videos/', {
        headers: {
          Authorization: `Bearer aae8b519840b4e6e9b234dc2142cea40c1325a1af80d7cfacccf55c157539eb5b227dbf809fcca8b445e76f003b73ba3348d3e7ba59b537cfa71fdb4d240b4686ed2959351b2a0cce9e59b3aa482ea166d185c9d8fbd07e4d5015332b83bea682e85303095ef54de7d33e86bdf3ee5c26cc3515c748ba880ca596758cc409a12`
        }
      });   
      setData(result.data.data);
    };
    fetchData();
  }, []);
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
          }else if(value.attributes.title.toLowerCase().includes(search.toLowerCase())){
            return value
          }
        }).map(value =>{
          return(
            
     <div className='blogs'>
      
       <span>{value.attributes.updatedAt}</span>
      <Link href={`blogs/${value.attributes.slug}`}>
      <h4>{value.attributes.title}</h4>
       </Link>
      <p>{value.attributes.blog_text.substring(0,100)}...</p>
     </div>
          )
        })
      }
      </main>
    
    <Footer/>
    </>
  )
}
