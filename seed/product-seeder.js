var Product = require('../models/product');
var mongoose = require('mongoose');
const { exists } = require('../models/product');

let url = "mongodb://localhost:27017/shop";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.createConnection(url, { useNewUrlParser: true });

var products = [
    new Product({
        imagePath:'images/p1.png',
        title: 'pomidor',
        description: 'gowy',
        price: 10
    }),
    new Product({
        imagePath:'images/p2.png',
        title: 'badamjan',
        description: 'gowy',
        price: 10
    }),
    new Product({
        imagePath:'images/p3.png',
        title: 'kadi',
        description: 'gowy',
        price: 10
    }),
    new Product({
        imagePath:'images/p4.png',
        title: 'kartoska',
        description: 'gowy',
        price: 10
    }),
    new Product({
        imagePath:'images/p5.png',
        title: 'burc',
        description: 'gowy',
        price: 10
    }),
    new Product({
        imagePath:'images/p6.png',
        title: 'kelem',
        description: 'gowy',
        price: 10
    }),
    new Product({
        imagePath:'images/p7.png',
        title: 'taze kelem',
        description: 'gowy',
        price: 10
    }),
    new Product({
        imagePath:'images/p8.png',
        title: 'rediska',
        description: 'gowy',
        price: 10
    }),
    new Product({
        imagePath:'images/p9.png',
        title: 'kabacki',
        description: 'gowy',
        price: 10
    })
]

var done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save((err, result)=>{
        done++;
        if (done=== products.length) {
            exit();
        }
    });
    function exit() {
        mongoose.disconnect();
    }
}

