import React from 'react'
import ArticleListItem from "./ArticleListItem";

function NewsCategory ({ agency, articles }) {

    return (
        <div className="block-margins-homepage">
            <div className="header-text">{agency}</div>
            <input type="checkbox" className="read-more-state" id={agency}/>
            <div className="row-list-5 read-more-wrap">
                {articles.slice(0,5).map(
                    article => <ArticleListItem
                        article={article}
                        key={article.guid}
                    />
                )}
                {articles.slice(5).map(
                    article => <ArticleListItem
                        article={article}
                        key={article.guid}
                        hide={true}
                    />
                )}
            </div>
            <label htmlFor={agency} className="read-more-trigger"></label>
        </div>)
}

export default NewsCategory