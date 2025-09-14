// Pageheader1 Component
// Generated: 2025-09-14T04:16:03.546Z
// Template: page-header-l001
// Context: About Us
// Position: pages.2.sections.0

import { ChevronRight, Home, Gem, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pageheader1() {
  return (
    <section className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="size-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">About Us</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Our Story of Artisan Excellence
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover the passion behind Artisan Gems - where traditional craftsmanship meets 
                contemporary elegance. Learn about our journey creating unique, handcrafted jewelry 
                for discerning women who value authenticity and artistry.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Heart className="size-4" />
                Our Values
              </Button>
              <Button className="gap-2">
                <Gem className="size-4" />
                View Collection
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">15+</span> Years of Craftsmanship
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">500+</span> Unique pieces created
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9★</span> Customer satisfaction
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Custom</span> Design consultations
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}