//시작점 

const express = require('express') //express 모듈 가져오고 
const app = express() //function을 이용해서 app 만듦. 
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://candyrandy:sera1002!@boilerplate.sfpol.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('Mongo DB Connected...'))
  .catch(err =>console.log(err))



app.get('/', (req, res) => {
  res.send('안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})