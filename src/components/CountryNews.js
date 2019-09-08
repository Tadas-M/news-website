import React, { useState, useEffect } from 'react'
import newsApi from '../api';
import axios from "axios";
import Footer from "./Footer";


function CountryNews({ match }) {
    const [news, setNews] = useState([]);
    let count = 0;
    let type;
    function revealContent () {
        const hidden = document.getElementById("hide");
        const content = document.getElementById("country-content");
        hidden.classList.remove("empty-div");
        content.classList.add("page");
        content.classList.remove("hidden-content")
    }

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
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const category = match.params.category.toLowerCase();
        const api_url = `https://newsapi.org/v2/top-headlines?country=${match.params.id}&category=${category}`;
        const fetchData = async () => {
            try {
                const result = await newsApi.get(api_url, {cancelToken: source.token});
                //console.log(result.data.articles);
                let dataArray = result.data.articles;
                extractNewsAgency(dataArray);
                replaceNullImages(dataArray);
                dataArray.sort(sortStrings);
                setNews(dataArray);
            }
            catch (e) {
                if (axios.isCancel(e)) {
                    console.log("cancelled");
                }
                else {
                    throw e;
                }
            }
        };
        fetchData();
        return () => {
            source.cancel();
        }
    }, [match.params.id,match.params.category]);
    // console.log(news.length)

    if (news.length < 9) {type = "hidden"}
    else {type = "unhidden"}


    return (
        <div>
            <div className="empty-div" id="hide"> </div>
            <div className="hidden-content" id="country-content">
                <div className="page-title volkorn text-black">{match.params.category}</div>
                {/*<CategoryNavigationBar />*/}
                <div className="row-list-4 block-margins-country-news">
                {news.map(article => {
                    if (count === news.length-2) {revealContent()} //Loads content when it's ready. Did this because of footer being displaced
                    count++;

                    return (<div className="article-container" key={article.title}>
                        <div className="row-list-item-4 volkorn country-news-container-height">
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
                    </div>)})}
                </div>
            </div>
            <Footer type={type}/>
        </div>
    )
}
export {CountryNews};