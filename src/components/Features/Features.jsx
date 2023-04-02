import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Features = ({ feature }) => {
    return (
        <div className='flex content-center items-center gap-2 font-mono text-cyan-50'>
            <CheckCircleIcon class="h-4 w-4 text-black" />
            <span>{feature}</span>
        </div>
    );
};

export default Features;