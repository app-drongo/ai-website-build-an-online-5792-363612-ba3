// Productgrid Component
// Generated: 2025-09-14T04:16:03.546Z
// Template: product-grid-c001
// Context: Product Catalog
// Position: pages.1.sections.1

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Star, Filter, ChevronDown } from "lucide-react"

export default function Productgrid() {
  const products = [
    {
      id: 1,
      name: "Rose Quartz Pendant Necklace",
      price: 189.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 87,
      badge: "Sale",
      category: "Necklaces"
    },
    {
      id: 2,
      name: "Handwoven Silver Bracelet",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "New",
      category: "Bracelets"
    },
    {
      id: 3,
      name: "Moonstone Drop Earrings",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "Earrings"
    },
    {
      id: 4,
      name: "Artisan Gemstone Ring",
      price: 219.99,
      originalPrice: 279.99,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 203,
      badge: "Sale",
      category: "Rings"
    },
    {
      id: 5,
      name: "Vintage Pearl Choker",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 98,
      category: "Necklaces"
    },
    {
      id: 6,
      name: "Custom Birthstone Pendant",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      rating: 5.0,
      reviews: 267,
      badge: "Bestseller",
      category: "Custom"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Handcrafted Jewelry Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is lovingly crafted by skilled artisans using ethically sourced gemstones and precious metals
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 border-primary/20 hover:bg-primary/10">
              <Filter className="size-4" />
              Filter by Style
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
              Jewelry Type
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
              Gemstone
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
              Price Range
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing 6 of 48 unique pieces</span>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
              Sort by: Featured
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-muted hover:border-primary/20 bg-card">
              <div className="relative aspect-square bg-muted/30">
                {product.badge && (
                  <Badge 
                    className={`absolute top-4 left-4 z-10 ${
                      product.badge === "Sale" 
                        ? "bg-accent text-accent-foreground" 
                        : product.badge === "New"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 hover:bg-primary/10 border border-primary/20"
                >
                  <Heart className="size-4 text-primary" />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardContent className="p-6">
                <p className="text-sm text-primary font-medium mb-2">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-3 line-clamp-2 text-lg">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">Free shipping & gift wrapping</p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 space-y-2">
                <Button className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                  <ShoppingCart className="size-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  Add to Collection
                </Button>
                <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/10" size="sm">
                  View Details & Customize
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8">
            Discover More Artisan Pieces
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Each piece is one-of-a-kind • Handcrafted with love • 30-day returns
          </p>
        </div>
      </div>
    </section>
  )
}