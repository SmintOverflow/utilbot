  
const Subiex = require('../bot.js')

Subiex.registerCommand('lenny', 'default', (message, bot) => {
  let managePerms = message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')
  if (managePerms) {
    message.delete()
    message.channel.send('( ͡° ͜ʖ ͡°)')
  } else {
    message.channel.send('( ͡° ͜ʖ ͡°)')
  }
}, ['lenny'], 'its lenny ffs', '[]')
