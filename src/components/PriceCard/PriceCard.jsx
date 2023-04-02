import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({ price }) => {
    return (
        <div className='mt-5 mb-5  mx-2 rounded-md bg-amber-500  text-center p-5 drop-shadow-md '>

            <h2>
                <span className='text-5xl text-white font-extrabold font-mono'>${price.price}</span>
                <span className='text-2xl font-mono text-rose-500'> /month</span>
            </h2>

            <h2 className='text-3xl font-bold font-mono '>{price.name}</h2>
            <div className='text-start mt-10'>
                <p className='font-mono font-bold text-xl underline underline-offset-8 mb-3' >Features:</p>

                {
                    price.features.map((feature, idx) =>

                        <Features

                            key={idx}
                            feature={feature}

                        ></Features>)
                    // className='font-mono text-cyan-50 ' >
                }
            </div>

        </div>
    );
};

export default PriceCard;