import {
  Footer,
  Header,
  NowPlayingMovie,
  PopularMovie,
  TopratedMovie,
  UpcomingMovie,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
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
