import {
  DetailPage,
  Footer,
  Header,
  NowPlayingMovie,
  NowPlayingSlide,
  PopularMovie,
  TopratedMovie,
  UpcomingMovie,
} from "@/components";

export default function Home() {
  return (
    <div className="w-screen">
      {/* <Header /> */}
      {/* <NowPlayingSlide /> */}
      <div className="flex-col p-20 flex gap-8">
        <DetailPage />

        {/* <NowPlayingMovie />
        <UpcomingMovie />
        <PopularMovie />
        <TopratedMovie /> */}
      </div>
      <Footer />
    </div>
  );
}
