import React, { useState, useEffect } from 'react'
import api from '../api';
import "../styles.css"


function CountryNews() {
    const [news, setNews] = useState([]);


    useEffect( () => {
        const fetchData = async () => {
            const result = await api.get( `https://newsapi.org/v2/top-headlines?country=${}` );
            //console.log(result.data.articles);
            let dataArray = result.data.articles;
            setNews(dataArray)
        };
        fetchData()
    }, []);

    return (
        <div>
            <h1>Top News</h1>
            <div className='row'>
            {news.map(article =>
                <div className="card" key={article.title}>
                    <img className="cardImage" src={article.urlToImage} alt={article.title} />
                    <div className="card-body">
                        <h5 className="headerText">{article.title}</h5>
                        <button className="btn btn-success">Press me!</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
export default CountryNews;