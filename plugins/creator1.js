let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let tag = `@${m.sender.split('@')[0]}`
 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ðððµð¶ ðð¼ðâ¸;;;\nFN:ðððµð¶ ðð¼ð\nORG:ðððµð¶ ðð¼ð\nTITLE:\nitem1.TEL;waid=6289688206739:+6289688206739\nitem1.X-ABLabel:ðððµð¶ ðð¼ðâ¸\nX-WA-BIZ-DESCRIPTION:${htjava} Tá´á´ á´á´É´á´ÊÉªá´á´ sá´á´ á´ á´á´É´á´á´á´!!\nX-WA-BIZ-NAME:ðððµð¶ ðð¼ðâ¸\nEND:VCARD`
//------- NOMOR
 const pp = fs.readFileSync('./media/menu.jpg')
  let nowner1 = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${nomorown1.split`@`[0]}@s.whatsapp.net`
let teksnomor = (
`â³ ââ â¸ *MÊ Oá´¡É´á´Ê* â¹ ââ â³
â£â® *${nameown}* â¯â¢
â¬ @${nomorown.split`@`[0]} â­
â
â£â® *${nameown1}* â¯â¢
â¬ @${nomorown1.split`@`[0]} â­
â`
)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `
ââ«¹â«º ð Nama : FaelfFilaa
ââ«¹â«º âï¸ Gender : Perempuan 
ââ«¹â«º ð Agama : Islam
ââ«¹â«º â° Tanggal lahir : Private
ââ«¹â«º ð¨ Umur : Private
ââ«¹â«º ð§® Kelas : XII
ââ«¹â«º ð§© Hobby : Ngegame sakura simulator 
ââ«¹â«º ð¬ Sifat : ASIK,BAIK,
ââ«¹â«º ðºï¸ Tinggal : Indonesia, Bogor
ââ«¹â«º ${sig}
âââââââââââââÂ·â¢
`
let ppown2 = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `ââ«¹â«º ð Nama : Nek Lampir
ââ«¹â«º âï¸ Gender : Wanita
ââ«¹â«º ð Agama : Islam
ââ«¹â«º â° Tanggal lahir : Private
ââ«¹â«º ð¨ Umur : Private
ââ«¹â«º ð§® Kelas : Gak sklh
ââ«¹â«º ð§© Hobby : Banyak
ââ«¹â«º ð¬ Sifat : ASIK,Jahat,RAMAH
ââ«¹â«º ðºï¸ Tinggal : Indonesia, Jonggol
ââ«¹â«º ${sigpcr}
âââââââââââââÂ·â¢
`
  let tek = `â£âââ ã¨â£ *Ná´á´á´* â¤ã¨ ââââ¢
â
ð Owner Tidak Respon Chat Aneh
ð Owner Berhak Blcok Siapa Saja
ð Gak Respon Kalo Minta Sc
ð Etikanya DiPake
ð Chat Cewek Gw Aneh-Aneh Gw Buat Tidur LU
ð Chat Aneh Gk Jelas Ban/Block 
ð Call Blcok\nâ«¹ Ketik *.rules* Untuk Melihat Rules Selengkapnyaâ«º`
const sections = 
[{
title: `â«¹â«º OTHER â«¹â«º`,
rows: [
{title: "â¸ Kontak", rowId: ".owner kontak"},
{title: "â¸ Nomor", rowId: ".owner nomor"},
{title: "â¸ Biodata Vinss", rowId: ".owner bio"},
{title: "â¸ Biodata Nek Lampir", rowId: ".owner bio2"},
{title: "â¸ Pengembang", rowId: ".Vinss"},
{title: "â¸ Creator", rowId: ".Vinss1"},
{title: "â¸ Script", rowId: ".sc"},
]}, {
title: `â¬ SUPPORT ME â¬`,
rows: [
{title: "ã  Donasi", rowId: ".owner nomor"},
{title: "ã  Sewa", rowId: ".sewa"},
{title: "ã  Buy Premium", rowId: ".premium"},
]},]
const listMessage = {
  text: tek,
  footer: wm,
  title: null,
  buttonText: "Click !!",
  sections
}
  try {
    if (/(creator|owner|pengembang)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {


        case 'kontak': 
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
        break
          case 'nomor':
         /* conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nomorown] }})*/
 /*  conn.sendButton(m.chat, teksnomor, null, pp, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m, { contextInfo: { mentionedJid: [nomorown] }})*/
 conn.send2ButtonImg(m.chat, fs.readFileSync('./media/menu.jpg').buffer, teksnomor, `Halo ${tag}\nIá´á´ Oá´¡É´á´Ê Ká´â«ºâ«°â«¹\n` + botdate, `Sewa Bot`, `.sewa`, 'Menu', `.menu`, ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/faelfilaa',
    mediaType: 2, 
    description: sgc,
    title: "Join Sini Juga Cuy!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "ð· Instagram", nomorown, 'ð¹ Nomor', [[null, null], [null, null],[null,null]], m)

   conn.sendButton(m.chat, 'ââà¼º *BioData Xyna* à¼»', teksbio, ppown, [
                ['Sewa', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
                        case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "ð· Instagram", nomorown, 'ð¹ Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, 'ââà¼º *BioData Nek Lampir* à¼»', teksbio2, ppown2, [
                ['Sewa', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
           return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`â®â° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|pengembang|creator)$/i
export default handler