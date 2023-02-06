// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());

const express = require('express');
const mongoose = require('mongoose');
//const dotenv = require('dotenv');

const app = express();
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
    //dotenv.config();
}
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

//code to enable post request
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//end to enable post request


//set mongoose
mongoose.set('strictQuery', false);

const customers = [
	{
			"name": "Linus",
			"industry": "Kernel"
	},
    {
        "name": "Alex",
        "industry": "Networking"
    },
    {
        "name": "Jack",
        "industry": "Shopping"
    }
];
//Home Page
app.get('/',(req,res)=>{
    res.send("Welcome!");
})
//To get data
app.get('/api/customers',(req, res)=> {
   res.send({"customers": customers}); 
})
//to post data from external request
app.post('/api/customers',(req, res)=> {
    console.log(req.body);
    res.send(req.body);  
 })
//to post data
app.post('/',(req, res)=> {
    res.send('This is a post request');  
 })


//db function
const start = async()=> {
    try {
        await mongoose.connect(CONNECTION);
        app.listen(PORT, () => {
            console.log('App listening on port ' + PORT);
        });
    }
    catch(e){
        console.log(e.message);
    }
}
start();
