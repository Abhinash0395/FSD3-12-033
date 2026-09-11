import { writeFile, appendFile, readFile } from "fs/promises";

// const readData = ()=>{
//     try{
//     const content = await readFile(filename , "utf-8") ;
//     return content ;
//     } catch(e){
//         console.log(e.message) ;
//         console.log("file not found ") ;
//     }
//     finally{
//         console.log("Read data finished ") ;
//     }
// }  ;

// const writeData = (filename,content) =>{
//     await writeFile(filename , content) ;
// } ;

// const appendData = (filename, content) => {
//     await appendFile(filename , content) ;
// } ;
//

const readData = async (filename) => {
  try {
    const content = await readFile(filename, "utf-8");
    return content;
  } catch (e) {
    console.log(e.message);
    console.log("file not found ");
  } finally {
    console.log("Read data finished ");
  }
};

const writeData = async (filename, content) => {
  await writeFile(filename, content);
};

const appendData = async (filename, content) => {
  await appendFile(filename, content);
};

const deleteFile = async (filename) => {
  try {
    await unlinkSync(filename);
  } catch (error) {
    console.log("file not found");
  }
};
const data = await readData("file1.js");
console.log(data);

// NOTE : if a function uses await keyword thenthe function must be async
