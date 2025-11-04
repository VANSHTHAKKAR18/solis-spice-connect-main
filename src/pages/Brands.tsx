import { Card, CardContent } from "@/components/ui/card";
import { Package, Award, Sparkles } from "lucide-react";

const Brands = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Brands</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Two distinct brands delivering quality and trust across markets
            </p>
          </div>
        </div>
      </section>

      {/* Siesta Brand */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">Siesta</h2>
                </div>
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Siesta represents our premium range of spices and seeds, carefully selected and processed to meet the highest international standards. The brand embodies quality, consistency, and the authentic taste of traditional Indian spices.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-foreground flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Brand Values
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Premium Quality Assurance</li>
                          <li>• Natural & Pure Products</li>
                          <li>• Consistent Standards</li>
                          <li>• Export Grade Processing</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-foreground flex items-center gap-2">
                          <Package className="w-5 h-5 text-primary" />
                          Product Range
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Cumin Seeds</li>
                          <li>• Fennel Seeds</li>
                          <li>• Fenugreek Seeds</li>
                          <li>• Premium Mukhwas</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-background rounded-lg border border-border">
                      <h3 className="font-semibold mb-3 text-foreground">Positioning</h3>
                      <p className="text-muted-foreground">
                        Siesta is positioned as a premium brand for discerning customers who value authenticity, purity, and superior quality. Ideal for gourmet food manufacturers, specialty stores, and high-end retail markets.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Samip Brand */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Package className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">Samip</h2>
                </div>
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Samip is our value-driven brand offering excellent quality spices at competitive prices. While maintaining our strict quality standards, Samip makes premium Indian spices accessible to a broader market segment.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-foreground flex items-center gap-2">
                          <Award className="w-5 h-5 text-secondary" />
                          Brand Values
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Reliable Quality</li>
                          <li>• Value for Money</li>
                          <li>• Wide Accessibility</li>
                          <li>• Trusted Standards</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-foreground flex items-center gap-2">
                          <Package className="w-5 h-5 text-secondary" />
                          Product Range
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Mustard Seeds</li>
                          <li>• Ajwain Seeds</li>
                          <li>• Sesame Seeds</li>
                          <li>• Magaj (Melon Seeds)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-background rounded-lg border border-border">
                      <h3 className="font-semibold mb-3 text-foreground">Positioning</h3>
                      <p className="text-muted-foreground">
                        Samip targets the mid-market segment, offering excellent quality spices at competitive prices. Perfect for food processors, retail chains, and businesses looking for reliable quality without premium pricing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Both Brands */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Quality Across All Brands
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you choose Siesta or Samip, you're choosing the Solis International LLP promise of quality, purity, and reliability. Both brands undergo the same rigorous quality control processes and are backed by our decades of expertise in spice exports.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-muted/50">
                <h3 className="font-semibold mb-2 text-foreground">Same Standards</h3>
                <p className="text-sm text-muted-foreground">Identical quality control and testing procedures</p>
              </div>
              <div className="p-6 rounded-lg bg-muted/50">
                <h3 className="font-semibold mb-2 text-foreground">Export Ready</h3>
                <p className="text-sm text-muted-foreground">Both brands meet international export requirements</p>
              </div>
              <div className="p-6 rounded-lg bg-muted/50">
                <h3 className="font-semibold mb-2 text-foreground">Flexible Options</h3>
                <p className="text-sm text-muted-foreground">Custom packaging available for both brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
