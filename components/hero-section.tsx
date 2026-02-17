'use client';

import dashboard from "@/public/dashboard.jpg"
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { heroContent, dashboardPlaceholder } from '@/models/features';
import Image from 'next/image';

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
          <Image
            src={dashboard} 
            width={500}
            height={500}
            alt="dashboard screenshot"
          />
        </div>
      </div>
    </section>
  );
}
