const { json } = require( 'body-parser' );
const http = require('http');
 require("dotenv").config();
 const getReq = require('./methods/getReq')
 const postREQ = require('./methods/postREQ')
 const putReq = require('./methods/putReq')
 const deletREQ = require('./methods/deletREQ')
 let moves = require('./data/moves.json')
const PORT = process.env.PORT || 5001



const server = http.createServer((req,res) =>{
    req.moves =moves;
    switch(req.method){
        case 'GET':
            getReq(req,res)
            break
        case "POST":
            postREQ(req,res)
            break
        case 'PUT':
            putReq(req,res)
            break
        case 'DELETE':
            deletREQ(req,res)
            break
            default:
                  res.statusCode = 200;
   res.setHeader("Content-Type", "application/json");
   res.write(JSON.stringify({massage : 'notfound'}))
   console.log(JSON.stringify(req.body))
   res.end()
 
    }



 
})


server.listen(PORT , (err, res) =>{
    console.log(`listening  ${PORT}`);
})