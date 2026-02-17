'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { features } from '@/models/features';

export function FeaturesSection() {
  const [visibleFeatures, setVisibleFeatures] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = entry.target.getAttribute('data-feature-id');
            if (featureId && !visibleFeatures.includes(featureId)) {
              setVisibleFeatures((prev) => [...prev, featureId]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const featureCards = document.querySelectorAll('[data-feature-card]');
    featureCards.forEach((card) => observer.observe(card));

    return () => {
      featureCards.forEach((card) => observer.unobserve(card));
    };
  }, [visibleFeatures]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-4 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-pretty">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive features designed specifically for modern restaurant operations. Manage every aspect of your business from one intuitive platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-feature-id={feature.id}
              data-feature-card
              className={`transition-all duration-700 transform ${
                visibleFeatures.includes(feature.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Card
                className={`h-full border transition-all duration-300 hover:shadow-lg hover:border-primary/30 ${
                  feature.highlight
                    ? 'border-primary/50 bg-card/50 backdrop-blur-sm'
                    : 'border-border bg-card'
                }`}
              >
                <CardHeader className="pb-0">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-2xl md:text-3xl transition-transform duration-300 ${
                        feature.highlight
                          ? 'bg-primary/15 scale-110'
                          : 'bg-primary/10'
                      }`}
                    >
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlight badge */}
                  {feature.highlight && (
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        ⭐ Premium Feature
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-24 text-center space-y-4 p-8 md:p-12 rounded-2xl border border-border bg-card/50">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Ready to transform your restaurant?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of restaurants already using our platform to streamline operations and grow their business.
          </p>
          <button className="mt-6 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200">
            Start Your Free Trial Today
          </button>
        </div>
      </div>
    </section>
  );
}
