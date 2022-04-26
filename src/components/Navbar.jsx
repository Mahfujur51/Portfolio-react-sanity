import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';


export const Navbar = () => {
    return (
        <header className='bg-red-600'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "text-red-100 bg-red-700  py-6 px-3 mr-4" : 'inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 font-bold tracking-widset')}>
                        Home
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? "text-red-100 bg-red-700  py-6 px-3 mr-4" : 'inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 font-bold tracking-widset')}>
                        About
                    </NavLink>
                    <NavLink to='/post' className={({ isActive }) => (isActive ? "text-red-100 bg-red-700  py-6 px-3 mr-4" : 'inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 font-bold tracking-widset')}>
                        Blog Post
                    </NavLink>
                    <NavLink to='/project' className={({ isActive }) => (isActive ? "text-red-100 bg-red-700  py-6 px-3 mr-4" : 'inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 font-bold tracking-widset')}>
                        Project
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-3'>
                <SocialIcon url="https://twitter.com/jaketrent" className='mr-4' fgColor='#fff' style={{height:35,width:35}}  target="_blank"/>
                <SocialIcon url="https://facebook.com/jaketrent" className='mr-4' fgColor='#fff' style={{height:35,width:35}}  target="_blank"/>
                </div>
            </div>
        </header>
    )
}
