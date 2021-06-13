import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './SearchPage.css';
import {useStateValue} from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
// import Respons from './Respons';
import SearchBox from './SearchBox';

function SearchPage() {

    const [ { term }, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term)

    // developers.google.com/custom-search/v1/using_rest
    // AIzaSyBsRpm5c9VCEC9Pi8XvamIe0CRxaAX2sz0
    // cse.google.com/cse/create/new
    //engine id= debc8b321b5b22867

    // const data = Respons


    return (
        <div className="search-page">
            <div className="search-header">
                <Link to="/">
                    <img 
                    title="Google"
                    className="search-google-logo" 
                    src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" alt="google"
                    />
                </Link>
                <div className="input-option">
                    <SearchBox />
                    <div className="option">
                        <div className="left-option">
                            <NavLink to="/search" activeClassName="active-nav"> All </NavLink>
                            <NavLink to="/a" activeClassName="active-nav"> Video </NavLink>
                            <NavLink to="/b" activeClassName="active-nav"> Image </NavLink>
                            <NavLink to="/c" activeClassName="active-nav"> Map </NavLink>
                            <NavLink to="/d" activeClassName="active-nav"> News </NavLink>
                            <NavLink to="/e" activeClassName="active-nav"> More </NavLink>
                        </div>
                        <div className="right-option">
                            <NavLink to="/f" activeClassName="active-nav"> Settings </NavLink>
                            <NavLink to="/g" activeClassName="active-nav"> Tools </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-result">
                <p className="search-info">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term} </p>

                <div className="search-data">
                    {
                        data?.items.map( (value, index) => {
                            return <div className="search-data-card" key={index}>
                                        <a className="link" href={value.link}> {value.displayLink} </a>
                                        <a className="title" href={value.link}> {value.title} </a>
                                        <p className="details"> {value.snippet} </p>
                                        
                                </div>
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default SearchPage
