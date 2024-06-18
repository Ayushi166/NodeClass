const users = require('./MOCK_DATA.json')

const express = require('express');
const app = express();

app.use(express.json());


app.get('/showAllUsers', (req, res) => {
    return res.json(users)
})


app.get('/getOneUser/:id', (req, res) => {
    const id = parseInt(req.params.id)

if(users.length < id){
    return res.send({status:"002", msg:"This id is not avaiable in the database"})
}


const userDetails = users.find((user) =>
    user.id === id
)

   return res.json({status:"001", userDetails})
})



app.listen(8080, () => {
    console.log(`My server is running on port : 8080`);
})