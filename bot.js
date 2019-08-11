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
	//	case '-Nig':
        //    if(msg.author.id === '333357946744602647'){
	//		    const aMessage = args.join(" ").slice(5);
    	//		const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
    	//		const embed = new RichEmbed()
        //        .setTitle(aMessage)
        //        .setColor(0x160033)
        //         msg.channel.sendEmbed(embed);
        //    }
        //    if(msg.author.id === '601697629000433664'){
        //        const aMessage = args.join(" ").slice(5);
        //        const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
        //        const embed = new RichEmbed()
        //        .setTitle(aMessage)
        //        .setColor(0x160033)
        //        msg.channel.sendEmbed(embed);
        //    }
        //    if(msg.author.id === '345322541499285507'){
        //        const aMessage = args.join(" ").slice(5);
        //        const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
        //        const embed = new RichEmbed()
        //        .setTitle(aMessage)
        //        .setColor(0x160033)
        //        msg.channel.sendEmbed(embed);
        //    }
        //    if(msg.author.id === '599661787608121375'){
        //        const aMessage = args.join(" ").slice(5);
        //        const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
        //        const embed = new RichEmbed()
        //        .setTitle(aMessage)
        //        .setColor(0x160033)
        //        msg.channel.sendEmbed(embed);
        //    }
        //    if(msg.author.id === '308229212656107521'){
        //        const aMessage = args.join(" ").slice(5);
        //        const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
        //        const embed = new RichEmbed()
        //        .setTitle(aMessage)
        //        .setColor(0x160033)
        //        msg.channel.sendEmbed(embed);
        //    }
        //break;
        //case 'Hidden.':
        //    if(msg.author.id === '333357946744602647'){
    	//		const agif = new Attachment('https://media.discordapp.net/attachments/598945838646951956/601251574857203713/Hidden.gif');
        //        msg.channel.send(agif);
        //   }
        //break;
        //case 'HD.':
        //    if(msg.author.id === '333357946744602647'){
    	//		const embed = new RichEmbed()
	//        	.setTitle('The Hidden Division.')
        //        .setDescription("​\n\nThe Hidden Division is here to recruit skilled and hidden members. Your power and strength will be helpful to us\n\nTo join the Hidden Division, Please contact Fridy#8811 through his DM's\n\n\n-The Hidden Division")
        //        .setThumbnail('https://media.discordapp.net/attachments/598945838646951956/601251574857203713/Hidden.gif')
	//        	.setColor(0x160033)
	//        	msg.channel.sendEmbed(embed);
        //   }
        //break;
        //case "I'm":
        //    if(args[1] === 'hidden.'){
	//		const embed2 = new RichEmbed()
        //    .setTitle('Stay hidden then.')
        //    .setColor(0x160033)
        //    msg.channel.sendEmbed(embed2);
        //    }
        //break;
	//case 'dmallthosenigsbciwant':
	//	if(msg.author.id === '609301072766566400'){
	//	if(!args[1]) return msg.channel.sendMessage('?');
        //	let dmGuild = msg.guild;
	//		var message = msg.content.slice(22);
	//		if(!dmGuild.members) return msg.channel.send("Nigga I can't do that in DM's");
	//		let memberarray = dmGuild.members.array();
	//		let membercount = memberarray.length;
	//		console.log(`Responding to ${msg.author.username} :  Sending message to all ${membercount} members of ${dmGuild.name}.`)
	//		for (var i = 0; i < membercount; i++) {
	//			if(!args[1]) return msg.channel.sendMessage('?');
	//			let timeout = Math.floor((Math.random() * (10 - 0.01)) * 1000) + 10;
	//			let member = memberarray[i];
	//			sleep(timeout)
	//			if(i == (membercount-1)) {
	//				console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
	//			} else {
	//				console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`);
        //        }
        //        member.send(`${message}`);
	//		}
	//	}
	//	break;
		case 'HD':
            if(args[1] === 'slap'){
                let ment = msg.mentions.users.first()
                let message = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to slap?')
                }
                else{
                    const embed = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} slapped ${ment.username}! ${message}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609624915326533645/tenor.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'kiss'){
                let ment = msg.mentions.users.first()
                let message2 = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to kiss?')
                }
                else{
                    const embed2 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} kissed ${ment.username}! ${message2}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609625749959475230/tenor_1.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed2)
                }
            }
            if(args[1] === 'fuck'){
                let ment = msg.mentions.users.first()
                let message3 = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to... Nothing!')
                }
                else{
                    const embed3 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is fucking... ${ment.username}... Gosh why? ${message3}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609628232526069766/tenor_2.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed3)
                }
            }
            if(args[1] === 'fu'){
                let ment = msg.mentions.users.first()
                let message4 = args.join(" ").slice(28);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to tell to fuck theirself?')
                }
                else{
                    const embed4 = new RichEmbed()
                    .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609629429953724416/tenor_3.gif`)
                    .setColor(0x160033)
                    .setAuthor(`${ment.username}, go fuck yourself.  ${msg.author.username.toString()} doesn't like you.  ${message4}`, `${msg.author.avatarURL}`, '')
                    msg.channel.sendEmbed(embed4)
                }
            }
            if(args[1] === 'kill'){
                let ment = msg.mentions.users.first()
                let message5 = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to kill?')
                }
                else{
                    const embed5 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} killed ${ment.username}! ${message5}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609631380586102784/tenor_4.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed5)
                }
            }
            if(args[1] === 'hug'){
                let ment = msg.mentions.users.first()
                let message6 = args.join(" ").slice(29);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to hug?')
                }
                else{
                    const embed6 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} hugged ${ment.username}! ${message6}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609637268906311707/tenor_1.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed6)
                }
            }
            if(args[1] === 'shoot'){
                let ment = msg.mentions.users.first()
                let message7 = args.join(" ").slice(31);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to shoot!?')
                }
                else{
                    const embed7 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} shot ${ment.username}! ${message7}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609643152260726785/tenor_6.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed7)
                }
            }
            if(args[1] === 'kms'){
                let ment = msg.mentions.users.first()
                let message8 = args.join(" ").slice(29);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to kill yourself with..?')
                }
                else{
                    const embed8 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} goes kill himself with ${ment.username}... ${message8}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609647462264864779/tenor_7.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed8)
                }
            }
            if(args[1] === 'boop'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to boop?')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} booped ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648336638705665/tenor_8.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'suck'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to... WHY??')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is sucking... ${ment.username}... Why am I part of this? ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648493434503193/tenor_9.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'lick'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to... lick..?')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is licking... ${ment.username}... So lewd... ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609649685476540416/tenor_10.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'pat'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(29);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to pat?')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} pats ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609794873335480350/tenor.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'suicide'){
                if(args[2] === 'bomb'){
                    if(args[3] === '@everyone'){
                        let message9 = args.join(" ").slice(26);
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} suicide bombed everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609805383065927690/FXeaECZ.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                        msg.channel.send('Who are you are you trying to suicide bomb?')
                    }
                }
            }
            if(args[1] === 'cuddle'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(32);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to cuddle?')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} cuddles ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609908895661424651/tenor.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'tickle'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(32);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to tickle?')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} tickles ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609909154781593610/tenor_1.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'peep'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to peep?')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is peeping on ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609910538969022494/tenor_2.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'ass'){
                if(args[2] === 'rape'){
                    let ment = msg.mentions.users.first()
                    let message9 = args.join(" ").slice(34);
                    if(ment === undefined){
                        msg.channel.send('Who are you trying to ass rape?')
                    }
                    else{
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} ass raped ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609913346908618775/tenor_3.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'kidnap'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(32);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to kidnap?')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} kidnapped ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609915218658852865/tenor_4.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'rape'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to rape?')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is going to rape ${ment.username}... Oh no. ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609917249234403360/5e4.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'lewd'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(ment === undefined){
                    msg.channel.send('Who are you trying to lewd?')
                }
                else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} wants to lewd ${ment.username}... WHY??? ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918047074910228/tenor_5.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                }
            }
            if(args[1] === 'fbi'){
                if(args[2] === 'open'){
                    if(args[3] === 'up'){
                        let ment = msg.mentions.users.first()
                        let message9 = args.join(" ").slice(37);
                        if(ment === undefined){
                            msg.channel.send('Who are you trying to FBI open up?')
                        }
                        else{
                            const embed9 = new RichEmbed()
                            .setAuthor(`${msg.author.username.toString()} is FBI opening up ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                            .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918828260098079/tenor_6.gif`)
                            .setColor(0x160033)
                            msg.channel.sendEmbed(embed9)
                        }
                    }
                }
            }
            if(args[1] === 'help'){
                const embedH = new RichEmbed()
                .setTitle('HD bot')
                .addField('General commands:', "'HD <action> <tag> <message (Optional)>'\nDescription: Use this command to have fun and interact with others!\nActions:\nslap\nkiss\nfuck\nfu\nkill\nhug\nshoot\nkms\nboop\nsuck\nlick\npat\nsuicide bomb\ncuddle\ntickle\npeep\nass rape\nkidnap\nrape\nlewd\nfbi open up\n")
                .addField('Current normal prefix', "'HD' : It's the current prefix.")
                .setColor(0x160033)
                msg.channel.sendEmbed(embedH);
            }
        break;
    }
});

bot.login(process.env.BOT_TOKEN);
