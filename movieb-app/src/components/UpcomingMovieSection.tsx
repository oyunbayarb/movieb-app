import { ArrowRight } from "lucide-react";
import { OneMovieCard } from "./MovieCardComponent";
export const UpcomingMovie = () => {
  const UpcomingMovieData = [
    {
      adult: false,
      backdrop_path: "/2siOHQYDG7gCQB6g69g2pTZiSia.jpg",
      genre_ids: [10751, 14],
      id: 447273,
      original_language: "en",
      original_title: "Snow White",
      overview:
        "A princess joins forces with seven dwarfs to liberate her kingdom from her cruel stepmother, the Evil Queen.",
      popularity: 24.058,
      poster_path: "/xWWg47tTfparvjK0WJNX4xL8lW2.jpg",
      release_date: "2025-03-19",
      title: "Snow White",
      video: false,
      vote_average: 3.232,
      vote_count: 41,
    },
    {
      adult: false,
      backdrop_path: "/qUc0Hol3eP74dbW4YyqT6oRLYgT.jpg",
      genre_ids: [878, 35, 12],
      id: 696506,
      original_language: "en",
      original_title: "Mickey 17",
      overview:
        "Unlikely hero Mickey Barnes finds himself in the extraordinary circumstance of working for an employer who demands the ultimate commitment to the job… to die, for a living.",
      popularity: 22.567,
      poster_path: "/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
      release_date: "2025-02-28",
      title: "Mickey 17",
      video: false,
      vote_average: 6.978,
      vote_count: 784,
    },
    {
      adult: false,
      backdrop_path: "/sBtuuQ2MPliv76mjckkfwB3mNNO.jpg",
      genre_ids: [99],
      id: 1417181,
      original_language: "en",
      original_title: "Dawn of Impressionism: Paris 1874",
      overview:
        "The Impressionists are the most popular group in art history – millions flock every year to marvel at their masterpieces. But, to begin with, they were scorned, penniless outsiders. 1874 was the year that changed everything; the first Impressionists, “hungry for independence”, broke the mould by holding their own exhibition outside official channels. Impressionism was born and the art world was changed forever.  What led to that first groundbreaking show 150 years ago? Who were the maverick personalities that wielded their brushes in such a radical and provocative way? The spectacular Musée d’Orsay exhibition brings fresh eyes to this extraordinary tale of passion and rebellion. The story is told not by historians and curators but in the words of those who witnessed the dawn of Impressionism: the artists, press and people of Paris, 1874.",
      popularity: 22.493,
      poster_path: "/lSU85MrxOtlrvtiRlI9GTPBGiwK.jpg",
      release_date: "2025-03-18",
      title: "Dawn of Impressionism: Paris 1874",
      video: false,
      vote_average: 4.0,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: "/qMYb0pTEnsYsYPVD1uJIpOMumYB.jpg",
      genre_ids: [18, 35],
      id: 1107215,
      original_language: "fr",
      original_title: "Ma mère, Dieu et Sylvie Vartan",
      overview:
        "In 1963, Esther gives birth to Roland, the youngest of a large family. Roland is born with a club foot that prevents him from standing. Against everyone's advice, she promises her son that he will walk like the others and that he will have a fabulous life. From then on, Esther will do everything in her power to keep this promise. Through decades of trials and miracles of life, this film is the story of a true, funny and moving story, that of an incredible destiny and the greatest love there is: that of a mother for her child.",
      popularity: 21.14,
      poster_path: "/sIYUhbkjgedkYuiQ9MW3fzyc7Gf.jpg",
      release_date: "2025-03-19",
      title: "My Mom, God and Sylvie Vartan",
      video: false,
      vote_average: 6.0,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: "/kznpWswHtIQ3fXrRy8BVXede1KH.jpg",
      genre_ids: [18, 878],
      id: 970947,
      original_language: "en",
      original_title: "The Shrouds",
      overview:
        "Inconsolable since the death of his wife, Karsh, a prominent businessman, invents a revolutionary and controversial technology that enables the living to monitor their dear departed in their shrouds. One night, multiple graves, including that of Karsh’s wife, are desecrated, and he sets out to track down the perpetrators.",
      popularity: 16.645,
      poster_path:
        "/https://media.themoviedb.org/t/p/w600_and_h900_bestv2/6J4lPto3rjlHZwhIhCy9cOWNnqb.jpg",
      release_date: "2025-03-20",
      title: "The Shrouds",
      video: false,
      vote_average: 7.7,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: "/ouqlzdiOjRErdsZ70WHJiBaPS0.jpg",
      genre_ids: [27, 14, 53, 28],
      id: 1353117,
      original_language: "en",
      original_title: "Rebirth: Home Sweet Home",
      overview:
        "Jake is a cop thrust into an alternate realm called ‘The Hindrance’ during a deadly mall shooting. With the help of a mysterious Novice Monk, Jake must race the clock to save his wife, Prang, and stop an evil occultist, Mek, from opening the Gates of Hell.",
      popularity: 15.534,
      poster_path: "/hqRX1XJCeE4dz4kaTQVvVJoSwPa.jpg",
      release_date: "2025-03-20",
      title: "Rebirth: Home Sweet Home",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/1QeDSpZMRZ5t3W1UHRbXu3umsDC.jpg",
      genre_ids: [10402],
      id: 1429460,
      original_language: "en",
      original_title: "Imagine Dragons: Live From The Hollywood Bowl",
      overview:
        "Globally renowned, GRAMMY® Award-winning band Imagine Dragons enlisted the LA Film Orchestra to perform their biggest hits and new chart-topping songs against the backdrop of the iconic Hollywood Bowl. The band fuses their explosive, cathartic sound with gorgeous, intricate symphonic arrangements played on stage by over 50 musicians.",
      popularity: 15.113,
      poster_path: "/e72fYes91e8En7jREXeHSXP9U0S.jpg",
      release_date: "2025-03-20",
      title: "Imagine Dragons: Live From The Hollywood Bowl",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/wzROc903oP94u1vDoVT8m02fqZy.jpg",
      genre_ids: [27, 53],
      id: 1083968,
      original_language: "en",
      original_title: "Locked",
      overview:
        "When Eddie breaks into a luxury SUV, he steps into a deadly trap set by William, a self-proclaimed vigilante delivering his own brand of twisted justice. With no means of escape, Eddie must fight to survive in a ride where escape is an illusion, survival is a nightmare, and justice shifts into high gear.",
      popularity: 15.098,
      poster_path: "/wcmH4jBXmjY7eoX5Gs4HYgjlQPV.jpg",
      release_date: "2025-03-20",
      title: "Locked",
      video: false,
      vote_average: 6.0,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: "/nPhej37pX5OlL8gWjg3jL06izz1.jpg",
      genre_ids: [27, 35],
      id: 1225572,
      original_language: "en",
      original_title: "Screamboat",
      overview:
        "A late-night boat ride turns into a desperate fight for survival in New York City when a mischievous mouse becomes a monstrous reality.",
      popularity: 15.091,
      poster_path: "/RVkfH0t0GAdfOItWFhB4FokrUZ.jpg",
      release_date: "2025-03-20",
      title: "Screamboat",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/pV1tdlFgqEY8hDDZLXyvmd9cKPM.jpg",
      genre_ids: [28, 35, 80, 14, 27, 9648],
      id: 1317920,
      original_language: "th",
      original_title: "ซองแดงแต่งผี",
      overview:
        'When Menn, a super-straight mugger-turned-police spy, accidentally picks up a mysterious red envelope, he is bound by a supernatural contract that forces him to wed a ghost. Fate plays an even crueler trick on him: his "spouse" is not only dead, but a cute and unapologetically progressive gay man named Titi.',
      popularity: 15.023,
      poster_path: "/snuY7UUVTqAJmG5hPUImKhFUTOl.jpg",
      release_date: "2025-03-20",
      title: "The Red Envelope",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/mFzFzF2y8Y3nB7o1hUD4vrHiFtn.jpg",
      genre_ids: [878, 18, 53],
      id: 1317088,
      original_language: "en",
      original_title: "The Assessment",
      overview:
        "In a climate change-ravaged world, a utopian society optimizes life, including parenthood assessments. A successful couple faces scrutiny by an evaluator over seven days to determine their fitness for childbearing.",
      popularity: 11.183,
      poster_path: "/4865gds6WMDtjaAi342ivoVHv8w.jpg",
      release_date: "2025-03-21",
      title: "The Assessment",
      video: false,
      vote_average: 8.0,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: "/ec9QlPrJgAnz9KuzIMNBd9gFwXz.jpg",
      genre_ids: [18],
      id: 1423101,
      original_language: "sv",
      original_title: "Tjänare",
      overview:
        "Emma is persuaded to join her religious boyfriend, August, for a week with his devout friends. Once at the congregation house, she soon realizes that this is no ordinary Christian community—August has brought her to a cult.",
      popularity: 10.776,
      poster_path: "/5nA8Auw2LBzBYl7SEKMXCz0WO8s.jpg",
      release_date: "2025-03-26",
      title: "Tjänare",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/9Ifb7kDdMH1yCg81oMoYsK7kDj3.jpg",
      genre_ids: [53, 9648],
      id: 764842,
      original_language: "ko",
      original_title: "스트리밍",
      overview:
        "Woo Sang is a popular online streamer. In his videos, he talks about profiling crime cases and he has attained the most subscribers on the online platform that he uses. Woo Sang then looks for clues on an unsolved consecutive murder case. This process is live streamed over the internet.",
      popularity: 10.707,
      poster_path: "/vEBvHkGpcEkoALJOPe3PRt5gDhW.jpg",
      release_date: "2025-03-21",
      title: "Streaming",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/sNx1A3822kEbqeUxvo5A08o4N7o.jpg",
      genre_ids: [28, 35, 53],
      id: 1195506,
      original_language: "en",
      original_title: "Novocaine",
      overview:
        "When the girl of his dreams is kidnapped, everyman Nate turns his inability to feel pain into an unexpected strength in his fight to get her back.",
      popularity: 8.505,
      poster_path: "/xmMHGz9dVRaMY6rRAlEX4W0Wdhm.jpg",
      release_date: "2025-03-12",
      title: "Novocaine",
      video: false,
      vote_average: 7.6,
      vote_count: 36,
    },
    {
      adult: false,
      backdrop_path: "/b3mdmjYTEL70j7nuXATUAD9qgu4.jpg",
      genre_ids: [16, 14, 12],
      id: 823219,
      original_language: "lv",
      original_title: "Straume",
      overview:
        "A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.",
      popularity: 8.396,
      poster_path: "/imKSymKBK7o73sajciEmndJoVkR.jpg",
      release_date: "2024-08-29",
      title: "Flow",
      video: false,
      vote_average: 8.279,
      vote_count: 1590,
    },
    {
      adult: false,
      backdrop_path: "/xD4VusMgiDCqvAsdOdwHItOdaXS.jpg",
      genre_ids: [53],
      id: 1233575,
      original_language: "en",
      original_title: "Black Bag",
      overview:
        "When his beloved wife is suspected of betraying the nation, an intelligence agent faces the ultimate test – loyalty to his marriage or his country.",
      popularity: 7.643,
      poster_path: "/vcYrQ94y8L2qxEfQgTLVbtmppcn.jpg",
      release_date: "2025-03-12",
      title: "Black Bag",
      video: false,
      vote_average: 6.7,
      vote_count: 65,
    },
    {
      adult: false,
      backdrop_path: "/x0pkoGlwWdkzRxgQioD3cUG0awu.jpg",
      genre_ids: [18, 36],
      id: 1000837,
      original_language: "pt",
      original_title: "Ainda Estou Aqui",
      overview:
        "In 1971, military dictatorship in Brazil reaches its height. The Paiva family — Rubens, Eunice, and their five children — live in a beachside house in Rio, open to all their friends. One day, Rubens is taken for questioning and does not return.",
      popularity: 7.092,
      poster_path: "/gZnsMbhCvhzAQlKaVpeFRHYjGyb.jpg",
      release_date: "2024-09-19",
      title: "I'm Still Here",
      video: false,
      vote_average: 7.959,
      vote_count: 515,
    },
    {
      adult: false,
      backdrop_path: "/hmZnqijPaaACjenDkrbWcCmcADI.jpg",
      genre_ids: [18],
      id: 549509,
      original_language: "en",
      original_title: "The Brutalist",
      overview:
        "Escaping post-war Europe, visionary architect László Toth arrives in America to rebuild his life. On his own in a strange new country, a wealthy industrialist recognizes his talent. But power and legacy come at a heavy cost...",
      popularity: 6.948,
      poster_path: "/vP7Yd6couiAaw9jgMd5cjMRj3hQ.jpg",
      release_date: "2024-12-20",
      title: "The Brutalist",
      video: false,
      vote_average: 7.062,
      vote_count: 847,
    },
    {
      adult: false,
      backdrop_path: "/4HnBkc45h6ABO9i6rbPHTqlKUu8.jpg",
      genre_ids: [18, 80],
      id: 1013601,
      original_language: "en",
      original_title: "The Alto Knights",
      overview:
        "Two of New York's most notorious organized crime bosses, Frank Costello and Vito Genovese, vie for control of the city's streets. Once the best of friends, petty jealousies and a series of betrayals place them on a deadly collision course that will reshape the Mafia (and America) forever.",
      popularity: 6.095,
      poster_path: "/95KmR0xNuZZ6DNESDwLKWGIBvMg.jpg",
      release_date: "2025-03-14",
      title: "The Alto Knights",
      video: false,
      vote_average: 7.1,
      vote_count: 11,
    },
    {
      adult: false,
      backdrop_path: "/u2eA9pqi1q3DvevT7RuDuJHxxBT.jpg",
      genre_ids: [18, 53],
      id: 974950,
      original_language: "fr",
      original_title: "Emilia Pérez",
      overview:
        "Rita, an underrated lawyer working for a large law firm more interested in getting criminals out of jail than bringing them to justice, is hired by the leader of a criminal organization.",
      popularity: 5.629,
      poster_path: "/fko8fTfL6BcAqOUh6BZYUjt4SQP.jpg",
      release_date: "2024-08-21",
      title: "Emilia Pérez",
      video: false,
      vote_average: 6.8,
      vote_count: 1494,
    },
  ];
  const imageRenderer = (imgPath: string) => {
    const baseURL = "https://image.tmdb.org/t/p/w300";
    return baseURL + imgPath;
  };

  return (
    <div className="w-full flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-semibold text-2xl">Upcoming</p>
        <button className="flex-row gap-2 flex">
          See more
          <ArrowRight />
        </button>
      </div>
      <div className="flex flex-wrap gap-8">
        {UpcomingMovieData.slice(0, 10).map((Element, index) => {
          return (
            <OneMovieCard
              id={Element.id}
              imageSrc={imageRenderer(Element.poster_path)}
              movieTitle={Element.title}
              releaseDate={Element.release_date}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
