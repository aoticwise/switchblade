const { CanvasTemplates, Command } = require('../../')

const { MessageAttachment } = require('discord.js')

module.exports = class HereWeGoAgain extends Command {
  constructor (client) {
    super({
      name: 'herewegoagain',
      aliases: ['ahshit', 'ahshitherewegoagain', 'ashwga', 'hwga'],
      category: 'images',
      requirements: { canvasOnly: true },
      parameters: [{
        type: 'image',
        missingError: 'commands:herewegoagain.missingImage'
      }]
    }, client)
  }

  async run ({ t, author, channel }, image) {
    const hwga = await CanvasTemplates.herewegoagain(image)
    channel.send({ files: [new MessageAttachment(hwga, 'ashwga.png')] })
  }
}
