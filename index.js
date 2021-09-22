//LIBRARIES
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const PORT = 8000



//MODELS
const User = require('./model/User')

// MONGODB CONNECTION
const database_url = 'mongodb://localhost:27017/ussd';
mongoose.connect(database_url);
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err)
})
db.once('open', () =>
    console.log('database is running.')
)
  
// BODY PARSER;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Success Message')
})

app.post('/', (req, res) => {
    const { phoneNumber, text, sessionId } = req.body;
    let response;

    if(text==='')
        { console.log('1')
            response = 'CON Welcome to Haraway by Kingsworth Capital Ltd\n Please enter the 15 Digits Haraways CashCard PIN' 
        }
        if (text !== '')
        {  
            let array = text.split('*');
            if(array.length === 1){
            response = 'CON Enter Account Number';
            }
            else if(parseInt(array[1]))
            {
                let data = new user();
                data.PIN = array[0];
                data.account_number = array[1];
                data.account_name = array[2];
                data.save = (()=>{
                    response = 'CON Enter Account Name'
                })       
            }
            else if(parseInt(array[2]))
           {
                 response = 'END CashCard Deposit was Successful'
           }
        }
        setTimeout(() => {console.log(text)
            res.send = (response);
            res.end()
        }, 2000);
})
app.listen(PORT, () => { console.log('app is running on port'+PORT)})