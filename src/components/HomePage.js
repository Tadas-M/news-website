import axios from "axios";
import React, { useState, useEffect } from 'react'
import "../scroll.css"
import "../homePage.css"
import NewsCategory from "./NewsCategory";
import {CategoryNavigationBar, Header} from "./Header";
import {BrowserRouter as Router} from "react-router-dom";

function RedirectToHomePage () {
    window.location = "/world";
}

function HomePage () {

    const bbcNewsApi = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const [bbcRssFeed, setBbcRssFeed] = useState([]);

    const wsjNewsApi = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.a.dj.com%2Frss%2FRSSWorldNews.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const [wsjRssFeed, setWsjRssFeed] = useState([]);

    const reutersNewsApi = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.reuters.com%2FReuters%2FworldNews&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const [reutersRssFeed, setReutersRssFeed] = useState([]);

    const nyTimesNewsApi = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.nytimes.com%2Fsvc%2Fcollections%2Fv1%2Fpublish%2Fhttps%3A%2Fwww.nytimes.com%2Fsection%2Fworld%2Frss.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt'
    const [nyTimesRssFeed, setNyTimesRssFeed] = useState([]);

    const theGuardianNewsApi = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Fworld%2Frss&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt'
    const [theGuardianRssFeed, setTheGuardianRssFeed] = useState([]);

    const getRssFeed = async ( url, setFeed ) => {
        const result = await axios.get(url);
        const dataArray = result.data.items;
        setFeed(dataArray);
    };

    const getAllRssFeeds = () => {
        getRssFeed(bbcNewsApi, setBbcRssFeed);
        getRssFeed(wsjNewsApi, setWsjRssFeed);
        getRssFeed(reutersNewsApi,setReutersRssFeed);
        getRssFeed(nyTimesNewsApi, setNyTimesRssFeed);
        getRssFeed(theGuardianNewsApi, setTheGuardianRssFeed);
    };

    useEffect( getAllRssFeeds, []);
    return (
        <div>
            <CategoryNavigationBar />
            <div className="outlet-container">
                <div className="image-container" id="bbc-logo">
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.bbc.com/news"}>
                        BBC logo that redirects to BBC news section
                    </a>
                </div>
                <div className="image-container" id="wsj-logo">
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.wsj.com/news/world"}>
                        Wall Street Journal logo that redirects to Wall Street Journal world news section
                    </a>
                </div>
                <div className="image-container" id="reuters-logo">
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.reuters.com/"}>
                        Reuters logo that redirects to Reuters website
                    </a>
                </div>
                <div className="image-container" id="theGuardian-logo">
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.theguardian.com/world"}>
                        The Guardian logo that redirects to The Guardian's world news section
                    </a>
                </div>
                <div className="image-container" id="nyTimes-logo">
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.nytimes.com/"}>
                        New York Times logo that redirects to New York Times website
                    </a>
                </div>
            </div>
            <div>
                <NewsCategory agency={'BBC NEWS'} articles={bbcRssFeed}/>
                <NewsCategory agency={'Wall street journal'} articles={wsjRssFeed}/>
                <NewsCategory agency={'Reuters'} articles={reutersRssFeed}/>
                <NewsCategory agency={'The Guardian'} articles={theGuardianRssFeed}/>
                <NewsCategory agency={'New York Times'} articles={nyTimesRssFeed}/>
            </div>
        </div>
    )
    //TODO: Change news agencies logos to open their websites in the new window, not the current one.
    //TODO: Ability to retrieve other news categories
    //TODO: Properly format summary content from websites which put html tags in them
    //TODO: News categories
}

export { HomePage, RedirectToHomePage };