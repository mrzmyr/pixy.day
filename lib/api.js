import { NotionAPI } from 'notion-client'

export const getContent = async (id) => {
  if(!id) return null;

  const notion = new NotionAPI();
  
  try {
    return await notion.getPage(id)
  } catch (e) {
    return null;
  }
}