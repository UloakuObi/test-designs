"use client"
import { getMovies } from "@/lib/getMovies";
import { useState, useEffect } from "react"
import MovieCard from "../movies/MovieCard"
import { Child } from "../movies/Child"
import AppSidebar from "./Sidebar";
import CustomSidebar from "./CustomSidebar";

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
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [moviesData, setMoviesData] = useState<moviesData[]>([])

    const childrenData = [
        { id: "1", name: "Child A" },
        { id: "2", name: "Child B" },
        { id: "3", name: "Child C" },
    ];

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

    // This function handles the logic when ANY child is clicked
    const handleChildClick = (id: string) => {
        setSelectedId(id);
        console.log(`Parent received click from: ${id}`);
    };

    return (
    <div className="m-4 relative">
        <CustomSidebar />
        <div className="m-0 lg:ml-22">
        <h1 className="mb-4 text-xl font-bold">Movies Page</h1>
        <h1 className="mb-6 text-3xl font-bold">Trending movies</h1>
        <div className="flex gap-3">
            {moviesData.map(movie => {
                if (movie.trending === "true")
                    return <MovieCard
                            key={movie.id}
                            id={movie.id}
                            thumbnail={movie.thumbnail}
                            year={movie.year}
                            movieType={movie.movieType}
                            rating={movie.rating}
                            title={movie.title}
                            isBookmarked={selectedId === movie.id}
                            onButtonClick={handleChildClick} // Passing the function
                            variant="long"
                            />
            })}
        </div>
        <h1 className="mb-6 mt-10 text-3xl font-bold">Recommended for you</h1>
        <div className="flex gap-3">
            {moviesData.map(movie => {
                if (movie.trending !== "true")
                    return <MovieCard
                            key={movie.id}
                            id={movie.id}
                            thumbnail={movie.thumbnail}
                            year={movie.year}
                            movieType={movie.movieType}
                            rating={movie.rating}
                            title={movie.title}
                            isBookmarked={selectedId === movie.id}
                            onButtonClick={handleChildClick} // Passing the function
                            />
            })}
        </div>
        <hr />
        <br />
        <MovieCard 
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
        />

        <br/>

        <div className="space-y-4">
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
        </div>
        </div>
    </div>
    );
  }
  