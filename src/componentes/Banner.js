import React from 'react'
import "../componentes/Banner.css"
import { getMovies } from '../Tmdb';
import { useEffect } from 'react';
import categories from '../Tmdb';

function Banner() {


    const [movie, setMovie] = React.useState({});

    const fetchRandomMovie = async () => {
        try {
            const OriginalsCategory = categories.find(
                (category) => category.name === "Originals"
            );
            const data = await getMovies(OriginalsCategory.path);

            const movies = data?.results;

            const randomIndex = Math.floor(Math.random() * data.results.length);

            setMovie(data?.results[randomIndex]);

        } catch (error) {
            console.log("banner FatchRandomMovie error :", error)
        }
    }
    useEffect(() => {
        fetchRandomMovie();
    }, []);

    let firtDate = new Date(movie.first_air_date);

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner-container"
            style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center",
            }}>

            <div className="gradient">
                <div className="vertical-gradient">
                    <div className="banner-content">
                        <h1 className="banner-title">
                            {movie?.title || movie.name || movie?.original_name}
                        </h1>

                        <div className="banner-description">
                            <div className="show-points">{movie.vote_average} pontos</div>
                            <div className="show-year">{firtDate.getFullYear()}</div>
                            <h2 className='description'>{truncate(movie?.overview, 150)}</h2>
                        </div>

                        <div className="banner-button-container">
                            <div className="banner-button-withe">▶ Assistir</div>
                            <div className="banner-button">🛈 Mais Informações</div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Banner
