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
    dayDetails: {
      kicker: "Bra att veta",
      title: "Praktisk information",
      subtitle:
        "Allt du behöver veta om platsen, dagens schema och slottet – tryck på en rubrik för att läsa mer.",
      mapAlt: "Karta över Mälsåkers Slott med parkering, gångväg, toaletter och mingelområde markerat",
      sections: [
        {
          heading: "Plats & vägbeskrivning",
          paragraphs: [
            "Mälsåkers Slott, 645 93 Strängnäs.",
          ],
          list: [
            "Parkering: Markerad i rött på kartan. Cirka 5 minuters promenad till slottet.",
            "Gångväg till slottet: Följ den gula markerade rutten från parkeringen – allén fram till slottet består av ca 60% asfalt och 40% grus, så tänk på skorna!",
            "Toaletter: Finns endast i baracken (orange markering på kartan), i anslutning till mingelområdet. OBS: under middagen sitter vi tre trappor upp i slottet (endast trappa, ingen hiss) – ta gärna ett toalettbesök innan middagen börjar.",
            "Mingel/reception: Blått markerat område på kartan, där snittar och dryck finns framdukat.",
            "Om det skulle regna, så går det bra att köra fram till slottet och släppa av folk, men parkering sker enbart vid det rödmarkerade området.",
          ],
        },
        {
          heading: "Toastmaster & tal",
          paragraphs: [
            "Hampus bror Jesper Ny är kvällens Toastmaster.",
            "Vill du hålla tal? Anmäl det till Jesper senast fredag 21/8 kl. 18:00 på telefon 073-033 19 55.",
          ],
        },
        {
          heading: "Om slottet",
          paragraphs: [
            "Ni får gärna röra er fritt i slottet så länge det inte är en stängd dörr.",
          ],
          groups: [
            {
              label: "Våning 1",
              items: [
                "Kapellet, där vigseln äger rum, ligger nära mingelområdet. I hallen mittemot kapellet finns ett presentbord. Våningen rymmer även en del av slottets historiska museum/utställning.",
              ],
            },
            {
              label: "Våning 2",
              items: [
                "Fortsättning på museet, samt historiska mottagningsrum – bland annat guldfoajén och tesalongen. Vid regn flyttar mingel hit.",
              ],
            },
            {
              label: "Våning 3 – Riddarsalen",
              items: [
                "Här håller vi till på kvällen för middag och senare dansgolv. Ett angränsande rum fungerar som mingel-/vilorum med bord och stolar för den som vill ta en paus från dansen. Middagen serveras bufféstil i rummet som hallen leder in till. Drycker finns i ishinkar i hallen – ta med till bordet, det är öppen bar.",
              ],
            },
          ],
        },
        {
          heading: "Vigseln",
          paragraphs: [
            "Främre raden är reserverad för närmaste familj/släkt samt Toastmaster/Maid of Honor. Det finns sittplatser för alla gäster, men man får också gärna stå om man föredrar det. Man får gärna ta bilder, men var inte ivägen för fotografen",
          ],
        },
        {
          heading: "Vid regn",
          paragraphs: ["Minglet (Reception Area) flyttar då till mottagningsrummen på våning 2."],
        },
        {
          heading: "Tillgänglighet",
          paragraphs: [
            "Slottet har tyvärr ingen hiss – middagen och dansgolvet på våning 3 nås endast via trappor. Har du svårt att gå i trappor, hör gärna av dig till oss i förväg så hjälps vi åt att planera.",
          ],
        },
        {
          heading: "Fotografering",
          paragraphs: [
            "Vi har en fotograf på plats under dagen som fotar brudparet innan vigseln och därefter minglet efter vigseln, samt inledningen av middagen.",
          ],
        },
        {
          heading: "Presenter",
          paragraphs: [
            "Det bästa presenttipset är att bidra till bröllopsresan – men det är helt frivilligt om ni även vill ta med en fysisk gåva. Då det efterfrågats finns ett presentbord i hallen mittemot kapellet.",
          ],
        },
        {
          heading: "Meny",
          paragraphs: [
            "Samtliga rätter är mjölk-/laktosfria. Det mesta är glutenfritt (undantag markeras nedan). Rätterna är fria från lök, förutom hummus, röror och ajvarrelish som innehåller vitlök.",
          ],
          groups: [
            {
              label: "Till drinken",
              items: [
                "Honungs- och chilirostade cashewnötter",
                "Tunnbrödsnittar med kyckling och ajvarrelish (glutenfritt bröd i vissa)",
                "Rågskålar med hjortronkräm",
              ],
            },
            {
              label: "Buffé",
              items: [
                "Toast Skagen på danskt rågbröd (glutenfritt alternativ finns)",
                "Teriyakimarinerad rostbiff (glutenfri soja, gräslök, sesamfrö)",
                "Kallrökt lax med citronmajonäs",
                "Himmelsk broccolisallad med rostade solroskärnor och knaperstekt bacon",
                "Färskpotatissallad med soltorkad tomat, citron och basilika",
                "Mango/avokado-salsa med lime och chili",
                "Grönsallad med rostade frön och olivolja",
                "Surdegslevain, frökex med tranbär, hummus, tapenade (vitlök i rörorna)",
              ],
            },
            {
              label: "Dessert",
              items: [
                "Chokladbiskvitårta med färska hallon (glutenfri)",
                "Marängäppelkaka",
                "Kladdkaka i Mousse-stil",
                "Sommar-rulltårta med rabarber, vinbär och maräng",
              ],
            },
          ],
        },
      ],
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
        { time: "18:00–01:00", text: "Firande, tal & dans" },
        { time: "00:30", text: "Inhyrd buss till Stallarholmen & Strängnäs" },
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
            "Inhyrd buss till Strängnäs kl. 00:30 (Inklusive kortare stopp i Stallarholmen)",
            "Gäster som åker tidigare ordnar egen taxi (kan vara dyr på kvällen)",
          ],
        },
        {
          heading: "Boende",
          items: [
            "Det pågår andra event i Strängnäs under helgen, vi rekommenderar att boka tidigt",
            "Vi rekommenderar att bo i Stallarholmen/Strängnäs",
            "Hotel Bishop Arms Strängnäs",
            "Malmgårdens vandrarhem",
            "Näsbyviks gård",
            "Privat boende 4-6 personer i Stallarholmen (kontakta Hampus för detaljer)",
            "AirBnb",
            "2-3 Tältplatser på Mälsåkers vingård (kontakta Hampus för detaljer)",
          ],
        },
        {
          heading: "Mat & Dryck",
          items: [
            "Buffémiddag serveras",
            "Meddela oss gärna eventuella allergier",
            "Alkohol samt alkoholfria alternativ kommer att finnas",
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
            "Hampus: Hampus.Ny@Outlook.com\n076-897 72 35",
            "Kelsi: Smith.Kelsi4@Gmail.com\n072-566 25 57",
            "Frågor? Hör av er till oss!",
          ],
        },
      ],
    },
    gifts: {
      kicker: "Önskelista",
      title: "Gåvor",
      intro:
        "Er närvaro är den största gåvan. För den som önskar bidra ytterligare skulle vi bli väldigt glada för ett bidrag till vår bröllopsresa till Asien eller Afrika.",
      note: "Välj gärna ett minne att skänka till resan. Swisha gärna till Hampus/Kelsi på kontaktuppgifter ovan och ange vilket minne du vill skänka i meddelandet.",
      cards: [
        { icon: "Plane", title: "Flygresa", text: "Vingarna som tar oss dit" },
        { icon: "TrainFront", title: "Tågresa", text: "Genom landskap och städer" },
        { icon: "Landmark", title: "Tempel & kultur", text: "Stillhet och historia" },
        { icon: "UtensilsCrossed", title: "Street food-kväll", text: "Smaker på gatan" },
        { icon: "Sunset", title: "Solnedgångsmiddag", text: "Middag vid horisonten" },
        { icon: "Palmtree", title: "Strandsdag", text: "En dag i sol och sand" },        
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
    rsvp: {
      kicker: "Anmälan",
      title: "OSA",
      subtitle: "Vänligen svara senast 26 juli 2026.",
      nameLabel: "Namn",
      namePlaceholder: "Ditt namn",
      attendingLabel: "Kommer du?",
      attendingYes: "Ja, jag kommer!",
      attendingNo: "Tyvärr kan jag inte",
      guestsLabel: "Antal personer (inkl. dig själv)",
      allergiesLabel: "Allergier eller matpreferenser",
      allergiesPlaceholder: "T.ex. glutenfri, vegetarian...",
      notesLabel: "Övriga kommentarer",
      notesPlaceholder: "Något du vill att vi ska veta?",
      submit: "Skicka svar",
      sending: "Skickar...",
      thanks: "Tack för ditt svar!",
      thanksSubtitle: "Vi ser fram emot att fira med dig.",
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
    dayDetails: {
      kicker: "Good to Know",
      title: "Practical Information",
      subtitle:
        "Everything you need to know about the venue, the day's schedule and the castle — tap a heading to read more.",
      mapAlt: "Map of Mälsåkers Slott showing parking, the walking route, restrooms and the mingling area",
      sections: [
        {
          heading: "Location & Directions",
          paragraphs: ["Mälsåkers Slott, 645 93 Strängnäs."],
          list: [
            "Parking: Marked in red on the map. About a 5-minute walk to the castle.",
            "Walking route to the castle: Follow the yellow marked route from the parking area — the avenue up to the castle is about 60% paved and 40% gravel, so plan your shoes accordingly!",
            "Restrooms: Only available in the barrack (marked in orange on the map), next to the mingling area. Note: during dinner we'll be three flights up in the castle (stairs only, no elevator) — we recommend using the restroom before dinner starts.",
            "Mingling/reception: Marked in blue on the map, where canapés and drinks will be served.",
            "If it would rain, it's ok to drive up to the castle to drop people off. However, parking is only allowed in the red marked area.",
          ],
        },
        {
          heading: "Toastmaster & Speeches",
          paragraphs: [
            "Hampus's brother Jesper Ny is our Toastmaster for the evening.",
            "Would you like to give a speech? Let Jesper know by Friday 21/8 at 18:00 at the latest, by phone 073-033 19 55.",
          ],
        },
        {
          heading: "About the Castle",
          paragraphs: [
            "Feel free to move around the castle freely, as long as a door isn't closed.",
          ],
          groups: [
            {
              label: "Floor 1",
              items: [
                "The chapel, where the ceremony takes place, is close to the mingling area. In the hall opposite the chapel there's a gift table. This floor also holds part of the castle's historical museum/exhibition.",
              ],
            },
            {
              label: "Floor 2",
              items: [
                "Continuation of the museum, as well as historical reception rooms — including the golden foyer and the tea salon. In case of rain, mingling moves here.",
              ],
            },
            {
              label: "Floor 3 – The Knights' Hall",
              items: [
                "This is where we'll be in the evening for dinner and later the dance floor. An adjoining room serves as a mingling/rest area with tables and chairs for anyone wanting a break from dancing. Dinner is served buffet-style in the room the hall leads into. Drinks are in ice buckets in the hall — bring them to your table, it's an open bar.",
              ],
            },
          ],
        },
        {
          heading: "The Ceremony",
          paragraphs: [
            "The front row is reserved for immediate family and the Toastmaster/Maid of Honor. There are seats for all guests, but you're also welcome to stand if you prefer. It's ok to take pictures, but make sure to not get in the way for the photographer",
          ],
        },
        {
          heading: "In Case of Rain",
          paragraphs: ["Mingle/Reception will move to the reception rooms on floor 2."],
        },
        {
          heading: "Accessibility",
          paragraphs: [
            "Unfortunately the castle has no elevator — dinner and the dance floor on floor 3 are only reached via stairs. If stairs are difficult for you, please get in touch with us in advance so we can help plan.",
          ],
        },
        {
          heading: "Photography",
          paragraphs: [
            "We'll have a photographer on site during the day, capturing the couple before the ceremony, the mingling afterwards, and the start of dinner.",
          ],
        },
        {
          heading: "Gifts",
          paragraphs: [
            "The best gift tip is to contribute to the honeymoon trip — but it's entirely optional if you'd also like to bring a physical gift. Since it's been requested, there's a gift table in the hall opposite the chapel.",
          ],
        },
        {
          heading: "Menu",
          paragraphs: [
            "All dishes are dairy-/lactose-free. Most are gluten-free (exceptions marked below). The dishes are onion-free, except for the hummus, spreads and ajvar relish, which contain garlic.",
          ],
          groups: [
            {
              label: "With the Welcome Drink",
              items: [
                "Honey and chili-roasted cashews",
                "Flatbread bites with chicken and ajvar relish (gluten-free bread available)",
                "Rye bowls with cloudberry cream",
              ],
            },
            {
              label: "Buffet",
              items: [
                "Toast Skagen on Danish rye bread (gluten-free option available)",
                "Teriyaki-marinated roast beef (gluten-free soy, chives, sesame seeds)",
                "Cold-smoked salmon with lemon mayonnaise",
                "Heavenly broccoli salad with roasted sunflower seeds and crispy bacon",
                "New potato salad with sun-dried tomato, lemon and basil",
                "Mango/avocado salsa with lime and chili",
                "Green salad with roasted seeds and olive oil",
                "Sourdough levain, cranberry crackers, hummus, tapenade (garlic in the spreads)",
              ],
            },
            {
              label: "Dessert",
              items: [
                "Chocolate biscuit cake with fresh raspberries (gluten-free)",
                "Meringue apple cake",
                "Mudcake made in mousse style",
                "Summer jelly roll with rhubarb, currants & mergingue",
              ],
            },
          ],
        },
      ],
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
        { time: "18:00–01:00", text: "Celebration, speeches & dancing" },
        { time: "00:30", text: "Leased shuttle bus to Stallarholmen & Strängnäs" },
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
            "Shuttle bus to Strängnäs at 00:30 (Including short stop in Stallarholmen)",
            "Guests leaving earlier arrange their own taxi (might be expensive)",
          ],
        },
        {
          heading: "Accommodation",
          items: [
            "There's other events in Strängnäs during the weekend, we recommend booking early",                        
            "We recommend staying in Stallarholmen/Strängnäs",
            "Hotel Bishop Arms Strängnäs",
            "Malmgårdens vandrarhem",
            "Näsbyviks gård",
            "Privat accomodation 4-6 persons in Stallarholmen (contact Hampus for details)",
            "AirBnb",
            "2-3 Tenting spots at Mälsåkers vingård (contact Hampus for details)",
          ],
        },
        {
          heading: "Food & Drinks",
          items: [
            "Buffet dinner will be served",
            "Please notify us of any allergies",
            "Alcholic and alcohol free alternativ will be available",
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
            "Hampus: Hampus.Ny@Outlook.com\n+46 76-897 72 35",
            "Kelsi: Smith.Kelsi4@Gmail.com\n+46 72-566 25 57",
            "Any questions? Don't hesitate to reach out!",
          ],
        },
      ],
    },
    gifts: {
      kicker: "Wish List",
      title: "Gifts",
      intro:
        "Your presence is the greatest gift — and for those of you travelling from afar, the journey itself is more than enough. For those who wish to give a little more, we would be truly delighted by a contribution towards our honeymoon in Asia or Africa.",
      note: "Choose a memory to gift towards the journey",
      cards: [
        { icon: "Plane", title: "Flights", text: "The wings that take us there" },
        { icon: "TrainFront", title: "Train Journey", text: "Through landscapes and cities" },
        { icon: "Landmark", title: "Temples & Culture", text: "Stillness and history" },
        { icon: "UtensilsCrossed", title: "Street Food Evening", text: "Flavours on the street" },
        { icon: "Sunset", title: "Sunset Dinner", text: "Dinner by the horizon" },
        { icon: "Palmtree", title: "Beach Day", text: "A day in sun and sand" },        
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
    rsvp: {
      kicker: "RSVP",
      title: "RSVP",
      subtitle: "Please respond by 26th of July 2026.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      attendingLabel: "Will you be joining us?",
      attendingYes: "Yes, I'll be there!",
      attendingNo: "Sorry, I can't make it",
      guestsLabel: "Number of guests (including yourself)",
      allergiesLabel: "Allergies or dietary requirements",
      allergiesPlaceholder: "E.g. gluten free, vegetarian...",
      notesLabel: "Additional notes",
      notesPlaceholder: "Anything you'd like us to know?",
      submit: "Send RSVP",
      sending: "Sending...",
      thanks: "Thank you for your RSVP!",
      thanksSubtitle: "We look forward to celebrating with you.",
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
