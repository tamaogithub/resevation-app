const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const SampleDb = require('./sample-db')

const productRouters = require('./routers/products')
const path = require('path')

mongoose.connect(config.DB_URI).then(
  () => {
    if(process.env.NODE_ENV !== 'prodction') {
      const sampleDb = new SampleDb()
      //dev環境でDBの初期化が必要になったときだけコメントアウトする
      sampleDb.initDb()
    }
  }
)

const app = express()

app.use('/api/v1/products',productRouters)

if(process.env.NODE_ENV === 'prodction') {
  const appPath = path.join( __dirname, '..', 'dist' , 'resevation-app')
  app.use(express.static(appPath))
  app.get("*", function(req, res){
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}



// app.get('/products', function(req, res) {
//   res.json({'success': true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
  console.log('I am running!')
})