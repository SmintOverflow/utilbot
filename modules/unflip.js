
/*
  Table unflip by Klendi Gocci
	This contains other dope things
	18.7.2017
	https://github.com/klendigocci
	https://twitter.com/klendigocci
	Example:
	Klendi: (╯°□°）╯︵ ┻━┻
	Subiex(bot): ┬─┬﻿ ノ( ゜-゜ノ)
*/

const Discord = require('discord.js')
const Subiex = require('../bot.js')
const bot = Subiex.bot
const config = Subiex.config

bot.on('message', message => {
    if (message.content.includes('(╯°□°）╯︵ ┻━┻')) {
    message.channel.send('┬─┬ ノ( ゚- ゚ノ)')
}
})
