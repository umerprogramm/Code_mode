import type { NextApiRequest, NextApiResponse } from 'next'
import  * as fs  from 'fs';
import path, { resolve } from 'path';

type Data = {
  name: string
}
let root = process.cwd()
let root1 = root.replace('\\','/')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
const allData : any[] = []
let files = await fs.promises.readdir(`${root1}/BlogData`)
let Jsondata



for (let index = 0; index < files.length; index++) {
  const element = files[index];
  Jsondata = await fs.promises.readFile(`${root1}/BlogData/${element}`, 'utf-8');
  allData.push(JSON.parse(Jsondata))

  
}


 res.send(allData)


 
  
}