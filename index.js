const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'SakshamNehra.aternos.me',
    port: 53763,
    username: 'APKbot',
    password: '',
    logErrors: false     // set if you want to use password-based auth (may be unreliable). If specified, the `username` must be an email
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
