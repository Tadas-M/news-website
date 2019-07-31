import axios from "axios";
import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import "../scroll.css"
import "../homePage.css"
import NewsCategory from "./NewsCategory";

function HomePage () {

    const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
    const rssToJSON = 'https://feed2json.org/convert?url=';

    const bbcNews = 'http://feeds.bbci.co.uk/news/world/rss.xml';
    const [bbcRssFeed, setBbcRssFeed] = useState([]);

    const wsjNews = 'https://feeds.a.dj.com/rss/RSSWorldNews.xml';
    const [wsjRssFeed, setWsjRssFeed] = useState([]);

    const reutersNews = 'http://feeds.reuters.com/Reuters/worldNews';
    const [reutersRssFeed, setReutersRssFeed] = useState([]);

    const nyTimesNews = 'https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml';
    const [nyTimesRssFeed, setNyTimesRssFeed] = useState([]);

    const theGuardianNews = 'https://www.theguardian.com/world/rss';
    const [theGuardianRssFeed, setTheGuardianRssFeed] = useState([]);

    const getRssFeed = async ( url, setFeed ) => {
        const result = await axios.get(corsApiUrl + rssToJSON + url);
        const dataArray = result.data.items;
        setFeed(dataArray);
        console.log(dataArray);
    };

    const getAllRssFeeds = () => {
        getRssFeed(bbcNews, setBbcRssFeed);
        getRssFeed(wsjNews, setWsjRssFeed);
        getRssFeed(reutersNews,setReutersRssFeed);
        getRssFeed(nyTimesNews, setNyTimesRssFeed);
        getRssFeed(theGuardianNews, setTheGuardianRssFeed);
    };

    useEffect( getAllRssFeeds, []);
    return (
        <div>
            {/*Get All your news in one place*/}
            <div className="outlet-container">
                <div className="image-container" id="bbc-logo">
                    <a href="https://www.bbc.com/news"></a>
                </div>
                <div className="image-container" id="wsj-logo"></div>
                <div className="image-container" id="reuters-logo"></div>
                <div className="image-container" id="nyTimes-logo"></div>
                <div className="image-container" id="theGuardian-logo"></div>
            </div>
            <div>
                <NewsCategory agency={'BBC NEWS'} articles={bbcRssFeed}/>
            </div>
        </div>
    )

}

export default HomePage;