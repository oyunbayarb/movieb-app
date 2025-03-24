import { Header, UpcomingMovie } from "@/components";

export default function Home() {
  return (
    <div className="flex-col">
      <Header />

      <div className="flex p-20">
        <UpcomingMovie />
      </div>
    </div>
  );
}
