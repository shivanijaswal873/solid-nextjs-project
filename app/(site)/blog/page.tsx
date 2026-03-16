import BlogItem from "@/components/Blog/BlogItem";
import { getBlogs } from "@/sanity/lib/getBlog";

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogs.map((blog: any) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
