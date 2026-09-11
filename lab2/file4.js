import { mkdir } from "fs/promises";

await mkdir("uploads/resume", { recursive: true });
await mkdir("/uploads/images");
