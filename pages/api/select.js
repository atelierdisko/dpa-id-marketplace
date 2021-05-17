// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const mock = [
    {
      headline: "Zeitarbeitsfirmen aus der Fleischbranche klagen in Karlsruhe",
      version_created: "2021-05-12T16:16:44+02:00",
      genre: "Meldung",
      category: "Wirtschaft",
    },
    {
      headline:
        "US-Inflation steigt überraschend stark auf höchsten Stand seit 2008",
      version_created: "2021-05-12T16:13:14+02:00",
      genre: "Meldung",
      category: "Wirtschaft",
    },
    {
      headline: "UN warnen in Sitzung des Sicherheitsrats vor Krieg in Nahost",
      version_created: "2021-05-12T16:07:20+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline: "Neue Einreise-Regeln auch für Geimpfte und Genesene",
      version_created: "2021-05-12T16:07:18+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline: "Eurokurs gefallen  - EZB-Referenzkurs: 1,2118",
      version_created: "2021-05-12T16:06:12+02:00",
      genre: "Meldung",
      category: "Wirtschaft",
    },
    {
      headline:
        "Österreich stellt klar: Kleiner Grenzverkehr mit Bayern ab Donnerstag",
      version_created: "2021-05-12T16:01:18+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline:
        "EMA zuversichtlich: Impfstoffe schützen vor indischer Virus-Variante  ",
      version_created: "2021-05-12T15:59:57+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline: "Deutsche-Börse-Chef Weimer: Haben noch operativen Spielraum",
      version_created: "2021-05-12T15:59:14+02:00",
      genre: "Meldung",
      category: "Wirtschaft",
    },
    {
      headline: "Urteil: Veröffentlichung von Glyphosat-Gutachten war rechtens",
      version_created: "2021-05-12T15:59:10+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline:
        "Scholz drängt bei Umsetzung der Klimaschutz-Maßnahmen zur Eile",
      version_created: "2021-05-12T15:58:31+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline:
        "Mercedes startet Serienproduktion des EQS - Dritte Schicht ab Juli    ",
      version_created: "2021-05-12T15:56:47+02:00",
      genre: "Meldung",
      category: "Wirtschaft",
    },
    {
      headline:
        "Experte: Beobachtung der Thüringer AfD im Wahlkampf problematisch",
      version_created: "2021-05-12T15:55:50+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline: "Bootsmigranten harren in überfülltem Camp auf Lampedusa aus ",
      version_created: "2021-05-12T15:52:43+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline: "Südkorea unterzeichnet Freihandelsabkommen mit Israel",
      version_created: "2021-05-12T15:48:02+02:00",
      genre: "Meldung",
      category: "Wirtschaft",
    },
    {
      headline:
        "Prominente Trump-Kritikerin aus Führungsamt bei Republikanern gewählt",
      version_created: "2021-05-12T15:46:42+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline: "Seehofer: Jüdische Einrichtungen müssen geschützt werden",
      version_created: "2021-05-12T15:44:13+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline: "Söder will Klimaschutz mit Steuerreform voranbringen",
      version_created: "2021-05-12T15:42:10+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline: "Dutzende Festnahmen bei Protesten in Myanmar - Gefechte",
      version_created: "2021-05-12T15:39:01+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline:
        "Restaurants und Wellness: bald mehr Corona-Lockerungen in der Schweiz",
      version_created: "2021-05-12T15:34:52+02:00",
      genre: "Meldung",
      category: "Politik",
    },
    {
      headline: "Dax stabilisiert sich trotz hoher US-Inflation",
      version_created: "2021-05-12T15:28:42+02:00",
      genre: "Meldung",
      category: "Wirtschaft",
    },
  ];

  res.status(200).json(mock);
};
