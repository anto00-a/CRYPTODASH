import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import {follow} from '../actions';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';




function CryptoChart(){
    const [price,setPrice] = useState([]);
    const [date,setDate] = useState([]);
    const [cap,setCap] = useState([]);
    const [volume,setVolume] = useState([])
    const [disable,setDisable] = useState('usable')
    const dispatch = useDispatch();
    const info = useSelector (state => state.setData);
    const idCoin = useSelector(state => state.setId);
    const id = useSelector(state=> state.followCrypto)
    


    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp);
        var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + '/' + month /*+ '/' + year*/;
        return time;
    }
    
    const addToFavorite = () => {
        
        dispatch(follow(info));
        /*const fav = document.getElementById('fav');
        fav.classList.add('is_fav')*/
    }
    
    useEffect(() => {
        const getData = () => {
            const URL = `https://api.coingecko.com/api/v3/coins/${idCoin}/market_chart?vs_currency=usd&days=30&interval=daily`
            axios.get(URL)
            .then(res=>{  
                setPrice(res.data.prices.map((price)=> {return price[1]}))
                setDate(res.data.prices.map((date)=> {return timeConverter(date[0])}))
                setCap(Math.floor(res.data.market_caps[30][1]));
                setVolume(Math.floor(res.data.total_volumes[30][1]));
                
            })
            .catch(err=>console.log(err))
        }
        getData()
        
           
    },[idCoin,info])
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    

    return(
        <div className='chart_container'>
            <div className='header'>
                <div className='currency'>
                        <BookmarkIcon id='fav' onClick={addToFavorite}/>
                    <div className='currency_name'>
                        <div className='icon'><img src={info.icon}></img></div>
                        <p>{info.symbol}</p>
                    </div>
                    <p className='value'>${info.value}</p>
                        
                    {info.percentage < 0 ? <div className='percentage red'><p>{info.percentage}%</p><TrendingDownIcon/></div> :
                     <div className='percentage green'><p>+{info.percentage}%</p><TrendingUpIcon/></div>
                    }
                    
                    
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Market cap.</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${numberWithCommas(cap)}</td>
                            <td>${numberWithCommas(volume)}</td>
                        </tr>
                    </tbody>
                    
                </table>
                
            </div>
            <div className='chart'>
                <Line
                    data={{
                        labels: date,
                        datasets:[
                            {
                                label: 'Price $',
                                data: price,
                                borderColor: ['rgba(242,41,189,1)'],
                                borderWidth: 2,
                                backgroundColor: 'rgba(242,41,189,0.1)',
                                pointBackgroundColor: 'rgba(242,41,189,1)',
                                

                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio:false,
                        scales:{
                            yAxes:[
                                {
                                    gridLines:{
                                        display:false
                                    },
                                    ticks: {
                                        //min: 0,
                                        //beginAtZero:true
                                    }
                                }
                            ],
                            xAxes:[
                                {
                                    gridLines:{
                                        display:false
                                    }
                                }
                            ]
                        }
                        
                    }}
                />
            </div>
        </div>
    )
}



export default CryptoChart;