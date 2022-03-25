const { Command, SwitchbladeEmbed, Color, CommandError } = require('../../')

const channel = client.channels.cache.get(channel => channel.name === 'the channel name')
channel.send(message)
