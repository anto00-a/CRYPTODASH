import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';


const News = () => {
    const[news, setNews] = useState([])
    const getNews = ()=>{
        const URL = `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=de208cb1b761490294d502aaecc7425e`;
        axios.get(URL)
        .then(res => {
            setNews(res.data.articles)
            console.log(res.data.articles)
        })
        .catch(err=>console.log(err));
    }
    useEffect(()=>{
        if(window.location.pathname === '/News'){
            let hamburger = document.querySelector('.hamburger');
            hamburger.classList.add('display')
        }
        getNews();
    },[])
    return (
        <div className='news'>
            {news.map((card)=>{
                return(<NewsCard key={card.title} title={card.title} author={card.author} img={card.urlToImage} date={card.publishedAt.slice(0,10)} content={card.content} link={card.url}/>) 
            })}
        </div>
    )
}


export default News;
