import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import sanityClient from "../client.js";



export const Post = () => {
    const [postData, setPost] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type=='post']{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data)=>setPost(data))
    }, []);

  

    return (
       <main className='bg-green-100 min-h-screen p-12'>
           <section className='container mx-auto'>
               <h1 className='text-5xl flex justify-center mb-2'>Blog Posts page</h1>
               <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to page of my Blog Post</h2>
               <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                   {postData && postData.map((post,index)=>(
                   <article>
                      <Link to={"/post/" +post.slug.current} key={post.slug.current}>
                      <span>
                           <img src="" alt="" />
                           <span>
                               <h3></h3>
                           </span>
                       </span>
                      
                      </Link>
                   </article>
                   ))}
               </div>
           </section>
       </main>
    )
}
