import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/sanity/lib/getBlog";

const RelatedPost = async () => {
  const blogs = await getBlogs();

  return (

      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Related Posts
      </h4>

      <div>
        {blogs.slice(0, 3).map((post: any) => (
          <div
            className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
            key={post?._id}
          >
            <div className="relative h-18 w-45 max-w-45">
              <Image fill src={post?.mainImage} alt={post?.title} />
            </div>

            <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
              <Link href={`/blog/blog-details?slug=${post.slug}`}>
                {post.title.slice(0, 40)}...
              </Link>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;
