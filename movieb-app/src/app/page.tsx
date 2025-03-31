import {
  Footer,
  Header,
  NowPlayingMovie,
  NowPlayingSlide,
  OneMovieDetailPage,
  PopularMovie,
  TopratedMovie,
  UpcomingMovie,
} from "@/components";

export default function Home() {
  return (
    <div className="w-screen">
      <Header />

      <div className="flex-col p-20 flex gap-8">
        <OneMovieDetailPage />
        {/* <NowPlayingMovie />
        <UpcomingMovie />
        <PopularMovie />
        <TopratedMovie /> */}
      </div>
      <Footer />
    </div>
  );
}
