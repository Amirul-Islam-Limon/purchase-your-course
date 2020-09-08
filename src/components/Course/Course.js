import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {course_name, instructor, price, image} = props.item
    return (
        <div className="course-section">
            <div className="course">
                    <div className="first-part col-md-6">
                        <img src={image} alt=""/>
                        <h5>{course_name}</h5>
                        <p><small><FontAwesomeIcon icon={faChalkboardTeacher}/> Instructor : {instructor}</small></p>
                        <h4>Price : ${price}</h4>
                        

                    </div>
                    <div className="second-part col-md-6">
                            <h4>About This Course</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur eos facere possimus pariatur velit inventore quaerat non est expedita ipsum?Lorem ipsum dolor sit amet.</p>
                    </div>
            </div>
                <button onClick={()=> props.buttonHandler(props.item)} className="btn btn-success">Enroll Now <FontAwesomeIcon icon={faPlusCircle} /></button>
        </div>
    );
};

export default Course;