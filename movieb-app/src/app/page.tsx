import {
  Footer,
  Header,
  NowPlayingMovie,
  PopularMovie,
  TopratedMovie,
  UpcomingMovie,
} from "@/components";
import { NowPlayingSlide } from "@/components/NowPlayingSlideSection";
import { GenreData } from "@/components/Task-7";

export default function Home() {
  return (
    <div className="w-screen flex-col ml-5 justify-center items-center mt-5 gap-5">
      <Header />
      <div className="w-screen flex justify-center items-center">
        <NowPlayingSlide />
      </div>
      <div className="flex-col p-20 flex gap-8">
        <NowPlayingMovie />
        <UpcomingMovie />
        <PopularMovie />
        <TopratedMovie />
      </div>
      <Footer />
    </div>
  );
}
