import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Services', path: '/services' }
    ];

    return (
        <nav className='mx-1 md:mx-5'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {open === true ?

                        <XMarkIcon class="h-6 w-6 text-blue-500" />
                        : <Bars3Icon class="h-6 w-6 text-blue-500" />}

                </span>



            </div>
            <ul className={`pl-10 text-center md:pl-0 md:flex absolute md:static duration-500 ${open ? 'top-6' : '-top-36'} bg-slate-400 md:bg-white`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}

                    ></Link>)
                }
            </ul>

            <h1 className='text-6xl text-purple-600'>Welcome from Tailwind css</h1>
        </nav >
    );
};

export default Navbar;