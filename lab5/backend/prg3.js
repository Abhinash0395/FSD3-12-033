import express from "express";

import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

app.use(express.static(path.join(dirname, "pages")));

app.listen(4444, () => {
  console.log("prg3 is runnit at 4444");
  
});