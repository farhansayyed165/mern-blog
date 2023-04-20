const User = require("./models/user")
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")


const salt = bcrypt.genSaltSync(10)
const secret= "hskfjncnroeifevnfberijbdskdf" 

app.use(cors({credentials:true, origin:"http://localhost:5173"}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect('mongodb+srv://farhansayyed1656:rO53aYzd0ItqnsEJ@cluster0.fvwwyur.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username:username,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userDoc)
    }
    catch (e) {
        console.log(e)
        res.status(400).json(e)
    }

})

app.post('/login', async (req,res)=>{
    const {username, password} = req.body
    const userDoc = await User.findOne({username});
    const passCheck = bcrypt.compareSync(password, userDoc.password)
    console.log(passCheck)
    if(passCheck === false){
        res.status(400).json("username and password don't match")
    }
    else{
        jwt.sign({username,id:userDoc._id}, secret, {}, (err, token)=>{
            if(err){
                throw err
            }
            else {
                res.cookie("UserToken", token).json("ok")
            }
        })
    }
    
});

app.get('/profile',(req,res)=>{
    const {token} = req.cookies;
    jwt.verify(token, secret, {},(err, info)=>{
        if(err)throw err;
        res.json(info)
    })

})


app.listen(4000, console.log("Listening on port 4000"))