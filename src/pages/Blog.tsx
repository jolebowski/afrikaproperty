import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { ModernPageHero } from "../components/ui/ModernPageHero";
import { BLOG_POSTS } from "../data/blog";

export function Blog() {
  return (
    <main>
      <ModernPageHero
        tag="Actualités"
        title="Le Blog"
        subtitle="Actualités, conseils et guides pour réussir votre investissement au Cap-Vert."
        image="https://images.unsplash.com/photo-1499750310159-5b9887b05597?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-primary hover:bg-white">{post.category}</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                  </div>

                  <h2 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-medium text-sm">
                    Lire la suite <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
