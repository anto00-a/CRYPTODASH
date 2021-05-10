import React,{useEffect,useState} from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { noUpdate, setData} from '../actions';
import { CircleLoading } from 'react-loadingg';
import swal from 'sweetalert';
import firebase from '../firebase';

function FollowCard(props){
    const [price,setPrice] = useState([]);
    const [date,setDate] = useState([]);
    const [value,setValue] = useState('');
    const [percentage,setPercentage] = useState('');
    const [status,setStatus] = useState(false)
    const dispatch = useDispatch();
    const user = useSelector(state=>state.isLogged)

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp);
        var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + '/' + month + '/' + year;
        return time;
    }
    const getData = () => {
        const URL = `https://api.coingecko.com/api/v3/coins/${props.coin}/market_chart?vs_currency=usd&days=7&interval=daily`
        axios.get(URL)
        .then(res=>{  
            setPrice(res.data.prices.map((price)=> {return price[1]}))
            setDate(res.data.prices.map((date)=> {return timeConverter(date[0])}))
            setStatus(true)    
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
    const getCoins = ()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${props.coin}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
        .then(res => {
            setPercentage(res.data.market_data.price_change_percentage_24h);
            setValue(res.data.market_data.current_price.usd)
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
    
    const removeHandler = ()=>{
        console.log(user)
        const ref = firebase.database().ref(`users/${user.user.uid}/follow`).child(`${props.id}`);
        ref.remove()
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(()=>{
        const interval = 
            setInterval(()=>{
                getCoins();
                getData();
            },120000)
            
        getCoins();
        getData();
        return ()=>clearInterval(interval)
        
    },[value])

    
    return(
        <div className='follow_card' >
            <div className='header' onClick={()=>{dispatch(noUpdate(props.id)); dispatch(setData(props))}}>
                <div className='header_l'>
                    <div className='icon'><img src={props.image}></img></div>
                    <p>{props.symbol}<SwapHorizIcon/> USD</p>
                </div>
                {percentage < 0 ? <div className='percentage red'><p>{Math.floor(percentage)}%</p><TrendingDownIcon/></div> :
                    <div className='percentage green'><p>+{Math.floor(percentage)}%</p><TrendingUpIcon/></div>
                }
            </div>
            <div className='followed_container'>
                <p>{numberWithCommas(value)}$</p>
                <div className='chart'>
                {!status ? <CircleLoading/> :<Line
                        data={{
                            labels: date,
                            datasets:[
                                {
                                    data: price,
                                    borderColor: ['rgba(5,242,242,1)'],
                                    borderWidth: 2,
                                    backgroundColor: 'rgba(30,28,68,0)',
                                    pointBackgroundColor: 'rgba(5,242,242,0)',
                                    lineTension:0.4,
                                    pointBorderWidth:0
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
                                        ticks: {
                                            stepSize:0.5,
                                            display:false,
                                            maxTicksLimit:8
                                        }
                                    }
                                ],
                                xAxes:[
                                    {
                                        gridLines:{
                                            display:false
                                        },
                                        ticks: {
                                            display:false,
                                            maxTicksLimit:8,
                                            stepSize:0.5
                                        }
                                    }
                                ]
                            },
                            title:{
                                display:false
                            },
                            legend:{
                                display:false,
                            },
                            tooltips:{
                                enabled:true
                                
                            }
                        }}
                    />}
                </div>
            </div>
            <div className='delete_btn' onClick={removeHandler}><DeleteIcon/></div>
        </div>
    )
}

export default FollowCard;