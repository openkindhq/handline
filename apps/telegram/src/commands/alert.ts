import { CustomContext } from "../trpc";
import { telegramFormat } from "../utils";

const countries = [
  "afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda",
  "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain",
  "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia",
  "bosnia and herzegovina", "botswana", "brazil", "brunei", "bulgaria", "burkina faso",
  "burundi", "cabo verde", "cambodia", "cameroon", "canada", "central african republic",
  "chad", "chile", "china", "colombia", "comoros", "congo (congo-brazzaville)",
  "costa rica", "croatia", "cuba", "cyprus", "czechia", "côte d'ivoire",
  "denmark", "djibouti", "dominica", "dominican republic", "ecuador", "egypt",
  "el salvador", "equatorial guinea", "eritrea", "estonia", "eswatini", "ethiopia",
  "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana",
  "greece", "grenada", "guatemala", "guinea", "guinea-bissau", "guyana", "haiti",
  "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland",
  "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati",
  "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar", "malawi", "malaysia",
  "maldives", "mali", "malta", "marshall islands", "mauritania", "mauritius", "mexico",
  "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique",
  "myanmar (burma)", "namibia", "nauru", "nepal", "netherlands", "new zealand", "nicaragua",
  "niger", "nigeria", "north korea", "north macedonia", "norway", "oman", "pakistan",
  "palau", "panama", "papua new guinea", "paraguay", "peru", "philippines", "poland",
  "portugal", "qatar", "romania", "russia", "rwanda", "saint kitts and nevis",
  "saint lucia", "saint vincent and the grenadines", "samoa", "san marino", "sao tome and principe",
  "saudi arabia", "senegal", "serbia", "seychelles", "sierra leone", "singapore", "slovakia",
  "slovenia", "solomon islands", "somalia", "south africa", "south korea", "south sudan",
  "spain", "sri lanka", "sudan", "suriname", "sweden", "switzerland", "syria", "taiwan",
  "tajikistan", "tanzania", "thailand", "timor-leste", "togo", "tonga", "trinidad and tobago",
  "tunisia", "turkey", "turkmenistan", "tuvalu", "uganda", "ukraine", "united arab emirates",
  "united kingdom", "united states of america", "uruguay", "uzbekistan", "vanuatu", "vatican city",
  "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"
];

export default async function alert(ctx: CustomContext) {
  const search: Array<string> = ctx.message.text.split(" ");
  const country = search.slice(1).join(" ") || "";
  if (!country) {
    return ctx.reply(
      telegramFormat(
        `
        🔔 Register updates for your country
  
When update channels are created for a crisis in your country, you will be alerted.
  
/alert [country]
Example: \`/alert India\`
        `
      ),
      {
        parse_mode: "MarkdownV2",
      }
    );
  }

  if(!countries.includes(country)){
    return ctx.reply(
      telegramFormat(
        `
❌ Country ${country} not found
        `
      ),
      {
        parse_mode: "MarkdownV2",
      }
    )
  }
  

  if(!ctx.chat.username){
    return ctx.reply(
      telegramFormat(
        `
❌ You need to have an username set
        `
      ),
      {
        parse_mode: "MarkdownV2",
      }
    )
  }
  await ctx.trpc.commands.alert.register.query({
    user: ctx.chat.username,
    country: country
  })

  
  ctx.reply(
    telegramFormat(
      `
✅ Successfully registered for updates in India.
      `
    ),
    {
      parse_mode: "MarkdownV2",
    }
  )

}
