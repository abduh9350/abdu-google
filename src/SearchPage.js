import React from 'react';
import './SearchPage.css'
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
function SearchPage() {
    const[{ term }, dispatch] = useStateValue();
    //const { data } = useGoogleSearch(term);
    const data = Response;
    console.log(data);
    return (
        <div className='searchPage'>
            <div className="searchPage_header">
                <Link to='/'>
                    <img 
                        className='searchPage_logo'
                        src='https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
                        alt=''
                    />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons />
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                                <Link to='/all'>All</Link>
                            </div>
                            <div className="searchPage_option">
                                <IconButton>
                                    <DescriptionIcon />
                                </IconButton>
                                <Link to='/news'>News</Link>
                            </div>
                            <div className="searchPage_option">
                                <IconButton>
                                    <ImageIcon />
                                </IconButton>
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <IconButton>
                                    <LocalOfferIcon />
                                </IconButton>
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <IconButton>
                                    <RoomIcon />
                                </IconButton>
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to='/setting'>Setting</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="searchPage_results">

            </div>
        </div>
    )
}

export default SearchPage
