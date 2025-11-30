import { ArrowLeft, Calendar, Share2, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { BLOG_POSTS } from "../data/blog";
import { useTranslation } from "../i18n/I18nProvider";

export function BlogArticle() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const { t, language } = useTranslation();
  const localized = post?.translations?.[language];
  const title = localized?.title ?? post?.title ?? "";
  const excerpt = localized?.excerpt ?? post?.excerpt ?? "";
  const content = localized?.content ?? post?.content ?? "";
  const category = localized?.category ?? post?.category ?? "";

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif font-bold mb-4">
          {t("blog.articleNotFound", { fallback: "Article non trouvé" })}
        </h1>
        <Link to="/blog">
          <Button>{t("blog.back", { fallback: "Retour au blog" })}</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white pt-24 pb-20">
      <article className="container-custom max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("blog.back", { fallback: "Retour au blog" })}
        </Link>

        <header className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary">{category}</Badge>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
          </div>
        </header>

        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12">
          <img
            src={post.image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="lead text-xl text-gray-800 font-medium mb-8">
            {excerpt}
          </p>
          {/* Mock Content */}
          <p>
            {content} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">
            {t("blog.articleHeading", { fallback: "Un marché en pleine expansion" })}
          </h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic my-8 text-gray-800">
            {t("blog.articleQuote", {
              fallback:
                "\"Le Cap-Vert représente aujourd'hui l'une des meilleures opportunités d'investissement en Afrique de l'Ouest.\"",
            })}
          </blockquote>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
          <div className="flex gap-2">
            <span className="text-sm font-medium text-gray-900">
              {t("blog.keywordsLabel", { fallback: "Mots-clés :" })}
            </span>
            <span className="text-sm text-gray-500">{t("blog.keywords", { fallback: "Investissement, Immobilier, Tourisme" })}</span>
          </div>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            {t("blog.share", { fallback: "Partager" })}
          </Button>
        </div>
      </article>
    </main>
  );
}
