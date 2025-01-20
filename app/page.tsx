"use client";
import { useMemo, useState } from "react";
import Menupage from "./components/Menu";
import Streamed from "./components/streamed";
import { mockData } from "@/data";

export default function Home() {
  const [status, setStatus] = useState<string>("all-games");

  const allGames = useMemo(
    () =>
      status === "all-games"
        ? mockData
        : mockData?.filter((games) => games.statuses === status),
    [status]
  );

  return (
    <div>
      <div className="flex justify-center flex-wrap mt-[2.5rem]">
        {allGames?.map((profile) => (
          <div key={profile?.id}>
            <Streamed
              title={profile.titles}
              status={profile.statuses}
              url={profile.imageUrl}
              playlist={profile.playlistUrl}
            />
          </div>
        ))}
      </div>
      <Menupage statusSelected={(value) => setStatus(value)} />
    </div>
  );
}
