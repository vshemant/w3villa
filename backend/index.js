const express = require('express');
const cors = require('cors')
const app = express();
const data = require('./assets/Questions.json')

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
    res.send(data)
})

app.post('/getQuestions', (req,res) => {
    const {level} = req.body ;
    let out = []
    data[level].map(id => {
        out  = [...out,{id, ...data[id]} ] 
    })
    res.json(out);
})

app.post('/getReport' , (req,res) => {
    const sub = req.body ;
    console.log("request came")
    res.render('index.ejs',{ sub , data})

})

app.listen(5000,()=> {
    console.log("Start running")
})