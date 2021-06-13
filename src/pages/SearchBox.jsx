import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {useStateValue} from '../StateProvider'
import { actionType } from '../reducer';

function SearchBox({hideBtn = false}) {
    const [  {} , dispatch] = useStateValue()
    const [input , setInput] = useState("");
    const [activeBtn , setActiveBtn] = useState(true);
    const history = useHistory();

    const searchBtn = e =>{
        e.preventDefault();
        dispatch({
            type: actionType.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search')
    }

    const inputHandler = e =>{
        setInput(e.target.value)
        if(input !== null){
            setActiveBtn(false)
        };
    }

    return (
        <form className="search-component" onSubmit={searchBtn }>
            <div className="search-box">
                <SearchIcon/>
                <input 
                type="text"
                value={input}
                onChange= {inputHandler}
                />
                <MicIcon/>
            </div>
            {
                !activeBtn ? (
                    <div className={ !hideBtn ? `search-btn hide-btn` : 'search-btn' }>
                        <Button onClick={searchBtn}> GOOGLE SEARCH </Button>
                        <Button> I"M FEELING LUCKY </Button>
                    </div>
                ) : (
                    <div className={ !hideBtn ? `search-btn hide-btn` : 'search-btn' }>
                        <Button > GOOGLE SEARCH </Button>
                        <Button> I"M FEELING LUCKY </Button>
                    </div>
                )
            }
            
        </form>
    )
}

export default SearchBox