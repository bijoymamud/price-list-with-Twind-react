import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-10 md:mt-5 md:mx-8 font-mono md:text-xl md:font-bold '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;