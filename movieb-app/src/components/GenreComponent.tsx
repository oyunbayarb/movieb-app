import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight } from "lucide-react";

export const GenreBox = () => {
  const GenreListData = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  return (
    <div>
      <Popover>
        <PopoverTrigger>Genre</PopoverTrigger>
        <PopoverContent className="w-[530px] h-[333px]">
          <p className="font-semibold text-2xl">Genres</p>
          <p className="font-medium text-[16px] mb-5">
            See lists of movies by genre
          </p>
          <div className="flex-wrap flex gap-[5px]">
            {GenreListData.map((element) => {
              return (
                <button className="min-w-[115px] flex justify-evenly p-[2px] border-2 border-[#E4E4E7] rounded-full">
                  {element.name}
                  <ChevronRight />
                </button>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
