import converterERetornarURL from '../services/s3Service.js'
import { v4 as uuidv4} from 'uuid';
const qrcodePostController = async (req,res)=>{
    
    try{
        const URL = await converterERetornarURL(req.body.url);
        return res.status(200).json({
            id: uuidv4(),
            url: URL,
            createdAt: new Date().toDateString()

        })
    }
    catch(error){
        res.status(400).json({status:"Falha"});
    }
};

export default qrcodePostController;