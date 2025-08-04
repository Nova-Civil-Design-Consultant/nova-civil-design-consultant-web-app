import { useState } from "react";
import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";
import abstract from "../../assets/images/abstract-three.png";
import Button from "../Button";
import SectionHeader from "../SectionHeader";
import constants from "../../constants/index.json";

const Articles = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const articles = [
    {
      title: "Top 10 Mindblowing Architecture Buildings In The World",
      image: a1,
      date: "Feb 1, 2024",
      category: "Architecture",
      excerpt: "Discover the most innovative and breathtaking architectural marvels that are reshaping our world.",
      readTime: "5 min read",
      link: "https://www.atlasobscura.com/articles/where-to-wander-2024-structures",
    },
    {
      title: "Amazing Technologies That Helped To Create Creative Works",
      image: a2,
      date: "Feb 15, 2024",
      category: "Technology",
      excerpt: "Explore cutting-edge technologies revolutionizing the construction and design industry.",
      readTime: "7 min read",
      link: "https://constructible.trimble.com/construction-industry/10-innovations-that-have-revolutionized-construction",
    },
    {
      title: "Top 100 Best Construction Companies Around The World",
      image: a3,
      date: "Mar 1, 2024",
      category: "Industry",
      excerpt: "A comprehensive list of the world's leading construction companies setting industry standards.",
      readTime: "10 min read",
      link: "https://www.theconstructionindex.co.uk/market-data/top-100-construction-companies/2023",
    },
  ];

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const categoryColors = {
    "Architecture": "from-primary to-accent",
    "Technology": "from-accent to-accent2", 
    "Industry": "from-accent2 to-primary"
  };

  return (
    <section className="w-full py-20 lg:py-32 relative particles-bg overflow-hidden">
      {/* Background Decorations */}
      <img
        src={abstract}
        alt="Abstract Decoration"
        className="absolute top-0 right-0 z-0 lg:block hidden opacity-20 animate-float"
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-custom"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="flex justify-center animate-fadeInUp">
            <SectionHeader
              title={constants?.document?.Articles_Component?.title}
              description={constants?.document?.Articles_Component?.description}
              centered
            />
          </div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {articles.map((article, index) => (
              <article
                key={article.title}
                className={`
                  group cursor-pointer space-y-6 animate-fadeInUp hover-lift
                  ${hoveredIndex === index ? 'scale-105' : ''}
                `}
                style={{animationDelay: `${0.3 + index * 0.2}s`}}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openLink(article.link)}
              >
                {/* Article Image */}
                <div className="relative overflow-hidden rounded-3xl glass">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`
                      px-4 py-2 rounded-full text-white text-sm font-semibold
                      bg-gradient-to-r ${categoryColors[article.category as keyof typeof categoryColors]}
                      shadow-large
                    `}>
                      {article.category}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-large">
                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="space-y-4">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-lightText font-Urbanist">
                    <time dateTime={article.date}>{article.date}</time>
                    <span>•</span>
                    <span>{article.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-secondary font-Fira font-bold text-xl lg:text-2xl leading-tight group-hover:gradient-text transition-all duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-lightText font-Urbanist text-base leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 pt-2 group-hover:gap-3 transition-all duration-300">
                    <span className="font-Urbanist font-semibold text-primary">Read More</span>
                    <svg className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 animate-fadeInUp" style={{animationDelay: '0.9s'}}>
            <p className="text-lightText font-Urbanist text-lg">
              Stay updated with the latest trends and insights in civil design and construction.
            </p>
            <Button 
              gradientButton 
              glowEffect 
              size="lg"
              onClick={() => openLink("https://theconstructor.org/")}
            >
              {constants?.document?.Articles_Component?.all_article_button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
