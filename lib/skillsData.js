import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'public/assets/skills');

export function getAllSkillsIds() {
  const fileNames = fs.readdirSync(postsDirectory);
   // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'html'
  //     }
  //   },
  // ]
  return fileNames.map((fileName) => {
    return {
        id: fileName.replace(/\.png$/, ''),
    };
  });
}
