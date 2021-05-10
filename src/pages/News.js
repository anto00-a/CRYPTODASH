import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import swal from 'sweetalert';


const News = () => {
    let API_KEY=process.env.REACT_APP_API_KEY
    const[news, setNews] = useState([])
    const getNews = ()=>{
        const URL = `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${API_KEY}`;
        axios.get(URL)
        .then(res => {
            setNews(res.data.articles)
        })
        .catch(err=>{
            console.log(err)
            swal({
                title: "Oops!There is a problem",
                text: "Reload page",
                icon: "error",  
            }).then(function(isconfirm){
                if(isconfirm){
                    window.location.reload()
                }
            });
        })  
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
