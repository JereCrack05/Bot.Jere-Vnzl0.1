importar  {  webp2png  }  desde  '../lib/webp2mp4.js'

let  handler  =  async  ( m ,  { conn , usedPrefix , command } )  =>  {
    const  notStickerMessage  =  `🧑🏻‍💻️ Responde a un sticker con :\n\n ${ usedPrefix  +  command } `
    if  ( ! m . citado )  lanza  notStickerMessage
    constante  q  =  metro . citado  ||  metro
    sea  ​​mimo  =  q . tipo de medio  ||  ''
    if  ( ! / sticker / . test ( mime ) )  lanza  notStickerMessage
    let  media  =  esperar  q . descargar ( )
    dejar  salir  =  esperar  webp2png ( medios ) . atrapar ( _  =>  nulo )  ||  Amortiguador _ asignar ( 0 )
    esperar  contacto . sendFile ( m . chat ,  out ,  'out.png' ,  '🧑🏻‍💻 tú pedido 🌟' ,  m )
}
manejador _ ayuda  =  [ 'toimg <pegatina>' ]
manejador _ etiquetas  =  [ 'pegatina' ]
manejador _ comando  =  [ 'toimg' ,  'jpg' ,  'aimg' ] 

 controlador predeterminado de  exportación

