const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000


app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json()); //all request will be handled as JSON

app.get('/',(req,res)=>{ //entry route
  try{
  res.status(200).send("type in /greetings in the URL to see the a cool message")
  }catch(err){
    res.status(500).json({message:err.message})
  }
});

app.get('/greetings',(req,res)=>{ //send back a greeting
  try{
    res.status(200).json({greeting: "hello y'all"})
  }catch(err){
    res.status(500).json({message:err.message})
  }
})

app.get('/quotes', async (req,res)=>{ //send back all the quotes in the API's JSON file
   try{
    await res.status(200).json(data)
  }catch(err){
    res.status(500).json({message:err.message})
  }

})

app.post('/quotes', async (req,res)=>{ // make a new note and send it to the JSON file
  try{
    const quote = await {
     id: req.body.id,
     quote: req.body.quote,
     author: req.body.author
   }
   res.status(200).send(quote) //send the quote the user just made back to them to make sure it has been contructed
        }catch(err){
          res.status(500).json({message:err.message})
        }
});

app.get('/quotes/:id',(req,res)=>{ //send back a specific quote based on its id
  try{
    const quote = data.quotes.find(quote => quote.id == req.params.id);
    if (quote){
      res.status(200).json(quote)
    }
    else{
      rest.status(404).json({message: "quote not found"})
    }
  }catch(err){
    res.status(500).json({message:err.message})
  }

})
const data={
  quotes:[
    {
      id: 1234,
      quote: "Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.",
      author: "Barack Obama"
    },
    {
      id: 3473,
      quote: "If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress.",
      author: "Barack Obama"
    },
    {
      id: 8636,
      quote: "Take off your bedroom slippers. Put on your marching shoes,’ he said, his voice rising as applause and cheers mounted. ‘Shake it off. Stop complainin’. Stop grumblin’. Stop cryin’. We are going to press on. We have work to do.",
      author: "Barack Obama"
    }
  ]
}


    app.listen(port, ()=> console.log(`express API listening on port ${port}`))
