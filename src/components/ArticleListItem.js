import React from 'react'

function ArticleListItem({ article, hide=false }) {

    //Reuters,Guardian news feed fix
    function removeHtmlTags () {
        let text = article.description;
        const removeBR = "<br>";
        const removeAnchor = "(<a).*?(<[/]a>)";
        // eslint-disable-next-line no-useless-escape
        const removeParagraph = "(<p>)|(<[/]p>)|<p(.*?)>";
        const removeListItems = "<ul>|<[/]ul>|<li>|<[/]li>";
        const removeTime = "<time(.*?)<[/]time>";
        const removeStrong = "<strong>|<[/]strong>";
        const removeDivImg = "<div(.*)(?:\\r\\n|[\\r\\n]*)(.*)(?:\\r\\n|[\\r\\n]*)<[/]div>|<img(.*?)>";
        const removeEm = "<em(.*?)<[/]em>";
        const removeTags = new RegExp (`${removeBR}|${removeAnchor}|${removeParagraph}|${removeListItems}|${removeTime}|${removeStrong}|${removeDivImg}|${removeEm} `,"g");
        text = text.replace(removeTags,'');
        return text
    }

    const openArticle = (url) => {
        window.open(url)
    };
    const description = removeHtmlTags();

    if(hide===true) {
        return (
            <div className="article-container">
                <div className="row-list-item-5 read-more-target volkorn">
                    <p className="article-title">{article.title}</p>
                    <div className="scrollBar">
                        <p id="summary-text">{description}</p>
                    </div>
                    <button className="source-button" onClick={() => openArticle(article.link)}>Full article</button>
                </div>
            </div>
        );
    }
    return (
        <div className="article-container">
            <div className="row-list-item-5 volkorn homepage-container-height">
                <p className="article-title">{article.title}</p>
                <div className="scrollBar">
                    <p id="summary-text">{description}</p>
                </div>
                <button className="source-button" id="summary-text" onClick={() => openArticle(article.link)}>Full article</button>
            </div>
        </div>
    )
}

export default ArticleListItem