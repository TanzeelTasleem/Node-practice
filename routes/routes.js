const express = require('express')
const app = express()
const router = express.Router()

const user = require('../models/user')


// app.use(express.json())


router.get('/profile/:id', (req,res)=>{
    res.json( {name: req.params.id, age: "18"},)
})

router.get('/profile' , async(req,res)=>{

        const {username , password} = req.body
try{ 
       const getData = await user.find({username , password})
       if (!getData){
           res.send(`user not found`)
       }
       res.send(" user found ")
}
catch{
    res.send("server error")
}
})

router.post('/profile',(req,res)=>{
    
    const data = new user(req.body)
     data.save()
    .then((item)=>{
        res.send(`data has been saved to database ${item}`)
    })
    .catch((err)=>{
        res.send(`error ouccurs in saving data ${err}`)
    })
})

router.put('/profile/:id' , (req, res)=>{
    res.json({name: req.params.id , age:'18', msg:` user is updated by id ${req.params.id}`})
})

router.delete('/profile/:id' , (req, res)=>{

    res.json({name: req.params.id , age:'18', msg:` user is deleted by id ${req.params.id} `})
    

})


module.exports = router