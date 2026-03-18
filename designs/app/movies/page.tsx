"use client"
import { getMovies } from "@/lib/getMovies";
import { useState, useEffect } from "react"
import MovieCard from "../_components/MovieCard"
import useBookmarks from "@/hooks/useBookmarks";
import CustomSidebar from "../_components/CustomSidebar";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface moviesData {
    id: string;
    thumbnail: string;
    year: string;
    movieType: string;
    rating: string;
    title: string;
    trending: string;
}

export default function MoviesPage() {

    const [moviesData, setMoviesData] = useState<moviesData[]>([])
    const [selectedIds, setSelectedIds] = useBookmarks();

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const movies = await getMovies()
                setMoviesData(movies)
            } catch(error) {
                console.error("Failed to fetch movies:", error);
            }
        }

        loadMovies()
        console.log(moviesData)
    }, [])

    // This function handles the logic when a movieCard is clicked
    const handleBookmarkClick = (id: string) => {
        setSelectedIds((prev) => {
            // Check if the ID is already in the array
            if (prev.includes(id)) {
                // If it is, remove it
                return prev.filter(movie => movie !== id);
            } else {
                // If it's not, add it
                return [...prev, id]
            }
        });
        console.log(`Parent received click from: ${id}`);
    }

    const handleFilter = (term: string) => {
        const params = new URLSearchParams(searchParams)
        
        if (term) {
            params.set('movie-type', term)
        } else {
            params.delete('movie-type')
        }

        // This updates the URL to /movies?movie-type=movie without a full page reload
        router.push(`${pathname}?${params.toString()}`)

    }

    const currentMovieType = searchParams.get('movie-type')
    const filteredMovies = currentMovieType ? 
            moviesData.filter(movie => movie.movieType.toLowerCase() === currentMovieType.toLowerCase()) 
            : moviesData
    
    return (
    <div className="m-4 w-screen relative">
        <CustomSidebar variant="mobile" onButtonClick={handleFilter}/>
        <CustomSidebar variant="desktop" onButtonClick={handleFilter}/>
        <div className="m-0 lg:ml-22">
        <h1 className="mb-4 text-xl font-bold">Movies Page</h1>
        <h1 className="mb-6 text-3xl font-bold">Trending movies</h1>
        <div className="flex gap-3 overflow-x-auto">
            {filteredMovies.map(movie => {
                if (movie.trending === "true")
                    return <MovieCard
                            key={movie.id}
                            id={movie.id}
                            thumbnail={movie.thumbnail}
                            year={movie.year}
                            movieType={movie.movieType}
                            rating={movie.rating}
                            title={movie.title}
                            isBookmarked={selectedIds.includes(movie.id)}
                            onButtonClick={handleBookmarkClick} // Passing the function
                            variant="long"
                            className="flex-shrink-0"
                            />
            })}
        </div>
        <h1 className="mb-6 mt-10 text-3xl font-bold">Recommended for you</h1>
        <div className="flex gap-y-2 gap-x-5 sm:gap-x-6 flex-wrap mr-4">
            {filteredMovies.map(movie => {
                if (movie.trending !== "true")
                    return <MovieCard
                            key={movie.id}
                            id={movie.id}
                            thumbnail={movie.thumbnail}
                            year={movie.year}
                            movieType={movie.movieType}
                            rating={movie.rating}
                            title={movie.title}
                            isBookmarked={selectedIds.includes(movie.id)}
                            className="grow-[0.98] sm:grow-[0.85] md:grow-[0.6] lg:grow-[0.25] h-fit"
                            onButtonClick={handleBookmarkClick} // Passing the function
                            />
            })}
        </div>
        <hr />
        <br />
        {/* <MovieCard 
            thumbnail="https://avatar.vercel.sh/shadcn1"
            year="2017"
            movieType="Movie"
            rating="PG"
            title="The Great Gatsby"
            variant="long"
        />

        <br/>

        <MovieCard 
            thumbnail="https://avatar.vercel.sh/shadcn1"
            year="2017"
            movieType="Movie"
            rating="PG"
            title="The Great Gatsby"
        />

        <br/>

        <MovieCard 
            thumbnail="https://avatar.vercel.sh/shadcn1"
            year="2006"
            movieType="TV Series"
            rating="18+"
            title="The Supranos"
        /> */}

        <br/>

        {/* <div className="space-y-4 w-[260px]">
            <h1>Selected: {selectedId || "None"}</h1>
            {childrenData.map((child) => (
                <Child
                key={child.id}
                id={child.id}
                label={child.name}
                isSelected={selectedId === child.id}
                onButtonClick={handleChildClick} // Passing the function
                />
            ))}
        </div> */}
        </div>
    </div>
    );
  }
  