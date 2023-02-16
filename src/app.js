// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());

const express = require('express');
const mongoose = require('mongoose');
const Customer = require('./models/customer')
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

const customer = new Customer({
    name: 'John',
    industry: 'marketing'
});
// customer.save();
//Home Page
// app.get('/',(req,res)=>{
//     res.send(customer);
// })
app.get('/',(req,res)=>{
    res.send("Welcome!");
})
//To get data
app.get('/api/customers', async (req, res)=> {
    // console.log(await mongoose.connection.db.listCollections().toArray());
    //hit send in postman app
    try{
        const result = await Customer.find(); 
        //    res.send({"customers": result}); 
           res.json({"customers": result});
    }catch(e){
        res.status(500).json({error: e.message});//you cangive string "Something went wrong also"
    }  
})
//Query and parameters
app.get('/api/customers/:id', async (req,res) => {
    console.log({
        requestParams: req.params,
        requestQuery: req.query
    });
    try{
        const {id: customerId} = req.params;
        console.log(customerId);
        const customer = await Customer.findById(customerId);
        console.log(customer);
        if(!customer){
            res.status(404).json({error:'User not found'});
        }else{
            res.json({customer});
        }
        
    }catch(e){
        res.status(500).json({error:'Something went wrong'});
    }
})
app.put('/api/customers/:id', async (req,res) => {
    try {
        const customerId = req.params.id;
        const result = await Customer.replaceOne({_id: customerId}, req.body);
        console.log(result);
        res.json({updatedCount: result.modifiedCount});
    }catch(e){
        res.status(500).json({error:'Something went wrong'});
    }
})
//Delete method
app.delete('/api/customers/:id', async (req,res) => {
    try{
        const customerId = req.params.id;
        const result = await Customer.deleteOne({_id: customerId});    
        res.json({deletedCount: result.deletedCount});
    }catch(e){
        res.status(500).json({error:'Something went wrong'});
    }
})
//to post data from external request
app.post('/api/customers',async (req, res)=> {
    console.log(req.body);
    const customer = new Customer(req.body);
    try{
        await customer.save();
        res.status(201).json({customer});
    }catch(e){
        res.status(400).json({error: e.message});
    }
    
    

    //res.send(req.body);  
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
