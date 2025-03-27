import { ChevronRight } from "lucide-react";
export const GenreData = ({ genreItemName }: { genreItemName: string }) => {
  return (
    <div>
      <button>{genreItemName}</button>
      <ChevronRight />
    </div>
  );
};
