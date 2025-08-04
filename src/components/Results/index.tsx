import { useState, useEffect, useRef } from 'react';
import constants from '../../constants/index.json';

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const resultItems = constants?.document?.Result_Component?.result_items || [];

  // Initialize counters
  useEffect(() => {
    const initialCounters: Record<string, number> = {};
    resultItems.forEach(item => {
      initialCounters[item.title] = 0;
    });
    setCounters(initialCounters);
  }, []);

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation function
  const startCountAnimation = () => {
    resultItems.forEach((item, index) => {
      const target = parseInt(item.count.replace(/\D/g, '')) || 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [item.title]: Math.floor(current)
        }));
      }, 16);

      // Clear interval after animation completes
      setTimeout(() => clearInterval(timer), duration + index * 200);
    });
  };

  const formatCount = (count: number, originalCount: string) => {
    const suffix = originalCount.replace(/\d/g, '');
    return count + suffix;
  };

  const getIcon = (title: string) => {
    const iconMap: Record<string, string> = {
      'Projects done': '🏗️',
      'Awards': '🏆',
      'Total members': '👥',
      'Happy customers': '😊'
    };
    return iconMap[title] || '📊';
  };

  const getGradient = (index: number) => {
    const gradients = [
      'from-primary to-accent',
      'from-accent to-accent2',
      'from-accent2 to-primary',
      'from-primary to-accent2'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 lg:py-32 particles-bg relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float"></div>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl lg:text-4xl font-Fira font-bold gradient-text mb-6">
            Our Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {resultItems.map((item, index) => (
            <div
              key={item.title}
              className={`
                group text-center p-8 rounded-3xl glass hover-lift cursor-pointer
                transition-all duration-500 hover:scale-105
                ${isVisible ? 'animate-bounceIn' : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.title)}
              </div>

              {/* Counter */}
              <div className={`
                text-5xl lg:text-6xl font-bold mb-4 
                bg-gradient-to-r ${getGradient(index)} bg-clip-text text-transparent
                group-hover:scale-110 transition-transform duration-300
              `}>
                {formatCount(counters[item.title] || 0, item.count)}
              </div>

              {/* Label */}
              <div className="space-y-2">
                <h3 className="uppercase text-lightText font-Fira text-sm lg:text-base tracking-[0.2em] font-medium group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Decorative line */}
                <div className={`
                  w-16 h-0.5 mx-auto rounded-full transition-all duration-300
                  bg-gradient-to-r ${getGradient(index)}
                  group-hover:w-20
                `}></div>
              </div>

              {/* Hover effect overlay */}
              <div className={`
                absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 
                transition-opacity duration-300 pointer-events-none
                bg-gradient-to-br ${getGradient(index)}
              `}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`
          text-center mt-16 space-y-4
          ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}
        `} style={{animationDelay: '1s'}}>
          <p className="text-lightText font-Urbanist text-lg max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and our dedication to delivering outstanding results for every client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
