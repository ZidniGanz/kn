/**
   Maksih Buat Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
  amel: 'https://melcanz.com',
  zeks: 'https://zeks.me',
  nrtm: 'https://nurutomo.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = {
  'https://melcanz.com': 'melcantik',
    'https://zeks.me': 'apivinz',
     'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Other
global.zekais = 'Ddglle8M'
global.premi = []
hit_today = []
global.autorecording = true
global.autoketik = false
global.available = true
global.autoLevel = true,
global.limitawal = {
    premium: "unlimited",
    free: "50",
    }
global.owner = ['6281215205433']
global.packname = 'Loli-Mdོ'
global.author = 'By Zidni Ganz'
global.usedPrefix = ['']
global.prefa = ['','!','.','🐦','🐤','🗿']
global.wet = 'Tunggu Bentar Gann'
global.end ='Limit Harian Kamu Sudah Habis Silikan Claim Harian Atau Buy Limit Atau Tunggu Sampai Limit Di riset(Jam 12 Malam)!'
global.mess = {
    success: 'Nih Gann',
    admin: 'Lu Admin!',
    botAdmin: 'Gua Bukan Admin Gann',
    owner: 'Lu Bukan Owner Gua Gann',
    group: 'Khusus Group Gan',
    wait: 'Tunggu Bentar Gann',
    }
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
