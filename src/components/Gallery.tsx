// Gallery Component
// Generated: 2025-09-14T04:16:03.546Z
// Template: gallery-c001
// Context: Product Catalog
// Position: pages.1.sections.2

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X, Expand, Grid3x3, Heart, Star, Gem } from "lucide-react"

export default function Gallery() {
  const collections = [
    {
      id: 1,
      title: "Ethereal Rose Collection",
      category: "Handcrafted Necklaces",
      mainImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop"
      ],
      details: { pieces: 8, materials: "Rose Gold & Pearls", crafted: "Hand-forged" },
      price: "$285 - $450",
      rating: 4.9
    },
    {
      id: 2,
      title: "Midnight Elegance",
      category: "Statement Earrings",
      mainImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop"
      ],
      details: { pieces: 6, materials: "Sterling Silver & Onyx", crafted: "Artisan-made" },
      price: "$165 - $320",
      rating: 4.8
    },
    {
      id: 3,
      title: "Bohemian Dreams",
      category: "Layered Bracelets",
      mainImage: "https://images.unsplash.com/photo-1588444650700-6c3c3c5e8b3a?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1588444650700-6c3c3c5e8b3a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop"
      ],
      details: { pieces: 12, materials: "Mixed Metals & Stones", crafted: "Hand-woven" },
      price: "$95 - $185",
      rating: 4.7
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Artisan Collections Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handcrafted jewelry collections, each piece uniquely designed and lovingly created by skilled artisans
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Card key={collection.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-muted hover:border-primary/20">
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={collection.mainImage}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 bg-card/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                  >
                    <Grid3x3 className="size-4" />
                    {collection.images.length} Photos
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-card/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                >
                  <Expand className="size-4" />
                </Button>

                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity bg-card/90 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
                >
                  <Heart className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-semibold text-sm text-primary-foreground">{collection.price}</span>
                  </div>
                </div>
              </div>

              {/* Collection Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {collection.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="size-3 fill-accent text-accent" />
                    <span className="text-xs text-muted-foreground">{collection.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {collection.title}
                </h3>

                {/* Collection Details */}
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center justify-between">
                    <span>Pieces:</span>
                    <span className="font-medium">{collection.details.pieces} unique items</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Materials:</span>
                    <span className="font-medium">{collection.details.materials}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Gem className="size-4 text-primary" />
                    <span className="font-medium text-primary">{collection.details.crafted}</span>
                  </div>
                </div>

                {/* Thumbnail Preview */}
                <div className="grid grid-cols-4 gap-1 mb-4">
                  {collection.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${collection.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  Explore Collection
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Browse All Jewelry Collections
          </Button>
        </div>
      </div>
    </section>
  )
}