import express from "express"

const app = express()

app.get('/users',(request,response)=>{
  console.log('Lista de usuarios')

  response.json({alan:27,andrea:26,ana:23,david:2})
})

app.listen(3333)