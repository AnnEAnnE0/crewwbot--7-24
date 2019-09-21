const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Botun konsoluna ${client.user.tag} giriş yaptınız!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam ve Rahmetullahi ve Berekatuhu ve Magfiratuhu Ebeden ve Daimen');

}
  if (msg.content.toLowerCase() === '+kurucuiletisim') {
    msg.reply('https://steamcommunity.com/profiles/76561198839515930/');
  }

  if (msg.content.toLowerCase() === '+fixann') {
    msg.channel.sendMessage('https://steamcommunity.com/id/SgBox/');
  }

  if (msg.content.toLowerCase() === 'seni kim yarattı?') {
    msg.channel.sendMessage('Buğra beyimiz.');
  }

  if (msg.content.toLowerCase() === ';;savurduyarrani') {
    msg.channel.sendMessage('https://www.youtube.com/watch?v=kIEOHqFzfa4');
  }

  if (msg.content.toLowerCase() === '??söv') {
    msg.channel.sendMessage('**ananın amına teletabinin antenlerini sokar göbeğindeki televizyondan ulusal porno yayını yaparımananı özgürlük heykelinin yanmayan meşalesinde siker şehri duman ederimhollywood bulvarında donla gezen ananın amına topuklu ayakkabı sokayımananı ikiz kulelerinin yedinci katına cıkartır amına uçakla girerim..ananın o dazlak kafasına teflon tavayla vurur sersemletir sikerim.ananın buruşmuş amına tefal ütü basar dümdüz ederim.ananın amına windows 7 kurar mavi ekran hatası verinceye kadar sikerim.ananın amına telefon kablosu sokar paralel hattan bacını skermgardolapta tangasını arayan ananın kafasını dolap kapagına sıkıştırır müjde ar gibi sikerimdağdan inmediği icin yüzme bilmeyen ananı büyük pasificte 1 ton boşalan beyaz balinalarla beraber-- siker olimpiyat yüzme şampiyonasında altın madalya kazandırırımkırmızı eşarp giyip ormanda kırmızı başlıklı kız gibi takılan anana kurt gibi yaklaşır amını param parça ederimmmpikachuuuuuuuuu diye camdan atlayan sipastik ananın amına poke topu fırlatırımananı balbasaurun sarmaşık kırbacıyla dolar pikacuyla kanka olur veririm elektriğiedisonla kanka olur ananı fakir mahallenizde yanmayan sokak direğine bağlar sike sike trafoyu patlatırımhani benim gençliğim nerde diyen orospu cocugu seni.tavşan kostümü giyip fotograf cektirince kendini playboy dergisinde kapak sanan ananın amına evdeki elektrik süpürgesini sokarımananla karşılıklı salsa yaparken piste takla atarak giren orospu cocugu** ');
  }
});
client.on('guildBanAdd' , (guild, user) => {
  let banned = guild.channels.find('name', 'banned');
  if (!banned) return;
  banned.send('**Bir suçun cezasıda olmalı!** https://media.giphy.com/media/8njotXALXXNrW/giphy.gif '+ user.username +'**uza.** :spy:' );
});
client.login(process.env.TOKEN);
