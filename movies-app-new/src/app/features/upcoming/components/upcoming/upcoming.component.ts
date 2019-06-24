import { Component, OnInit } from "@angular/core";
import { UpcomingMoviesService } from "../../service/upcoming-movies.service";

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.component.html",
  styleUrls: ["./upcoming.component.css"]
})
export class UpcomingComponent implements OnInit {
  //cardListResults;
  cardListResults = [
    {
      vote_count: 226,
      id: 301528,
      video: false,
      vote_average: 7.5,
      title: "Toy Story 4",
      popularity: 388.532,
      poster_path: "/ehYkgIEVkJY0SBX8cGHjmKtCeri.jpg",
      original_language: "en",
      original_title: "Toy Story 4",
      genre_ids: [12, 16, 35, 10751],
      backdrop_path: "/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
      adult: false,
      overview:
        'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',
      release_date: "2019-06-19"
    },
    {
      vote_count: 912,
      id: 320288,
      video: false,
      vote_average: 6.3,
      title: "Dark Phoenix",
      popularity: 225.109,
      poster_path: "/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
      original_language: "en",
      original_title: "Dark Phoenix",
      genre_ids: [878, 28],
      backdrop_path: "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
      adult: false,
      overview:
        "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
      release_date: "2019-06-05"
    },
    {
      vote_count: 273,
      id: 479455,
      video: false,
      vote_average: 6,
      title: "Men in Black: International",
      popularity: 183.726,
      poster_path: "/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
      original_language: "en",
      original_title: "Men in Black: International",
      genre_ids: [28, 35, 878, 12],
      backdrop_path: "/2FYzxgLNuNVwncilzUeCGbOQzP7.jpg",
      adult: false,
      overview:
        "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
      release_date: "2019-06-12"
    },
    {
      vote_count: 1801,
      id: 420817,
      video: false,
      vote_average: 7.2,
      title: "Aladdin",
      popularity: 158.533,
      poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
      original_language: "en",
      original_title: "Aladdin",
      genre_ids: [12, 14, 10749, 35, 10751],
      backdrop_path: "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
      adult: false,
      overview:
        "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
      release_date: "2019-05-22"
    },
    {
      vote_count: 1209,
      id: 458156,
      video: false,
      vote_average: 7.1,
      title: "John Wick: Chapter 3 – Parabellum",
      popularity: 137.086,
      poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      original_language: "en",
      original_title: "John Wick: Chapter 3 – Parabellum",
      genre_ids: [80, 28, 53],
      backdrop_path: "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
      adult: false,
      overview:
        "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
      release_date: "2019-05-15"
    },
    {
      vote_count: 590,
      id: 514999,
      video: false,
      vote_average: 6.5,
      title: "Murder Mystery",
      popularity: 112.516,
      poster_path: "/bSMSO9xupd4R4vwTPqigHn2quLN.jpg",
      original_language: "en",
      original_title: "Murder Mystery",
      genre_ids: [35, 80, 9648, 28],
      backdrop_path: "/qeFO3u2IqbAeIT1Xgo6POqYbCaQ.jpg",
      adult: false,
      overview:
        "After attending a gathering on a billionaire's yacht during a European vacation, a New York cop and his wife become prime suspects when he's murdered.",
      release_date: "2019-06-14"
    },
    {
      vote_count: 13,
      id: 480042,
      video: false,
      vote_average: 5.5,
      title: "Escape Plan: The Extractors",
      popularity: 109.632,
      poster_path: "/9V5fl1mGgVZzOYod0Jq2hyRlzEY.jpg",
      original_language: "en",
      original_title: "Escape Plan: The Extractors",
      genre_ids: [28, 53],
      backdrop_path: "/ygWKYTu7OnZKF9H5NsgjL9iURGV.jpg",
      adult: false,
      overview:
        "After security expert Ray Breslin is hired to rescue the kidnapped daughter of a Hong Kong tech mogul from a formidable Latvian prison, Breslin's girlfriend is also captured. Now he and his team must pull off a deadly rescue mission to confront their sadistic foe and save the hostages before time runs out.",
      release_date: "2019-06-20"
    },
    {
      vote_count: 641,
      id: 373571,
      video: false,
      vote_average: 6.3,
      title: "Godzilla: King of the Monsters",
      popularity: 90.347,
      poster_path: "/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg",
      original_language: "en",
      original_title: "Godzilla: King of the Monsters",
      genre_ids: [878, 28, 53],
      backdrop_path: "/uovH5k4BAEPqXqxgwVrTtqH169g.jpg",
      adult: false,
      overview:
        "The new story follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species—thought to be mere myths—rise again, they all vie for supremacy, leaving humanity’s very existence hanging in the balance.",
      release_date: "2019-05-29"
    },
    {
      vote_count: 235,
      id: 531309,
      video: false,
      vote_average: 5.6,
      title: "Brightburn",
      popularity: 87.957,
      poster_path: "/v3PLKFKHrUYHhZXcSuW6Fl48laG.jpg",
      original_language: "en",
      original_title: "Brightburn",
      genre_ids: [27, 878, 18, 53],
      backdrop_path: "/j3w3lT3ABvJsVE3byNOMCYmnGMB.jpg",
      adult: false,
      overview:
        "What if a child from another world crash-landed on Earth, but instead of becoming a hero to mankind, he proved to be something far more sinister?",
      release_date: "2019-05-09"
    },
    {
      vote_count: 52,
      id: 486131,
      video: false,
      vote_average: 5.2,
      title: "Shaft",
      popularity: 85.751,
      poster_path: "/kfZqwGuvEBAysAbCsa0QLKoSYR.jpg",
      original_language: "en",
      original_title: "Shaft",
      genre_ids: [28, 80],
      backdrop_path: "/2JS5guOh3hj3WgMhbMHPZDSU1HJ.jpg",
      adult: false,
      overview:
        "JJ, aka John Shaft Jr., may be a cyber security expert with a degree from MIT, but to uncover the truth behind his best friend’s untimely death, he needs an education only his dad can provide. Absent throughout JJ’s youth, the legendary locked-and-loaded John Shaft agrees to help his progeny navigate Harlem’s heroin-infested underbelly.",
      release_date: "2019-06-14"
    },
    {
      vote_count: 53,
      id: 533642,
      video: false,
      vote_average: 5.7,
      title: "Child's Play",
      popularity: 84.239,
      poster_path: "/Y6VAJ21VjNtLmoTKYIXfbilfdI.jpg",
      original_language: "en",
      original_title: "Child's Play",
      genre_ids: [27],
      backdrop_path: "/1TMdk250An49gSLUZNUnXKqXzmE.jpg",
      adult: false,
      overview:
        "The story follows a mother named Karen, who gives her son Andy a toy doll for his birthday, unaware of its sinister nature.",
      release_date: "2019-06-19"
    },
    {
      vote_count: 1425,
      id: 447404,
      video: false,
      vote_average: 7,
      title: "Pokémon Detective Pikachu",
      popularity: 78.837,
      poster_path: "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
      original_language: "en",
      original_title: "Pokémon Detective Pikachu",
      genre_ids: [9648, 10751, 35, 878, 28, 12],
      backdrop_path: "/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
      adult: false,
      overview:
        "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
      release_date: "2019-05-03"
    },
    {
      vote_count: 162,
      id: 412117,
      video: false,
      vote_average: 6.4,
      title: "The Secret Life of Pets 2",
      popularity: 70.007,
      poster_path: "/q3mKnSkzp1doIsCye6ap4KIUAbu.jpg",
      original_language: "en",
      original_title: "The Secret Life of Pets 2",
      genre_ids: [12, 16, 35, 10751],
      backdrop_path: "/etaok7q2E5tV36oXe7GQzhUQ4fX.jpg",
      adult: false,
      overview:
        "What happens with our pets when we’re not home? This movie continues the original movie with Max and his friends.",
      release_date: "2019-05-24"
    },
    {
      vote_count: 324,
      id: 484468,
      video: false,
      vote_average: 8.2,
      title: "The Wolf's Call",
      popularity: 62.185,
      poster_path: "/fDyCvNWaFkkrgf0QjhHqpCGVc8p.jpg",
      original_language: "fr",
      original_title: "Le chant du loup",
      genre_ids: [53, 18],
      backdrop_path: "/vadfaj3hqzgDFTSdWUMp5onELPK.jpg",
      adult: false,
      overview:
        "In the near future, a French submarine finds itself in a crisis situation.",
      release_date: "2019-02-20"
    },
    {
      vote_count: 188,
      id: 502416,
      video: false,
      vote_average: 5.6,
      title: "Ma",
      popularity: 58.082,
      poster_path: "/6n7ASmQ1wY2cxTubFFGlcvPpyk7.jpg",
      original_language: "en",
      original_title: "Ma",
      genre_ids: [53, 27],
      backdrop_path: "/mBOv5YrX5QGr5CusK0PKSHuxOt9.jpg",
      adult: false,
      overview:
        "Sue Ann is a loner who keeps to herself in her quiet Ohio town. One day, she is asked by Maggie, a new teenager in town, to buy some booze for her and her friends, and Sue Ann sees the chance to make some unsuspecting, if younger, friends of her own.",
      release_date: "2019-05-29"
    },
    {
      vote_count: 9,
      id: 484641,
      video: false,
      vote_average: 4.9,
      title: "Anna",
      popularity: 56.197,
      poster_path: "/exTOQMsl6sMntASQZWLhjghzVGx.jpg",
      original_language: "en",
      original_title: "Anna",
      genre_ids: [53, 28],
      backdrop_path: "/jbMfZtei6aQABPSmQra7tU5ZScD.jpg",
      adult: false,
      overview:
        "Beneath Anna Poliatova's striking beauty lies a secret that will unleash her indelible strength and skill to become one of the world's most feared government assassins.",
      release_date: "2019-06-20"
    },
    {
      vote_count: 563,
      id: 504608,
      video: false,
      vote_average: 7.6,
      title: "Rocketman",
      popularity: 54.684,
      poster_path: "/f4FF18ia7yTvHf2izNrHqBmgH8U.jpg",
      original_language: "en",
      original_title: "Rocketman",
      genre_ids: [10402, 18],
      backdrop_path: "/oAr5bgf49vxga9etWoQpAeRMvhp.jpg",
      adult: false,
      overview:
        "The story of Elton John's life, from his years as a prodigy at the Royal Academy of Music through his influential and enduring musical partnership with Bernie Taupin.",
      release_date: "2019-05-22"
    },
    {
      vote_count: 431,
      id: 505948,
      video: false,
      vote_average: 6.6,
      title: "I Am Mother",
      popularity: 52.155,
      poster_path: "/eItrj5GcjvCI3oD3bIcz1A2IL9t.jpg",
      original_language: "en",
      original_title: "I Am Mother",
      genre_ids: [53, 878],
      backdrop_path: "/kmPnDn9mbjD9Vzn1FTclNiSHGNa.jpg",
      adult: false,
      overview:
        'A teenage girl is raised underground by a robot "Mother", designed to repopulate the earth following an extinction event. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.',
      release_date: "2019-06-07"
    },
    {
      vote_count: 799,
      id: 527641,
      video: false,
      vote_average: 8.1,
      title: "Five Feet Apart",
      popularity: 49.561,
      poster_path: "/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
      original_language: "en",
      original_title: "Five Feet Apart",
      genre_ids: [10749, 18],
      backdrop_path: "/d7wa3VpUpKDQ7GG9EMw8zSJCFoI.jpg",
      adult: false,
      overview:
        "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. There's an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction.",
      release_date: "2019-03-15"
    },
    {
      vote_count: 149,
      id: 416144,
      video: false,
      vote_average: 7.2,
      title: "Hotel Mumbai",
      popularity: 46.941,
      poster_path: "/v32SC4HFZtlDRWXMaR2V2dWqAXJ.jpg",
      original_language: "en",
      original_title: "Hotel Mumbai",
      genre_ids: [53, 18],
      backdrop_path: "/tdVYVR4nIIcmpL0zl39cBfix7Un.jpg",
      adult: false,
      overview:
        "The true story of the 2008 Taj Mahal Palace Hotel terrorist attack in Mumbai when hotel staff risked their lives to keep everyone safe, and as people make unthinkable sacrifices to protect themselves and their families.",
      release_date: "2019-03-14"
    }
  ];
  constructor(private upcomingMoviesService: UpcomingMoviesService) {}

  ngOnInit() {
    /* this.upcomingMoviesService.getUpcomingMovies().subscribe(upcomingMovies => {
      console.log(upcomingMovies);
      this.cardListResults = upcomingMovies["results"];
    }); */
  }
}
