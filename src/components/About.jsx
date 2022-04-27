import React, { useEffect, useState } from 'react'
import sanityClient from "../client.js";

export const About = () => {
  const [author, setAuthor] = useState(null)
  useEffect(() => {
    sanityClient.fetch(`*[_type=='author']{
      name,
      bio,
      "authorImage":image.asset->url
  }`).then((data)=>setAuthor(data))

  }, [])
  

  return <></>
}
