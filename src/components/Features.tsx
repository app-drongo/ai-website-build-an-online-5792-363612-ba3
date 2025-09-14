// Features Component
// Generated: 2025-09-14T04:16:03.546Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Gem, 
  Heart, 
  Sparkles, 
  Shield, 
  Palette, 
  Gift,
  Crown,
  Star,
  Users
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Gem,
      title: "Premium Materials",
      description: "Carefully selected gemstones and precious metals sourced ethically from trusted suppliers worldwide.",
      badge: "Quality"
    },
    {
      icon: Heart,
      title: "Handcrafted with Love",
      description: "Each piece is lovingly created by skilled artisans who pour their passion into every detail.",
      badge: "Craftsmanship"
    },
    {
      icon: Sparkles,
      title: "Custom Designs",
      description: "Work with our designers to create a truly unique piece that reflects your personal style.",
      badge: "Personalization"
    },
    {
      icon: Shield,
      title: "Lifetime Guarantee",
      description: "We stand behind our craftsmanship with a comprehensive lifetime warranty on all pieces.",
      badge: "Warranty"
    },
    {
      icon: Palette,
      title: "Unique Collections",
      description: "Discover exclusive designs you won't find anywhere else, updated seasonally.",
      badge: "Exclusivity"
    },
    {
      icon: Gift,
      title: "Perfect Gifting",
      description: "Beautiful packaging and personalized notes make every purchase gift-ready.",
      badge: "Service"
    },
    {
      icon: Crown,
      title: "Heirloom Quality",
      description: "Built to last generations, our jewelry becomes treasured family heirlooms.",
      badge: "Legacy"
    },
    {
      icon: Star,
      title: "Celebrity Loved",
      description: "Worn by influencers and celebrities who appreciate authentic artisan craftsmanship.",
      badge: "Recognition"
    },
    {
      icon: Users,
      title: "Personal Styling",
      description: "Complimentary styling consultations to help you find pieces that complement your wardrobe.",
      badge: "Consultation"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Artisan Gems
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Jewelry That Celebrates
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Unique Beauty
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the difference of authentic handcrafted jewelry. Every piece tells a story, 
            celebrates individuality, and becomes part of your personal legacy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to find your perfect piece?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse Collection
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}