import qrcode from 'qrcode';

const converter = async (URL)=>{
    return await qrcode.toBuffer(URL);
}

export default converter;