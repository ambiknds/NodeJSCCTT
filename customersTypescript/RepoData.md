// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());
Eg1 TT1-7
const express = require('express');
const app = express();
const PORT = 3000;

//To get data
app.get('/',(req, res)=> {
   res.send('Hello there!');  
})
//to post data
app.post('/',(req, res)=> {
    res.send('This is a posr request');  
 })
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});

// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());

const express = require('express');
const app = express();
const PORT = 3000;

const json = {
	"name": "Nodal",
	"indystry": "Coding",
	"favouriteColors": [
		"red", "blue", "green"
	],
	"favouriteNumbers": [
		3, 5, 7, 9
	],
	"favouritePeople": [{
			"name": "mom",
			"relationship": "parent"
		},
		{
			"name": "mom",
			"relationship": "parent"
		}
	]
};
//To get data
app.get('/',(req, res)=> {
   res.send({"data":json});  
})
//to post data
app.post('/',(req, res)=> {
    res.send('This is a posr request');  
 })
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});


// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());

const express = require('express');
const app = express();
const PORT = 3000;

const json = {
	"name": "Nodal",
	"indystry": "Coding",
	"favouriteColors": [
		"red", "blue", "green"
	],
	"favouriteNumbers": [
		3, 5, 7, 9
	],
	"favouritePeople": [{
			"name": "mom",
			"relationship": "parent"
		},
		{
			"name": "dad",
			"relationship": "parent"
		}
	]
};
//To get data
app.get('/',(req, res)=> {
   res.send({"data":json});
  // res.send({"data":json.favouritePeople});  
})
//to post data
app.post('/',(req, res)=> {
    res.send('This is a posr request');  
 })
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});


// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());

const express = require('express');
const app = express();
const PORT = 3000;

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

//to post data
app.post('/',(req, res)=> {
    res.send('This is a posr request');  
 })
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});

// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

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
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});

// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

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
        await mongoose.connect('mongodb+srv://nodecaltt:mawblei86lab@cluster0.ktjzcbu.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log('App listening on port ' + PORT);
        });
    }
    catch(e){
        console.log(e.message);
    }
}
start();


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
        await mongoose.connect('mongodb+srv://nodecaltt:mawblei86lab@cluster0.ktjzcbu.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log('App listening on port ' + PORT);
        });
    }
    catch(e){
        console.log(e.message);
    }
}
start();

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
    name: 'caleb',
    industry: 'marketing'
});
customer.save();
//Home Page
app.get('/',(req,res)=>{
    res.send(customer);
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

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    industry: String
});
module.exports = mongoose.model('Customer', customerSchema);

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

app.post('/api/customers',(req, res)=> {
    console.log(req.body);
    const customer = new Customer({
       // name: req.body.name,
        //industry: req.body.industry
    });
    customer.save();
    //res.send(req.body);  
 })

 TT-16 app.js
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
    res.json({
        requestParams: req.params,
        requestQuery: req.query
    });
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

TT-17
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

TT-21
// const {v4: uuidv4} = require('uuid');
// console.log(uuidv4());

const express = require('express');
const mongoose = require('mongoose');
const Customer = require('./models/customer')
const cors = require('cors');
//const dotenv = require('dotenv');

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
        // const result = await Customer.replaceOne({_id: customerId}, req.body);
        const result = await Customer.findOneAndReplace({_id: customerId}, req.body);
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

