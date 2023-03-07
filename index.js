const express = require ('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

app.get(`{api}/products`, (req, res) =>{
    const product = {
        id: 1,
        name: "shoe cleaner",
        image: 'https://i.postimg.cc/X7zn3yZb/Ev-Z67fz-XMAAz-TLB.jpg'
    }
    res.send(product);
})

app.listen(3002, ()=>{
    console.log('server is running at http://localhost:3002');
})

