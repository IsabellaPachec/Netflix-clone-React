import React, { useState } from 'react'
import { getMovies } from '../Tmdb';
import { useEffect } from 'react';
import "./Row.css"

const imgHost = "https://image.tmdb.org/t/p/original/";

function Row({ title, path, isLarge }) {
    const [movies, setMovies] = React.useState([]);

    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            console.log("data", data);
            setMovies(data?.results);
        } catch (error) {
            console.log("fetMovie error: ", error);
        }
    };

    useEffect(() => {
        fetchMovies(path);
    }, [path]);

    const [scrollX, setScrollX] = useState(0);

    const handleftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }

        setScrollX(x);
    }

    const handrighttArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let movieW = movies.length * 150;
        if (window.innerWidth - movieW > x) {
            x = window.innerWidth - movieW - 20;
        }
        setScrollX(x);
    };


    return (
        <div className="row-position">
            <div className='row-container'>
                <h2 className='row-header'>{title}</h2>

                <div className="movie-row-left" onClick={handleftArrow}>u</div>
                <div className="movie-row-right" onClick={handrighttArrow}>u</div>

                <div className='row-cards row-scroll' style={{
                    marginLeft: scrollX
                }}>
                    {movies?.map(movies => {
                        return <img className={`movie-card ${isLarge && "movie-card-larger"}`}
                            key={movies.id}
                            src={`${imgHost}${isLarge ? movies.backdrop_path : movies.poster_path}`} alt={movies.name}></img>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Row
