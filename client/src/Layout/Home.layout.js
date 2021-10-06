import React from 'react'
import Navbar from '../Components/Navbar'

const HomeLayout = (props) => {
    return (
        <>
            <div>
                <Navbar />
                { props.children }
            </div> 
        </>
    )
}

export default HomeLayout