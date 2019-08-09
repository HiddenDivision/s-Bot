const {Client, Attachment, RichEmbed, Guild, GuildMember, MessageMentions, Role} = require('discord.js');
const bot = new Client()
const testpre = '-'
let state = '0'

bot.on('ready', ()=>{
    console.log('Online.')
    bot.user.setActivity('you.', { type: ('LISTENING')})
});

bot.on('message', msg=>{
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    let args = msg.content.substring(testpre.length - 1).split(" ");
	switch(args[0]){
		case '-Nig':
            if(msg.author.id === '333357946744602647'){
			    const aMessage = args.join(" ").slice(5);
    			const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
    			const embed = new RichEmbed()
                .setTitle(aMessage)
                .setColor(0x160033)
                 msg.channel.sendEmbed(embed);
            }
            if(msg.author.id === '601697629000433664'){
                const aMessage = args.join(" ").slice(5);
                const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
                const embed = new RichEmbed()
                .setTitle(aMessage)
                .setColor(0x160033)
                msg.channel.sendEmbed(embed);
            }
            if(msg.author.id === '345322541499285507'){
                const aMessage = args.join(" ").slice(5);
                const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
                const embed = new RichEmbed()
                .setTitle(aMessage)
                .setColor(0x160033)
                msg.channel.sendEmbed(embed);
            }
            if(msg.author.id === '599661787608121375'){
                const aMessage = args.join(" ").slice(5);
                const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
                const embed = new RichEmbed()
                .setTitle(aMessage)
                .setColor(0x160033)
                msg.channel.sendEmbed(embed);
            }
            if(msg.author.id === '308229212656107521'){
                const aMessage = args.join(" ").slice(5);
                const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
                const embed = new RichEmbed()
                .setTitle(aMessage)
                .setColor(0x160033)
                msg.channel.sendEmbed(embed);
            }
        break;
        case 'Hidden.':
            if(msg.author.id === '333357946744602647'){
    			const agif = new Attachment('https://media.discordapp.net/attachments/598945838646951956/601251574857203713/Hidden.gif');
                msg.channel.send(agif);
           }
        break;
        case 'HD.':
            if(msg.author.id === '333357946744602647'){
    			const embed = new RichEmbed()
	        	.setTitle('The Hidden Division.')
                .setDescription("​\n\nThe Hidden Division is here to recruit skilled and hidden members. Your power and strength will be helpful to us\n\nTo join the Hidden Division, Please contact Fridy#8811 through his DM's\n\n\n-The Hidden Division")
                .setThumbnail('https://media.discordapp.net/attachments/598945838646951956/601251574857203713/Hidden.gif')
	        	.setColor(0x160033)
	        	msg.channel.sendEmbed(embed);
           }
        break;
        case "I'm":
            if(args[1] === 'hidden.'){
			const embed2 = new RichEmbed()
            .setTitle('Stay hidden then.')
            .setColor(0x160033)
            msg.channel.sendEmbed(embed2);
            }
        break;
    }
});

bot.login(process.env.BOT_TOKEN);
