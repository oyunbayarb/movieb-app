import {
  Footer,
  Header,
  NowPlayingMovie,
  PopularMovie,
  TopratedMovie,
  UpcomingMovie,
} from "@/components";
import { NowPlayingSlide } from "@/components/NowPlayingSlideSection";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-screen h-fit flex justify-center items-center">
        <NowPlayingSlide />
      </div>

      {/* <div className="flex-col p-20 flex gap-8">
        <NowPlayingMovie />
        <UpcomingMovie />
        <PopularMovie />
        <TopratedMovie />
      </div>
      <Footer /> */}
    </div>
  );
}
