const express = require('express');
const {createNote} = require('./types');
const {note} = require('./db');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());


app.post('/note', async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createNote.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid Inputs"
        })
        return;
    }

    await note.create({
        title: createPayload.title,
        description: createPayload.description
    })

    res.json({
        msg: "Note Created!"
    })
})

app.get('/notes', async function(req,res){
    const notes = await note.find({})
    res.json({
        notes
    })
})

app.listen(3000)
