const webtoons = [
  {
    site: "Alpha Scans",
    link_site: "https://alpha-scans.org/",
    webtoon: "Murim Login",
    link_webtoon: "https://alpha-scans.org/manga/murim-login/",
    site2: "YouTube",
    link_site2: "https://www.youtube.com/",
  },
  {
    site: "",
    webtoon: "Demonic Emperor",
    link_webtoon: "https://alpha-scans.org/manga/demonic-emperor/",
  },
  {
    site: "Asura Scans",
    link_site: "https://www.asurascans.com/",
    webtoon: "Player Who Can't Level Up",
    link_webtoon: "https://www.asurascans.com/comics/1649969363-player-who-cant-level-up/",
    site2: "Facebook",
    link_site2: "https://www.facebook.com/",
  },
  {
    site: "",
    webtoon: "Reincarnation of the Suicidal Battle God",
    link_webtoon: "https://www.asurascans.com/comics/367-reincarnation-of-the-suicidal-battle-god/",
  },
  {
    site: "",
    webtoon: "Taming Master",
    link_webtoon: "https://www.asurascans.com/comics/1649969363-taming-master/",
  },
  {
    site: "",
    webtoon: "The Max Level Hero has Returned!",
    link_webtoon: "https://www.asurascans.com/comics/1649969363-the-max-level-hero-has-returned/",
  },
  {
    site: "",
    webtoon: "Return Of The Shattered Constellation",
    link_webtoon: "https://www.asurascans.com/comics/1649969363-return-of-the-shattered-constellation/",
  },
  {
    site: "Manganato",
    link_site: "https://manganato.com/",
    webtoon: "Jujutsu Kaisen",
    link_webtoon: "https://readmanganato.com/manga-ba979135",
    site2: "Gmail",
    link_site2: "https://mail.google.com",
  },
  {
    site: "",
    webtoon: "Apotheosis",
    link_webtoon: "https://readmanganato.com/manga-bt978676",
  },
  {
    site: "",
    webtoon: "Mercenary Enrollment",
    link_webtoon: "https://readmanganato.com/manga-jz987182",
  },
  {
    site: "",
    webtoon: "Unordinary",
    link_webtoon: "https://readmanganato.com/manga-uw971531",
  },
  {
    site: "Manhua Plus",
    link_site: "https://manhuascan.com/",
    webtoon: "Ranker Who Lives A Second Time",
    link_webtoon: "https://manhuascan.com/manga-ranker-who-lives-a-second-time.html",
    site2: "Netflix",
    link_site2: "https://www.netflix.com/",
  },

  {
    site: "",
    webtoon: "The Beginning After The End",
    link_webtoon: "https://manhuascan.com/manga-the-beginning-after-the-end.html",
  },
  {
    site: "Luminous Scans",
    link_site: "https://luminousscans.com/",
    webtoon: "Memorize",
    link_webtoon: "https://luminousscans.com/series/manhwa-of-memorize-novel/",
    site2: "Twitch",
    link_site2: "https://www.twitch.tv/",
  },
  {
    site: "",
    webtoon: "FFF-Class Trash Hero",
    link_webtoon: "https://luminousscans.com/series/fff-class-trash-hero/",
  },
  {
    site: "ManhwaZ",
    link_site: "https://manhwaz.com/",
    webtoon: "Omniscient Reader’s Viewpoint",
    link_webtoon: "https://manhwaz.com/webtoon/omniscient-readers-viewpoint-006",
    site2: "GitHub",
    link_site2: "https://www.github.com/",
  },
  {
    site: "1st Kiss Manga",
    link_site: "https://1stkissmanga.io/",
    webtoon: "The Beginning After The End",
    link_webtoon: "https://1stkissmanga.io/manga/the-beginning-after-the-end/",
    site2: "Instagram",
    link_site2: "https://www.instagram.com/",
  },
  {
    site: "Manhua Plus",
    link_site: "https://manhuaplus.com/",
    webtoon: "Martial Peek",
    link_webtoon: "https://manhuaplus.com/manga/martial-peak/",
    site2: "AniMix Play",
    link_site2: "https://animixplay.to/",
  },
  {
    site: "White Cloud Pavilion",
    link_site: "https://www.whitecloudpavilion.com/",
    webtoon: "Soul Land",
    link_webtoon: "https://www.whitecloudpavilion.com/manga/patreon/manga/soul-land",
    site2: "Font Squirrel",
    link_site2: "https://www.fontsquirrel.com/",
  },
  {
    site: "MM SCANS",
    link_site: "https://mm-scans.org/",
    webtoon: "Eleceed",
    link_webtoon: "https://mm-scans.org/manga/ele-ceed2/",
    site2: "Twitter",
    link_site2: "https://www.twitter.com/",
  },
  {
    site: "Setsu Scans",
    link_site: "https://setsuscans.com/",
    webtoon: "Tales of Demons and Gods",
    link_webtoon: "https://setsuscans.com/manga/the-tales-of-demons-and-gods/",
    site2: "Drama Cool",
    link_site2: "https://www.dramacool9.co/",
  },
];

const tbody = document.querySelector(".tbody");

if (tbody.innerHTML === "") {
  initialize();
}

function initialize() {
  for (let i = 0; i < webtoons.length; i++) {
    if (webtoons[i].site !== "") {
      tbody.innerHTML +=
        "<tr class='tdWebtoon'> <td> <a href='" +
        webtoons[i].link_site +
        "' target='_blank'>" +
        webtoons[i].site +
        "</a></td> <td><a href='" +
        webtoons[i].link_webtoon +
        "' target='_blank'>" +
        webtoons[i].webtoon +
        "</a></td><td><a href='" +
        webtoons[i].link_site2 +
        "' target='_blank'>" +
        webtoons[i].site2 +
        "</a></td>";
    } else {
      tbody.innerHTML +=
        "<tr> <td style='background-color:#17171F;'></td> <td><a href='" +
        webtoons[i].link_webtoon +
        "' target='_blank'>" +
        webtoons[i].webtoon +
        "</a></td>" +
        "</tr>";
    }
  }
}