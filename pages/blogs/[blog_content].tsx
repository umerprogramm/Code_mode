import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import axios from 'axios';
import { IBlog_Data } from '../../components/types/types';
import Head from 'next/head';

export default function blog_content() {
  
  const router = useRouter()
  const slug = router.query.blog_content
  const [data, setData] = useState<IBlog_Data[]>([]);
  useEffect(() => {
    if(slug){
      const fetchData = async () => {
        console.log(slug)
        const result = await axios.get(`http://localhost:1337/api/videos?filters[slug][$eq]=${slug}`, {
          headers: {
            Authorization: `Bearer aae8b519840b4e6e9b234dc2142cea40c1325a1af80d7cfacccf55c157539eb5b227dbf809fcca8b445e76f003b73ba3348d3e7ba59b537cfa71fdb4d240b4686ed2959351b2a0cce9e59b3aa482ea166d185c9d8fbd07e4d5015332b83bea682e85303095ef54de7d33e86bdf3ee5c26cc3515c748ba880ca596758cc409a12`
          }
        });   
        setData(result.data.data);
        console.log(result.data.data)
        console.log(router)
      };
      fetchData()
    }
    
  }, [router]); 


  
 


  return (
    
    
  
    <>
    <Nav/>
    <Head>
        <title>Code Mode | {slug}</title>
        <meta charSet="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head> 
    <div className='blog_content'>
      {
        data.map(value =>{
            return(
              <>
              <h1>{value.attributes.title}</h1>
              <p>{value.attributes.blog_text}</p>
              </>
            )
        })
      }
  
    </div>
    </>
  )
}
