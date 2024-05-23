  const path = require('path')
  const url = require('url')
  const bodyPars = require('../Util/podyPArs')
  const fs = require('fs')

  module.exports = async (req,res)=>{
  const data = req.moves 
     const {pathname , query} = url.parse(req.url)
    try{
        if(pathname === '/api/moves' && query < data.length){
            let updateMove =data[query]
            const id =updateMove.id
            const detals = await bodyPars(req)
            data[query] = detals  
            console.log(req.moves)
    fs.writeFileSync(path.join(__dirname ,'..','data' ,'moves.json' ),JSON.stringify(req.moves) , 'utf8');
    res.writeHead(200,'Content-Type', 'application/json')
    res.end('film has been updat successfully')

}else{
    console.log(error)
}
    }catch(e){
        
        console.log('error')
        res.end('film has been not found')
    }
  }
