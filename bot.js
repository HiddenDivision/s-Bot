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
	case 'dmallthosenigsbciwant':
		if(msg.author.id === '609301072766566400'){
		if(!args[1]) return msg.channel.sendMessage('?');
        	let dmGuild = msg.guild;
			var message = msg.content.slice(22);
			let memberarray = dmGuild.members.array();
			let membercount = memberarray.length;
			const regard2 = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif')
			console.log(`Responding to ${msg.author.username} :  Sending message to all ${membercount} members of ${dmGuild.name}.`)
			for (var i = 0; i < membercount; i++) {
				if(!msg.author.id === '333357946744602647') return msg.channel.sendMessage("You are not the leader. You can't do that.");
				if(!args[1]) return msg.channel.sendMessage('?');
				if(!msg.author.id === '333357946744602647') return msg.channel.sendMessage("You are not the leader. You can't do that.");
				let timeout = Math.floor((Math.random() * (10 - 0.01)) * 1000) + 10;
				let member = memberarray[i];
				sleep(timeout)
				if(i == (membercount-1)) {
					console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
				} else {
					console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`);
                }
                if(state === '0'){
                    member.send(`${message}`);
                    return
                }
                var reqTimer = setTimeout(function wakeUp() {
                    if(state === '1'){
                    member.send(`${message}`);
                    return reqTimer = setTimeout(wakeUp, 2000);
                    }
                }, 2000);
			}
		}
		break;
    }
});

bot.login(process.env.BOT_TOKEN);
