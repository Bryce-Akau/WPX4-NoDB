const express = require ('express')
const bodyParder = require ('body-parser')
const controller = require ("./Controller.js")
const PORT = 3008

const app = express()
app.use (bodyParder.json())

app.get('/api/test', (req, res) => {
    res.status (200).json ('get me out its dark in here....shhhhhhhh its coming')
})
app.get('/api/music', controller.getMusic)

// app.post('/api/music/newplaylist')
// app.put('/api/music/update')
// app.delete('/api/music/delete')

app.listen(PORT, () => console.log (`Up the butt charzard ${PORT}`))

