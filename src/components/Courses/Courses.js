import React, { useState } from 'react';
import './Courses.css'
import Course from '../Course/Course';
import FakeData from '../../json-data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Courses = () => {
    const[count , setCount] = useState([]);
    const[amount, setAmount] = useState(0)

    const buttonHandler=(item)=>{
        const newCount = [...count, item];
        setCount(newCount)

        const totalCount =newCount.reduce((total, items)=> Number(total) + Number(items.price), 0)
        setAmount(totalCount)
    }
    console.log(amount)
    return (
        <div>
            <div className="d-flex justify-content-between heading-text">
                <h2><FontAwesomeIcon icon={faCartPlus}/> {count.length}</h2>
                <h2>Our Most Popular Courses For You.</h2>
                <h2><FontAwesomeIcon icon={faCartPlus}/> {count.length}</h2>
            </div>
            <div className="courses-section">
                <div className="first-col col-md-2">
                
                </div>
                <div className="second-col col-md-7"> 
                    {
                        FakeData.map(item =><Course buttonHandler={buttonHandler} item={item} ></Course> )
                    }
                </div>
                <div className="third-col col-md-3">
                    <h2>Your Added Courses Here</h2>
                    <h4>Total Added Course: {count.length}</h4>
                <h5>Total Amount: {amount.toFixed(2)}</h5>
                </div>
            </div>
        </div>
    );
};

export default Courses;