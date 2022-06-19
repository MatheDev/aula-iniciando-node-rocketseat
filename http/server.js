const http = require('http') //requisição do modulo
const fs = require('fs')
const path = require('path')
const { dirname } = require('path')

http.createServer((req, res) => {
    
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)
    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname)

    if(!allowed) return
    
    fs.readFile(
        filePath,
        (err, content) => { 
            if(err) throw err

            res.end(content)
        }
    )
    
        
}).listen(5000, () => console.log('Server is running'))