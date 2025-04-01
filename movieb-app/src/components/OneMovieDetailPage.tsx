"use client";

import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type MovieDataType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  poster_path: string;
  release_date: string;
};

export const OneMovieDetailPage = () => {
  const { movieId } = useParams();
  const [oneMovieDetaildata, setOneMovieDetaildata] = useState<MovieDataType>({
    adult: false,
    backdrop_path: "",
    original_title: "",
    poster_path: "",
    release_date: "",
  });

  const fetchData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}?language=en-US`
    );
    setOneMovieDetaildata(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="w-screen h-[524px] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${oneMovieDetaildata.poster_path}`})`,
      }}
    >
      <p>{oneMovieDetaildata.original_title}</p>
      <p>{oneMovieDetaildata.release_date}</p>
    </div>
  );
};
