import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import {MdTheaterComedy} from 'react-icons/md';
import {
    GiNinjaHeroicStance,
    GiRomanToga,
    GiGhost,
    GiBandageRoll,
} from 'react-icons/gi'
import styled from 'styled-components';
import MenuItem from './MenuItem';
import {SiNetflix} from 'react-icons/si';

function Menu(props) {
    return ( 
        <MenuPane>
            <MenuItem name="Netflix" Icon={SiNetflix} to='netflix'/>
            <MenuItem name="Trending" Icon={FaHotjar} to='trending'/>
            <MenuItem name="Top rated" Icon={FaStar} to='topRated'/>
            <MenuItem name="Actions Movies" Icon={GiNinjaHeroicStance} to='actionMovies'/>
            <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} to='comedyMovies'/>
            <MenuItem name="Horror Movies" Icon={GiGhost} to='horrorMovies'/>
            <MenuItem name="Romance Movies" Icon={GiRomanToga} to='romanceMovies'/>
            <MenuItem name="Documentaries" Icon={GiBandageRoll} to='documentaries'/>
        </MenuPane>
     );
}

export default Menu;

const MenuPane = styled.div`
    position: fixed;
    left: 0;
    top: 20%;
    width: 46px;
    padding: 4px 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    &:hover {
    width: 180px;
    background: rgba(0, 0, 0, 0.7);
    }
    .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;
    .icon {
        font-size: 30px;
        margin-right: 8px;
    }
    span {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.6);
        &:hover {
        color: #fff;
        }
    }
    }
`;