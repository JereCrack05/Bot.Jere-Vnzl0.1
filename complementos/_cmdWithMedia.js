constante  {
    proto ,
    generarWAMessage ,
    areJidsMismoUsuario
}  =  ( esperar  importación ( '@adiwajshing/baileys' ) ) . por defecto

exportar  función asíncrona  todo ( m , chatUpdate ) {   
    si  ( m . isBaileys )  regresa
    si  ( ! m . mensaje )  regresa
    si  ( ! m . msg . fileSha256 )  regresa
    if  ( ! ( Buffer . from ( m . msg . fileSha256 ) . toString ( 'base64' )  in  global . db . data . sticker ) )  return

    let  hash  =  global . base de datos datos _ pegatina [ Búfer . de ( m . msg . fileSha256 ) . toString ( 'base64' ) ]
    let  { texto , mencionadoJid }  =  hash
    dejar  mensajes  =  esperar  generarWAMessage ( m . chat ,  {  texto : texto ,  menciones : mencionadoJid  } ,  {
        userJid : esto . usuario _ identificación ,
        citado : m . citado  &&  m . citado _ falsoObj
    } )
    mensajes _ clave _ fromMe  =  areJidsSameUser ( m . sender ,  this . user . id )
    mensajes _ clave _ identificación  =  m . clave _ identificación
    mensajes _ empujarNombre  =  m . empujarNombre
    if  ( m . isGroup )  mensajes . participante  =  m . remitente
    dejar  mensaje  =  {
        ... actualización de chat ,
        mensajes : [ proto . WebMessageInfo . fromObject ( mensajes ) ] ,
        tipo : 'añadir'
    }
    esto _ ev . emitir ( 'mensajes.upsert' ,  mensaje )
}
Pie de página
© 2023 GitHub, Inc.
Pie de página de navegación
Términos
Privacidad
Seguridad
Estado
Documentos
