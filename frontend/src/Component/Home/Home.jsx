import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const BlogHomepage = () => {
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "A Relentless Pursuit for Perfect in Product Design",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      excerpt: "I began to notice that there was a sharp contrast between well-made",
      image: "/api/placeholder/400/250",
      tags: ["Design", "Research"],
      large: false
    },
    {
      id: 2,
      title: "How to Run a Successful Business With Your Partner",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      excerpt: "Starting a business with your spouse or significant other is an exciting but",
      image: "/api/placeholder/400/250",
      tags: ["Business", "Research"],
      large: false
    },
    {
      id: 3,
      title: "A Contributor's Guide to Unfolding History — Hillview by Made by Hand",
      author: "Alec Whitten",
      date: "17 Jan 2024",
      excerpt: "A single building occupies the hillside at Hillview, a historic 240-hectare former sheep farm on Tasmania's Bruny Island. The much-lauded work of Made by...",
      image: "/api/placeholder/500/300",
      tags: ["Design", "Architecture"],
      large: true
    },
    {
      id: 4,
      title: "Cognitive Dissonance Theory: Crash Course for UX Designers",
      author: "Demi Wilkinson",
      date: "16 Jan 2024",
      excerpt: "We all like to think of ourselves in certain ways. We consider ourselves to be truthful, hard-working, health-conscious, and in control. But our actions don't always...",
      image: "/api/placeholder/400/250",
      tags: ["Product", "Research", "Frameworks"],
      large: false
    },
    {
      id: 5,
      title: "How Remote Work Drastically Improved My Design Skills",
      author: "Candice Wu",
      date: "15 Jan 2024",
      excerpt: "Remote working might not only be feasible but beneficial. Stanford University found that remote employees were 13% more productive, with absolutely...",
      image: "/api/placeholder/400/250",
      tags: ["Design", "Research"],
      large: false
    },
    {
      id: 6,
      title: "Exclusive Interview with Designer, Jasmin Chew",
      author: "Natali Craig",
      date: "14 Jan 2024",
      excerpt: "Jasmin Chew is a 23-year-old photographer and photo editor from Toronto, Ontario. She has worked with Spotify, Nike, Chews, Makr, and Square. Mía de Silva...",
      image: "/api/placeholder/400/250",
      tags: ["Design", "Research", "Interviews"],
      large: false
    },
    {
      id: 7,
      title: "Improve Your UI Design Skills and Develop an \"Eye\" for Design",
      author: "Drew Cano",
      date: "13 Jan 2024",
      excerpt: "The design industry is constantly evolving, but good design is timeless. Learn how to quickly develop an  for UI design and improve your design skills in...",
      image: "/api/placeholder/400/250",
      tags: ["Design", "Tools", "Research"],
      large: false
    },
    {
      id: 8,
      title: "The Design Dilemma: Is Best UX Practice the Enemy of Creativity",
      author: "Orlando Diggs",
      date: "12 Jan 2024",
      excerpt: "Frankie Sullivan explores the 'Design Dilemma' — what happens when best practice UX design clashes with creativity?",
      image: "/api/placeholder/400/250",
      tags: ["Design", "Theory", "Research"],
      large: false
    }
  ];

  const handleSubscribe = () => {
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Gradient Header */}
      <div className="h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500"></div>
    

      {/* Hero Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Inside Design: Stories and interviews
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Subscribe to learn about new product features, the latest in technology, and updates.
          </p>
          
          {/* Email Subscription */}
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <button
              onClick={handleSubscribe}
              className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Recent Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent blog posts</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Large Featured Post */}
          <div className="lg:row-span-2">
            <article className="group cursor-pointer">
              <div className="aspect-w-16 aspect-h-10 mb-6">
                <img 
                  src="https://positivewriter.com/wp-content/uploads/2014/02/infographic-blog-ideas-hi-res.jpg" 
                  alt="Two women laughing together"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, suscipit saepe. Voluptas ex, voluptatibus iure minima nisi illum repudiandae? Omnis ex nam, accusamus enim reiciendis dicta sapiente minima recusandae voluptate.</p>
              </div>
            </article>
          </div>
          
          {/* Side Posts */}
          <div className="space-y-8">
            {blogPosts.slice(0, 2).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="flex gap-4">
                  <img 
                    src="https://positivewriter.com/wp-content/uploads/2014/02/infographic-blog-ideas-hi-res.jpg"
                    alt={post.title}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio debitis expedita asperiores, corporis blanditiis similique sunt quaerat ipsam quisquam inventore maxime, quis quidem quae eos ipsa facilis, tenetur voluptatibus veniam?
                    </p>
                    <div className="flex gap-2">
                     
                        <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">view</button>
                        <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">like</button>
                        <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">comment</button>
                     
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Blog Posts Section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All blog posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(2).map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-w-16 aspect-h-10 mb-4">
                <img 
                  src="https://positivewriter.com/wp-content/uploads/2014/02/infographic-blog-ideas-hi-res.jpg"
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 flex-1 pr-2">
                  {post.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex gap-2 flex-wrap">
                <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">view</button>
                <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">like</button>
                <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">comment</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHomepage;