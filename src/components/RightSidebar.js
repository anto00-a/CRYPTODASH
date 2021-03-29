import React, {useEffect,useState} from 'react';
import CurrencyField from './CurrencyField';
import axios from 'axios';
import { SemipolarLoading } from 'react-loadingg';
import swal from 'sweetalert';





function RightSidebar(){
    const [coins, setCoin] = useState([])
    const [status,setStatus] = useState(false)


    const getCoins = ()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=80&page=1&sparkline=false')
        .then(res => {
            setCoin(res.data);
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
    useEffect(()=>{
        const interval = 
            setInterval(()=>{
                getCoins();
            },120000)
        
        getCoins();
        return ()=>clearInterval(interval)   
    },[coins.current_price])
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
   

    
    return(
        <div className='sidebar_r'>
            <div className='legend'>
                <p>Currency</p>
                <p>Value</p>
                <p>Changes</p>
            </div>
            {
                !status ? <SemipolarLoading/> : <div className='currency_list'>{
                 coins.map((coin =>
                    <CurrencyField key={coin.id} id={coin.id} name={coin.name} icon={coin.image} value={numberWithCommas(coin.current_price)} percentage={Math.floor(coin.price_change_percentage_24h)} symbol={coin.symbol.toUpperCase()}/>
                ))}
                </div>
            }
        </div>
    )
}


export default RightSidebar;