import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
const app = express();
app.get('/health', (req,res)=>{
     res.status(200).json({
        status: "Ok"
     })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})