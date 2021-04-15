import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import {follow} from '../actions';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import { SemipolarLoading } from 'react-loadingg';
import swal from 'sweetalert';
import {getFilter} from '../actions';

function CryptoChart(){
    const [price,setPrice] = useState([]);
    const [date,setDate] = useState([]);
    const [cap,setCap] = useState([]);
    const [volume,setVolume] = useState([])
    const [status,setStatus] = useState(false)
    const [filter,setFilter] = useState('30');
    const [interval, setTimeInterval] = useState('daily');
    const [firstid,setFirstId] = useState(true)
    const dispatch = useDispatch();
    const info = useSelector (state => state.setData);
    const idCoin = useSelector(state => state.setId);
    
    const idHandler = () =>{
        if(firstid){
            return 'bitcoin' 
        }else{
            return idCoin
        }
    }

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp);
        var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + '/' + month;
        var hour = a.getHours();
        var min = a.getMinutes();
        var hourTime = hour + ':' + min;
        return filter === '1' ? hourTime : time
    }
    
    const addToFavorite = () => {
        dispatch(follow(info));
    }
    
    useEffect(() => {
        const getData = () => {
            const URL = `https://api.coingecko.com/api/v3/coins/${idHandler()}/market_chart?vs_currency=usd&days=${filter}&interval=${interval}`
            axios.get(URL)
            .then(res=>{ 
                setPrice(res.data.prices.map((price)=> {return price[1]}))
                setDate(res.data.prices.map((date)=> {return timeConverter(date[0])}))
                setCap(res.data.market_caps.pop());
                setVolume(res.data.total_volumes.pop());
                setStatus(true)
                setFirstId(false)
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
        setStatus(false)
        getData()
        dispatch(getFilter(filter))
           
    },[idCoin,filter])
    
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
                            <td>${numberWithCommas(Math.floor(cap[1]))}</td>
                            <td>${numberWithCommas(Math.floor(volume[1]))}</td>
                        </tr>
                    </tbody>
                    
                </table>
                
            </div>
            <div className='chart'>
            {!status ? <SemipolarLoading/> : <Line
                    data={{
                        labels: date,
                        datasets:[
                            {
                                label: 'Price $',
                                data: price,
                                borderColor: ['rgba(218,165,32,1)'],
                                borderWidth: 2,
                                backgroundColor:'rgba(218,165,32,0.1)',
                                pointBackgroundColor: 'rgba(242,41,189,0)',
                                

                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio:false,
                        responsive:true,
                        
                        scales:{
                            yAxes:[
                                {
                                    gridLines:{
                                        display:false
                                    },
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
                />}
            </div>
            <div className='filter_container'>
                <div className='filter'>
                    <p id='hour' onClick={()=>{setTimeInterval('hourly'); setFilter('1')}}>24h</p>
                    <p id='week' onClick={()=>{setTimeInterval('daily'); setFilter('7')}}>1 week</p>
                    <p id='weeks' onClick={()=>{setTimeInterval('daily'); setFilter('15')}}>2 weeks</p>
                    <p id='month' onClick={()=>{setTimeInterval('daily'); setFilter('30')}}>1 month</p>
                </div>
            </div>
        </div>
    )
}



export default CryptoChart;