import React from 'react';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import SearchBox from './SearchBox';

function Home() {
    return (
        <div className="home-page">
            <div className="home-header">

                <div className="header-left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="header-right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar title="Avatar">H</Avatar>
                </div>

            </div>

            <div className="home-body">
                <img 
                title="Google"
                className="google-logo" 
                src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" alt="google"
                />

                <div className="home-search">
                    <SearchBox/>
                </div>

            </div>
        </div>
    )
}

export default Home