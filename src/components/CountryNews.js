import React, { useState, useEffect } from 'react'
import newsApi from '../api';
import {CategoryNavigationBar} from "./Header";

function RedirectToAll ({ match }) {
    window.location = `/country/${match.params.id}/general`;
}

function CountryNews({ match }) {
    const [news, setNews] = useState([]);

    function sortStrings( a, b )  {
        if ( a.agency < b.agency) return -1;
        if ( a.agency > b.agency) return 1;
        return 0;
    }
    
    const openArticle = (url) => {
         window.open(url)
    };

    const extractNewsAgency = articleList => {
        return articleList.forEach(article => {
            const index = article.title.lastIndexOf("-");
            article.agency = article.title.slice(index+2, article.title.length);
            article.title = article.title.slice(0, index-1);
        })
    };

    const replaceNullImages = articleList => {
        return articleList.forEach(article => {
            if (article.urlToImage === null) article.urlToImage =
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
        })
    };

    useEffect( () => {
        const fetchData = async () => {
            const category = match.params.category.toLowerCase();
            const result = await newsApi.get( `https://newsapi.org/v2/top-headlines?country=${match.params.id}&category=${category}` );
            //console.log(result.data.articles);
            let dataArray = result.data.articles;
            extractNewsAgency(dataArray);
            replaceNullImages(dataArray);
            dataArray.sort(sortStrings);
            setNews(dataArray)
        };
        fetchData()
    }, [match.params.id,match.params.category]);

    // console.log(news)
    return (
        <div>
            <CategoryNavigationBar />
            <div className="row-list-4 block-margins">
            {news.map(article =>
                <div className="article-container" key={article.title}>
                    <div className="row-list-item-4 volkorn">
                        <img src={article.urlToImage} alt={article.title} />
                        <div className="">
                            <p className="article-title">{article.title}</p>
                            <button className="source-button" id="summary-text" onClick={() => openArticle(article.url)}>Full article</button>
                            <p id="summary-text">{article.description}</p>
                        </div>
                        <div className="source">
                            <small className="">{article.agency}</small>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
export {CountryNews, RedirectToAll};