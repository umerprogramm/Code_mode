import type { NextApiRequest, NextApiResponse } from 'next'
import  * as fs  from 'fs';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
// read the file
const allData : any[] = []
let files = await fs.promises.readdir('BlogData')
let Jsondata


for (let index = 0; index < files.length; index++) {
  const element = files[index];
  Jsondata = await fs.promises.readFile(`BlogData/${element}` , 'utf-8');
  allData.push(JSON.parse(Jsondata))

  
}


  res.send(allData)

 

  
}