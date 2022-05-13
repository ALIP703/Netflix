import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className="content">
                <h1 className='title'>Movie name</h1>
                <div className="banner_buttons">
                    <button className="button">play</button>
                    <button className="button">My list</button>

                </div>
                <h1 className="discription">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrat</h1>
            </div>
        </div>
    )
}

export default Banner