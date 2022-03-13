import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
        let [filter,setFilter]=useState('All')
        let filterMoney= money;
        if  (filter==="RUBLS"){
            filterMoney = money.filter((filterBanknots)=>filterBanknots.banknots==='RUBLS');
        }
        if (filter==="Dollars"){
            filterMoney = money.filter((filterBanknots)=>filterBanknots.banknots==='Dollars');
        }


    const onClickFilterHandler=(nameButton:string)=>{
            setFilter(nameButton)
        }
        return (
         <>
            <ul>
                {filterMoney.map((objFromMoneyArray, index)=>{
                return (
                    <li key={index}>
                        <span>{objFromMoneyArray.banknots}</span>
                        <span>{objFromMoneyArray.value}</span>
                        <span>{objFromMoneyArray.number}</span>
                    </li>
                )})}
            </ul>
                <div style={{marginLeft:'35px'}}>
                    <button onClick={()=>onClickFilterHandler('all')}> all </button>
                    <button onClick={()=>onClickFilterHandler("ruble")}> ruble </button>
                    <button onClick={()=>onClickFilterHandler('dollars')}> dollars </button>
                </div>
            </>
        )
}
    export default App;
