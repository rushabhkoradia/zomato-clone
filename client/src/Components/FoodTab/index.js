import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';
import { IoBeerOutline, IoFootstepsOutline } from 'react-icons/io5';

export const TabSm = () => {

    const [allTypes, setAllTypes] = useState([
        {
            id: `delivery`,
            icon: <BiShoppingBag />,
            name: "Delivery",
            isActive: false
        },
        {
            id: `diningout`,
            icon: <IoFootstepsOutline />,
            name: "Dining Out",
            isActive: false
        },
        {
            id: `nightlife`,
            icon: <IoBeerOutline />,
            name: "Night Life",
            isActive: false
        }
    ]);

    const { type } = useParams();

    useEffect(() => {
        if(type) {
            const updateTypes = allTypes.map((item) => {
                if (item.id === type) {
                    return { ...item, isActive: true };
                }
                return item;
            });
            
            setAllTypes(updateTypes);
        }
    }, []);
    
    return (
        <>
            <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
                {allTypes.map((items) => (
                    <Link to={`/${items.id}`}>
                        <div className={ type === items.id ? "flex flex-col relative items-center text-xl text-zomato-400 " : "flex flex-col items-center text-xl " }>
                            <div className={ type === items.id && "absolute -top-3 w-full h-2 border-t-2 border-zomato-400" } />
                            { items.icon }
                            <h5 className="text-sm">{ items.name }</h5>
                        </div>
                    </Link>
                ))}
            </div> 
        </>
    );
};

const FoodTab = () => {
    return (
        <>
            <div>
                <TabSm />
            </div>
        </>
    );
};

export default FoodTab;
