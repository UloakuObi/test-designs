import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Dot, Bookmark, Film, MonitorPlay } from 'lucide-react'
//import { Film } from 'lucide-react'

type MovieCardProps = {
    id?: string;
    isBookmarked?: boolean;
    onButtonClick?: (id: string) => void;
    thumbnail: string;
    year: string;
    movieType: string;
    rating: string;
    title: string;
    variant?: string;
    className?: string;
}

export default function MovieCard({id, isBookmarked, onButtonClick, thumbnail, year, movieType, rating, variant, title, className}: MovieCardProps) {
  
    const movieIcon = movieType === "Movie" ? <Film /> : <MonitorPlay />
    const imgSize = variant === "long" ? "h-[210px]" : ""
    const cardSize = variant === "long" ? "w-[480px]" : "w-[280px]"
    const cardDesc = variant === "long" ? "absolute bottom-18 left-5 z-30" : ""
    const cardTitle = variant === "long" ? "absolute bottom-9 left-5 z-30 text-2xl" : ""
    const fontSize = variant == "long" ? "text-sm" : "text-xs"

    return (
    <Card className={`pt-0 relative rounded-b-[0] bg-[#10141E] ${cardSize} ${className}`}>
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
      <img
        src={thumbnail}
        alt="Event cover"
        className={`relative z-20 rounded-b-xl aspect-video w-full ${imgSize} object-cover brightness-60 grayscale dark:brightness-40`}
      />

      <CardDescription className={`flex gap-1 items-center ${cardDesc}`}>
            <time dateTime="2009" className={`${fontSize}`}>{year}</time>
            <Dot style={{strokeWidth:"2px", width:"20px"}} />
            <div className="flex gap-1 items-center">
                {movieIcon}
                <p className={`${fontSize}`}>{movieType}</p>
            </div>
            <Dot style={{strokeWidth:"2px", width:"20px"}} />
            <p className={`${fontSize}`}>{rating}</p>
      </CardDescription>
      <CardTitle className={`font-bold text-white text-xl ${cardTitle}`}>
        {title}
      </CardTitle>

      <CardAction className="absolute top-3 right-3 z-35">
        <Button className="rounded-full w-[48px] h-[48px] bg-[#10141E]/50 cursor-pointer group">
            <Bookmark className="!w-[25px] !h-[25px] text-white transition-colors group-hover:text-red-500 group-hover:fill-red-500"/>
        </Button>
      </CardAction>
        
    </Card>
  );
}
