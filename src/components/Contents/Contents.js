import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieRow from "./MovieRow";
// import * as ACTIONS from '../store/actions';
import {FaArrowAltCircleUp} from 'react-icons/fa';
import styled from "styled-components";
import{animateScroll as scroll} from 'react-scroll';
import { useScrollY } from "../hooks";
import {getNetflixOriginals,
    getTrendingMovies,
    getTopRatedMovies,
    getActionMovies,
    getComedyMovies,
    getHorrorMovies,
    getRomanceMovies,
    getDocumentaries,} from "../store/actions";

const ScrollToTop = () => {
    scroll.scrollToTop();
}

function Contents(props) {
    const dispatch = useDispatch();
    const [scrollY] = useScrollY()
    const { NetflixOriginals,
        TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
    } = useSelector((state) => state.infoMovies);
    console.log(TopRatedMovies);
    useEffect(() => {

        dispatch(getNetflixOriginals());
        dispatch(getTrendingMovies());
        dispatch(getTopRatedMovies());
        dispatch(getActionMovies());
        dispatch(getComedyMovies());
        dispatch(getHorrorMovies());
        dispatch(getRomanceMovies());
        dispatch(getDocumentaries());

         

    },[dispatch])

    

    return ( 
        <div>
            <MovieRow movies={NetflixOriginals} title='Netflix Originals' isNetflix={true} idSection='netflix'/>
            <MovieRow movies={TrendingMovies} title='Trending Movies'isNetflix={true} idSection='trending'/>
            <MovieRow movies={TopRatedMovies} title='Top rated Movies' idSection='topRated'/>
            <MovieRow movies={ActionMovies} title='Actions Movies' idSection='actionMovies'/>
            <MovieRow movies={ComedyMovies} title='Comedy Movies' idSection='comedyMovies'/>
            <MovieRow movies={HorrorMovies} title='Horror Movies' idSection='horrorMovies'/>
            <MovieRow movies={RomanceMovies} title='Romance Movies' idSection='romanceMovies'/>
            <MovieRow movies={Documentaries} title='Documentaries Movies' idSection='documentaries'/>
            <GoToTop 
                onClick={() => ScrollToTop()}
                style={{
                    visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`
                }}
            >
                <FaArrowAltCircleUp />
            </GoToTop>
        </div>
     );
}

export default Contents;

const GoToTop = styled.div`
    position: fixed;
    z-index: 10;
    right: 70px;
    bottom: 50px;
    font-size: 50px;
    color: rgba(255,255,255,0.4);
    transition: all 0.3s linear;

    &:hover {
        color:rgba(255,255,255,0.8);
    }

    @media screen and (max-width: 600px) {
        right: 40px;
    }
`;