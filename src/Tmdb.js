const API_KEY = "56dc540ebfa0a129a7f7117681d2546a"

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,

    },

    {
        name: "Originals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
        isLarge: false,

    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,

    },

    {
        name: "horror",
        title: "Terror",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
        isLarge: false,

    },

    {
        name: "comedy",
        title: "Comédia",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
        isLarge: false,

    },
    //{
        //name: "romances",
        //title: "Romances",
       // path: `/discover/tv?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
        //isLarge: false,

    //},

    {
        name: "documentary",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
        isLarge: false,

    }

   
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getMovies: ", error);
    }
};

export const getVideos = async (movieId) => {
    try {
        let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getVideos: ", error);
        throw error;
    }
};
export default categories;