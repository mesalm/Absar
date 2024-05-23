const url = require('url');
const fs = require('fs')
const path =require('path')
module.exports =async (req,res)=>{
    const {pathname , query} = url.parse(req.url)
     const data = req.moves
    if(pathname === '/api/moves' && query <= data.length){
        try{
              
               const deletItem = data[query]
               await data.splice(deletItem ,1)
               fs.writeFileSync(path.join(__dirname ,'..','data' ,'moves.json' ),JSON.stringify(req.moves) , 'utf8');
               res.writeHead(200,'Content-Type', 'application/json')
               res.end('data had been deleted')
        }catch(e){
            console.error
        }
    }else{
        res.writeHead(404)
        res.end('moves is not exist')
    }
}


