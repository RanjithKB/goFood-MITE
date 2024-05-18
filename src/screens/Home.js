import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
const [foodItems, setFoodItems] = useState([]);
const [catItems, setCattems] = useState([]);

const foodData = async () =>{
    let result = await fetch('http://localhost:5000/api/getItems',{
        method: "GET"
    })

    result = await result.json();
    setCattems(result.category);
    setFoodItems(result.items);

}

useEffect(() =>{
    foodData();
},[])
    return (
        <div>
            <Navbar />
            <div className='container'>
                {
                    catItems.length > 0?
                    catItems.map((data) =>{
                        return (
                            <div className='row mb-3'> 
                            <div> 
                                {data.CategoryName}
                                </div>
                                <hr />
                                {
                                    foodItems.length > 0 ?
                                    foodItems.filter(item => item.CategoryName == data.CategoryName)
                                                .map(filter =>{
                                                    return(
<div key={filter._id} className='col-12 col-md-6 col-lg-3'> 
<Card cardData={filter}/>
</div>
                                                    )
                                                }) : <div> No records</div>
                                }
                            </div>
                        )
                    }) : ""
                }
            
            </div>
            <Footer />
        </div>
    )
}
