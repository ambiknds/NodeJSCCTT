// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());
const express = require('express');
const mongoose = require('mongoose');
import Customer from './models/customer';
const cors = require('cors');
import { Request, Response } from 'express';

const app = express();
//set mongoose
mongoose.set('strictQuery', false);
app.use(cors());
//code to enable post request
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//end to enable post request

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
    //dotenv.config();
}
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

const customer = new Customer({
    name: 'John',
    industry: 'marketing'
});
// customer.save();
//Home Page
// app.get('/',(req,res)=>{
//     res.send(customer);
// })
app.get('/',(req: Request,res: Response)=>{
    res.send("Welcome!!");
})
//To get data
app.get('/api/customers', async (req: Request,res: Response)=> {
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
app.get('/api/customers/:id', async (req: Request,res: Response) => {
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
app.put('/api/customers/:id', async (req: Request,res: Response) => {
    try {
        const customerId = req.params.id;
        // const result = await Customer.replaceOne({_id: customerId}, req.body);
        const customer = await Customer.findOneAndReplace({_id: customerId}, req.body, {new: true});
        console.log(customer);
        res.json({customer});
    }catch(e){
        console.log(e.message);
        res.status(500).json({error:'Something went wrong'});
    }
});
//patch 
app.patch('/api/customers/:id', async (req: Request,res: Response) => {
    try {
        const customerId = req.params.id;
        const customer = await Customer.findOneAndUpdate({_id: customerId}, req.body, {new: true});
        console.log(customer);
        res.json({customer});
    }catch(e){
        console.log(e.message);
        res.status(500).json({error:'Something went wrong'});
    }
});
//patch specific order id
app.patch('/api/orders/:id', async (req: Request,res: Response) => {
    console.log(req.params);
    const orderId = req.params.id;
    req.body._id = orderId;
    try {
        const result = await Customer.findOneAndUpdate(
            { 'orders._Id' : orderId }, //allows inside of  customer go to order attribute and then into that order id
            { $set: {'orders.$': req.body }}, //$ refers to order that id match
            { new: true }
        );
        console.log(result);
        if(result){
            res.json(result);
        }else{
            res.status(404).json({error: 'Order not found'});
        }
    }catch(e){
        console.log(e.message);
        res.status(500).json({error:'Something went wrong'});
    }
});
//Get Document by nested data id
app.get('/api/orders/:id', async(req: Request,res: Response) => {
    try{
        const result = await Customer.findOne({'orders._id': req.params.id});
        if(result){
            res.json(result);
        }else{
            res.status(404).json({error : 'Order not found'});
        }
    }catch(e){
        res.status(500).json({error:'Something went wrong'});
    }
})
//Delete method
app.delete('/api/customers/:id', async (req: Request,res: Response) => {
    try{
        const customerId = req.params.id;
        const result = await Customer.deleteOne({_id: customerId});    
        res.json({deletedCount: result.deletedCount});
    }catch(e){
        res.status(500).json({error:'Something went wrong'});
    }
})
//to post data from external request
app.post('/api/customers',async (req: Request,res: Response)=> {
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
app.post('/',(req: Request,res: Response)=> {
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
