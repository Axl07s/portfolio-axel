import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ComparisonDrawer } from './components/ComparisonDrawer';
import { SetupBuilderModal } from './components/SetupBuilderModal';
import { AmazonDisclaimer } from './components/AmazonDisclaimer';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import type { Category, Currency, Product } from './types/product';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isSetupBuilderOpen, setIsSetupBuilderOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'price-asc' | 'price-desc'>('featured');

  // Toggle compare handler
  const handleToggleCompare = (product: Product) => {
    setComparedProducts(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 products side-by-side.');
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveCompared = (productId: string) => {
    setComparedProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleClearAllCompared = () => {
    setComparedProducts([]);
    setIsCompareModalOpen(false);
  };

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      return 0; // featured default
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100">
      
      {/* Top Navigation */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currency={currency}
        setCurrency={setCurrency}
        compareCount={comparedProducts.length}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        onOpenSetupBuilder={() => setIsSetupBuilderOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        totalProductsCount={PRODUCTS.length}
      />

      {/* Main Catalog Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-zinc-200">
              Showing <span className="text-orange-400 font-mono font-extrabold">{filteredProducts.length}</span> Curated Products
            </span>
            {searchQuery && (
              <span className="text-xs text-zinc-400 font-mono">for "{searchQuery}"</span>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-zinc-500 font-mono flex items-center gap-1">
              <ArrowUpDown className="w-3 h-3 text-orange-400" /> Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-zinc-300 font-medium focus:outline-none focus:border-orange-500/50"
            >
              <option value="featured">Editor's Choice</option>
              <option value="rating">Highest Rated (★)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center glass-panel rounded-3xl border border-zinc-800 my-8">
            <SlidersHorizontal className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-zinc-200">No hardware matched your criteria.</h3>
            <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or clearing category filters.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-bold bg-orange-500 text-black rounded-xl shadow-glow-orange"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                isCompared={comparedProducts.some(p => p.id === product.id)}
                onToggleCompare={handleToggleCompare}
              />
            ))}
          </div>
        )}

      </main>

      {/* Legal Amazon Disclosure */}
      <AmazonDisclaimer />

      {/* Footer */}
      <Footer />

      {/* Comparison Drawer / Modal */}
      <ComparisonDrawer
        isOpen={isCompareModalOpen}
        onOpen={() => setIsCompareModalOpen(true)}
        onClose={() => setIsCompareModalOpen(false)}
        comparedProducts={comparedProducts}
        onRemoveProduct={handleRemoveCompared}
        onClearAll={handleClearAllCompared}
        currency={currency}
      />

      {/* Setup Builder Modal */}
      <SetupBuilderModal
        isOpen={isSetupBuilderOpen}
        onClose={() => setIsSetupBuilderOpen(false)}
        products={PRODUCTS}
        currency={currency}
      />

    </div>
  );
}

export default App;
