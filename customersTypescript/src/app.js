"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());
const express = require('express');
const mongoose = require('mongoose');
const customer_1 = __importDefault(require("./models/customer"));
const cors = require('cors');
const app = express();
//set mongoose
mongoose.set('strictQuery', false);
app.use(cors());
//code to enable post request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//end to enable post request
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    //dotenv.config();
}
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;
const customer = new customer_1.default({
    name: 'John',
    industry: 'marketing'
});
// customer.save();
//Home Page
// app.get('/',(req,res)=>{
//     res.send(customer);
// })
app.get('/', (req, res) => {
    res.send("Welcome!!");
});
//To get data
app.get('/api/customers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(await mongoose.connection.db.listCollections().toArray());
    //hit send in postman app
    try {
        const result = yield customer_1.default.find();
        //    res.send({"customers": result}); 
        res.json({ "customers": result });
    }
    catch (e) {
        res.status(500).json({ error: e.message }); //you cangive string "Something went wrong also"
    }
}));
//Query and parameters
app.get('/api/customers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log({
        requestParams: req.params,
        requestQuery: req.query
    });
    try {
        const { id: customerId } = req.params;
        console.log(customerId);
        const customer = yield customer_1.default.findById(customerId);
        console.log(customer);
        if (!customer) {
            res.status(404).json({ error: 'User not found' });
        }
        else {
            res.json({ customer });
        }
    }
    catch (e) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}));
app.put('/api/customers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customerId = req.params.id;
        // const result = await Customer.replaceOne({_id: customerId}, req.body);
        const customer = yield customer_1.default.findOneAndReplace({ _id: customerId }, req.body, { new: true });
        console.log(customer);
        res.json({ customer });
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
}));
//patch 
app.patch('/api/customers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customerId = req.params.id;
        const customer = yield customer_1.default.findOneAndUpdate({ _id: customerId }, req.body, { new: true });
        console.log(customer);
        res.json({ customer });
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
}));
//patch specific order id
app.patch('/api/orders/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    const orderId = req.params.id;
    req.body._id = orderId;
    try {
        const result = yield customer_1.default.findOneAndUpdate({ 'orders._Id': orderId }, //allows inside of  customer go to order attribute and then into that order id
        { $set: { 'orders.$': req.body } }, //$ refers to order that id match
        { new: true });
        console.log(result);
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).json({ error: 'Order not found' });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
}));
//Get Document by nested data id
app.get('/api/orders/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_1.default.findOne({ 'orders._id': req.params.id });
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).json({ error: 'Order not found' });
        }
    }
    catch (e) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}));
//Delete method
app.delete('/api/customers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customerId = req.params.id;
        const result = yield customer_1.default.deleteOne({ _id: customerId });
        res.json({ deletedCount: result.deletedCount });
    }
    catch (e) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}));
//to post data from external request
app.post('/api/customers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const customer = new customer_1.default(req.body);
    try {
        yield customer.save();
        res.status(201).json({ customer });
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
    //res.send(req.body);  
}));
//to post data
app.post('/', (req, res) => {
    res.send('This is a post request');
});
//db function
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(CONNECTION);
        app.listen(PORT, () => {
            console.log('App listening on port ' + PORT);
        });
    }
    catch (e) {
        console.log(e.message);
    }
});
start();
