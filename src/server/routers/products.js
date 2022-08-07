const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req ,res){
  Product.find({}, function(err, foundProducts) {
    res.json(foundProducts)
  })
})

router.get('/:productId', function(req ,res){
  const productId = req.params.productId
  Product.findById(productId, function(err, foundProduct) {
    if(err) {
      return res.status(422).send({erros: [{title: 'Product err', detail: 'Product not found!'}]})
    }
    
    return res.json(foundProduct)
  })
})


module.exports = router