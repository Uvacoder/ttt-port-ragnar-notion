//https://hasir.notion.site/Ayah-43-44-384ea8133ba6408686d5b58e4f4667f6
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NotionAPI } from 'notion-client'


export default async function handler(req, res) {
    const api = new NotionAPI()

    // fetch the page's content, including all async blocks, collection queries, and signed urls
    const recordMap = await api.getPage('384ea8133ba6408686d5b58e4f4667f6')
    console.log(typeof recordMap);
    
    res.status(200).json(recordMap)
  }
  