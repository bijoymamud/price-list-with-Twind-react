import React from 'react';

const PriceCard = ({ price }) => {
    return (
        <div className='mt-5 mx-2 rounded-md bg-amber-500  text-center p-5'>

            <h2>
                <span className='text-5xl text-white font-extrabold font-mono'>${price.price}</span>
                <span className='text-2xl font-mono text-rose-500'> /month</span>
            </h2>

            <h2 className='text-3xl font-bold font-mono '>{price.name}</h2>

        </div>
    );
};

export default PriceCard;