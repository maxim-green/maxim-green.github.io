import fs from 'fs';
import path from 'path';
import {capitalize} from './capitalize.ts';

interface GetPagesOptions {
  indexPageName: string;
}

const defaultOptions: GetPagesOptions = {
  indexPageName: 'Home'
}

export const getPages = (options?: Partial<GetPagesOptions>) => {
  const { 
    indexPageName,
  } = { ...defaultOptions, ...options } as GetPagesOptions;
  
  const pagesDir = path.resolve('src', 'pages');
  const files = fs.readdirSync(pagesDir);
  return files.map(file => {
    let fileName = file.split('.')[0];
    const href = `/${fileName !== 'index' ? fileName : ''}`;
    const name = fileName !== 'index' ? capitalize(fileName) : indexPageName;
    return { name, href };
  })
}