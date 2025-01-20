"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Streamed = ({ title, status, url, playlist }: any) => {
  return (
    <div className="m-2 ">
      <Card
        className="sm:w-[25rem] mt-20 h-full overflow-hidden transition-all duration-300 
        hover:animate-card-hover hover:shadow-lg
       bg-gradient-to-br from-[#1A1F2C] to-[#2A2F3C] border-[#9b87f5] hover:border-[#8B5CF6]">
        <CardHeader className="p-0 w-full relative">
          <CardDescription
            className={cn(
              "absolute m-0 z-20 right-2 mt-2 rounded-lg px-2  text-white font-medium text-[12.5px] hover:bg-purple-500 hover:text-white delay-100 transition-all ease-in-out",
              {
                "bg-yellow-400": status === "online",
                "bg-pink-400": status === "in-progress",
                "bg-green-500": status === "imageUrl",
                "bg-orange-500": status === "playlist",
              }
            )}>
            {status}
          </CardDescription>
          <Image
            src={url}
            width={100}
            height={100}
            alt="d"
            quality={100}
            className="h-[15rem] w-full transition-transform duration-300  scale-105 hover:scale-110"
            style={{
              objectFit: "cover",
            }}
          />
        </CardHeader>
        <CardContent className="p-3">
          <div className="flex  ">
            <div className="text-white font-semibold">{title}</div>
          </div>
        </CardContent>
        <CardFooter className="px-3 ">
          <Link href={playlist} className="w-[100%]" target="_blank">
            <Button
              className="w-[100%] bg-gradient-to-r from-red-500 to-[#8B5CF6] 
            hover:from-[#8B5CF6] hover:to-[#9b87f5] text-white transition-all
            duration-300 font-semibold">
              View Playlist
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Streamed;
