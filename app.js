const express=require('express')

const app=express()
const PORT=8080

app.get('/',(req,res)=>{
	res.json('hello world')
})

app.listen(PORT,()=>{
	console.log('app runing on port 8080')
})


