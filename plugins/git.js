const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://github.com/Vk-ser/pathumma/raw/master/pathumma.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝘾𝙍𝙀𝘼𝙏𝙊𝙍 VK SER*
*owner number wa.me/919656840677*

*𝙂𝙄𝙏𝙃𝙐𝘽 𝙇𝙄𝙉𝙆         https://github.com/Vk-ser/pathumma*
*𝘼𝙐𝘿𝙄𝙊 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎    https://github.com/Vk-ser/pathumma/tree/master/uploads*
*𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎  https://github.com/Vk-ser/pathumma/tree/master/sticker*
`}) 

}));
