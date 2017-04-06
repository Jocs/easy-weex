/**
 * create by Jocs 2017-04-05
 */
import express from 'express'
import fs from 'fs'

const app = express()

app.get('/api/lists', (req, res) => {
	fs.readFile('./api.json', 'utf-8', (err, data) => {
		res.json(data)
	})
	
})
app.use(express.static(__dirname))
app.listen(3000, () => {
	console.log('app server at localhost:3000')
})