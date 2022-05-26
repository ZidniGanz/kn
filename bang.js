
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const yts = require( 'yt-search')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
const hxz = require('./lib/hxz')
const { color, bgcolor } = require('./lib/color')
let xfar = require('./lib/xfarr-api')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const uploadFile = require('./lib/uploadFile')
const uploadImage = require('./lib/uploadImage')
const imageToBase64 = require('image-to-base64')

const bent = require('bent')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, userXp,getGroupAdmins, msToDate,userLeveling,formatp,calender, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const _family100 = db.data.game.family100 = []
const tebakgambar = db.data.game.tebakgambar = []
const tebakkata = db.data.game.tebakkata = []
const tebakbendera = db.data.game.tebakbendera = []
const siapaaku = db.data.game.siapaaku = []
const tebakkalimat = db.data.game.tebakkalimat = []
const caklontong = db.data.game.caklontong = []
const susunkata = db.data.game.susunkata = []
const tekateki = db.data.game.tekateki = []
const tebakkabupaten = db.data.game.tebakkabupaten = []
const tebakkimia = db.data.game.tebakkimia = []
const tebaklirik = db.data.game.tebaklirik = []
const tebaktebakan = db.data.game.tebaktebakan = []
module.exports = zidni = async (zidni, m, chatUpdate, store) => {
    try {
             var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const name = m.pushName || "No Name"
        const botNumber = await zidni.decodeJid(zidni.user.id)
        const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const from = mek.key.remoteJid	
        hit_today.push(command)		
	
        // Group
                   const groupMetadata = m.isGroup ? await zidni.groupMetadata(from) : ''
        const groupId = m.isGroup ? groupMetadata.id : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const groupMembers = m.isGroup ? await groupMetadata.participants : ''
       	const isPremium = isOwner || global.premi.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
         	const buttonsDefault = [{ urlButton: { displayText: `Whatsapp`, url : `https://wa.me/6281215205433` } },]
		const pickRandom = (arr) => {return arr[Math.floor(Math.random() * arr.length)]}
		const randomNomor = (angka) => {
        return Math.floor(Math.random() * angka) + 1}
        	const math = (teks) => {
            return Math.floor(teks)}  
     	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
              let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
          let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                  if (!isNumber(user.limit)) user.limit = limitUser
                   if (!isNumber(user.level)) user.level = 1
                   if (!isNumber(user.xp)) user.xp = 0
                   if (!isNumber(user.balance)) user.balance = 0
                   if (!isNumber(user.anak)) user.anak = 0
                   if (!isNumber(user.lastclaim)) user.lastclaim = 0
                   if (!isNumber(user.lastngewe)) user.lastngewe = 0
                     if (!isNumber(user.lastadventure)) user.lastadventure = 0
                      if (!isNumber(user.chat)) user.chat = 0
                        if (!isNumber(user.command)) user.command = ''
                        if (!('registered' in user)) user.registered = false
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.pushName
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                if (!isNumber(user.nama)) user.nama = ''
             if (!isNumber(user.healt)) user.healt = 0
            if (!isNumber(user.diamond)) user.diamond = 0
            if (!isNumber(user.common)) user.common = 0
            if (!isNumber(user.uncommon)) user.uncommon = 0
            if (!isNumber(user.mythic)) user.mythic = 0
            if (!isNumber(user.legendary)) user.legendary = 0
            if (!isNumber(user.potion)) user.potion = 0
            if (!isNumber(user.sampah)) user.sampah = 0
            if (!isNumber(user.armor)) user.armor = 0
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                level: 1,
                xp: 0,                            
                balance: 0,
                anak: 0,
                limit: limitUser,
                lastclaim: 0,   
                lastadventure: 0,
                lastngewe: 0, 
                chat: 0,
                command: '',
                  registered: false,
                    name: m.pushName,
                    age: -1,
                    regTime: -1,
                    nama: '',
                healt: 100,
            diamond: 0,         
            common: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            potion: 0,
            sampah: 0,
            armor: 0,
            }
              let chat = global.db.data.chats[m.chat]
      
               if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
  
                     if (chat) {
                      if (!isNumber(chat.command)) chat.command = ''
                      } else global.db.data.chats[m.chat] = {
                      command: '',
                      }
        } catch (err) {
            console.error(err)
        }
	               if(autorecording){
	if(autorecording== false) return
	await zidni.sendPresenceUpdate('recording', m.chat)
	} else if(autoketik){
		if(autoketik == false) return
		await zidni.sendPresenceUpdate('composing', m.chat)
		} else if(available){
			if(available == false) return
			zidni.sendPresenceUpdate('available', m.chat)
			}
			const sen = (teks) => {
            zidni.sendMessage(`${owner}@s.whatsapp.net`, {text: teks})}
            var _0x282f5d=_0x35b3;(function(_0x480bd7,_0x22b167){var _0x144b8b=_0x35b3,_0x328513=_0x480bd7();while(!![]){try{var _0x302424=-parseInt(_0x144b8b(0x11a))/0x1+-parseInt(_0x144b8b(0x115))/0x2+parseInt(_0x144b8b(0xfa))/0x3*(parseInt(_0x144b8b(0x10d))/0x4)+-parseInt(_0x144b8b(0x11c))/0x5+parseInt(_0x144b8b(0x107))/0x6*(-parseInt(_0x144b8b(0x10c))/0x7)+parseInt(_0x144b8b(0x104))/0x8+-parseInt(_0x144b8b(0x10f))/0x9*(-parseInt(_0x144b8b(0x109))/0xa);if(_0x302424===_0x22b167)break;else _0x328513['push'](_0x328513['shift']());}catch(_0x35c7c5){_0x328513['push'](_0x328513['shift']());}}}(_0x5810,0x53653));if(_0x282f5d(0xf2)+m[_0x282f5d(0xe8)]in _family100&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db['data']['users'][sender]['balance']+=g,db['data'][_0x282f5d(0xed)][sender][_0x282f5d(0xeb)]+=h,kuis=!![];let room=_family100['family100'+m[_0x282f5d(0xe8)]],teks=budy[_0x282f5d(0x106)]()['replace'](/[^\w\s\-]+/,''),isSurender=/^((me)?nyerah|surr?ender)$/i['test'](m[_0x282f5d(0xea)]);if(!isSurender){let index=room['jawaban'][_0x282f5d(0xe0)](_0xbc2443=>_0xbc2443[_0x282f5d(0x106)]()[_0x282f5d(0x117)](/[^\w\s\-]+/,'')===teks);if(room['terjawab'][index])return!0x0;room[_0x282f5d(0xe5)][index]=m['sender'];}let isWin=room[_0x282f5d(0xe5)][_0x282f5d(0x112)]===room[_0x282f5d(0xe5)][_0x282f5d(0xe6)](_0xd16150=>_0xd16150)[_0x282f5d(0x112)],caption=(_0x282f5d(0x10a)+room['soal']+'\x0a\x0a\x0aTerdapat\x20'+room[_0x282f5d(0xf7)][_0x282f5d(0x112)]+_0x282f5d(0xf1)+(room['jawaban'][_0x282f5d(0x100)](_0x10b797=>_0x10b797[_0x282f5d(0x103)]('\x20'))?_0x282f5d(0xe3):'')+'\x0a'+(isWin?'Semua\x20Jawaban\x20Terjawab':isSurender?_0x282f5d(0x110):'')+'\x0a'+Array[_0x282f5d(0x11b)](room[_0x282f5d(0xf7)],(_0x2d4ea2,_0x3c46bd)=>{var _0x4774ec=_0x282f5d;return isSurender||room[_0x4774ec(0xe5)][_0x3c46bd]?('('+(_0x3c46bd+0x1)+')\x20'+_0x2d4ea2+'\x20'+(room[_0x4774ec(0xe5)][_0x3c46bd]?'@'+room[_0x4774ec(0xe5)][_0x3c46bd]['split']('@')[0x0]:''))[_0x4774ec(0xf5)]():![];})['filter'](_0x38a938=>_0x38a938)[_0x282f5d(0xe2)]('\x0a')+'\x0a'+(isSurender?'':''))[_0x282f5d(0xf5)]();zidni[_0x282f5d(0xec)](m[_0x282f5d(0xe8)],caption,m,{'contextInfo':{'mentionedJid':parseMention(caption)}})['then'](_0x109832=>{var _0x3a4c76=_0x282f5d;return _family100[_0x3a4c76(0xf2)+m[_0x3a4c76(0xe8)]][_0x3a4c76(0x11d)]=mesg;})['catch'](_0x1c72e2=>_0x1c72e2);if(isWin||isSurender)delete _family100['family100'+m[_0x282f5d(0xe8)]];}if(tebakgambar[_0x282f5d(0x118)](m['sender'][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender]['balance']+=g,db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=tebakgambar[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni[_0x282f5d(0x105)](m['chat'],[{'buttonId':'tebakgambar','buttonText':{'displayText':_0x282f5d(0x111)},'type':0x1}],'Selamat\x20Jawaban\x20Kamu\x20Benar\x20🎉\x0a\x0aKamu\x20Mendapatkan\x0a🎁\x20Limit\x20:\x20'+h+_0x282f5d(0xfb)+g+_0x282f5d(0x119),'',m),delete tebakgambar[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];else m['reply'](_0x282f5d(0x102));}if(tebakkata[_0x282f5d(0x118)](m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender][_0x282f5d(0x10b)]+=g,db[_0x282f5d(0xf3)]['users'][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=tebakkata[m[_0x282f5d(0x116)]['split']('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni['sendButtonText'](m['chat'],[{'buttonId':'tebakkata','buttonText':{'displayText':'Tebak\x20Kata'},'type':0x1}],_0x282f5d(0xe4)+h+_0x282f5d(0xfb)+g+_0x282f5d(0x119),'',m),delete tebakkata[m[_0x282f5d(0x116)]['split']('@')[0x0]];else m[_0x282f5d(0xe1)](_0x282f5d(0x102));}if(tebakbendera[_0x282f5d(0x118)](m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender][_0x282f5d(0x10b)]+=g,db['data'][_0x282f5d(0xed)][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=tebakbendera[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni[_0x282f5d(0x105)](m[_0x282f5d(0xe8)],[{'buttonId':_0x282f5d(0xf4),'buttonText':{'displayText':'Tebak\x20Bendera'},'type':0x1}],_0x282f5d(0xe4)+h+_0x282f5d(0xfb)+g+_0x282f5d(0x119),'',m),delete tebakbendera[sender['split']('@')[0x0]];else m[_0x282f5d(0xe1)]('*Jawaban\x20Salah!*');}function _0x5810(){var _0x55b7c9=['toLowerCase','324PevgLz','Tebak\x20Kabupaten','860LiCOXL','\x0aJawablah\x20Pertanyaan\x20Berikut\x20:\x0a','balance','47131ZcUqBl','100uHDUrT','tekateki','59877ZxzZZs','Menyerah!','Tebak\x20Gambar','length','tebaksiapa','tebakkalimat','426430VCsRvv','sender','replace','hasOwnProperty','\x0a\x0aIngin\x20bermain\x20lagi?\x20tekan\x20button\x20dibawah','170476RbXxYe','from','1547175alBOQh','pesan','findIndex','reply','join','(beberapa\x20Jawaban\x20Terdapat\x20Spasi)','Selamat\x20Jawaban\x20Kamu\x20Benar\x20🎉\x0a\x0aKamu\x20Mendapatkan\x0a🎁\x20Limit\x20:\x20','terjawab','filter','susunkata','chat','tebaktebakan','text','limit','sendText','users','Teka\x20Teki','Tebak\x20Tebakan','Cak\x20Lontong','\x20Jawaban\x20','family100','data','tebakbendera','trim','tebakkimia','jawaban','split','Susun\x20Kata','64749PodedQ','\x0a💰Money\x20:\x20','tebakkabupaten','tebaklirik','Tebak\x20Kimia','caklontong','find','Tebak\x20Siapa','*Jawaban\x20Salah!*','includes','2292496wyHAdw','sendButtonText'];_0x5810=function(){return _0x55b7c9;};return _0x5810();}if(caklontong[_0x282f5d(0x118)](m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db['data'][_0x282f5d(0xed)][sender]['balance']+=g,db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=caklontong[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni[_0x282f5d(0x105)](m[_0x282f5d(0xe8)],[{'buttonId':_0x282f5d(0xff),'buttonText':{'displayText':_0x282f5d(0xf0)},'type':0x1}],_0x282f5d(0xe4)+h+'\x0a💰Money\x20:\x20'+g+'\x0a\x0aIngin\x20bermain\x20lagi?\x20tekan\x20button\x20dibawah','',m),delete caklontong[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];else m[_0x282f5d(0xe1)](_0x282f5d(0x102));}if(susunkata[_0x282f5d(0x118)](m[_0x282f5d(0x116)]['split']('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db[_0x282f5d(0xf3)]['users'][sender][_0x282f5d(0x10b)]+=g,db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=susunkata[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni[_0x282f5d(0x105)](m[_0x282f5d(0xe8)],[{'buttonId':_0x282f5d(0xe7),'buttonText':{'displayText':_0x282f5d(0xf9)},'type':0x1}],'Selamat\x20Jawaban\x20Kamu\x20Benar\x20🎉\x0a\x0aKamu\x20Mendapatkan\x0a🎁\x20Limit\x20:\x20'+h+_0x282f5d(0xfb)+g+_0x282f5d(0x119),'',m),delete susunkata[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];else m[_0x282f5d(0xe1)](_0x282f5d(0x102));}function _0x35b3(_0x3397f9,_0x551017){var _0x581082=_0x5810();return _0x35b3=function(_0x35b362,_0x38d9b4){_0x35b362=_0x35b362-0xe0;var _0x4ea201=_0x581082[_0x35b362];return _0x4ea201;},_0x35b3(_0x3397f9,_0x551017);}if(tebakkalimat[_0x282f5d(0x118)](m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db[_0x282f5d(0xf3)]['users'][sender][_0x282f5d(0x10b)]+=g,db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=tebakkalimat[m['sender']['split']('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni['sendButtonText'](m['chat'],[{'buttonId':_0x282f5d(0x114),'buttonText':{'displayText':'Tebak\x20Kalimat'},'type':0x1}],_0x282f5d(0xe4)+h+_0x282f5d(0xfb)+g+_0x282f5d(0x119),'',m),delete tebakkalimat[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];else m['reply'](_0x282f5d(0x102));}if(siapaaku[_0x282f5d(0x118)](m[_0x282f5d(0x116)]['split']('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db['data'][_0x282f5d(0xed)][sender][_0x282f5d(0x10b)]+=g,db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=siapaaku[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];if(budy['toLowerCase']()==jawaban)await zidni[_0x282f5d(0x105)](m[_0x282f5d(0xe8)],[{'buttonId':_0x282f5d(0x113),'buttonText':{'displayText':_0x282f5d(0x101)},'type':0x1}],'Selamat\x20Jawaban\x20Kamu\x20Benar\x20🎉\x0a\x0aKamu\x20Mendapatkan\x0a🎁\x20Limit\x20:\x20'+h+'\x0a💰Money\x20:\x20'+g+'\x0a\x0aIngin\x20bermain\x20lagi?\x20tekan\x20button\x20dibawah','',m),delete siapaaku[m['sender']['split']('@')[0x0]];else m[_0x282f5d(0xe1)](_0x282f5d(0x102));}if(tekateki['hasOwnProperty'](m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender]['balance']+=g,db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender]['limit']+=h,kuis=!![],jawaban=tekateki[m[_0x282f5d(0x116)]['split']('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni[_0x282f5d(0x105)](m[_0x282f5d(0xe8)],[{'buttonId':_0x282f5d(0x10e),'buttonText':{'displayText':_0x282f5d(0xee)},'type':0x1}],'Selamat\x20Jawaban\x20Kamu\x20Benar\x20🎉\x0a\x0aKamu\x20Mendapatkan\x0a🎁\x20Limit\x20:\x20'+h+_0x282f5d(0xfb)+g+_0x282f5d(0x119),'',m),delete tekateki[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];else m['reply']('*Jawaban\x20Salah!*');}if(tebakkabupaten[_0x282f5d(0x118)](m['sender'][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender][_0x282f5d(0x10b)]+=g,db[_0x282f5d(0xf3)]['users'][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=tebakkabupaten[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni[_0x282f5d(0x105)](m[_0x282f5d(0xe8)],[{'buttonId':_0x282f5d(0xfc),'buttonText':{'displayText':_0x282f5d(0x108)},'type':0x1}],_0x282f5d(0xe4)+h+_0x282f5d(0xfb)+g+'\x0a\x0aIngin\x20bermain\x20lagi?\x20tekan\x20button\x20dibawah','',m),delete tebakkabupaten[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];else m[_0x282f5d(0xe1)]('*Jawaban\x20Salah!*');}if(tebakkimia[_0x282f5d(0x118)](m['sender'][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db[_0x282f5d(0xf3)][_0x282f5d(0xed)][sender][_0x282f5d(0x10b)]+=g,db['data'][_0x282f5d(0xed)][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=tebakkimia[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni[_0x282f5d(0x105)](m['chat'],[{'buttonId':_0x282f5d(0xf6),'buttonText':{'displayText':_0x282f5d(0xfe)},'type':0x1}],_0x282f5d(0xe4)+h+_0x282f5d(0xfb)+g+'\x0a\x0aIngin\x20bermain\x20lagi?\x20tekan\x20button\x20dibawah','',m),delete tebakkimia[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];else m['reply'](_0x282f5d(0x102));}if(tebaklirik[_0x282f5d(0x118)](m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db[_0x282f5d(0xf3)]['users'][sender]['balance']+=g,db[_0x282f5d(0xf3)]['users'][sender][_0x282f5d(0xeb)]+=h,kuis=!![],jawaban=tebaklirik[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni[_0x282f5d(0x105)](m[_0x282f5d(0xe8)],[{'buttonId':_0x282f5d(0xfd),'buttonText':{'displayText':'Tebak\x20Lirik'},'type':0x1}],_0x282f5d(0xe4)+h+_0x282f5d(0xfb)+g+_0x282f5d(0x119),'',m),delete tebaklirik[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];else m[_0x282f5d(0xe1)](_0x282f5d(0x102));}if(tebaktebakan['hasOwnProperty'](m['sender'][_0x282f5d(0xf8)]('@')[0x0])&&isCmd){var g=randomNomor(0x1f4),h=randomNomor(0xa);db['data'][_0x282f5d(0xed)][sender][_0x282f5d(0x10b)]+=g,db['data']['users'][sender]['limit']+=h,kuis=!![],jawaban=tebaktebakan[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];if(budy[_0x282f5d(0x106)]()==jawaban)await zidni[_0x282f5d(0x105)](m['chat'],[{'buttonId':_0x282f5d(0xe9),'buttonText':{'displayText':_0x282f5d(0xef)},'type':0x1}],'Selamat\x20Jawaban\x20Kamu\x20Benar\x20🎉\x0a\x0aKamu\x20Mendapatkan\x0a🎁\x20Limit\x20:\x20'+h+_0x282f5d(0xfb)+g+_0x282f5d(0x119),'',m),delete tebaktebakan[m[_0x282f5d(0x116)][_0x282f5d(0xf8)]('@')[0x0]];else m[_0x282f5d(0xe1)](_0x282f5d(0x102));}
  const userLevel = db.data.users[m.sender].level
  const userExp = db.data.users[m.sender].xp  
  const amountExp = Math.floor(Math.random() * 10) + 50
  const requiredExp = 1000 * userLevel
  const userPersen = userExp/requiredExp*100
   try {
if (autoLevel){
db.data.users[m.sender].xp += amountExp
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
db.data.users[m.sender].level += 1
db.data.users[m.sender].xp -= userExp
anune =`${userLevel}00`
susu = randomNomor(math(anune))
db.data.users[m.sender].balance += susu
  levelnih = userLevel + 1
                    const levelni = levelnih - 1
         reply(`Selamat, anda telah naik level!\n*${levelni}* -> *${levelnih}*\ngunakan *.profile* untuk mengecek`) 
          }
} catch (err) {
console.error(err)
}

				   		   if (isCmd) {
				   anune =`${userLevel}00`
susu = randomNomor(math(anune))
db.data.users[m.sender].balance += susu
}
    // Public & Self
        if (!zidni.public) {
            if (!m.key.fromMe) return
        }
        // Reply
          let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"})
        // Push Message To Console && Auto Read
     	if (!m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}
		//OTHER
		badword = ["anjing","memek","kontol","bangsat","goblok","tolol","peler","pler","ajg","asw","asu","gblk","mmk","bgst","bngst"]
	    salam = ["assalamualaikum","assalamu'alaikum"]
	    humor = ["wkwkwk","wkwk","haha","awokawok","awok"]
	// AUTO

    	if (!m.key.fromMe && badword.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://d.top4top.io/m_2248jzsk00.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
		}
	if (!m.key.fromMe && salam.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://f.top4top.io/m_22521bnrt0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
		}		
	if (!m.key.fromMe && humor.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://j.top4top.io/m_2252nduc70.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
		}	
	 if (m.isGroup && !m.key.fromMe  && !isOwner && !isGroupAdmins && !isGroupOwner){
        	if (budy.match(`https://chat.whatsapp.com`)) {
        	zidni.sendMessage(m.chat, {text: `*Link Group Terdeteksi*\n\nKamu akan dikick dari group ini`}, {quoted:m})
        	setTimeout( () => {
 zidni.groupParticipantsUpdate(m.chat, [sender], 'remove') }, 4000) 			
		}
	}
	
	
    
     if (!m.key.fromMe && !m.isGroup && !/webp/.test(mime) && /image/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
     	zidni.sendImageAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })}     
     	if (!m.key.fromMe && !m.isGroup && !/webp/.test(mime) && /video/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
     	zidni.sendVideoAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })}     
     	  	
if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : wa.me/${sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
        💫 *MessageType* : ${m.mtype}`
			reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {readViewOnce: true}, {
				quoted: mek
			}).catch(_ => reply('Mungkin dah pernah dibuka bot'))
		}
		var bod = m.body.split(" ");
				var link = bod.find(
					(a) =>
						a.includes("tiktok.com") ||
						a.includes("facebook.com") ||
						a.includes("github.com") ||
						a.includes("youtu.be") ||
						a.includes("soundcloud.com"));
					if (budy.match(`youtu.be`)){
				reply(mess.wait)
				if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
				const { y2mateA, y2mateV } = require('./lib/y2/y2mate4')
    let res = await y2mateV(link).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')})
             let buttons = [{buttonId: `ytmp33 ${link}`, buttonText: {displayText: 'Audio'}, type: 1} ]
                let buttonMessage = {video: { url: res[0].link },caption: `Auto Download YouTube`,footer: res[0].judul,buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}
   if (budy.match(`tiktok.com/`)){
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
 reply(mess.wait)
 	   zidni.sendMessage(m.chat, {video: { url: `https://api.akuari.my.id/downloader/tiktoknowm?link=${link}` },
                    caption: 'Auto Download Tiktok No Watermark',
                    footer: `${pushname}`}, { quoted: m })}
        	if (budy.match(`facebook.com`)){
		 reply(mess.wait)
		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
let xfar = require('./lib/xfarr-api')
    let res = await xfar.Facebook(command)
zidni.sendFile(m.chat,res.medias[1].url, 'fb.mp4', `Tittle: ${res.tittle}
Link Video: ${res.url}`, m)}
			if (budy.match(`http://www.icocofun.com/share/post`)) {
		reply(mess.wait)
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
       let waw = await fetchJson(`https://zenzapis.xyz/downloader/cocofun?apikey=286af65979&url=${command}`) 	
			   let p = waw.result
			   let qp = await getBuffer(p.url)
			   await zidni.sendMessage(m.chat, {video: qp, caption: waw.result.title},{ quoted: m })					 				  }
	if (/^.*github/i.test(m.text)) {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
	reply(mess.wait)
	let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = command.match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
  zidni.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m })}
			  if (/^.*instagram.com\/(reel|tv)/i.test(m.text)) {
			 m.repy(mess.wait)
			 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
const { igdl } = require('./lib/scrape')
  igdl(command).then(async res => {
    let igdl = JSON.stringify(res)
    let json = JSON.parse(igdl)
    await reply(global.wait)
    for (let { downloadUrl, type } of json) {
     zidni.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*nih*', m) }}) }

if (/ssweb/i.test(command)){
  let full = /f$/i.test(command)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(api('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  zidni.sendFile(m.chat, ss, 'screenshot.png', url, m, 0, { thumbnail: ss })}
      if (/limit/i.test(command)){
   zidni.sendTextWithMentions(m.chat, `Limit @${sender.split('@')[0]} Tersisa ${global.db.data.users[m.sender].limit}\nAnd Balance ${db.data.users[sender].balance}`, m)}
 
if (/judi/i.test(command)){
let buatall = 1
    zidni.judi = zidni.judi ? zidni.judi : {}
    if (m.chat in zidni.judi) return m.reply ('Masih ada yang melakukan judi disini, tunggu sampai selesai!!')
    else zidni.judi[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return zidni.reply(m.chat, usedPrefix + 'judi <jumlah>\n ' + usedPrefix + 'judi 1000', m)
        if (global.db.data.users[m.sender].balance >= count * 1) {
            global.db.data.users[m.sender].balance -= count * 1
             //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                zidni.reply(m.chat, `Aku Roll:${Aku}\nKamu Roll: ${Kamu}\n\nAwokawokawok kamu *Kalah*, kamu kehilangan ${count} Money`.trim(), m)
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].balance += count * 2
                zidni.reply(m.chat, `Aku Roll:${Aku}\nKamu Roll: ${Kamu}\n\nSialan, kamu *Menang*, kamu Mendapatkan ${count * 2} Money`.trim(), m)
            } else {
                global.db.data.users[m.sender].balance += count * 1
                zidni.reply(m.chat, `Aku roll:${Aku}\nKamu Roll: ${Kamu}\n\nYahh kamu *Seri*, kamu Mendapatkan ${count * 1} Money`.trim(), m)
            }
        } else zidni.reply(m.chat, `Uang kamu tidak cukup untuk melakukan judi sebesar ${count} Money`.trim(), m)
    } catch (e) {
        console.log(e)
        reply('Error!!')        
    } finally {
        delete zidni.judi[m.chat]}}
    if (/simpcard/i.test(command))  {
  let who = m.sender
  zidni.sendFile(m.chat, global.api('https://some-random-api.ml', '/canvas/simpcard', {
    avatar: await zidni.profilePictureUrl(who,'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'simpcard.png', 'simp', m)}
    if (/kucing/i.test(command)){
  try {
     let res = await fetch('https://cataas.com/cat')
     let img = await res.buffer()
     let caption = `Meong..`.trim()
    zidni.sendFile(m.chat, img, 'cat.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'}}
      if (/heal/i.test(command)) {
      const random = (angka) => {
        return Math.floor(Math.random() * angka) + 30}
        let msgkurang = (pickRandom(['potionmu tidak cukup', 'ciaa gk cukup potionyya :v', 'wtf gk cukup :v', 'beli potion dulu, potionmu gk cukup', 'Duaarr potionmu gk cukup', 'eyyyy potionmu kurang', 'beli dulu lah, masak mau pakai potion tapi gk ada potionnnya :v', 'minta ke orang lain suruh transfer potion, biar potionmu gk kurang :v', 'Beli potion dulu KK']))
        let msgpenuh = (pickRandom(['Nyawamu sudah penuh', 'coba deh liat inv mu, nyawamu kan dah 100 ngapai ngunain potion lagi?', 'health mu dah penuh woyy', 'ws kebek weh :v', 'nyawamu dah penuh :v', 'udh weh, udh penuh']))    
     let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (1) + '* Potion')
                let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
                   try {
               if (global.db.data.users[m.sender].healt < 100) {
                    if (global.db.data.users[m.sender].potion >= 1) {
                        global.db.data.users[m.sender].potion -= 1
                        global.db.data.users[m.sender].healt += random(70)
                        zidni.sendBut(m.chat, msgsucces, `${pushname}`, 'Adventure', `${usedPrefix}adventure`, m)
                    } else zidni.reply(m.chat, msgkurang, m)
                } else zidni.reply(m.chat, msgpenuh, m)
            } catch (e) {
                console.log(e)
                reply(msgerror)             
            }
        }
        
			  // Respon Cmd with media
      
const _0x19e8b2=_0x2bf8;(function(_0x2ba73b,_0x48d827){const _0x560abc=_0x2bf8,_0x32685e=_0x2ba73b();while(!![]){try{const _0x1d8edd=parseInt(_0x560abc(0x120))/0x1*(parseInt(_0x560abc(0x134))/0x2)+parseInt(_0x560abc(0x123))/0x3+-parseInt(_0x560abc(0x11e))/0x4*(-parseInt(_0x560abc(0x12c))/0x5)+parseInt(_0x560abc(0x13f))/0x6+parseInt(_0x560abc(0x12b))/0x7*(-parseInt(_0x560abc(0x129))/0x8)+-parseInt(_0x560abc(0x131))/0x9+-parseInt(_0x560abc(0x140))/0xa*(-parseInt(_0x560abc(0x12f))/0xb);if(_0x1d8edd===_0x48d827)break;else _0x32685e['push'](_0x32685e['shift']());}catch(_0x328985){_0x32685e['push'](_0x32685e['shift']());}}}(_0x22f6,0xe6c68));if(isMedia&&m[_0x19e8b2(0x144)]['fileSha256']&&m[_0x19e8b2(0x144)][_0x19e8b2(0x127)][_0x19e8b2(0x13d)](_0x19e8b2(0x139))in global['db']['data'][_0x19e8b2(0x133)]){let hash=global['db']['data'][_0x19e8b2(0x133)][m['msg']['fileSha256'][_0x19e8b2(0x13d)](_0x19e8b2(0x139))],{text,mentionedJid}=hash,messages=await generateWAMessage(m[_0x19e8b2(0x124)],{'text':text,'mentions':mentionedJid},{'userJid':zidni[_0x19e8b2(0x11f)]['id'],'quoted':m[_0x19e8b2(0x12d)]&&m[_0x19e8b2(0x12d)][_0x19e8b2(0x146)]});messages['key'][_0x19e8b2(0x135)]=areJidsSameUser(m[_0x19e8b2(0x12a)],zidni[_0x19e8b2(0x11f)]['id']),messages[_0x19e8b2(0x137)]['id']=m[_0x19e8b2(0x137)]['id'],messages[_0x19e8b2(0x13a)]=m['pushName'];if(m['isGroup'])messages[_0x19e8b2(0x13b)]=m['sender'];let msg={...chatUpdate,'messages':[proto[_0x19e8b2(0x13c)][_0x19e8b2(0x132)](messages)],'type':_0x19e8b2(0x136)};zidni['ev'][_0x19e8b2(0x141)](_0x19e8b2(0x143),msg);}function _0x22f6(){const _0x3ad955=['sender','12823412QrNTJo','705255UuVaaF','quoted','\x0aKamu\x20berhenti\x20AFK','11qtOfbK','afkReason','15520284pSkQmU','fromObject','sticker','21688BzGTfV','fromMe','append','key','reply','base64','pushName','participant','WebMessageInfo','toString','tanpa\x20alasan','5967678EwvJfc','9863680xZFeYv','emit','data','messages.upsert','msg','mentionedJid','fakeObj','4xXNhGC','user','52DskzLC','trim','users','5447184YMKiGs','chat','afkTime','dengan\x20alasan\x20','fileSha256','\x20setelah\x20','8AnOImK'];_0x22f6=function(){return _0x3ad955;};return _0x22f6();}function _0x2bf8(_0x35f653,_0x1d5966){const _0x22f696=_0x22f6();return _0x2bf8=function(_0x2bf8a7,_0x20dfe0){_0x2bf8a7=_0x2bf8a7-0x11e;let _0x422bd4=_0x22f696[_0x2bf8a7];return _0x422bd4;},_0x2bf8(_0x35f653,_0x1d5966);}let mentionUser=[...new Set([...m[_0x19e8b2(0x145)]||[],...m['quoted']?[m['quoted'][_0x19e8b2(0x12a)]]:[]])];for(let jid of mentionUser){let user=global['db'][_0x19e8b2(0x142)]['users'][jid];if(!user)continue;let afkTime=user['afkTime'];if(!afkTime||afkTime<0x0)continue;let reason=user[_0x19e8b2(0x130)]||'';m['reply'](('\x0aJangan\x20tag\x20dia!\x0aDia\x20sedang\x20AFK\x20'+(reason?_0x19e8b2(0x126)+reason:_0x19e8b2(0x13e))+'\x0aSelama\x20'+clockString(new Date()-afkTime)+'\x0a')[_0x19e8b2(0x121)]());}if(db[_0x19e8b2(0x142)]['users'][m[_0x19e8b2(0x12a)]][_0x19e8b2(0x125)]>-0x1){let user=global['db'][_0x19e8b2(0x142)][_0x19e8b2(0x122)][m[_0x19e8b2(0x12a)]];m[_0x19e8b2(0x138)]((_0x19e8b2(0x12e)+(user[_0x19e8b2(0x130)]?_0x19e8b2(0x128)+user[_0x19e8b2(0x130)]:'')+'\x0aSelama\x20'+clockString(new Date()-user[_0x19e8b2(0x125)])+'\x0a')['trim']()),user[_0x19e8b2(0x125)]=-0x1,user[_0x19e8b2(0x130)]='';}	       
        switch(command) {
case 'pubg':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if(!text) throw 'Namanya Gan'
zidni.sendMessage(from, { video: { url:  `https://violetics.pw/api/ephoto360/lightning-pubg-video?apikey=beta&text=${q}` },  mimetype: 'video/mp4' }, { quoted: m })}
  break
  case 'hallowen':{
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  if(!text) throw 'Namanya Gan'
zidni.sendMessage(from, { video: { url:  `https://violetics.pw/api/ephoto360/halloween-videocard?apikey=beta&text=${q}` },  mimetype: 'video/mp4' }, { quoted: m })}
  break
  case 'skull':{
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  if(!text) throw 'Namanya Gan'
zidni.sendMessage(from, { video: { url:  `https://violetics.pw/api/ephoto360/skull-videomaker?apikey=beta&text=${q}` },  mimetype: 'video/mp4' }, { quoted: m })}
  break
  case 'greeting':{
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  if(!text) throw 'Namanya Gan'
zidni.sendMessage(from, { video: { url:  `https://violetics.pw/api/ephoto360/video-greeting-cards?apikey=beta&text=${q}` },  mimetype: 'video/mp4' }, { quoted: m })}
  break
            case'shaun':case 'shaunthesheep':{
               if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`       
             m.reply(mess.wait)         
             let media = await quoted.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let anu5 = await (isTele ? uploadImage : uploadFile)(media)
           let bangc = await getBuffer(`https://xteam.xyz/videomaker/shaunthesheep?url=${anu5}&APIKEY=HIRO`)
            zidni.sendMessage(m.chat, {video: bangc, caption: `${mess.success}`}, {quoted:m}) }
	  break
        case'wallq':case'wallpaperq':{
        throw wet
          if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  let res 
  if (text) res = await fetch(
    global.api("https://wall.alphacoders.com/api2.0", "/get.php", {
      auth: "3e7756c85df54b78f934a284c11abe4e",
      method: "search",
      term: text,
    })
  )
    else res = await fetch(
    global.api("https://wall.alphacoders.com/api2.0", "/get.php", {
      auth: "3e7756c85df54b78f934a284c11abe4e",
      method: "latest",
    })
  )

  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.wallpapers) throw json
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)];
  await zidni.sendFile(m.chat, img.url_image, text + `.${img.file_type}`, img.url_page, m);};
  break
        	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        
                case 'hidetag': {
                if (!isAdmins) throw mess.admin                  
            zidni.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                zidni.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'leave': {
                if (!isOwner) throw mess.owner
                await zidni.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
        
      case 'registrasi': case'reg':case'registerasi':case 'regist':case'daftar':case'regis':{
const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 120) throw 'Umur terlalu tua 😂'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  reply(`
Daftar berhasil!

╭─「 Info 」
│ Nama: ${name}
│ Umur: ${age} tahun 
╰────
Serial Number: 
${sn}
`.trim())}
break
case 'unreg':{
const { createHash } = require('crypto')
  if (!args[0]) throw 'Serial Number kosong'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah'
  user.registered = false
  reply(`Unreg berhasil!`)}
  break
				case 'karakter':  case 'character':{
        if (!text) throw `Masukkan query!`
  let res = await fetch(global.api('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type } = json.results[0]
let charaingfo = `💬 *Name:* ${name}
💭 *Nickname:* ${alternative_names}
🔗 *Link*: ${url}
👤 *Character Type*: ${type}`

  zidni.sendFile(m.chat, image_url, '', charaingfo, m)
}
break
        case 'animeinfo':{
 	  if (!text) throw `Masukkan query!`
  let res = await fetch(global.api('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
➡️ *Start date:* ${start_date}
🔚 *End date:* ${end_date}
💬 *Show Type:* ${type}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *Members:* ${members}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`
await zidni.sendFile(m.chat, image_url, '', animeingfo, m) }
  break
  
       case 'profil': case 'inv': case 'inventori': case 'profile':{
           try {
                    ppuser = await zidni.profilePictureUrl(sender, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
   let teksehmazeh = `*• Name:* ${pushname} (@${sender.split("@")[0]})
*• Number:* ${PhoneNumber('+' + sender.replace('@s.whatsapp.net', '')).getNumber('international')}
*• Api:* https://wa.me/${sender.split("@")[0]}
*• Level:* ${db.data.users[sender].level}
*• Exp:* ${db.data.users[sender].xp}/${requiredExp}   (${db.data.users[sender].xp - requiredExp} Xp To Level Up)
*• Role:* ${userLeveling(userLevel)}
*• Limit:* ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
*• Money:* Rp${db.data.users[sender].balance.toLocaleString()}
*• Owner:* ${isOwner ? '✅' : '❎'}
*• Premium:* ${global.premi.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? '✅' : '❎'}
*• Registered:* ${db.data.users[sender].registered ? '✅ (' + new Date(db.data.users[sender].regTime).toLocaleString() + ')' : '❎'}${db.data.users[sender].lastclaim > 0 ? '\n*• Last Claim:* ' + new Date(db.data.users[sender].lastclaim).toLocaleString() : ''}\n`     
            zidni.sendMessage(from, { image: { url: ppuser }, contextInfo: { mentionedJid: [sender] }, caption: teksehmazeh })
   
					}
					break
       case'cecan':case'hijab':{
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
    let res = await fetch(api('amel', '/hijab', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    zidni.sendButtonImg(m.chat, json.result, 'Nieh banh', `${pushname}`, 'lagi', `${usedPrefix + command}`, m)}
    break
        case 'afk':  {
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  let user1 = global.db.data.users[m.sender]
                user1.afkTime = + new Date
                user1.afkReason = text
                zidni.sendTextWithMentions(m.chat, `@${sender.split("@")[0]} Telah Afk${text ? ': ' + text : ''}`,m)
                }
                break
        case 'claim':{
              function kol(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':') }
        let __timers = (new Date - global.db.data.users[m.sender].lastclaim)
        let _timers = (86400000 - __timers) 
        let timer = kol(_timers)
        if (new Date - global.db.data.users[m.sender].lastclaim > 86400000){
        let ganu = randomNomor(20)
        let y = randomNomor(4)
        let gan = randomNomor(500)
        db.data.users[m.sender].limit += ganu
        global.db.data.users[m.sender].potion += y
        db.data.users[m.sender].balance += gan
        reply(`Selamat Kamu Mendapatkan ${ganu} Limt Dan Balance ${gan} Dan Potion ${y}`)
        } else zidni.sendBut(m.chat, `Kamu sudah mengklaim klaim harian hari ini\ntunggu selama ${timer} lagi`, `${pushname}`, 'ok', 'ok', m)
  db.data.users[m.sender].lastclaim = new Date * 1}
  break

  
  case'joox':{
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
const { joox } = require('./lib/scrape_joox')
const isUrl = str => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(str)
    if (!text) throw `*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${usedPrefix + command} akad`
    if (isUrl(text)) throw `*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${usedPrefix + command} akad`
    let json = await joox(text)
    let result = json.data[Math.floor(Math.random() * json.data.length)]
    let pesan = `
*Penyanyi:* ${result.penyanyi}
*Judul:* ${result.lagu}
*Album:* ${result.album}
*Diterbitkan:* ${result.publish}
*Link:* ${result.mp3}
\n_Tunggu Upload Musiknya ya.._`.trim()
    zidni.sendFile(m.chat, result.img, 'error.jpg', pesan, m, false, { thumbnail: Buffer.alloc(0) })
  zidni.sendMessage(from, { audio: {url : result.mp3}, mimetype: 'audio/mp4'}, {quoted: m})}
      break
    
        case 'cerpen':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
        let res = await axios.get(api('amel', '/cerpen', {}, 'apikey'))
    let json = res.data
    zidni.sendBut(m.chat, json.judul, json.cerita, 'lagi', `${command}`, m)}
    break
        case 'randomsound':case 'sound':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
        let num = randomNomor(70)
       let nex = await zidni.sendMessage(from, { audio: {url : `https://hansxd.nasihosting.com/sound/sound${num}.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
       zidni.sendBut(m.chat, `Klik Tombol Next Untuk Audio Selanjutnya`, `${pushname}`, 'Next', `sound`, nex)}
		break
 case 'cuaca':{
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
 if (!text) reply('Masukan Kota')
 let nu = await fetchJson(`https://xteam.xyz/cuaca?kota=${q}&APIKEY=HIRO`)
 let anu = nu.message
 reply(`Kota : ${anu.kota}\nHari : ${anu.hari}\nCuaca : ${anu.cuaca}\nDeskripsi : ${anu.deskripsi}\nSuhu : ${anu.suhu}\nPressure : ${anu.pressure}\nKelembapan : ${anu.kelembapan}\nKecepatan Angin : ${anu.angin}\n`)}
 break
 case 'couple': case 'ppcouple':
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
{let res = await fetch(global.api('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await zidni.sendFile(m.chat, json.result.male, '', 'cowo', m)
  await zidni.sendFile(m.chat, json.result.female, '', 'cewe', m)}
  break
  case 'qr':case'qrcode':{
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
let qrcode = require("qrcode")
  if (!text) throw 'teksnya mana?'
  zidni.sendFile(m.chat, await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '', m)}
  break
  case 'tinyurl':{
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (!isUrl(args[0])) return reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/tinyurl?url=${q}&APIKEY=cristian9407`)
			    reply(`Link : ${datta.result}`)}
				break
case 'gg':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (!isUrl(args[0])) return reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/gg?url=${q}&nama=st4rz&APIKEY=cristian9407`)
			    reply(`Link : ${datta.result}`)}
				break
case 'bitly':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (!isUrl(args[0])) return reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/bitly?url=${q}&APIKEY=cristian9407`)
			    reply(`Link : ${datta.result.id}`)}
				break
case 'cutly': 
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  if (!isUrl(args[0])) return reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${q}&APIKEY=cristian9407`)
			    reply(`Link : ${datta.result.shortLink}`)
				break				
				case 'darkjoke': case 'meme':{
				reply(wet)
				var buti = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]			
				 	zidni.sendMessage(from, { caption: `${command}`, image: { url: `https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=dappakntlll`}, buttons: buti, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })}
				 	break
        case 'ppwibu':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
     reply(mess.wait)
         	var buti = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]			
				 	zidni.sendMessage(from, { caption: `${command}`, image: { url: `https://hardianto.xyz/api/anime/random?sfw=avatar&apikey=hardianto`}, buttons: buti, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				 	}
				 	break
				case 'loli':case 'husbu':{
				 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
				reply(mess.wait)
			var buta = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]			
		        	zidni.sendMessage(from, { caption: "Nieh Banh", image: { url: `https://api.akuari.my.id/randomimganime/${command}`}, buttons: buta, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m})			  
                   }
                   		break	
			 case 'neko':
					case 'waifu':{			
					 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1		
					reply(mess.wait)
						var buta = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]			
		        	zidni.sendMessage(from, { caption: "Nieh Banh", image: { url: `https://yx-api.herokuapp.com/api/sfw/${command}`}, buttons: buta, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m})			  
                   }
                   		break		
                   			case 'get': case 'komik':{
            axios.get(q)
	.then(({ data }) => {
            reply(`${data}`)
            })}
            break
            case 'otaku':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
	try{
	reply(wet)
            if(!q) return reply('judul animenya?')
            let anime = await fetchJson (`https://hardianto.xyz/api/anime/otakudesu?title=${q}&apikey=hardianto`)
            let rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
       
           await  zidni.sendMessage(from, {caption: rem, image: {url:anime.img }}, {quoted: m})
        } catch (err){
            	console.log(err)
            	return reply("Ga ketemu om")
            }       
            break		
        case 'run':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
let tmp = path.join(__dirname, './src/')
function running(img, duration = 10, fps = 60) {
  return new Promise((resolve, reject) => {
    let layers = [
      `color=s=512x512:d=${duration}:r=${fps}[bg]`,
      '[0:v]scale=-2:512[img]',
      `[bg][img]overlay=x='(w+h)*((n/${fps})*-1/${duration})+h'`
    ]

    let n = + new Date + 'run.jpg'
    let i = path.join(tmp, n)
    fs.writeFileSync(i, img)
    console.log(img)
    let o = path.join(tmp, n + '.mp4')
    let args = [
      '-y',
      '-i', i,
      '-t', duration.toString(),
      '-filter_complex', layers.join(';'),
      '-pix_fmt', 'yuv420p',
      '-crf', '18',
      o
    ]
    console.log('ffmpeg', ...args)
    spawn('ffmpeg', args, { stdio: 'inherit' })
      .on('error', reject)
      .on('close', () => {
        try {
          fs.unlinkSync(i)
          resolve(fs.readFileSync(o))
          fs.unlinkSync(o)
        } catch (e) {
          reject(e)
        }
      })
    //.stderr.on('data', a => console.log(a+''))
  })
}
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image/.test(mime)) throw `Balas gambarnya`
  try { q = m.quoted.download() }
  catch (e) { q = m.download() }
  reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
  running(await q).then(vid => zidni.sendFile(m.chat, vid, 'run.mp4', 'Nih Gann', m))
}
break
case'alquran':case'quran':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
    if (!(args[0] || args[1])) throw `contoh:\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`

    let res = await fetch(global.api('https://islamic-api-indonesia.herokuapp.com', '/api/data/quran', { surah: args[0], ayat: args[1] }))
    let json = await res.json()
    let mes = `${json.result.data.text.arab}
    
${json.result.data.translation.id}

( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )`.trim()
    reply(mes)
    zidni.sendFile(m.chat, json.result.data.audio.primary, 'all.mp3', '', m, false, { mimetype: 'audio/mp4' })}
break
case 'lolivideo':case'lolivid':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
reply(wet)
zidni.sendFile(m.chat, `https://recoders-area.caliph.repl.co/api/lolivid`, 'loli.mp4', `Nih Gann`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})}
break
case 'github':case 'repo':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
    if (!text) throw 'Cari apa?'
    let res = await fetch(global.api('https://api.github.com', '/search/repositories', {
        q: text
    }))
    let json = await res.json()
    if (res.status !== 200) throw json
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👀  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}`.trim()
    }).join('\n\n')
    reply(str)}
    break
        case 'tourl':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada media yang ditemukan'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  reply(`${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}`)}
break
case'wait':{
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix}wait`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  await m.reply('Searching Anime Titles...')
  let image = `data:${mime};base64,${img.toString('base64')}`
  let response = await fetch('https://trace.moe/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image }),
  })
  if (!response.ok) throw 'Gambar tidak ditemukan!'
  let result = await response.json()
  let { is_adult, title, title_chinese, title_romaji, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
  let link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
  let nobuyaki = `
${similarity < 0.89 ? 'Saya Memiliki Keyakinan Rendah Tentang Hal Ini' : ''}

Judul Jepang : *${title}*
Ejaan Judul : *${title_romaji}*
Similarity : *${(similarity * 100).toFixed(1)}%*
Episode : *${episode.toString()}*
Ecchi : *${is_adult ? 'Yes' : 'No'}*
`.trim()
  zidni.sendFile(m.chat, link, 'srcanime.mp4', `${nobuyaki}`, m)}
  break
              case'mp4':case 'togif': case 'tomp4': case 'tovideo': {
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zidni.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: `Nih Gan` } }, { quoted: m })
                await fs.unlinkSync(media)}
            break
            case 'mp3':case 'tomp3':  case 'toaud': case 'toaudio': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zidni.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m }) }
            break   
           case 'ceritahantu':case 'ceritahoror':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
    let res = await axios.get(api('amel', '/ceritahantu', {}, 'apikey'))
    let json = res.data
    zidni.sendBut(m.chat, json.data.judul, json.data.cerita, 'lagi', `${command}`, m)}
    break
case 'mediafire':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 30
const { mediafiredl } = require('@bochilteam/scraper')
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*Name:* ${filename}
*Size:* ${filesizeH}
*Extension:* ${ext}
*Uploaded:* ${aploud}
`.trim()
    reply(caption)
    zidni.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: ext}, { quoted: m })}
break
        case 'doaharian':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
         await reply(wet)
  let res = await fetch('https://islamic-api-zhirrr.vercel.app/api/doaharian')
  let son = await res.json()
  shyi = son.data
  let json = shyi[Math.floor(Math.random() * shyi.length)]
  let caption = `
*「 Doa Harian 」*
${json.title}
${json.arabic}
${json.latin}
Artinya:
_${json.translation}_
`.trim()
  await zidni.sendBut(m.chat, caption, `${pushname}`, 'Doa Harian', `${command}`, m)
}
break

       case'kalkulator':case 'calc':{
          if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
        let id = m.chat
  zidni.math = zidni.math ? zidni.math : {}
  if (id in zidni.math) {
    clearTimeout(zidni.math[id][3])
    delete zidni.math[id]
    reply('Hmmm...ngecheat?')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }}
  break
  case 'jadwalshalat':{
  
               if (!text) throw 'Masukkan nama daerah\n\nContoh: .jadwalsholat jakarta'
  let res = await xfar.JadwalSholat(text)
zidni.sendBut(m.chat, ` *JADWAL SHOLAT*
${text}

_*${res.tanggal}*_
Imsyak: ${res.imsyak}
Subuh: _${res.subuh}_
Dzuhur: _${res.dzuhur}_
Ashar: ${res.ashar}
Maghrib: ${res.maghrib}
Isya: ${res.isya}
`, `${pushname}`, 'ok', 'huuu',m)}
break
case 'ttnowm':case 'tiktoknowm': case 'tt':case 'tiktok':{

reply(wet)
const { tiktokdl, tiktokdlv2 } = require ('@bochilteam/scraper')
 if (!args[0]) throw `Use example ${prefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark || video.no_watermark.hd
let buttons = [
                    {buttonId: `ttaud ${text}`, buttonText: {displayText: 'Audio'}, type: 1}]
                let buttonMessage = {
                    video: { url: url },
                    caption: `${mess.success}`,
                    footer: `${pushname}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })}
break
              case 'ytsearch': case 'yts':{
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
 if (args.length < 1) return reply(`Contoh:\n${command} bukti Virgoun`)
let list_rows = [];
let yts = require("yt-search")
            const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Durasi: ${a.duration} | views: ${a.views}\n\nUrl : ${a.url}`, rowId: `yt5 ${a.url}`})}
const sections = [
    {
	title: "Type Video | Quality 720p",
	rows: list_rows
	 },]
     
   const listMessage = {
  text: `Hasil Pencarian Dari ${q}`,
  footer: `${pushname}`,
  title: "",
  buttonText: "Chose One",
  sections
}
       
     zidni.sendMessage(from, listMessage,{ quoted: m })}
break
case 'renungan':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
        let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.akuari.my.id/islami/renunganislam` },
                    caption: `Nih..`,
                    footer: ``,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })}
        break
        case 'storyanim': case 'storyanime':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
        reply(wet)
        let yo = await fetchJson(`https://api-kaysa.herokuapp.com/api/jjanime?apikey=2a6bgGJi`)        
         let medi = await getBuffer(yo.video)
      let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {video: medi ,caption: `Nih Gann`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
            break
             case 'storyff':case'storyfreefire':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
        reply(wet)
        let yo = await fetchJson(`https://api-kaysa.herokuapp.com/api/jjfreefire?apikey=2a6bgGJi`)        
         let medi = await getBuffer(yo.video)
      let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {video: medi ,caption: `Nih Gann`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
            break
             case 'storyml':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
        reply(wet)
        let yo = await fetchJson(`https://api-kaysa.herokuapp.com/api/jjml?apikey=2a6bgGJi`)        
         let medi = await getBuffer(yo.video)
      let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {video: medi ,caption: `Nih Gann`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
            break
             case 'storypubg':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
        reply(wet)
        let yo = await fetchJson(`https://api-kaysa.herokuapp.com/api/jjpubg?apikey=2a6bgGJi`)        
         let medi = await getBuffer(yo.video)
      let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {video: medi ,caption: `Nih Gann`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
            break
        case 'storysad':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
				  reply(wet)
				   let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {video:{url: `https://api.akuari.my.id/downloader/storysad`} ,caption: `Nih Gann`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
         break
                   case'kisahnabi':
                    if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
          if (!text) return reply(`Kirim perintah ${command} Nama Nabi\nContoh : ${command} Muhammad`)
          let ff = await fetchJson(`https://yx-api.herokuapp.com/api/muslim/kisahnabi?nabi=${q}`)
          let tr = `*Nama* : ${ff.name}\n*Lahir* : ${ff.kelahiran}\n*Umur* : ${ff.wafat_usia}\n*Kota* : ${ff.singgah}\n*Kisah* : ${ff.kisah}`
          reply(tr)
case 'nabi': {
const _0x25cc37=_0x527f;function _0x1a4e(){const _0x1e6144=['List\x2025\x20Nabi','Kisah\x20Nabi\x20Harun','177872akNOxW','287358lbRmbK','kisahnabi\x20ilyas','Kisah\x20Nabi\x20Hud','OPEN\x20LIST','kisahnabi\x20ismail','803BjevPV','kisahnabi\x20syuaib','912121LZgHAq','sendMessage','Kisah\x20Nabi\x20Syuaib','kisahnabi\x20dzulkifli','kisahnabi\x20yahya','kisahnabi\x20adam','kisahnabi\x20isa','Kisah\x20Nabi\x20Ilyasa','Kisah\x20Nabi\x20Dzulkifli','kisahnabi\x20ishaq','Kisah\x20Nabi\x20Zakariya','kisahnabi\x20zakariya','Kisah\x20Nabi\x20Yunus','333294kvQTdr','kisahnabi\x20musa','Kisah\x20Nabi\x20Ishaq','Kisah\x20Nabi\x20Muhammad','10eiaCJZ','kisahnabi\x20daud','813064pdXJvN','kisahnabi\x20ayyub','Kisah\x20Nabi\x20Luth','kisahnabi\x20sulaiman','kisahnabi\x20ilyasa','Kisah\x20Nabi\x20Daud','kisahnabi\x20yaqub','Kisah\x20Nabi\x20Idris','chat','kisahnabi\x20harun','9citTBo','Kisah\x20Nabi\x20Sulaiman','46rEprlV','Kisah\x20Nabi\x20Sholeh','Kisah\x20Nabi\x20Yusuf','kisahnabi\x20sholeh','kisahnabi\x20idris','90960GeOZbf','.kisahnabi\x20muhammad','Kisah\x20Nabi\x20Yaqub','kisahnabi\x20nuh','Kisah\x20Nabi\x20Nuh','Kisah\x20Nabi\x20Ilyas','kisahnabi\x20yusuf','13818mgVGOk','kisahnabi\x20hud'];_0x1a4e=function(){return _0x1e6144;};return _0x1a4e();}function _0x527f(_0xa7e7b1,_0x531f7b){const _0x1a4e2f=_0x1a4e();return _0x527f=function(_0x527f63,_0x12b395){_0x527f63=_0x527f63-0xf6;let _0x16ef97=_0x1a4e2f[_0x527f63];return _0x16ef97;},_0x527f(_0xa7e7b1,_0x531f7b);}(function(_0x1aaf9b,_0x4a9da3){const _0x567e46=_0x527f,_0x347eae=_0x1aaf9b();while(!![]){try{const _0x507a18=-parseInt(_0x567e46(0x100))/0x1+-parseInt(_0x567e46(0x126))/0x2*(parseInt(_0x567e46(0xfb))/0x3)+-parseInt(_0x567e46(0xff))/0x4+parseInt(_0x567e46(0x118))/0x5*(-parseInt(_0x567e46(0x114))/0x6)+parseInt(_0x567e46(0x107))/0x7+parseInt(_0x567e46(0x11a))/0x8*(-parseInt(_0x567e46(0x124))/0x9)+parseInt(_0x567e46(0x12b))/0xa*(parseInt(_0x567e46(0x105))/0xb);if(_0x507a18===_0x4a9da3)break;else _0x347eae['push'](_0x347eae['shift']());}catch(_0x4e43f2){_0x347eae['push'](_0x347eae['shift']());}}}(_0x1a4e,0x231c8));const sections=[{'title':'Kisah\x20Nabi','rows':[{'title':'Kisah\x20Nabi\x20Adam','rowId':_0x25cc37(0x10c)},{'title':_0x25cc37(0x121),'rowId':_0x25cc37(0x12a)},{'title':_0x25cc37(0xf8),'rowId':_0x25cc37(0xf7)},{'title':_0x25cc37(0x102),'rowId':_0x25cc37(0xfc)},{'title':_0x25cc37(0x127),'rowId':_0x25cc37(0x129)},{'title':'Kisah\x20Nabi\x20Ibrahim','rowId':'kisahnabi\x20ibrahim'},{'title':_0x25cc37(0x11c),'rowId':'kisahnabi\x20luth'},{'title':'Kisah\x20Nabi\x20Ismail','rowId':_0x25cc37(0x104)},{'title':_0x25cc37(0x116),'rowId':_0x25cc37(0x110)},{'title':_0x25cc37(0xf6),'rowId':_0x25cc37(0x120)},{'title':_0x25cc37(0x128),'rowId':_0x25cc37(0xfa)},{'title':'Kisah\x20Nabi\x20Ayyub','rowId':_0x25cc37(0x11b)},{'title':_0x25cc37(0x109),'rowId':_0x25cc37(0x106)},{'title':'Kisah\x20Nabi\x20Musa','rowId':_0x25cc37(0x115)},{'title':_0x25cc37(0xfe),'rowId':_0x25cc37(0x123)},{'title':_0x25cc37(0x10f),'rowId':_0x25cc37(0x10a)},{'title':_0x25cc37(0x11f),'rowId':_0x25cc37(0x119)},{'title':_0x25cc37(0x125),'rowId':_0x25cc37(0x11d)},{'title':_0x25cc37(0xf9),'rowId':_0x25cc37(0x101)},{'title':_0x25cc37(0x10e),'rowId':_0x25cc37(0x11e)},{'title':_0x25cc37(0x113),'rowId':'kisahnabi\x20yunus'},{'title':_0x25cc37(0x111),'rowId':_0x25cc37(0x112)},{'title':'Kisah\x20Nabi\x20Yahya','rowId':_0x25cc37(0x10b)},{'title':'Kisah\x20Nabi\x20Isa','rowId':_0x25cc37(0x10d)},{'title':_0x25cc37(0x117),'rowId':_0x25cc37(0x12c)}]}],listMessage={'text':_0x25cc37(0xfd),'footer':'','buttonText':_0x25cc37(0x103),'sections':sections};zidni[_0x25cc37(0x108)](m[_0x25cc37(0x122)],listMessage,{'quoted':m});
     }
			break
case'doge':case'spongebob':case'anime':case'patrick':case 'gura':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
let data1 = await fetchJson(`https://api.akuari.my.id/search/sticker?query=${command}`)
let data = data1.result
 let dat = data[Math.floor(Math.random() * data.length)].url
					let ani = await fetchJson(`https://api.akuari.my.id/downloader/stickerpack?link=${dat}`)
									let anu = ani.result
									 let r = anu[Math.floor(Math.random() * anu.length)]
									 let get = await getBuffer(r)
									let nn = await zidni.sendImageAsSticker(m.chat, get, m, { packname: `By`, author: "Zidni Ganz"})}
									  break
									 			     case 'likee':case 'like':{
			     reply(wet)
			   let waw = await fetchJson(`https://api.akuari.my.id/downloader/likeedl?link=${q}`) 	
			   let p = waw.medias[0]	
			   let qp = await getBuffer(p.url)	
			   zidni.sendMessage(m.chat, {video: qp, caption: waw.title},{ quoted: m })					 
					 }
			    break
			    
  case 'igstory':{
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
const { igstory } = require('./lib/scrape')
  if (!args[0]) throw `uhm.. username nya mana?\n\ncontoh:\n\n${command} yntks`
  if (args[0].startsWith('http') || args[0].startsWith('@')) throw `username salah`

  igstory(args[0]).then(async res => {
    let igs = JSON.stringify(res)
    let json = JSON.parse(igs)
    for (let { downloadUrl, type } of json)
      zidni.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), `Nih Gan`, m)
  })
}
break
case 'ttaud':	case 'ttaudio': case 'tiktokaudio':{
	 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
			     if (!isUrl(args[0])) return reply(mess.error.Iv)
			    if (!args[0].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    hxz.ttdownloader(args[0]).then( data => {
			      zidni.sendMessage(from, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m})			     
				}).catch(() => reply(mess.error.api))
		       }
		         break            
		         case 'yt1':{
		          if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
	            reply(mess.wait)	       
                    const { y2mateA, y2mateV } = require('./lib/y2/y2mate1')
    let res = await y2mateV(q).catch(e => {
         reply('_[ ! ] Error Gagal Memasuki Web Y2mate_') })
             let buttons = [{buttonId: `ytmp33 ${q}`, buttonText: {displayText: 'Audio'}, type: 1} ]
                let buttonMessage = {video: { url: res[0].link },caption: `Nih Gann`,footer: res[0].judul,buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
             break           
		         case 'yt2':{
		          if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
	            reply(mess.wait)	       
                    const { y2mateA, y2mateV } = require('./lib/y2/y2mate2')
    let res = await y2mateV(q).catch(e => {
         reply('_[ ! ] Error Gagal Memasuki Web Y2mate_') })
             let buttons = [{buttonId: `ytmp33 ${q}`, buttonText: {displayText: 'Audio'}, type: 1} ]
                let buttonMessage = {video: { url: res[0].link },caption: `Nih Gann`,footer: res[0].judul,buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
             break           
		          case 'yt3':{
		           if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
	            reply(mess.wait)	       
                    const { y2mateA, y2mateV } = require('./lib/y2/y2mate3')
    let res = await y2mateV(q).catch(e => {
         reply('_[ ! ] Error Gagal Memasuki Web Y2mate_') })
             let buttons = [{buttonId: `ytmp33 ${q}`, buttonText: {displayText: 'Audio'}, type: 1} ]
                let buttonMessage = {video: { url: res[0].link },caption: `Nih Gann`,footer: res[0].judul,buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
             break            
 case 'yt4': case 'ytv': case 'yt': case 'ytmp4': {
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
	            reply(mess.wait)	       
                    const { y2mateA, y2mateV } = require('./lib/y2/y2mate4')
    let res = await y2mateV(q).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
            })
             let buttons = [{buttonId: `ytmp33 ${q}`, buttonText: {displayText: 'Audio'}, type: 1} ]
                let buttonMessage = {video: { url: res[0].link },caption: `Nih Gann`,footer: res[0].judul,buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
             break                 
             case 'yt5':{
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 3
	            reply(mess.wait)	       
                    const { y2mateA, y2mateV } = require('./lib/y2/y2mate5')
    let res = await y2mateV(q).catch(e => {
         reply('_[ ! ] Error Gagal Memasuki Web Y2mate_') })
             let buttons = [{buttonId: `ytmp33 ${q}`, buttonText: {displayText: 'Audio'}, type: 1} ]
                let buttonMessage = {video: { url: res[0].link },caption: `Nih Gann`,footer: res[0].judul,buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
             break           
             case 'yt6':{
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
	            reply(mess.wait)	       
                    const { y2mateA, y2mateV } = require('./lib/y2/y2mate6')
    let res = await y2mateV(q).catch(e => {
         reply('_[ ! ] Error Gagal Memasuki Web Y2mate_') })
             let buttons = [{buttonId: `ytmp33 ${q}`, buttonText: {displayText: 'Audio'}, type: 1} ]
                let buttonMessage = {video: { url: res[0].link },caption: `Nih Gann`,footer: res[0].judul,buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
             break  
      case 'ytdl':{
      if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
         const { y2mateA, y2mateV } = require('./lib/y2/y2mate1')
    let res = await y2mateV(q).catch(e => {
         reply('_[ ! ] Error Gagal Memasuki Web Y2mate_') })
const sections = [
	    {title: "YouTube Downloader️",
	   rows: [
	    {title: `${res[0].judul}`, rowId: `yt1 ${q}`,description: `Quality 144p`},
	     {title: `${res[0].judul}`, rowId: `yt2 ${q}`,description: `Quality 240p`},
	      {title: `${res[0].judul}`, rowId: `yt3 ${q}`,description: `Quality 360p`},
	       {title: `${res[0].judul}`, rowId: `yt4 ${q}`,description: `Quality 480p`},
	        {title: `${res[0].judul}`, rowId: `yt5 ${q}`,description: `Quality 730p`},
	         {title: `${res[0].judul}`, rowId: `yt6 ${q}`,description: `Quality 1080p`}] },]
const listMessage = { text: `Silahkan Pilih Resolusi Video\n*${res[0].judul}* Di Bawah`, title: "", buttonText: "Chose One",sections}
zidni.sendMessage(from, listMessage,{ quoted: m })}
break             
                    case 'play':{
                     if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
                 const { y2mateA, y2mateV } = require('./lib/y2mate4') 
			reply('Wait')
			 res = await yts(text)
			  resu = await y2mateV(res.all[0].url).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')  })
         let buttons = [
                    {buttonId: `ytmp33 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: resu[0].link  },
                    caption: `${resu[0].judul}`,
                    footer: ``,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })  }
			                break	       
             case'ytmp3':case'mp3': case 'ytmp33': {
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
    		var mulaikah = args.join(' ')
		reply(wet)
                  const { y2mateA, y2mateV } = require('./lib/y2mate3')
         teks = args.join(' ')    
           let res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
           zidni.sendMessage(from, { audio: { url: res[0].link },mimetype: 'audio/mp4', }, { quoted : m})}
                  break
                         	case 'setpp':
			case 'setppbot': {
                if (!isOwner) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                 let media = await zidni.downloadAndSaveMediaMessage(quoted)
                await zidni.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success) }
                break
            case 'public': {
                if (!isOwner) throw mess.owner
                zidni.public = true
                reply('Sukse Change To Public Usage') }
            break
            case 'self': {
                if (!isOwner) throw mess.owner
                zidni.public = false
                reply('Sukses Change To Self Usage') }
            break
           case 'radi': case 'ping': case 'botstatus': case 'statusbot': 
         case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)  } }
            break
                   case 'parner':case 'owner': case 'creator': {
                zidni.sendContact(m.chat, global.owner, m) }
            break
            		case 'join': case 'masuk':{
            		  if (!isPremium)return reply("Khusus Pengguna Premium")		
				let result = args[0].split('https://chat.whatsapp.com/')[1]
                await zidni.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))            }
				break
				case 'gmenu':{
         const sections = [{
	title: "Game️",	
	    rows: [
	    {title: "Susun Kata", rowId: "susunkata"},
	      {title: "Tebak Kata", rowId: "tebakkata"},
	       {title: "Siapa Aku", rowId: "siapaaku"},
	        {title: "Tebak Bendera", rowId: "tebakbendera"},
	         {title: "Tebak Kabupaten", rowId: "tebakkabupaten"},
	          {title: "Tebak Kimia", rowId: "tebakkimia"},
	           {title: "Tebak Lirik", rowId: "tebaklirik"},
	           {title: "Tebak Kalimat", rowId: "tebakalimat"},
	            {title: "Tebak Tebakan", rowId: "tebaktebakan"},
	             {title: "Teka Teki", rowId: "tekateki"},
	           {title: "Family 100", rowId: "family100"},
	    {title: "Cak Lontong", rowId: "caklontong"}] },]
const listMessage = {
  text: `Game Menu`,
  footer: ``,
  title: "",
  buttonText: "Chose One",
  sections}
zidni.sendMessage(from, listMessage,{ quoted: m })}
break
case 'stickersearch': case 'stickers':{
 if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
let list_rows = [];
let data1 = await fetchJson(`https://api.akuari.my.id/search/sticker?query=${q}`)
let data = data1.result
for(let a of data) {
list_rows.push({
title: a.title, rowId: `sdownload ${a.url}`
})
}
    const button = {
        title: `Hasil Pencarian Dari ${q}`,
        description: "Pilih Salah Satu",
        footerText: ``,
        buttonText: 'Chose One',
        listType: 'SINGLE_SELECT',
        sections: [
            {
                title: "Hasil Pencarian", 
                rows: list_rows
            }
        ]
        }
        const templateList = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "listMessage": button }), {});
        zidni.relayMessage(m.chat, templateList.message, { messageId: templateList.key.id });}
break
case 'sdownload':{
									let ani = await fetchJson(`https://api.akuari.my.id/downloader/stickerpack?link=${q}`)
									let anu = ani.result
									 let r = anu[Math.floor(Math.random() * anu.length)]
									 let get = await getBuffer(r)
									 zidni.sendImageAsSticker(m.chat, get, m, { packname: `By`, author: "Zidni Ganz"})}
									 break
                  case 'bc': case 'broadcast':{
			    if (!isOwner) return reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
		                 reply(`Mengirim Broadcast Ke ${data.length} Chat`)
                            for (let i of data) {
                              zidni.sendMessage(i.id, { text: `*「 Broadcast Bot 」*\n\n${text}` })
                            }}
                            break
                            case 'bc2':{
			    if (!isOwner) return reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
		                 reply(`Mengirim Broadcast Ke ${data.length} Chat`)
		                 let rep = await zidni.downloadAndSaveMediaMessage(quoted)
		                 let anu = await TelegraPh(rep)
		                 let repl = await getBuffer(anu)
                            for (let i of data) {
                             zidni.sendMessage(i.id, {image: repl, caption: `*「 Broadcast Bot 」*\n\n${text}`})}}
                            break
                            case 'bc3':{
			    if (!isOwner) return reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
		                 reply(`Mengirim Broadcast Ke ${data.length} Chat`)
		                 let rep = await zidni.downloadAndSaveMediaMessage(quoted)
		                 let anu = await TelegraPh(rep)
		                 let repl = await getBuffer(anu)
                            for (let i of data) {
                             zidni.sendMessage(i.id, {video: repl, caption: `*「 Broadcast Bot 」*\n\n${text}`})}}
                            break
                            case 'buy':{
                            let q = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 4 ? 1 :Math.min(1, count)
                            if (args[0] === 'limit') {
                            let limit = 500
                            let potion = 800
                               if (global.db.data.users[m.sender].balance >= limit * q) {
                                global.db.data.users[m.sender].balance -= limit * q
                                global.db.data.users[m.sender].limit += q * 1
                                zidni.reply(m.chat, `Succes membeli ${q} Limit dengan harga ${limit * q} money`, m)
                            } else zidni.reply(m.chat, `Uang anda tidak cukup untuk membeli ${q} limit dengan harga ${limit * q} money`,)
                            } else if (args[0] === 'potion'){
                              if (global.db.data.users[m.sender].balance >= potion * q) {
                                global.db.data.users[m.sender].balance -= potion * q
                                global.db.data.users[m.sender].potion += q * 1
                                zidni.reply(m.chat, `Succes membeli ${q} potion dengan harga ${potion * q} money`, m)
                            } else zidni.reply(m.chat, `Uang anda tidak cukup untuk membeli ${q} potion dengan harga ${potion * q} money`,)}
                            }
                            break
                               case 'menu': case 'help': case 'p': case 'test': case 'tes': case 'allmenu': {
         persenya =`${userPersen}`
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
         anu = `*${ucapanWaktu}* ${pushname} 👋
*>* Level : ${db.data.users[m.sender].level}
*>* Exp : ${userXp(userPersen)} ${persenya.split(".")[0]}% 
*>* Limit : ${isPremium ? 'Unlimited' : `${db.data.users[m.sender].limit}`}
*>* Money : Rp${db.data.users[m.sender].balance.toLocaleString()}
*>* Today Hit : ${hit_today.length}
*>* User : ${Object.keys(global.db.data.users).length}
${readmore}
  *( 📍 )  Main Menu*
  ≻ ${prefix}menu
  ≻ ${prefix}owner
  ≻ ${prefix}report
  
  *( ☪️ )  Islamic*
  ≻ ${prefix}Alquran <Surah><Ayat>
  ≻ ${prefix}hadist <Name><No>
  ≻ ${prefix}kisahnabi <Name>
  ≻ ${prefix}nabi
  ≻ ${prefix}renungan
  ≻ ${prefix}doaharian
 
  *( 🔰 )  Download Menu*
  ≻ ${prefix}play <Option>
  ≻ ${prefix}ytdl <Link And Quality>
  ≻ ${prefix}ytmp4 <LinkYt>
  ≻ ${prefix}ytmp3 <LinkYt>
  ≻ ${prefix}tiktok <LinkTt>
  ≻ ${prefix}tiktokaudio <LinkTt>
  ≻ ${prefix}cocofun <LinkCcf>
  ≻ ${prefix}likee <Link>
  ≻ ${prefix}igdl <LinkIg>
  ≻ ${prefix}igstory <Username>
  ≻ ${prefix}fbdl <LinkFb>
  ≻ ${prefix}mediafire <LinkMd>
  ≻ ${prefix}gitclone <LinkGithub>
  ≻ ${prefix}joox <Judul>
  
  *( 🔎 ) Search*
  ≻ ${prefix}jadwalshalat <Kota>
  ≻ ${prefix}cuaca <Kota>
  ≻ ${prefix}yts <Options>
  ≻ ${prefix}repo <Name>
  ≻ ${prefix}otaku <Anime>
  ≻ ${prefix}animeinfo <Anime>
  ≻ ${prefix}karakter <Name>
  ≻ ${prefix}stikers <Query>
  ≻ ${prefix}wallpaperq <Query>
  ≻ ${prefix}wait <ReplyGambar>
  
  *( 🛠️ ) Convert*
  ≻ ${prefix}swm <ReplySticker/Name>
  ≻ ${prefix}wm <ReplySticker/Name>
  ≻ ${prefix}toimg <ReplyStiker>
  ≻ ${prefix}tomp4 <ReplyStiker>
  ≻ ${prefix}tomp3 <ReplyVideor>
  ≻ ${prefix}tourl <ReplyFoto>
  
  *( 🗡️ ) Rpg*
  ≻ ${prefix}adventure
  ≻ ${prefix}claim
  ≻ ${prefix}heal
  ≻ ${prefix}ngewe
  ≻ ${prefix}registrasi <Name.Age>
  ≻ ${prefix}unreg <SerialNumber>
  ≻ ${prefix}leaderboard
  ≻ ${prefix}judi <Jumlah>
  ≻ ${prefix}open <Item/Jumlah>
  
  *( 🖼️ ) Random*
  ≻ ${prefix}ppcouple (image)
  ≻ ${prefix}ppwibu (image)
  ≻ ${prefix}cecan (imge)
  ≻ ${prefix}kucing (image)
  ≻ ${prefix}waifu (image)
  ≻ ${prefix}husbu (image)
  ≻ ${prefix}loli (image)
  ≻ ${prefix}neko (image)
  ≻ ${prefix}lolivideo (video)
  ≻ ${prefix}storyanime (video)
  ≻ ${prefix}storysad (video)
  ≻ ${prefix}storyff (video)
  ≻ ${prefix}storyml (video)
  ≻ ${prefix}storypubg (video)
  ≻ ${prefix}sound (audio)
  ≻ ${prefix}patrick (stiker)
  ≻ ${prefix}sponsbob (stiker)
  ≻ ${prefix}gura (stiker)
  ≻ ${prefix}doge (stiker)
  ≻ ${prefix}cerpen (text)
  ≻ ${prefix}ceritahoror (text)
  
  *( ✒️ ) FFMpeg*
  ≻ ${prefix}stiker <ReplyGambar>
  ≻ ${prefix}smeme <Teks>
  ≻ ${prefix}smeme2 <Teks1/Teks2>
  ≻ ${prefix}run <ReplyImage>
  
  *( 📺 ) Maker Video*
  ≻ ${prefix}shaun <ReplyGambar>
  ≻ ${prefix}pubg <Name>
  ≻ ${prefix}skull <Name>
  ≻ ${prefix}hallowen <Name>
  ≻ ${prefix}greeting <Name>
  
  *( ✂️ ) Tools*
  > ${prefix}hd <ReplyGambar/Sticker>
  ≻ ${prefix}qrcode <TextOrLink>
  ≻ ${prefix}ssweb <Link>
  ≻ ${prefix}kalkulator
  
  *( 🖌️️ ) Logo*
  > ${prefix}logo1 <Name>
  > ${prefix}logo2 <Name>
  > ${prefix}logo4 <Name>
  > ${prefix}logo4 <Name>
  > ${prefix}logo5 <Name>
  > ${prefix}logo6 <Name>
  > ${prefix}logo7 <Name>
  > ${prefix}logo8 <Name>
  > ${prefix}logo9 <Name>
  
  *( 🔗 ) Short Url*
  ≻ ${prefix}bitly <Link>
  ≻ ${prefix}cutly <Link>
  ≻ ${prefix}tinyurl <Link>
  ≻ ${prefix}gg <Link>
  
  *( 📹 ) Auto*
  > ${prefix}autosticker
  ≻ ${prefix}Instagram
  ≻ ${prefix}cocofun
  ≻ ${prefix}facebook
  ≻ ${prefix}github (repo)
  ≻ ${prefix}youtube (mp4)(youtu.be)
  ≻ ${prefix}tiktok (nowm)
  > Use: Kirim Link (sesuai yg Di Atas), Video Atau Gambar (untuk Dijadikan Stiker) Ke bot!
  
  *( 🙏 ) THANKS*
  - Allah SWT.
  - Orang Tua Gweh
  - Zidni (Gweh)
  - Dika (base)
  - Nurutomo (function)
  - Xdev (Leveling)`
    avatar= await zidni.profilePictureUrl(sender,'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
   	const buttonsDefault = [{ urlButton: { displayText: `Whatsapp`, url : `https://wa.me/6281215205433` } },
   {
					quickReplyButton: {
						displayText: 'Game',
						id: 'gmenu'
					}
				},
				{
					quickReplyButton: {
						displayText: 'Speed',
						id: 'radi'
					}
				},	
				  {
					quickReplyButton: {
						displayText: 'Pemilik Bot',
						id: 'parner'
					}},]
	
			zidni.sendMessage(from,{
	caption: anu,

	document:{url:avatar},
	mimetype: 'image/jpeg', 
	fileName: `${pushname}`,
	fileLength: 99999999999999999999,
	templateButtons: buttonsDefault,footer: `Note\nGunakan Bot Dengan Bijak Gan, Jangan Buat Download Bokep Pake Mediafire!!`, quoted: m })
	
             }
         break
         case 'smeme2':
          if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
								if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (args.length < 2) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!quoted) return reply(`Reply Gambar!`)									
															          
             let media = await quoted.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let aaa = await (isTele ? uploadImage : uploadFile)(media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${args[0]}/${args[1]}.png?background=${aaa}`)
								zidni.sendImageAsSticker(m.chat, resu, m, { packname: global.packname, author: global.author })										
										} catch (e) {
											console.log(e)}
									break
									case 'smeme': case 'stickermeme': case 'stickmeme': {		
																 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
reply(mess.wait)
arg = args.join(' ')
let media = await quoted.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${link}`
memek = await zidni.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)}
break
			  case 'hd':
			   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
                 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`        
            reply(mess.wait)         
         let media = await quoted.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
             if (/image/.test(mime)) {
           let bangc = await getBuffer(`http://zekais-api.herokuapp.com/upscale?url=${link}&apikey=${global.zekais}`)
            zidni.sendMessage(m.chat, {image: bangc, caption: mess.success}, {quoted:m})
	  }
	  break
            
            case 'toimage': case 'toimg': {
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    zidni.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
									case 'swm': case 'wm':{
									 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
     if (!quoted) throw `Balas Video/Image/stiker Dengan Caption ${prefix + command}`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zidni.sendImageAsSticker(m.chat, media, m, { packname: `${q}`, author:``})
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await zidni.sendVideoAsSticker(m.chat, media, m, { packname: `${q}`, author: ``})
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'getcase':
if (!isOwner) return reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("bang.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
break
         case 'open':case'gacha':{
  if (!args[0]) reply(`Mau Buka Item Apa Kak\nContoh: open common 2`)
  let guy = args[1]
      if (args[0] === "common") {
      let _cm1 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _cc1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _cp1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let _ce1 = `${Math.floor(Math.random() * 700)}`.trim()
                    let _cu1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let cm1 = (_cm1 * 1)
                    let cc1 = (_cc1 * 1)
                    let cp1 = (_cp1 * 1)
                    let ce1 = (_ce1 * 1)
                    let cu1 = (_cu1 * 1)
                    let Hcom1 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm1 > 0 ? `\nMoney: ${cm1}` : ''}${ce1 > 0 ? `\nExp: ${ce1} *exp*` : ''}${cp1 > 0 ? `\nPotion: ${cp1} *potion*` : ''}${cc1 > 0 ? `\ncommon crate: ${cc1} *crate*` : ''}${cu1 > 0 ? `\nUncommon crate: ${cu1} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= guy) {
                        global.db.data.users[m.sender].common -= guy
                        global.db.data.users[m.sender].balance += cm1 * 1
                        global.db.data.users[m.sender].xp += ce1 * 1
                        global.db.data.users[m.sender].potion += cp1 * 1
                        global.db.data.users[m.sender].uncommon += cu1 * 1
                        global.db.data.users[m.sender].common += cc1 * 1
                        zidni.reply(m.chat, Hcom1, m)
                    } else zidni.reply(m.chat, 'Common crate anda tidak cukup', m)
      } else if (args[0] === 'uncommon') {
    let _ud1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _ue1 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _um1 = `${Math.floor(Math.random() * 400)}`.trim()
                    let _up1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let _umc1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uu1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _uc1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let ud1 = (_ud1 * 1)
                    let ue1 = (_ue1 * 1)
                    let um1 = (_um1 * 1)
                    let up1 = (_up1 * 1)
                    let umc1 = (_umc1 * 1)
                    let uu1 = (_uu1 * 1)
                    let uc1 = (_uc1 * 1)
                    let Hun1 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um1 > 0 ? `\nMoney: ${um1}` : ''}${ue1 > 0 ? `\nExp: ${ue1} *exp*` : ''}${ud1 > 0 ? `\nDiamond: ${ud1} *diamond*` : ''}${up1 > 0 ? `\nPotion: ${up1} *potion*` : ''}${uc1 > 0 ? `\nCommon crate: ${uc1} *crate*` : ''}${uu1 > 0 ? `\nUncommon crate: ${uu1} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= guy) {
                        global.db.data.users[m.sender].uncommon -= guy
                        global.db.data.users[m.sender].balance += um1 * 1
                        global.db.data.users[m.sender].diamond += ud1 * 1
                        global.db.data.users[m.sender].xp += ue1 * 1
                        global.db.data.users[m.sender].potion += up1 * 1
                        global.db.data.users[m.sender].common += uc1 * 1
                        global.db.data.users[m.sender].uncommon += uu1 * 1
                        zidni.reply(m.chat, Hun1, m)
                        if (umc1 > 0) {
                            reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc1} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += umc1 * 1
                        }
                    } else zidni.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
      } else if (args[0] === 'mythic') {
    let _mm1 = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _me1 = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _mp1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _mu1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _mc1 = `${Math.floor(Math.random() * 11)}`.trim()
                    let _ml1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _md1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let mm1 = (_mm1 * 1)
                    let mmm1 = (_mmm1 * 1)
                    let me1 = (_me1 * 1)
                    let mp1 = (_mp1 * 1)
                    let mu1 = (_mu1 * 1)
                    let mc1 = (_mc1 * 1)
                    let ml1 = (_ml1 * 1)
                    let md1 = (_md1 * 1)
                    let Mychat1 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm1 > 0 ? `\nMoney: ${mm1}` : ''}${me1 > 0 ? `\nExp: ${me1} *exp*` : ''}${md1 > 0 ? `\nDiamond: ${md1} *diamond*` : ''}${mp1 > 0 ? `\nPotion: ${mp1} *potion*` : ''}${mc1 > 0 ? `\nCommon crate: ${mc1} *crate*` : ''}${mu1 > 0 ? `\nUncommon crate: ${mu1} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= guy) {
                        global.db.data.users[m.sender].mythic -= guy
                        global.db.data.users[m.sender].balance += mm1 * 1
                        global.db.data.users[m.sender].diamond += md1 * 1
                        global.db.data.users[m.sender].xp += me1 * 1
                        global.db.data.users[m.sender].potion += mp1 * 1
                        global.db.data.users[m.sender].common += mc1 * 1
                        global.db.data.users[m.sender].uncommon += mu1 * 1
                        zidni.reply(m.chat, Mychat1, m)
                        if (mmm1 > 0) {
                            reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm1} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += mmm1 * 1
                        }
                        if (ml1 > 0) {
                            reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml1} Legendary Crate`)
                            global.db.data.users[m.sender].legendary += ml1 * 1
                        }
                    } else zidni.reply(m.chat, 'Mythic crate anda tidak cukup', m)
  } else if (args[0] === 'legendary') {
  let _lm1 = `${Math.floor(Math.random() * 10000)}`.trim()
                    let _le1 = `${Math.floor(Math.random() * 15000)}`.trim()
                    let _lp1 = `${Math.floor(Math.random() * 30)}`.trim()
                    let _lu1 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _lc1 = `${Math.floor(Math.random() * 75)}`.trim()
                    let _ll1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _lpp1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _ld1 = `${Math.floor(Math.random() * 16)}`.trim()
                    let _lmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let lm1 = (_lm1 * 1)
                    let le1 = (_le1 * 1)
                    let lp1 = (_lp1 * 1) 
                    let lu1 = (_lu1 * 1) 
                    let lc1 = (_lc1 * 1) 
                    let ll1 = (_ll1 * 1) 
                    let lpp1 = (_lpp1 * 1)       
                    let ld1 = (_ld1 * 1) 
                    let lmm1 = (_lmm1 * 1)
                    let Lechat1 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm1 > 0 ? `\nMoney: ${lm1}` : ''}${le1 > 0 ? `\nExp: ${le1} *exp*` : ''}${ld1 > 0 ? `\nDiamond: ${ld1} *diamond*` : ''}${lp1 > 0 ? `\nPotion: ${lp1} *potion*` : ''}${lc1 > 0 ? `\nCommon crate: ${lc1} *crate*` : ''}${lu1 > 0 ? `\nUncommon crate: ${lu1} *crate*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= guy) {
                        global.db.data.users[m.sender].legendary -= guy
                        global.db.data.users[m.sender].balance += lm1 * 1
                        global.db.data.users[m.sender].diamond += ld1 * 1
                        global.db.data.users[m.sender].xp += le1 * 1
                        global.db.data.users[m.sender].potion += lp1 * 1
                        global.db.data.users[m.sender].common += lc1 * 1
                        global.db.data.users[m.sender].uncommon += lu1 * 1
                        zidni.reply(m.chat, Lechat1, m)
                        if (lmm1 > 0) {
                            reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm1} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm1 * 1
                        }
                        if (ll1 > 0 || lpp1 > 0) {
                             reply(`*Selamat anda mendapatkan item Epic yaitu*${ll1 > 0 ? `\n${ll1} Legendary Crate` : ''}${lpp1 > 0 ? `\n${lpp1} Pet Crate` : ''}`)
                            global.db.data.users[m.sender].legendary += ll1 * 1
                            global.db.data.users[m.sender].pet += lpp1 * 1
                        }
                    } else zidni.reply(m.chat, 'Legendary crate anda tidak cukup', m)}}
    break
    case 'hunt':case'adventure':case'mulung':{
    try { 
const random = (angka) => {
        return Math.floor(Math.random() * angka) + 20}
function kol(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':') }
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (300000 - __timers) 
        let timers = kol(_timers)
        if (global.db.data.users[m.sender].healt > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
            let healt = random(90)
            let exp = (Math.floor(Math.random() * 400))
            let uang = `${Math.floor(Math.random() * 400)}`.trim() 
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _diamond = randomNomor(5)
            let diamond = (_diamond * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let legendary = (_legendary * 1)
             let str = `
Nyawa mu berkurang -${healt * 1} karena Kamu telah berpetualang sampai ${pickRandom(['Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German', 'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Bulan', 'Pluto', 'Matahari', 'Hatinya dia', '...'])} dan mendapatkan
*exp:* ${exp} 
*uang:* ${uang}
*sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*uncommon crate:* ' + uncommon + ''}
`.trim()
            global.db.data.users[m.sender].healt -= healt * 1
            global.db.data.users[m.sender].xp += exp * 1
            global.db.data.users[m.sender].balance += uang * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            zidni.sendBut(m.chat,str, `${pushname}`, 'HEAL', '.heal', m)
            if (mythic > 0) {
                   global.db.data.users[m.sender].mythic += mythic * 1
                   zidni.sendBut(m.chat, '*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + ' Mythic Crate', `${pushname}`, 'Open', '.open mythic 1', m)
            }
            if (legendary > 0) {
                global.db.data.users[m.sender].legendary += legendary * 1
                zidni.sendBut(m.chat, '*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate', `${pushname}`, 'Open', '.open legendary 1', m)
            }
            } else zidni.sendBut(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`.trim(), `${pushname}`, 'Inventory', '.inv', m)
        } else zidni.send2But(m.chat, 'Minimal 80 health untuk bisa berpetualang, beli nyawa dulu dengan ketik *' + usedPrefix + 'buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'heal*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + usedPrefix + 'claim*', `${pushname}`, 'Heal', '#heal', 'Buy Potion', '.buy potion 1', m)
    } catch (e) {
        console.log(e)
        zidni.reply(m.chat, 'Error', m)
        
        }}
        break
        case 'ngewe': {
         if (!m.isGroup) throw mess.group
                  function kol(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':') }
        let __timers = (new Date - global.db.data.users[m.sender].lastngewe)
        let _timers = (3600000 - __timers) 
        let timer = kol(_timers)
        if (new Date - global.db.data.users[m.sender].lastngewe > 3600000){   
            let member = participants.map(u => u.id)
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let ana = randomNomor(2)
            global.db.data.users[m.sender].anak += ana
              
            setTimeout(() => {
                     m.reply(`Selamat\nKamu Mendapatkan ${ana} Anak Dari Hasil Ngewe Tadi Bersama *@${jodoh.split('@')[0]}*`)
                     }, 45000) 
            setTimeout(() => {
                     m.reply(`Crott... Di *${(pickRandom(['Muka','Tangan','Mulut','Kaki','Vagina','Paha']))}*`)
                     }, 38000) 
            setTimeout(() => {
                     m.reply(`Ah ah ah..`)
                     }, 34000) 
              setTimeout(() => {
                     m.reply(`Mulai Menggenjot..`)
                     }, 30000) 
              setTimeout(() => {
                     m.reply(`Membuka Seluruh Bajunya`)
                     }, 24000) 
            setTimeout(() => {
                     m.reply(`Tertangkap..`)
                     }, 20000) 

                     setTimeout(() => {
                     m.reply(`Mulai Menangkap`)
                      }, 18000)

                     setTimeout(() => {
                     m.reply(`Menemukan *${(pickRandom(['Anak Sd','Tante Tante','Anak Smp','Anak Sma','Cewek Cantik','Cewek Jepang','Cewek Korea','Janda','Cewek Perawan','Gadis Kecil','Loli']))}* (@${jodoh.split('@')[0]})`)
                     }, 15000) 

                     setTimeout(() => {
                     m.reply(`Memasuki ${(pickRandom(['Hutan','Gang Sempit','Hotel','Gedung Sekolah','Bandara','Rumah']))}`)
                     }, 10000) 

                     setTimeout(() => {
                     m.reply('_Mencari Cewek..._')
                     }, 0) 

                    } else zidni.sendBut(m.chat, `Anda Sudah Kehabisan Sperma\ntunggu selama ${timer} lagi untuk Ngewe lagi`, `${pushname}`, 'ok', 'ok', m)
         db.data.users[m.sender].lastngewe = new Date * 1}
            break
            case 'lb':case'leaderboard':
            {
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]}
function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }}
  else return a => a === undefined ? _default : a}
function enumGetKey(a) {
  return a.jid}
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let sortedxp = users.map(toNumber('xp')).sort(sort('xp'))
  let sortedLim = users.map(toNumber('balance')).sort(sort('balance'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersxp = sortedxp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedxp.length)
  let text = `
┌「 *Level Leaderboard Top ${len}* 」
├ You: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*
│
${sortedLevel.slice(0, len).map(({ jid, level }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${zidni.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}
└────
┌「 *XP Leaderboard Top ${len}* 」
├ You: *${usersxp.indexOf(m.sender) + 1}* dari *${usersxp.length}*
│
${sortedxp.slice(0, len).map(({ jid, xp }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${zidni.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${xp} Exp*`).join`\n`}
└────
┌「 *Money Leaderboard Top ${len}* 」
├ You: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*
│
${sortedLim.slice(0, len).map(({ jid, balance }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${zidni.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${balance} Money*`).join`\n`}
└────`.trim()
  zidni.sendTextWithMentions(m.chat,text,m)
}
break
  case 'logo1':{
             if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
            reply(wet)
            zidni.sendMessage(from, { image: { url: `https://api.akuari.my.id/ephoto/team-logo-ninja-1?text=${q}` }, caption: 'Nih..' }, { quoted: m })}
               break
            case 'logo2':{
             if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
            reply(wet)
            zidni.sendMessage(from, { image: { url: `https://api.akuari.my.id/ephoto/team-logo-ninja-2?text=${q}` }, caption: 'Nih..' }, { quoted: m })}
            break
            case 'logo3':{
             if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
            reply(wet)
            zidni.sendMessage(from, { image: { url: `https://api.akuari.my.id/ephoto/team-logo-ninja-3?text=${q}` }, caption: 'Nih..' }, { quoted: m })}
            break
            case 'logo4':{
             if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
            reply(wet)
            zidni.sendMessage(from, { image: { url: `https://api.akuari.my.id/ephoto/team-logo-ninja-4?text=${q}` }, caption: 'Nih..' }, { quoted: m })}
            break
            case 'logo5':{
             if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
            reply(wet)
            zidni.sendMessage(from, { image: { url: `https://api.akuari.my.id/ephoto/team-logo-ninja-5?text=${q}` }, caption: 'Nih..' }, { quoted: m })}
            break
            case 'logo6':{
             if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
            reply(wet)
            zidni.sendMessage(from, { image: { url: `https://api.akuari.my.id/ephoto/team-logo-ninja-6?text=${q}` }, caption: 'Nih..' }, { quoted: m })}
            break
            case 'logo7':{
             if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
            reply(wet)
            zidni.sendMessage(from, { image: { url: `https://api.akuari.my.id/ephoto/team-logo-ninja-7?text=${q}` }, caption: 'Nih..' }, { quoted: m })}
            break
            case 'logo8':{
             if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
            reply(wet)
            zidni.sendMessage(from, { image: { url: `https://api.akuari.my.id/ephoto/team-logo-ninja-8?text=${q}` }, caption: 'Nih..' }, { quoted: m })}
            break
            case 'logo9':{
             if (args.length < 1) return reply(`Contoh:\n${command} ZidniGanz`)
            reply(wet)
            zidni.sendMessage(from, { image: { url: `https://api.akuari.my.id/ephoto/team-logo-ninja-9?text=${q}` }, caption: 'Nih..' }, { quoted: m })}
            break
            case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break 	
 case 'family100': {
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if ('family100'+m.chat in _family100) {
reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://fatiharridho.my.id/database/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
 pesan: await zidni.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebakgambar': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw`Masih Ada Sesi Yang Belum Diselesaikan!`
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendMedia(m.chat, result.img, '', m, { caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s` }).then(() => {
console.log("Jawaban: " + result.jawaban)
sen(`Tebak Gambar\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.jawaban}*`)
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , ``, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} 
break
case 'tebakkata': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
sen(`Tebak Kata\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.jawaban}*`)
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , ``, m)
delete tebakkata[m.sender.split('@')[0]]
}
} 
break
case 'tebakbendera': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1        
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://yx-api.herokuapp.com/api/kuis/tebakbendera')
let result = anu.nama
zidni.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n${anu.bendera}\nWaktu : 60s`, m).then(() => {
zidni.sendMessage(`${owner}@s.whatsapp.net`, {text: `Tebak Bendera From wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result}*`}) 
console.log("Jawaban: " + result)
tebakbendera[m.sender.split('@')[0]] = result.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], "Waktu Habis\nJawaban: " + result, ``, m)
delete tebakbendera[m.sender.split('@')[0]]
}
} 
break
case 'tebakkalimat': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1        
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
sen(`Tebak Kalimat\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.jawaban}*`)
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , ``, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} 
break
case 'tebaksiapa': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
sen(`Tebak Siapa\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.jawaban}*`)
console.log("Jawaban: " + result.jawaban)
siapaaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'tebaksiapa', buttonText: { displayText: 'Tebak Siapa' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , ``, m)
delete siapaaku[m.sender.split('@')[0]]
}
} 
break
case 'tebakkabupaten':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendImage(m.chat, result.url, `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : 60s`, m).then(() => {
sen(`Tebak Kabupaten\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.title}*`)
console.log("Jawaban: " + result.title)
tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'tebak kabupaten', buttonText: { displayText: 'Tebak Kabupaten' }, type: 1 }], "Waktu Habis\nJawaban: " + result.title , ``, m)
delete tebakkabupaten[m.sender.split('@')[0]]
}
}
break
 case 'tebakkimia':{
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : 60s`, m).then(() => {
sen(`Tebak Kimia\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.unsur}*`)
console.log("Jawaban: " + result.unsur)
tebakkimia[m.sender.split('@')[0]] = result.unsur.toLowerCase()
})
await sleep(60000)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'tebak kimia', buttonText: { displayText: 'Tebak Kimia' }, type: 1 }], "Waktu Habis\nJawaban: " + result.unsur , ``, m)
delete tebakkimia[m.sender.split('@')[0]]
}
} 
break
case 'tebaklirik': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
sen(`Tebak Lirik\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.jawaban}*`)
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , ``, m)
delete tebaklirik[m.sender.split('@')[0]]
}
}
break
case 'tebaktebakan': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
sen(`Tebak Tebakan\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.jawaban}*`)
tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , ``, m)
delete tebaktebakan[m.sender.split('@')[0]]
}
}
break
case 'caklontong': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://fatiharridho.my.id/database/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
sen(`Cak Lontong\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.jawaban}*`)

caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Cak Lontong' }, type: 1 }], `Waktu Habis\nJawaban : ${result.jawaban}\nDeskripsi : ${result.deskripsi}` , ``, m)
delete caklontong[m.sender.split('@')[0]]
}
}
break
case 'susunkata': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
sen(`Susun Kata\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.jawaban}*`)
susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
zidni.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `Waktu Habis\nJawaban : ${result.jawaban}` , ``, m)
delete susunkata[m.sender.split('@')[0]]
}
}
break
case 'tekateki': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zidni.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
sen(`Teka Teki\nFrom wa.me/${m.sender.split('@')[0]}\n\nJawaban : *${result.jawaban}*`)
tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
	zidni.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: 'Teka Teki' }, type: 1 }], `Waktu Habis\nJawaban : ${result.jawaban}` , ``, m)
delete tekateki[m.sender.split('@')[0]]
}
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isOwner) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }
                if (budy.startsWith('🗿')) {
                    if (!isOwner) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isOwner) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    zidni.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
