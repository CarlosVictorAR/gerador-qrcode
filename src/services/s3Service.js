import { PutObjectCommand } from '@aws-sdk/client-s3';
import client from '../config/aws.js';
import converter from './qrcodeService.js'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';
dotenv.config();

const filename = uuidv4();

const converterERetornarURL = async (URL)=>{
    try{
        const buffer = await converter(URL);
        const data = await client.send(new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${filename}.png`,
            Body: buffer,
            ContentType: 'image/png'
        }));
        return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}.png`

    }
    catch(error){
        console.error(error);
    }
}

export default converterERetornarURL;