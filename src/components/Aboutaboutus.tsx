// Aboutaboutus Component
// Generated: 2025-09-14T04:16:03.546Z
// Template: about-c001
// Context: About Us
// Position: pages.2.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Gem, 
  Users, 
  Award, 
  Heart,
  ArrowRight,
  Quote,
  Star,
  Sparkles,
  Palette,
  HandHeart
} from "lucide-react"

export default function Aboutaboutus() {
  const values = [
    {
      icon: HandHeart,
      title: "Handcrafted Excellence",
      description: "Every piece is meticulously crafted by skilled artisans using time-honored techniques passed down through generations."
    },
    {
      icon: Palette,
      title: "Unique Artistry",
      description: "We celebrate individuality through one-of-a-kind designs that reflect your personal style and story."
    },
    {
      icon: Heart,
      title: "Customer Connection",
      description: "Building lasting relationships with our clients through personalized service and custom jewelry consultations."
    },
    {
      icon: Gem,
      title: "Quality Materials",
      description: "We source only the finest gemstones and precious metals to ensure each piece becomes a treasured heirloom."
    }
  ]

  const stats = [
    { value: "2008", label: "Founded", icon: Award },
    { value: "2K+", label: "Happy Customers", icon: Users },
    { value: "500+", label: "Custom Pieces", icon: Gem },
    { value: "15+", label: "Years Experience", icon: Sparkles }
  ]

  const team = [
    {
      name: "Isabella Martinez",
      role: "Master Artisan & Founder",
      image: "IM",
      bio: "Award-winning jewelry designer with 20+ years creating bespoke pieces."
    },
    {
      name: "Elena Chen",
      role: "Gemstone Specialist", 
      image: "EC",
      bio: "Certified gemologist with expertise in rare and precious stones."
    },
    {
      name: "Sofia Rodriguez",
      role: "Custom Design Director",
      image: "SR",
      bio: "Specializes in translating client visions into stunning wearable art."
    },
    {
      name: "Maya Patel",
      role: "Quality Assurance Lead",
      image: "MP",
      bio: "Ensures every piece meets our exacting standards of excellence."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Beauty Through
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Artisan Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're passionate artisans dedicated to creating extraordinary handmade jewelry 
            that celebrates your unique style and becomes part of your personal story.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2008 by master artisan Isabella Martinez, Artisan Gems began as a small 
                studio with a simple vision: to create jewelry that tells a story and celebrates individuality.
              </p>
              <p>
                What started as a passion for traditional metalworking techniques has evolved into a 
                boutique atelier where ancient craftsmanship meets contemporary design, creating pieces 
                that are both timeless and uniquely modern.
              </p>
              <p>
                Today, we're proud to have created over 500 custom pieces for discerning women who 
                appreciate the artistry and personal connection that comes with handcrafted jewelry.
              </p>
            </div>
            <Button className="group">
              Explore Our Collection
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every piece we create is infused with love, craftsmanship, and the unique story of its wearer."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Isabella Martinez, Founder</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our craftsmanship and inspire every piece we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Artisans</h3>
            <p className="text-muted-foreground">
              The talented craftspeople who bring passion, skill, and artistry to every piece we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Schedule a Consultation
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Isabella created the most beautiful custom engagement ring for me. The attention to detail 
                and personal touch made the entire experience magical. It's not just jewelry - it's art."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  AM
                </div>
                <div className="text-left">
                  <div className="font-semibold">Amanda Mitchell</div>
                  <div className="text-sm text-muted-foreground">Custom Engagement Ring Client</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}