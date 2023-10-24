require("./module")

global.owner = "6283809861522"
global.namabot = "Lyndichan"
global.namaCreator = "YannXD`"
global.autoJoin = false
global.antilink = false
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = "© by YannXD"
global.author = "YannXD 6283809861522"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
