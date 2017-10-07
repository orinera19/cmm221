const express = require('express')
const { twig } = require('twig') //include twig

const app = express()

app.set('view engine', 'twig') //จะใช้view engine ที่ชื่อว่าtwig

const homeController = require('./controllers/home.controller')/*จุด1ตัวหมายถึงอยู่ที่โฟลเดอร์นั้น*/
const newsController = require('./controllers/news.controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)

// app.get('/', function(req, res){
// 	res.send('Hello')
// })

// app.get('/home', function(req, res){
// 	res.send('Home')/*ดีไซน์แพทเทิร์นคือเอาไว้บอกว่า ถ้าเอ็นอันนี้จะทำแบบนี้ฯลฯ มีหลายแบบขึ้นอยู่กับการใช้งาน mvc ใช้มากสุด*/
// })

app.use('/assets', express.static(__dirname + '/static/assets', { //เวลาเรียกไฟล์จะได้หาเจอ
	maxAge: 86400000 //เก็บได้นานเท่าไร หน่วยเป็นms หลังจาก1อาทิตย์อะไรสักอย่างจะหาย(?)
}))

app.listen(8000, function(err){
	console.log('Server is running on port 8000')
})