import React from 'react';
import MovieCard from './movie-card';


const BookmarkedMovies = () =>
{
    const movies = [
        "The Shawshank Redemption",
        "The Godfather",
        "The Dark Knight",
        "Inception",
        "Pulp Fiction",
        "The Lord of the Rings: The Fellowship of the Ring",
    ];

    return (
        <main className="container mx-auto px-4 pt-20 md:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Bookmarked Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie, index) => (
                    <MovieCard key={index} title={movie} />
                ))}
            </div>
        </main>
    );
};

export default BookmarkedMovies;