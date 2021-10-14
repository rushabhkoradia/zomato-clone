import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Components
import Navbar from '../Components/Navbar';
import FoodTab from '../Components/FoodTab';

// Redux Actions
import { getRestaurant } from '../Redux/Reducer/Restaurant/restaurant.action';

const HomeLayout = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestaurant())
    }, [])

    return (
        <>
            <div className="lg:px-20">
                <Navbar />
                { props.children }
            </div> 
            <FoodTab />
        </>
    );
};

export default HomeLayout;