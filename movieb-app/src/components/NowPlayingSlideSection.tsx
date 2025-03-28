"use client";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { Ellipsis } from "lucide-react";

export const NowPlayingSlide = () => {
  const nowPlayingSlideData = [
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
  ];
  const imageRenderer = (imgPath: string) => {
    const baseURL = "https://image.tmdb.org/t/p/original";
    return baseURL + imgPath;
  };

  return (
    <Carousel className="w-screen h-[800px]">
      <CarouselContent className="w-screen h-[800px]">
        {nowPlayingSlideData.map((Element, index) => {
          return (
            <CarouselItem key={index} className="flex w-screen h-[800px]">
              <Image
                className="w-screen h-[800px]"
                width={1440}
                height={600}
                src={`https://image.tmdb.org/t/p/original${Element.poster_path}`}
                alt="poster"
              />
            </CarouselItem>
          );
        })}
        <Ellipsis className="absolute" />;
      </CarouselContent>
      <CarouselPrevious className="flex absolute left-10 size-10" />
      <CarouselNext className="flex absolute right-10 size-10" />
    </Carousel>
  );
};
