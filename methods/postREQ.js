const url = require('url');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const bodyPars = require('../Util/podyPArs')
module.exports = async(req,res)=>{

 const {pathname , query} = url.parse(req.url)
if(pathname === '/api/moves'){
   try{
    let body =  await bodyPars(req)
    const filems = req.moves ;
    body.id = filems.length +1
    req.moves.push(body)
    fs.writeFileSync(path.join(__dirname ,'..','data' ,'moves.json' ),JSON.stringify(req.moves) , 'utf8');
    res.writeHead(200,'Content-Type', 'application/json')
    res.end('film has been added successfully')
   }catch(err){
    console.log(err)
   }
}else{
   res.statusCode(404);
   res.writeHead(404 ,'Content-Type : application/json');
   res.end('not found');
}





}


