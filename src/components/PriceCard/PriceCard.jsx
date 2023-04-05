import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({ price }) => {
    return (
        <div className='mt-5 mb-5  mx-2 rounded-md bg-amber-500  text-center p-5 drop-shadow-md flex flex-col '>

            <h2>
                <span className='text-5xl text-white font-extrabold font-mono'>${price.price}</span>
                <span className='text-2xl font-mono text-rose-500'> /month</span>
            </h2>

            <h2 className='text-3xl font-bold font-mono '>{price.name}</h2>
            <div className='text-start mt-10   mb-5 '>
                <p className='font-mono font-bold text-xl underline underline-offset-8 mb-3' >Features:</p>

                {
                    price.features.map((feature, idx) =>

                        <Features

                            key={idx}
                            feature={feature}

                        ></Features>)


                }

            </div>
            <button className=' mt-auto w-full bg-green-600 py-2 rounded-md font-mono font-semibold'>Buy Now</button>

        </div>
    );
};

export default PriceCard;