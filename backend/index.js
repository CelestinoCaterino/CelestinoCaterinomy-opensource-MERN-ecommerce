import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './db.js'
import productRoutes from './routes/products.js'

dotenv.config()
connectDb()
const PORT=process.env.PORT || 500;
const app=express()
app.use(cors())
app.get('/',(req,res)=>{
    res.json('Api running')
});
app.use('/api/products',productRoutes)
app.listen(PORT, console.log('Server running...'))