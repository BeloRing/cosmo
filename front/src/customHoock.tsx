import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFindFilms = (offsetNumber) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=9833140e79826fa84bf24c1dda278eb6&language=en-US',
            params: { page: offsetNumber }
        })
        .then(res => {
            setData(data.concat(res.data.results));
        });
        // eslint-disable-next-line
    }, [offsetNumber]);
    return data;
};
