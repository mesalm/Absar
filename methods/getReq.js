const url = require ('node:url')


module.exports =(req,res)=>{
const {pathname , query} = url.parse(req.url)
if( pathname === '/api/moves' && !query ){
    
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(req.moves))

}else if(pathname ==='/api/moves' && query && query < req.moves.length) {

     res.writeHead(200, {'Content-Type': 'application/json'})
     res.end(JSON.stringify(req.moves[query]))

}else{
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({massage : 'notfound'}))
    res.end()
}















}
