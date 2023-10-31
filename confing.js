/**
   * Create By Anandhu.
   * Contact Me on wa.me/919497705819
   * Follow https://github.com/DARKLEE-bot*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zahwazein.xyz': 'Your Key',
}

// Other
global.owner = ['919497705819']
global.premium = ['919497705819']
global.packname = 'TEAM X BOT MD'
global.author = 'WhatsApp Bot'
global.sessionName = 'DARKLEE'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bots Must Be Admins First!',
    owner: 'Owner Bot Special Features',
    group: 'Feature Used For Groups Only!',
    private: 'Feature Used For Private Chat Only!',
    bot: 'Bot Number User Specific Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
