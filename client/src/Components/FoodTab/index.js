import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
            <div className="lg:hidden w-full bg-white p-3 fixed bottom-0 z-10 flex justify-between border text-gray-400">
                {/* {
                    allTypes.map((items) => {
                        <div className={
                            items.isActive ? "flex flex-col items-center text-xl text-navColor-500 border-t-2 border-navColor-500" : "flex flex-col items-center text-xl";
                        }>
                            {items.icon}
                            <h5>{items.name}</h5>
                        </div>
                    })
                } */}
                {/* <div className="flex flex-col items-center text-xl">
                    <IoFootstepsOutline />
                    <h5>Dining Out</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <IoBeerOutline />
                    <h5>Night Life</h5>
                </div> */}
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
