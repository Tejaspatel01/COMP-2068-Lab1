//Names: Tejaskumar Patel, Priyankkumar Patel, Samarth Patel, Meghna Meghna 

//declaring variable that require exprees package 
const express = require('express');

//a variable that that initates express
const app = express();

//our home page of our app that shows contents detailing your routes
app.get('/', (req, res) => {
    res.send(`This show the all files of Lab.`);
});

//this is a about page that shows our group details 
app.get('/about', (req, res) => {
    res.send(`Our group member name is Tejaskumar Patel,Samarth Patel,Priyak Patel,Meghna Meghna. We All are from india.`);
});

//this contact page of our app that inform ways to contact us 
app.get('/contact', (req, res) => {
    res.send(`You can contact us by our student email or slack.`);
});

app.listen(880, () =>  console.log('Listining on port 880'));