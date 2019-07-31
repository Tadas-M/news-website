import React, { useState, useEffect } from 'react'
import newsApi from '../api';
import "../styles.css"


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
            const result = await newsApi.get( `https://newsapi.org/v2/top-headlines?country=${match.params.id}` );
            //console.log(result.data.articles);
            let dataArray = result.data.articles;
            extractNewsAgency(dataArray);
            replaceNullImages(dataArray);
            dataArray.sort(sortStrings);
            setNews(dataArray)
        };
        fetchData()
    }, [match.params.id]);
    
    return (
        <div>
            <div className="row-list-4">
            {news.map(article =>
                    <div className="row-list-item" key={article.title}>
                        <img src={article.urlToImage} alt={article.title} />
                        <div className="">
                            <p className="">{article.title}</p>
                            <button className="source-button" onClick={() => openArticle(article.url)}>Full article</button>
                        </div>
                        <div className="source">
                            <small className="">{article.agency}</small>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
export default CountryNews;