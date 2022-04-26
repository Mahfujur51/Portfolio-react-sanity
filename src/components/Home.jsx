import React from 'react'


export const Home = () => {
    return (
        <main>
            <img src={'./about.jpg'} alt=""  className='absolute w-full h-full object-cover'/>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-40 px-8'>
                <h1 className='text-6xl text-red-600 font-bold home-name lg:leading-snug'>Hello I am, <br/>      Md mahfujur Rahman</h1>
            </section>
        </main>
    )
}
