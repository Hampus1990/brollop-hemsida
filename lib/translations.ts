export type Lang = "sv" | "en"

export const content = {
  sv: {
    nav: {
      day: "Vår dag",
      venue: "Slottet",
      info: "Information",
      gifts: "Gåvor",
      faq: "Frågor",
    },
    hero: {
      intro: "Välkommen att fira med oss",
      names: "Hampus & Kelsi",
      date: "22 augusti 2026",
      venue: "Mälsåkers Slott",
      subtitle: "En helg av kärlek, mat och firande på Mälsåkers Slott",
      cta: "Se detaljer",
    },
    day: {
      kicker: "Programmet",
      title: "Vår dag",
      subtitle:
        "Följ med genom en kväll av kärlek, mat och dans under Mälsåkers tak.",
      timeline: [
        { time: "14:30", text: "Ankomst & välkomstdrink" },
        { time: "16:00", text: "Vigsel i Mälsåkers kapell" },
        { time: "16:30", text: "Champagne & mingel i trädgården" },
        { time: "18:00", text: "Middagen börjar" },
        { time: "18:00–02:00", text: "Firande, tal & dans" },
        { time: "00:30", text: "Buss till Strängnäs" },
        { time: "01:00", text: "Slottet stänger" },
      ],
    },
    venue: {
      kicker: "Platsen",
      title: "Mälsåkers Slott",
      history:
        "Mälsåkers Slott är ett av Sveriges vackraste barockslott, vackert beläget på en halvö i Mälaren utanför Strängnäs. Med anor från 1600-talet bär slottet på århundraden av historia, och dess ljusa fasad och vidsträckta parker har gjort det till en av Sörmlands mest älskade platser.",
      chapel:
        "Vigseln hålls i slottets intima kapell, en stilla rum av ljus och sten. Därefter samlas vi i de formella trädgårdarna för champagne medan kvällsljuset faller över Mälaren.",
      addressLabel: "Adress",
      address: "Mälsåkers Slott, 645 93 Strängnäs",
      mapLabel: "Visa på karta",
    },
    info: {
      kicker: "Det praktiska",
      title: "Praktisk information",
      subtitle: "Allt du behöver veta för att resa, bo och fira med oss.",
      cards: [
        {
          heading: "Transport",
          items: [
            "Gott om parkering vid slottet",
            "Tåg från Stockholm till Strängnäs",
            "Taxi från Strängnäs till Mälsåkers Slott",
            "Buss till Strängnäs kl. 00:30",
            "Gäster som åker tidigare ordnar egen taxi",
          ],
        },
        {
          heading: "Boende",
          items: [
            "Vi rekommenderar att boka tidigt",
            "Vi rekommenderar att bo i Strängnäs",
          ],
        },
        {
          heading: "Mat",
          items: [
            "Buffémiddag serveras",
            "Meddela oss gärna eventuella allergier",
          ],
        },
        {
          heading: "Klädkod",
          items: ["Sommarfin / Summer Elegant"],
        },
        {
          heading: "Barn",
          items: ["Vi älskar era barn, men denna dag är reserverad för vuxna."],
        },
        {
          heading: "Kontakt",
          items: [
            "Hampus: Hampus.Ny@Outlook.com
            076-897 72 35",
            "Kelsi: Smith.Kelsi4@Gmail.com
            072-566 25 57",
            "Frågor? Hör av er till oss!",
          ],
        },
      ],
    },
    gifts: {
      kicker: "Önskelista",
      title: "Gåvor",
      intro:
        "Er närvaro är den största gåvan. För den som önskar bidra ytterligare skulle vi bli väldigt glada för ett bidrag till vår bröllopsresa i Asien.",
      note: "Välj gärna ett minne att skänka till resan. Swisha gärna till Hampus/Kelsi på kontaktuppgifter ovan och ange vilket minne du vill skänka i meddelandet.",
      cards: [
        { icon: "Plane", title: "Flygresa", text: "Vingarna som tar oss dit" },
        { icon: "TrainFront", title: "Tågresa", text: "Genom landskap och städer" },
        { icon: "Landmark", title: "Tempel & kultur", text: "Stillhet och historia" },
        { icon: "UtensilsCrossed", title: "Street food-kväll", text: "Smaker på gatan" },
        { icon: "Sunset", title: "Solnedgångsmiddag", text: "Middag vid horisonten" },
        { icon: "Palmtree", title: "Strandsdag", text: "En dag i sol och sand" },
        { icon: "Sailboat", title: "Kajakäventyr", text: "Ut på lugna vatten" },
        { icon: "BedDouble", title: "Hotellnatt", text: "En natt av lyx" },
        { icon: "Martini", title: "Cocktailkväll", text: "En skål för oss" },
        { icon: "Camera", title: "Fotoäventyr", text: "Minnen att bevara" },
      ],
    },
    faq: {
      kicker: "Bra att veta",
      title: "Vanliga frågor",
      items: [        
        {
          q: "Är barn inbjudna?",
          a: "Vårt firande är endast för vuxna, så att alla kan njuta av kvällen och natten fullt ut.",
        },
        {
          q: "Var ska jag bo?",
          a: "Vi rekommenderar att bo i Strängnäs och att boka boende i god tid.",
        },
        {
          q: "Finns det parkering?",
          a: "Ja, det finns gott om parkering vid Mälsåkers Slott för er som kommer med bil.",
        },
        {
          q: "När slutar firandet?",
          a: "Slottet stänger kl. 01:00. En buss till Strängnäs avgår kl. 00:30. Gäster som åker tidigare ordnar egen taxi.",
        },
      ],
    },
    footer: {
      names: "Hampus & Kelsi",
      date: "22 augusti 2026",
      venue: "Mälsåkers Slott",
      tagline: "Med kärlek, från oss till er",
    },
  },
  en: {
    nav: {
      day: "Our Day",
      venue: "The Castle",
      info: "Information",
      gifts: "Gifts",
      faq: "FAQ",
    },
    hero: {
      intro: "Welcome to celebrate with us",
      names: "Hampus & Kelsi",
      date: "22 August 2026",
      venue: "Mälsåkers Slott",
      subtitle: "A weekend of love, food and celebration at Mälsåkers Slott",
      cta: "View Details",
    },
    day: {
      kicker: "The Programme",
      title: "Our Day",
      subtitle:
        "Follow along through an evening of love, food and dancing under Mälsåker's roof.",
      timeline: [
        { time: "14:30", text: "Arrival & welcome drinks" },
        { time: "16:00", text: "Wedding ceremony in Mälsåker Chapel" },
        { time: "16:30", text: "Champagne & mingling in the gardens" },
        { time: "18:00", text: "Dinner begins" },
        { time: "18:00–02:00", text: "Celebration, speeches & dancing" },
        { time: "00:30", text: "Shuttle bus to Strängnäs" },
        { time: "01:00", text: "Castle closes" },
      ],
    },
    venue: {
      kicker: "The Place",
      title: "Mälsåkers Slott",
      history:
        "Mälsåkers Slott is one of Sweden's most beautiful baroque castles, set on a peninsula in Lake Mälaren just outside Strängnäs. Dating back to the 17th century, the castle carries centuries of history, and its luminous facade and sweeping parklands have made it one of Sörmland's most beloved places.",
      chapel:
        "The ceremony takes place in the castle's intimate chapel, a quiet room of light and stone. Afterwards we gather in the formal gardens for champagne as the evening light falls over Lake Mälaren.",
      addressLabel: "Address",
      address: "Mälsåkers Slott, 645 93 Strängnäs",
      mapLabel: "View on map",
    },
    info: {
      kicker: "The Practical",
      title: "Practical Information",
      subtitle: "Everything you need to travel, stay and celebrate with us.",
      cards: [
        {
          heading: "Transport",
          items: [
            "Large parking available at the castle",
            "Train from Stockholm to Strängnäs",
            "Taxi from Strängnäs to Mälsåkers Slott",
            "Shuttle bus to Strängnäs at 00:30",
            "Guests leaving earlier arrange their own taxi",
          ],
        },
        {
          heading: "Accommodation",
          items: [
            "We recommend booking soon",
            "We recommend staying in Strängnäs",
          ],
        },
        {
          heading: "Food",
          items: [
            "Buffet dinner will be served",
            "Please notify us of any allergies",
          ],
        },
        {
          heading: "Dress Code",
          items: ["Sommarfin / Summer Elegant"],
        },
        {
          heading: "Children",
          items: ["We love your children, but this day is reserved for adults."],
        },
        {
          heading: "Contact",
          items: [
            "Hampus: Hampus.Ny@Outlook.com
            +46 76-897 72 35",
            "Kelsi: Smith.Kelsi4@Gmail.com
            +46 72-566 25 57",
            "Any questions? Don't hesitate to reach out!",
          ],
        },
      ],
    },
    gifts: {
      kicker: "Wish List",
      title: "Gifts",
      intro:
        "Your presence is the greatest gift — and for those of you travelling from afar, the journey itself is more than enough. For those who wish to give a little more, we would be truly delighted by a contribution towards our honeymoon in Asia.",
      note: "Choose a memory to gift towards the journey",
      cards: [
        { icon: "Plane", title: "Flights", text: "The wings that take us there" },
        { icon: "TrainFront", title: "Train Journey", text: "Through landscapes and cities" },
        { icon: "Landmark", title: "Temples & Culture", text: "Stillness and history" },
        { icon: "UtensilsCrossed", title: "Street Food Evening", text: "Flavours on the street" },
        { icon: "Sunset", title: "Sunset Dinner", text: "Dinner by the horizon" },
        { icon: "Palmtree", title: "Beach Day", text: "A day in sun and sand" },
        { icon: "Sailboat", title: "Kayaking Adventure", text: "Out on calm waters" },
        { icon: "BedDouble", title: "Hotel Night", text: "A night of luxury" },
        { icon: "Martini", title: "Cocktail Evening", text: "A toast to us" },
        { icon: "Camera", title: "Photo Adventure", text: "Memories to keep" },
      ],
    },
    faq: {
      kicker: "Good to Know",
      title: "Frequently Asked Questions",
      items: [        
        {
          q: "Are children invited?",
          a: "Our celebration is adults-only, so everyone can fully enjoy the evening and the night.",
        },
        {
          q: "Where should I stay?",
          a: "We recommend staying in Strängnäs and booking accommodation early.",
        },
        {
          q: "Is there parking?",
          a: "Yes, there is plenty of parking at Mälsåkers Slott for those arriving by car.",
        },
        {
          q: "What time does the celebration end?",
          a: "The castle closes at 01:00. A shuttle bus to Strängnäs departs at 00:30. Guests leaving earlier arrange their own taxi.",
        },
      ],
    },
    footer: {
      names: "Hampus & Kelsi",
      date: "22 August 2026",
      venue: "Mälsåkers Slott",
      tagline: "With love, from us to you",
    },
  },
} as const

export type Content = (typeof content)["en"]
