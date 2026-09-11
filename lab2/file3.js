import { stat } from "fs/promises";

const fstat = await stat("file.js");
console.log("file size", fstat.size, "bytes");
console.log(`is file : ${fstat.isFile()}`);
console.log(`is folder : ${fstat.isDirectory()}`);
console.log(`is syslink : ${fstat.isSymbolicLink()}`);
console.log(`is create on : ${fstat.birthtime}`);
console.log(`last used on : ${fstat.atime}`);
