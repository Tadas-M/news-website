import React from 'react'


function NewsCategory ({ agency, articles }) {

    const openArticle = (url) => {
        window.open(url)
    };

    return (
        <div>
            <div className="header-text">BBC NEWS</div>
            <div className="row-list-5">
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

export default NewsCategory