import React, { useState } from 'react';
import { useStyles } from 'src/pages/MainPage/style';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFindFilms } from 'src/customHoock';
import { filmData } from 'src/types';
import HeaderBar from 'src/component/HeaderBar';
import StarIcon from '@material-ui/icons/Star';


interface PadeProps {

}

const MainPage: React.FC<PadeProps> = () => {
    const classes = useStyles();

    const [offset, setOffset] = useState(1);

    const data = useFindFilms(offset);

    const updateData = () => {
        setOffset(offset + 1);
    };

    return (
        <div>
            <HeaderBar/>
            <InfiniteScroll
                dataLength={data.length}
                next={updateData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {data.map((item: filmData, index) => (
                    <div className={classes.filmItem} key={index}>
                        {index + 1}. {item.title}
                        <div className={classes.rate}>
                            <StarIcon className={classes.star}/> {item.vote_average}
                        </div>
                        Release date: {item.release_date}
                        <p className={classes.overview}>
                            {item.overview}
                        </p>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default MainPage;
