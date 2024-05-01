import axios from 'axios'
import React from 'react'
import MainMovie from './main-movie';
import RecommendedMovies from './recommended-movie';

export interface IMovie
{
    data: {
        index: number;
        budget: number;
        genres: string;
        homepage: string;
        id: number;
        keywords: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        release_date: string;
        revenue: number;
        runtime: number;
        status: string;
        tagline: string;
        vote_average: number;
        vote_count: number;
        cast: string;
        director: string;
    }
}
const MoviePage = async ({ params }: { params: { movie_name: string } }) =>
{
    const url = process.env.NEXT_PUBLIC_PYTHON_SERVER_URL
    console.log(url)
    const decodedPath = decodeURI(params.movie_name);
    let movieImage = null
    let movieData: IMovie | null = null;
    let recommentedData = null;
    try
    {
        const { data: mData } = await axios.get<IMovie>(`${url}/${decodedPath}`)
        const { data: rData } = await axios.get(`${url}/predict/${decodedPath}`)
        const { data: imageData } = await axios.get(`https://www.myapifilms.com/imdb/idIMDB?title=${decodedPath}&token=e7a9efa9-2cd6-46e0-89f0-5026fd325f99`)
        movieData = mData
        recommentedData = rData.Movies
        movieImage = (imageData?.data?.movies[0]?.urlPoster)
    } catch (error)
    {
        console.log(error)
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <MainMovie movieImage={movieImage} movieData={movieData} />
            <RecommendedMovies recommentedData={recommentedData} />
        </section>
    )
}

export default MoviePage