// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import  * as fs  from 'fs';


type Data = {
  name: string
}
let blog : any; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    fs.readFile(`BlogData/${req.query.slug}.json` , 'utf-8',(err ,data)=>{
      if(err)
      {
        res.status(200).json({"message" : "no data founded"})
      }else{
        
        res.send(data)
      }
      
    });
  



 

  
}
