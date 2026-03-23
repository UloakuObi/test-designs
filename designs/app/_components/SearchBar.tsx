"use client"
import { Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import type FormEvent from 'react'
import getOmdb from '@/lib/getOmdb'
import getMovieDetails from '@/lib/getMovieDetails'
import MovieCard from './MovieCard'
import { Star, Dot } from 'lucide-react'

type MovieData = {
    Title:string; 
    Year: string;
    imdbID: string;
    Type: string; 
    Poster: string;
}

type MovieDetails = MovieData & {
    Plot?: string;
    Runtime?: string;
    imdbRating?: string;
    Poster?: string;
    Director?: string;
    Actors?: string;
    Genre?: string;
}

export default function SearchBar() {
    const [inputValue, setInputValue] = useState<string>("")
    const [movies, setMovies] = useState<MovieData[]>([])
    const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null)

    const handlesubmit = async (e: FormEvent.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = await getOmdb(inputValue)
        setMovies(data.Search || [])
    }

    const handleMovieClick = async(id: string) => {
        const data = await getMovieDetails(id)
        setSelectedMovie(data)
    }

    // Inspect data
    useEffect(() => {console.log(movies[0])}, [movies])

    const handleBookmarkClick = () => {

    }

    return (
        <div>
        <div className="flex gap-3 items-center border border-solid border-gray-50/20 py-1 w-[95%]">
            <Search />
            <form onSubmit={handlesubmit} className='w-full'>
            <input type='text' 
                id='search-input'
                name='movie-name'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='Search for movies or TV series'
                className='py-4 caret-red-500 
                focus:outline-none focus:border-b focus:border-solid w-full focus:border-blue-500'
                />
            </form>
        </div>
        <br/>
        <hr/>
        <br/>
        {/* Modal or Details Overlay */}
            {selectedMovie && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 overflow-y-auto" onClick={() => setSelectedMovie(null)}>
                    <div className="bg-gray-900 p-8 rounded-lg max-w-2xl border border-gray-700" onClick={e => e.stopPropagation()}>
                        <Image
                            src={selectedMovie.Poster}
                            alt={`poster image for ${selectedMovie.Title}`}
                            width={300}
                            height={150}
                        />
                        {/* <img
                            src={selectedMovie.Poster}
                            alt={`poster image for ${selectedMovie.Title}`}
                        /> */}
                        <span className='flex items-center mt-2'>
                            <h2 className="text-2xl font-bold">{selectedMovie.Title}</h2>
                            <p className="text-blue-400 flex items-center pl-2">
                                <Star className='text-yellow-300 fill-yellow-300'/> 
                                <p className='pl-1'>{selectedMovie.imdbRating}</p>
                            </p>
                        </span>
                        <p className="text-blue-400 mt-2 flex gap-x-1">{`${selectedMovie.Year}`}  <Dot/>  {selectedMovie.Genre}  <Dot/>  {selectedMovie.Runtime}</p>
                        <p className="mt-2 text-gray-300">{selectedMovie.Plot}</p>
                        <p className="text-gray-300 mt-2">Director: {selectedMovie.Director}</p>
                        <p className="text-gray-300">Actors: {selectedMovie.Actors}</p>
                        <button 
                            className="mt-6 text-red-500 underline"
                            onClick={() => setSelectedMovie(null)}
                        >Close</button>
                    </div>
                </div>
            )}
        <br/>
        <hr/>
        <br/>
            <div className='w-full border border-solid border-gray-100/50 p-4 flex flex-wrap gap-x-8 gap-y-4'>
            {movies.length != 0 ? movies.map(movie => (
                <div 
                    key={movie.imdbID}
                    onClick={() => handleMovieClick(movie.imdbID)}
                    className="cursor-pointer hover:scale-105 transition-transform">
                <MovieCard 
                    id={movie.imdbID}
                    isBookmarked={false}
                    onButtonClick={handleBookmarkClick}
                    thumbnail={movie.Poster}
                    year={movie.Year}
                    movieType={movie.Type}
                    rating="N/A"
                    title={movie.Title}
                    className='grow-[0.25]'
            /></div> ))
            : <h3>Search for Movies</h3>}
            </div>
        </div>
    )
}