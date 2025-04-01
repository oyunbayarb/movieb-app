import Link from "next/link";

export const OneMovieCard = ({
  imageSrc,
  movieTitle,
  releaseDate,
  id,
}: {
  imageSrc: string;
  id: number;
  movieTitle: string;
  releaseDate: string;
}) => {
  return (
    <Link href={`/detail/${id}`}>
      <div className="w-[230px] h-[430px] bg-[#F4F4F5] rounded-lg">
        <img src={imageSrc} alt="MovieCardImage" className="rounded-lg"></img>
        <div className="flex-col p-3">
          <p>{movieTitle}</p>
          <p>{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};
