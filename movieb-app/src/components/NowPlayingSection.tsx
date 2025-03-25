import { ArrowRight } from "lucide-react";
import { OneMovieCard } from "./MovieCardComponent";
export const NowPlayingMovie = () => {
  const NowPlayingMovieData = [
    {
      adult: false,
      backdrop_path: "/qfAfE5auxsuxhxPpnETRAyTP5ff.jpg",
      genre_ids: [28, 53, 878],
      id: 822119,
      original_language: "en",
      original_title: "Captain America: Brave New World",
      overview:
        "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
      popularity: 1794.8035,
      poster_path: "/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
      release_date: "2025-02-12",
      title: "Captain America: Brave New World",
      video: false,
      vote_average: 6.131,
      vote_count: 1093,
    },
    {
      adult: false,
      backdrop_path: "/gsQJOfeW45KLiQeEIsom94QPQwb.jpg",
      genre_ids: [28, 53],
      id: 1125899,
      original_language: "en",
      original_title: "Cleaner",
      overview:
        "When a group of radical activists take over an energy company's annual gala, seizing 300 hostages, an ex-soldier turned window cleaner suspended 50 storeys up on the outside of the building must save those trapped inside, including her younger brother.",
      popularity: 1510.943375,
      poster_path: "/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg",
      release_date: "2025-02-19",
      title: "Cleaner",
      video: false,
      vote_average: 5.9,
      vote_count: 48,
    },
    {
      adult: false,
      backdrop_path: "/k5F9jYfcsp4EFDVaUvyWd1uyXsX.jpg",
      genre_ids: [16, 28],
      id: 1297763,
      original_language: "ja",
      original_title: "ニンジャバットマン対ヤクザリーグ",
      overview:
        "The Batman family has returned to the present to discover that Japan has disappeared, and a giant island - Hinomoto - is now in the sky over Gotham City.  At the top sit the Yakuza, a group of superpowered individuals who reign without honor or humanity and look suspiciously like the Justice League. Now, it’s up to Batman and his allies to save Gotham!",
      popularity: 1222.743125,
      poster_path: "/sVVT6GYFErVv0Lcc9NvqCu0iOxO.jpg",
      release_date: "2025-03-17",
      title: "Batman Ninja vs. Yakuza League",
      video: false,
      vote_average: 6.7,
      vote_count: 56,
    },
    {
      adult: false,
      backdrop_path: "/9KbUro9uJHUt5xyorQtjWmGfJDE.jpg",
      genre_ids: [10751, 14],
      id: 447273,
      original_language: "en",
      original_title: "Snow White",
      overview:
        "Princess Snow White flees the castle when the Evil Queen, in her jealousy over Snow White's inner beauty, tries to kill her. Deep into the dark woods, she stumbles upon seven magical dwarves and a young thief named Jonathan. Together, they strive to survive the Queen's relentless pursuit and aspire to take back the kingdom in the process...",
      popularity: 1114.221625,
      poster_path: "/xWWg47tTfparvjK0WJNX4xL8lW2.jpg",
      release_date: "2025-03-19",
      title: "Snow White",
      video: false,
      vote_average: 4.6,
      vote_count: 260,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [28, 10752],
      id: 1373723,
      original_language: "en",
      original_title: "The Codes of War",
      overview:
        "War stories about family, ethics and honor include the true story of two U.S. Marines who in a span of six seconds, must stand their ground to stop a suicide truck bomb, a Navy Corpsman who attempts to hold on to his humanity, and a WW2 soldier who gets separated from his squad and is forced to re-evaluate his code.",
      popularity: 1046.893625,
      poster_path: "/oXeiQAfRK90pxxhP5iKPXQqAIN1.jpg",
      release_date: "2025-03-20",
      title: "The Codes of War",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/2n7lYEeIbucsEQCswRcVB6ZYmMP.jpg",
      genre_ids: [878, 12, 28],
      id: 777443,
      original_language: "en",
      original_title: "The Electric State",
      overview:
        "An orphaned teen hits the road with a mysterious robot to find her long-lost brother, teaming up with a smuggler and his wisecracking sidekick.",
      popularity: 932.4646250000001,
      poster_path: "/1TZ9Er1xEAKizzKKqYVgJIhNkN2.jpg",
      release_date: "2025-03-07",
      title: "The Electric State",
      video: false,
      vote_average: 6.631,
      vote_count: 724,
    },
    {
      adult: false,
      backdrop_path: "/deUWVEgNh2IGjShyymZhaYP40ye.jpg",
      genre_ids: [28, 12, 53],
      id: 1356039,
      original_language: "es",
      original_title: "Contraataque",
      overview:
        "When a hostage rescue mission creates a new enemy, Capt. Guerrero and his elite soldiers must face an ambush by a criminal group.",
      popularity: 817.12825,
      poster_path: "/lI2uFlSEkwXKljqiry7coaJ6wIS.jpg",
      release_date: "2025-02-27",
      title: "Counterattack",
      video: false,
      vote_average: 8.496,
      vote_count: 524,
    },
    {
      adult: false,
      backdrop_path: "/AtciHGgpOU7ngsVhXbS2S5Spdlv.jpg",
      genre_ids: [28, 35],
      id: 1077782,
      original_language: "en",
      original_title: "Old Guy",
      overview:
        "Stuck at a dead end but vying for the love of spunky club manager Anata, aging contract killer Danny Dolinski is thrilled when The Company pulls him back in the field, but only to train Gen Z newcomer Wihlborg, a prodigy assassin with an attitude.",
      popularity: 748.91275,
      poster_path: "/ulVVfNY8bmy1RbHfY4zi3fOwGzh.jpg",
      release_date: "2024-12-13",
      title: "Old Guy",
      video: false,
      vote_average: 5.3,
      vote_count: 47,
    },
    {
      adult: false,
      backdrop_path: "/gFFqWsjLjRfipKzlzaYPD097FNC.jpg",
      genre_ids: [28, 53, 80],
      id: 1126166,
      original_language: "en",
      original_title: "Flight Risk",
      overview:
        "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
      popularity: 655.685125,
      poster_path: "/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg",
      release_date: "2025-01-22",
      title: "Flight Risk",
      video: false,
      vote_average: 6.144,
      vote_count: 518,
    },
    {
      adult: false,
      backdrop_path: "/vuDzQwwkyGJ0CIk1x8pO9rAq7HE.jpg",
      genre_ids: [53, 80, 9648],
      id: 1210938,
      original_language: "ko",
      original_title: "계시록",
      overview:
        "A pastor who believes in divine revelation and a detective haunted by visions pursue a missing person case — exposing their own demons in the process.",
      popularity: 594.7908749999999,
      poster_path: "/ak0HlRVsVzh8mvwIUZpZr0z6uqW.jpg",
      release_date: "2025-03-20",
      title: "Revelations",
      video: false,
      vote_average: 6.486,
      vote_count: 35,
    },
    {
      adult: false,
      backdrop_path: "/9nhjGaFLKtddDPtPaX5EmKqsWdH.jpg",
      genre_ids: [10749, 878, 53],
      id: 950396,
      original_language: "en",
      original_title: "The Gorge",
      overview:
        "Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.",
      popularity: 578.357625,
      poster_path: "/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
      release_date: "2025-02-13",
      title: "The Gorge",
      video: false,
      vote_average: 7.747,
      vote_count: 2124,
    },
    {
      adult: false,
      backdrop_path: "/hD2SN5bbqxk0kcRmsATJkXObgnZ.jpg",
      genre_ids: [28, 80, 14, 53],
      id: 1405338,
      original_language: "ja",
      original_title: "Demon City 鬼ゴロシ",
      overview:
        'Framed for his family\'s murder and left for dead, an ex-hitman will stop at nothing to exact revenge on the masked "demons" who have taken over his city.',
      popularity: 577.71,
      poster_path: "/g5PqsFFrayyRL1Ldgib2lMYuJXg.jpg",
      release_date: "2025-02-26",
      title: "Demon City",
      video: false,
      vote_average: 6.9,
      vote_count: 166,
    },
    {
      adult: false,
      backdrop_path: "/gjqtmaKgZCZhCYgMJwsd3JHIAUt.jpg",
      genre_ids: [27],
      id: 937393,
      original_language: "en",
      original_title: "Bloat",
      overview:
        "After a near-death drowning accident, a young boy's family is horrified to discover he has become possessed by a legendary demon from the depths of the lake. As the family races against time to save the boy's soul, the evil monster inside the child tears the family apart as it seeks to destroy everyone in its path.",
      popularity: 474.392375,
      poster_path: "/nlutnb8dO390fo5zkRayYiVuKdU.jpg",
      release_date: "2025-03-07",
      title: "Bloat",
      video: false,
      vote_average: 4.0,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: "/2jllAxMf7dTMt1fw9A1slsaj6Fv.jpg",
      genre_ids: [35, 53],
      id: 1362608,
      original_language: "fi",
      original_title: "Pikku Siperia",
      overview:
        "A pastor's faith turns upside down when a meteorite lands in his small Finnish town, its impact stirring up chaos and criminal intentions.",
      popularity: 465.38487499999997,
      poster_path: "/lhg3YuybroN2gszAEanXLMtj473.jpg",
      release_date: "2025-03-20",
      title: "Little Siberia",
      video: false,
      vote_average: 7.425,
      vote_count: 20,
    },
    {
      adult: false,
      backdrop_path: "/qSh3Aav8Kcoe2D2Azr8Bh1J0HAa.jpg",
      genre_ids: [53, 18],
      id: 1145725,
      original_language: "en",
      original_title: "Tyler Perry's Duplicity",
      overview:
        "High-powered attorney Marley faces her most personal case yet when she is tasked with uncovering the truth behind the murder of her best friend Fela’s husband. With the help of her boyfriend – a former cop turned private investigator – Marley’s search for what really happened leads her down a treacherous maze of deception and betrayal.",
      popularity: 398.33175,
      poster_path: "/xNINmmVZuRn2MWo34Mj42OjBntN.jpg",
      release_date: "2025-03-19",
      title: "Tyler Perry's Duplicity",
      video: false,
      vote_average: 6.867,
      vote_count: 49,
    },
    {
      adult: false,
      backdrop_path: "/lsgT602GYV8ts97sKH1gWFtQs1k.jpg",
      genre_ids: [16, 12, 35, 10751, 14],
      id: 1104845,
      original_language: "en",
      original_title: "Plankton: The Movie",
      overview:
        "Plankton's tangled love story with his sentient computer wife goes sideways when she takes a stand — and decides to destroy the world without him.",
      popularity: 358.126125,
      poster_path: "/hGaUNLF5VZbg9ovPTyjm9Rv5xWz.jpg",
      release_date: "2025-03-08",
      title: "Plankton: The Movie",
      video: false,
      vote_average: 7.0,
      vote_count: 54,
    },
    {
      adult: false,
      backdrop_path: "/jl2YIADk391yc6Qjy9JhgCRkHJk.jpg",
      genre_ids: [16, 18, 35],
      id: 1064486,
      original_language: "en",
      original_title: "Memoir of a Snail",
      overview:
        "Forcibly separated from her twin brother when they are orphaned, a melancholic misfit learns how to find confidence within herself amid the clutter of misfortunes and everyday life.",
      popularity: 330.457625,
      poster_path: "/57AgZv1ITeBLShiNdchZ5153evs.jpg",
      release_date: "2024-10-17",
      title: "Memoir of a Snail",
      video: false,
      vote_average: 7.904,
      vote_count: 307,
    },
    {
      adult: false,
      backdrop_path: "/dGULFnPJKPh0sdu3F64YmQ0qcym.jpg",
      genre_ids: [53, 18],
      id: 972533,
      original_language: "en",
      original_title: "Last Breath",
      overview:
        "Last Breath follows a seasoned deep-sea diver as he battles the raging elements to rescue his crewmate trapped hundreds of feet below the ocean's surface.",
      popularity: 321.10525,
      poster_path: "/w04Xg5Bnqj7ECdCxTsHgqK6AtJW.jpg",
      release_date: "2025-02-27",
      title: "Last Breath",
      video: false,
      vote_average: 6.1,
      vote_count: 76,
    },
    {
      adult: false,
      backdrop_path: "/zdy3h2sMppVp1Q41HpLiyF5w7es.jpg",
      genre_ids: [16, 14, 12],
      id: 823219,
      original_language: "lv",
      original_title: "Straume",
      overview:
        "A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.",
      popularity: 311.142875,
      poster_path: "/imKSymKBK7o73sajciEmndJoVkR.jpg",
      release_date: "2024-08-29",
      title: "Flow",
      video: false,
      vote_average: 8.3,
      vote_count: 1634,
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
      popularity: 307.82824999999997,
      poster_path: "/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
      release_date: "2025-02-28",
      title: "Mickey 17",
      video: false,
      vote_average: 6.982,
      vote_count: 927,
    },
  ];
  const imageRenderer = (imgPath: string) => {
    const baseURL = "https://image.tmdb.org/t/p/w300";
    return baseURL + imgPath;
  };

  return (
    <div className="w-full flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-semibold text-2xl">Now Playing</p>
        <button className="flex-row gap-2 flex">
          See more
          <ArrowRight />
        </button>
      </div>
      <div className="flex flex-wrap gap-8">
        {NowPlayingMovieData.map((Element, index) => {
          return (
            <OneMovieCard
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
