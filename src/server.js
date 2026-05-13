import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import qrcodeRouter from './routes/qrcodeRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/health', (req,res)=>{
     res.status(200).json({
        status: "Ok"
     })
})

app.use('/api', qrcodeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})

export default app;