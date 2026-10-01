import express from "express";

import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

app.get("/",(req, res)=> {
    res.sendFile(path.join(dirname,'pages','product.html'));
});

app.listen(4444, () => {
  console.log("prg2 is runnit at 4444");
});