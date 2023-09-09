import { fetchTutorials } from "../sanity/api";
import PreviewCard from "@/components/viewBlogs";

const Blogs = async () => {
  const query = `*[_type=="blog"]`;
  const res = await fetchTutorials(query);

  return (
    <section>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {res.map((post: any) => {
            return (
              <PreviewCard
                title={post.title}
                slug={post.slug.current}
                date={post.publishedAt}
                img={post.coverImage}
                categories={post.categories}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
