import { axiosInstance } from "@/lib/utils";

export const OneMovieDetailPage = async () => {
  try {
    const { data } = await axiosInstance.get(`/movie/278?language=en-US`);
    return data;
  } catch (err: any) {}

  return (
    <div className="flex p-20 gap-8 bg-amber-200 rounded-lg h-[428px]">
      <div className="flex"></div>
      <div>
        <p>
          {movieName} {releaseYear}
        </p>
        <p>{}</p>
      </div>
    </div>
  );
};
