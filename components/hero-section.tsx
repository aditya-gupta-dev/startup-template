'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { heroContent, dashboardPlaceholder } from '@/models/features';

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card px-4 py-20 md:py-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-pretty text-foreground">
              {heroContent.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed text-balance">
              {heroContent.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              {heroContent.cta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-card text-foreground font-semibold bg-transparent"
            >
              {heroContent.ctaSecondary}
            </Button>
          </div>
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading restaurants worldwide</p>
            <div className="flex flex-wrap gap-3">
              {['🏆', '⭐', '🚀', '💎'].map((icon) => (
                <div
                  key={icon}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border text-lg"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative order-1 md:order-2 flex items-center justify-center md:min-h-screen md:sticky md:top-0">
          <div className="w-full">
            <div
              className={`relative w-full aspect-video md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden border border-border shadow-2xl transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/50 to-background" />

              <div className="absolute inset-0 flex flex-col p-4 md:p-8 space-y-4 md:space-y-6">
                <div className="flex items-center justify-between h-12 md:h-16 bg-primary/10 rounded-lg px-4 border border-primary/20">
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full bg-primary/40"
                      />
                    ))}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-primary/60">
                    Dashboard
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3 md:gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-primary/5 rounded-lg border border-primary/10 p-3 md:p-4 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      <div className="h-2 md:h-3 bg-primary/20 rounded w-2/3 mb-2 md:mb-3" />
                      <div className="h-6 md:h-8 bg-primary/30 rounded w-full" />
                    </div>
                  ))}
                </div>

                <div className="h-12 md:h-16 flex gap-3 md:gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/5 rounded-lg border border-primary/10 p-2"
                    />
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-t from-primary/10 via-transparent to-transparent transition-opacity duration-300" />
            </div>

            <p className="text-center text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
              {dashboardPlaceholder.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
