'use client';

import { Button } from '@/components/ui/button';
import { companyInfo } from '@/models/features';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground hidden sm:inline">
              {companyInfo.name}
            </span>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {companyInfo.tagline}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {['Features', 'Pricing', 'Blog', 'Contact'].map((item) => (
            <button
              key={item}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground hidden sm:inline-flex"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
