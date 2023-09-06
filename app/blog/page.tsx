
// import React, {useState,useEffect} from 'react'
import { fetchTutorials } from '../sanity/api'
import client, { urlFor } from '../sanity/client'
import Link from 'next/link'
import Image from 'next/image';
import { PortableText } from "@portabletext/react";


const Items=(props:any)=>{
  
 async function fetchCat(slug:any){
    
    const cata= await fetchTutorials(`*[_type == 'blog' && slug.current == ${slug}][0].categories[]-> {
      "title": title
    }`)
    // console.log(cata)
    return cata
  }

  


  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', options);
}

     
          
    
        
return (


<div className="p-4 md:w-1/3">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={urlFor(props.img).url()} alt="blog" 
    width={692} // Specify the width of the image
    height={392} // Specify the height of the image
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
    {/* <PortableText value={fetchCat(props.slug)}/> */}
          </h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.title}</h1>
      <p className="leading-relaxed mb-3">describtion</p>
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{formatDate(props.date)}</h2>
      <div className="flex items-center flex-wrap">
      <Link className="text-indigo-500 inline-flex items-center mt-4" href={`/blog/${props.slug}`}>Learn More
      
</Link>
       
      </div>
    </div>
      </div>
  </div>)}
  






const blog = async() => {
  // console.log("hi")
  const query = `*[_type=="blog"]`
  // console.log(query)
  const res = await fetchTutorials(query)
  // console.log(res)
  
  return (
<section>
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap -m-4">
  {
    res.map((post:any)=>{
      return (
        <Items
        // id={post.id}  
        // description={post.excerpt}
        title={post.title}
        slug={post.slug.current}
        date={post.publishedAt}
        img={post.coverImage}
        categories={post.categories}
        
        />
      )
    })
   }

    {/* <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div> */}
  </div></div>

</section>
 )
}

export default blog;
