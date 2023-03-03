import express from "express"

const app = express()
const port = 3333



//GET     To search 
//POST    To create 
//PUT     To actualice 
//DELETE  To delete

//POST  http://localhost:3333/users  = Crear un usuario  
//GET  http://localhost:3333/users   = Listar los usuarios
//GET  http://localhost:3333/users/5 = Buscar usuario con id 5

// importante return antes de la respuesta para no seguir ejecutando codigo

const users = ["Alan","DAniel","David","Ana","Antonieta","Patricia"]

app.get('/users',(request,response)=>{
  console.log('Lista de usuarios')

 return  response.json(users)
})

// using params 
//Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

app.get('/users/:id',function (req,res){
  const id = Number(req.params.id) 
  const user = users[id]
  
  return res.json(user)

})

// Metod POST
app.post('/users',(req,res)=>{
  console.log("metodo post en ruta users")

  return res.json({status:200, message:"Tudo joia"})
  // return res.sendStatus(200)
})

app.listen(port, ()=> {console.log(`server is running at port:${port}`)})