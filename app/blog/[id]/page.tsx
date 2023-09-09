
import { fetchTutorials } from "@/app/sanity/api";
import { urlFor } from "@/app/sanity/client";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RichText } from "../../components/RichText";

const BlogContent = async({params}:any) => {
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
   const id=params.id
//    console.log(params)
    const res=await fetchTutorials(`*[_type == 'blog' && slug.current == '${id}'][0] {
        "body": body,
        "coverImage": coverImage,
        "title":title,
        "publishedAt":publishedAt,
      }
      `)
    console.log(res)
  return (
    <section className=" body-font h-full">
        <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={urlFor(res.coverImage).url()} alt="blog" 
    width={692} 
    height={592} 
    />
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{res.title}</h1>
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{formatDate(res.publishedAt)}</h2>
    </div>
    <CardContent>
      

    <div className="prose-sm md:prose-lg max-w-md md:max-w-3xl mx-auto">
        <PortableText value={res.body} components={RichText}/>
    
</div>
    </CardContent>
</section>


  )
};
export default BlogContent;

