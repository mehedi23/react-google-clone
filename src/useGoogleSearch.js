import {useEffect, useState} from 'react';

const API_KEY = "AIzaSyBsRpm5c9VCEC9Pi8XvamIe0CRxaAX2sz0"
const Context_Key = "debc8b321b5b22867"

function useGoogleSearch( term ) {
    const [data , setData] = useState(null);

    useEffect(()=>{
        const fetchData = async() =>{
            fetch(`https://www.googleapis.com/customsearch/v1?key= ${API_KEY} &cx=${Context_Key}&q=${term}`)
            .then(res => res.json() )
            .then( result => {
                setData(result)
            } )
        }

        fetchData();
    }, [term])

    return {data}
}

export default useGoogleSearch
