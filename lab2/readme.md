# File System (FS Module)
- FS module directly communicating with operating system whether than
  the common operating in file or folder
1. File -> writeFile, readFile, appendFile
2. Folder -> Mkdir/Md
             rmdir/rm
             readdir
3. File metadata -> stat
                    lstat
                    rstat
4. Watch -> watch, unwatch
5. Stream -> readStream()
             WriteStream()


All functions are Promise so it must be called with await keyword