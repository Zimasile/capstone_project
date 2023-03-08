const express = require ('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

app.get(`{api}/theshoeclinic`, (req, res) =>{
    const product = {
        id: 1,
        name: "shoe cleaner",
        image: 'http://image.jpg'
    }
    res.send(product);
})

app.listen(3002, ()=>{
    console.log('server is running at http://localhost:3002');
})


