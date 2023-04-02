import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricelist = () => {

    const [prices, setPrices] = useState([]);


    //! bairer components theke jokhn aikhne data load korbo tokhn userEffect use korbo

    useEffect(() => {

        fetch('Prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])

    return (
        <div className='mx:2 md:mx-10'>
            <h2 className='text-6xl text-center text-white bg-purple-600 mt-10 p-3 mx-2 lg:mx-96 rounded-md font-mono'> Affordable Price</h2>

            <div className=' grid grid-cols-1 md:grid-cols-3  '>
                {
                    prices.map(price => <PriceCard

                        key={price.id}
                        price={price}

                    ></PriceCard>)
                }

            </div>
        </div>
    );
};

export default Pricelist;