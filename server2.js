const express = require('express')

//import next from 'next'
const next = require('next') 

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })  //creating instance of next
//server1.js is called in package.json and next is called inside server1.js
const handle = app.getRequestHandler()  //handle is a mthd from next.js 
 

//express will automatically create server
app.prepare().then(() => {

    const server = express();

//TO CHECK WHTHER WE HAVE DEFINED THE CRCT ROUTE
// server.get('/lol', (req,res)=>{
//     res.send("you have hit lol")
// })

server.get('/p/:id', (req,res)=>{  // in express, when u use colon (:), it makes this line as router variable or parameter
    app.render(req, res, '/post', {id:req.params.id})   //using .render() when customising the route
})


    server.get("*", (req, res)=>{
       return handle(req,res)      //for every incoming rqst i.e *, we ask next to handle it using handle()
    })
    server.listen(port, err => {
        if(err) throw err
        console.log("u r on serverside of port 3000")
    })

})


//start the server again everytime u make changes here or package.json file