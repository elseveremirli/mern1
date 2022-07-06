const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const BookStore = require('./models/BookModel')
const dotenv = require('dotenv') 
const app = express()

app.use(bodyParser.json())
app.use(cors())
dotenv.config();


// Mongoose connection

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
   // useCreateIndex:true
})
.then(console.log("Connect To  database"))
.catch((err => console.log(err)))


app.get("/books",(req,res)=>{
    BookStore.find().then(books => res.json(books));
})


app.post("/newbook", async (req,res)=>{
    try{
        const newBook = new BookStore({
            bookName: req.body.bookName,
            author: req.body.author,
            quantity: req.body.quantity,
            department: req.body.department,
            comments: req.body.comments
        })

        const book = await newBook.save();
        res.status(200).json(book);
    }catch(err){
        console.log(err);
    }
})


app.delete('/delete/:id', (req,res)=>{
    const id = req.params.id
    BookStore.findByIdAndDelete({_id:id}, (err)=>{
        if(!err){console.log("silindi")}else{
            console.log("silinmedi"+err)
        }
    })
})

app.put('/lend/:id', async (req,res)=>{
    try{
        await BookStore.findByIdAndUpdate(req.params.id, {$inc:{quantity: -1}})
    }catch(err){
        console.log("Calisdi");
    }
})

app.put('/back/:id', async (req,res)=>{
    try{
        await BookStore.findByIdAndUpdate(req.params.id, {$inc:{quantity: 1}})
    }catch(err){
        console.log("Calisdi");
    }
})


app.use(express.static(path.join(__dirname, "/client")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


app.listen(process.env.PORT, ()=>{
    console.log('calisdi');
})
