import { fetchTutorials } from "@/app/sanity/api";
import client, { urlFor } from "@/app/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const viewBlogs = (props: any) => {
  async function fetchCat(slug: any) {
    const cata =
      await fetchTutorials(`*[_type == 'blog' && slug.current == ${slug}][0].categories[]-> {
      "title": title
    }`);
    return cata;
  }

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-US", options);
  }

  return (
    <div className="p-4">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          className="h-36 lg:h-48 w-full object-cover object-center"
          src={urlFor(props.img).url()}
          alt="blog"
          width={1920}
          height={1080}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {/* <PortableText value={fetchCat(props.slug)}/> */}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {props.title}
          </h1>
          <p className="leading-relaxed mb-3">describtion</p>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {formatDate(props.date)}
          </h2>
          <div className="flex items-center flex-wrap">
            <Link
              className="text-indigo-500 inline-flex items-center mt-4"
              href={`/blogs/${props.slug}`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewBlogs;
