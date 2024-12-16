"use client";
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  const posts = [
    {
      title: "The Future of Construction: Trends to Watch",
      excerpt: "Explore the latest trends that are shaping the future of the construction industry, from sustainable building materials to innovative technologies.",
      image: "/blog1.jpg", // Replace with your blog post image
      link: "https://explodingtopics.com/blog/construction-industry-trends"
    },
    {
      title: "Top 10 Tips for Home Renovation",
      excerpt: "Renovating your home can be overwhelming. Here are ten essential tips to ensure your project runs smoothly and efficiently.",
      image: "/blog2.jpg", // Replace with your blog post image
      link: "https://www.sprucemagazine.ca/10-tips-for-a-successful-home-renovation/"
    },
    {
      title: "Understanding Construction Project Management",
      excerpt: "Effective project management is key to successful construction projects. Learn the fundamentals of managing a construction project.",
      image: "/blog3.jpg", // Replace with your blog post image
      link: "https://www.rib-software.com/en/blogs/construction-project-management"
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link href={post.link}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-primary font-semibold">Read More</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
