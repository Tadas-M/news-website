import axios from "axios";
import React, { useState, useEffect } from 'react'
import "../scroll.css"
import "../homePage.css"
import NewsCategory from "./NewsCategory";
import {CategoryNavigationBar} from "./Header";

function RedirectToHomePage () {
    window.location = "/world";
}

function HomePage ({ match }) {

    const bbcWorld = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const bbcBusiness = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fbusiness%2Frss.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const bbcHealth = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fhealth%2Frss.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const bbcTechnology = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Ftechnology%2Frss.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const bbcSport = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fsport%2Frss.xml%3Fedition%3Dint&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const [bbcRssFeed, setBbcRssFeed] = useState([]);

    const huffingtonPostWorld = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.huffpost.com%2Fsection%2Fworld-news%2Ffeed&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const huffingtonPostBusiness = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.huffpost.com%2Fsection%2Fbusiness%2Ffeed&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const huffingtonPostHealth = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.huffpost.com%2Fsection%2Fhealth%2Ffeed&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const huffingtonPostTechnology = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.huffpost.com%2Fsection%2Ftechnology%2Ffeed&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const huffingtonPostSport = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.huffpost.com%2Fsection%2Fsports%2Ffeed&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const [huffingtonPostFeed, setHuffingtonPostFeed] = useState([]);

    const reutersWorld = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.reuters.com%2FReuters%2FworldNews&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const reutersBusiness = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FbusinessNews&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const reutersHealth = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FhealthNews&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const reutersTechnology = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FtechnologyNews&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const reutersSport = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FsportsNews&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const [reutersRssFeed, setReutersRssFeed] = useState([]);

    const nyTimesWorld = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.nytimes.com%2Fsvc%2Fcollections%2Fv1%2Fpublish%2Fhttps%3A%2Fwww.nytimes.com%2Fsection%2Fworld%2Frss.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const nyTimesBusiness = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FBusiness.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const nyTimesHealth = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FHealth.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const nyTimesTechnology = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FTechnology.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const nyTimesSport = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FSports.xml&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const [nyTimesRssFeed, setNyTimesRssFeed] = useState([]);

    const theGuardianWorld = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Fworld%2Frss&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const theGuardianBusiness = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Fuk%2Fbusiness%2Frss&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const theGuardianHealth = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Flifeandstyle%2Fhealth-and-wellbeing%2Frss&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const theGuardianTechnology = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftheguardian.com%2Fuk%2Ftechnology%2Frss&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const theGuardianSport = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Fuk%2Fsport%2Frss&api_key=ru7fgam374xlwf0kb83isibdfdjxddtf133ocfvt';
    const [theGuardianRssFeed, setTheGuardianRssFeed] = useState([]);

    const worldNews = [bbcWorld, huffingtonPostWorld, reutersWorld, nyTimesWorld, theGuardianWorld];
    const businessNews = [bbcBusiness, huffingtonPostBusiness, reutersBusiness, nyTimesBusiness, theGuardianBusiness];
    const healthNews = [bbcHealth, huffingtonPostHealth, reutersHealth, nyTimesHealth, theGuardianHealth];
    const technologyNews = [bbcTechnology, huffingtonPostTechnology, reutersTechnology, nyTimesTechnology, theGuardianTechnology];
    const sportNews = [bbcSport, huffingtonPostSport, reutersSport, nyTimesSport, theGuardianSport];
    const setRssFeeds = [setBbcRssFeed, setHuffingtonPostFeed, setReutersRssFeed, setNyTimesRssFeed, setTheGuardianRssFeed];

    const getRssFeed = async ( url, setFeed ) => {
        const result = await axios.get(url);
        const dataArray = result.data.items;
        setFeed(dataArray);
    };

    const getAllRssFeeds = () => {
        if (match.params.category.toLowerCase() === 'world') {
            let i = 0;
            worldNews.forEach(source => {
                getRssFeed(source, setRssFeeds[i]);
                i++;
            })
        }
        else if (match.params.category.toLowerCase() === 'business') {
            let i = 0;
            businessNews.forEach(source => {
                getRssFeed(source, setRssFeeds[i]);
                i++;
            })
        }
        else if (match.params.category.toLowerCase() === 'health') {
            let i = 0;
            healthNews.forEach(source => {
                getRssFeed(source, setRssFeeds[i]);
                i++;
            })
        }
        else if (match.params.category.toLowerCase() === 'technology') {
            let i = 0;
            technologyNews.forEach(source => {
                getRssFeed(source, setRssFeeds[i]);
                i++;
            })
        }
        else if (match.params.category.toLowerCase() === 'sport') {
            let i = 0;
            sportNews.forEach(source => {
                getRssFeed(source, setRssFeeds[i]);
                i++;
            })
        }
        // getRssFeed(theGuardianNewsApi, setTheGuardianRssFeed);
    };
    useEffect( getAllRssFeeds, [match.params.category]);
    return (
        <div>
            <CategoryNavigationBar />
            <div className="outlet-container">
                <div className="image-container" id="bbc-logo">
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.bbc.com/news"}>
                        BBC logo that redirects to BBC news section
                    </a>
                </div>
                <div className="image-container" id="huffingtonPost-logo">
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
                <NewsCategory agency={'The Huffington Post'} articles={huffingtonPostFeed}/>
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