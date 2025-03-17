//create this file in top level directory of the app

//import { createServer } from 'http'  //to create server
const {createServer} = require('http')

//import { parse } from 'url'
const {parse} = require('url') //required for parsing

//import next from 'next'
const next = require('next') 

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })  //creating instance of next
//server1.js is called in package.json and next is called inside server1.js
const handle = app.getRequestHandler()  //handle is a mthd from next.js 
 
app.prepare().then(() => {
  createServer((req, res) => {   //we pass in req, res
    const parsedUrl = parse(req.url, true)
    const {pathname, query}= parsedUrl
    if(pathname === '/chicken'){
      app.render(req, res, "/contact",query)
    }else{
      handle(req, res, parsedUrl)  //handling infos of each request off to next js
    }
   // handle(req, res, parsedUrl)  //we r passing req, res, Url to handle mthd which handles the info of each reqst
  }).listen(port)
 
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})


//start the server again everytime u make changes here or package.json file