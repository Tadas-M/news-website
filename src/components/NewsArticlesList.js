import React from "react";


function NewsArticlesList ({ articles, logo, agency}) {

    const openArticle = (url) => {
        window.open(url)
    };
    return (
        <div>
            <img src={logo} alt={agency} className="agency-logo"/>
            <div className="row-list-item-4">
            {articles.map(article =>
                <div className="row-list-item" key={article.title}>
                    <div className="">
                        <p className="">{article.title}</p>
                        <button className="source-button" onClick={() => openArticle(article.url)}>Full article</button>
                    </div>
                    <div className="source">
                        <small className="">{agency}</small>
                    </div>
                </div>)}
            </div>
        </div>)
}

export default NewsArticlesList