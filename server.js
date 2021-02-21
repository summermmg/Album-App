const express = require('express');
const fs = require('fs')
const fileUpload = require('express-fileupload');
const { v4: uuidv4 } = require('uuid');

const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const data = require('./data.js');


app.use(fileUpload());


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false, parameterLimit: 1000000}));

app.get('/api/samples',(req,res) => {
    res.json(data.samples)
})

app.post('/upload', (req,res) => {
  //if the files array is empty
  if (req.files === null) {
    return res.status(400).json({msg:'No file uploaded!'})
  }

  //file is the name assigned in frontend(object key)
  const file = req.files.file

  //upload to frontend public folder so we can use in frontend   
  file.mv(`${__dirname}/frontend/public/uploads/${file.name}`, 
    err => {
      if (err) {
        console.error(err)
        return res.status(500).send(err)
      } else {

        if (req.body.description !== undefined) {
          const description = req.body.description
          data.uploads.push({
            id:   uuidv4(),
            name: file.name,
            img: `/uploads/${file.name}`,
            description: description,
          })
        } else {
          data.uploads.push({
            id:   uuidv4(),
            name: file.name,
            img: `/uploads/${file.name}`,
            description: '',
          })
        }
       
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
      }
  })

})

app.get('/api/uploads', (req,res) => {
  res.json(data.uploads)
})


app.delete('/api/uploads/:id', (req,res) => {
  const found = data.uploads.find(upload => upload.id === req.params.id)
  const index = data.uploads.indexOf(found)

  data.uploads.splice(index,1)
  
  if (found) {
    try {
      fs.unlinkSync(`${__dirname}/frontend/public${found.img}`)

      res.json({
        msg: `Image with ID: ${req.params.id} deleted`,
        uploads: data.uploads
      })
    } catch(err) {
      console.error(err)
    } 

  } else {
    res.status(400).json({msg: `No member with the id of ${req.params.id}`})
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`));
