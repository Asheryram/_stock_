import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json('Product Backend up and running');
});

app.listen(4000, ()=>{
    console.log("Server Running")
})