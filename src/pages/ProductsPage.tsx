import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SAMPLE_PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Category } from '../types';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = (searchParams.get('category') as Category) || 'All';
  const searchQuery = searchParams.get('search') || '';
  const sortBy = searchParams.get('sort') || 'default';

  // Update category filter
  const handleCategoryChange = (category: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (category === 'All') {
        next.delete('category');
      } else {
        next.set('category', category);
      }
      return next;
    });
  };

  // Update search query
  const handleSearchChange = (query: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (!query.trim()) {
        next.delete('search');
      } else {
        next.set('search', query);
      }
      return next;
    });
  };

  // Clear search query
  const handleClearSearch = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete('search');
      return next;
    });
  };

  // Update sorting
  const handleSortChange = (sortValue: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (sortValue === 'default') {
        next.delete('sort');
      } else {
        next.set('sort', sortValue);
      }
      return next;
    });
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchParams({});
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...SAMPLE_PRODUCTS];

    // Category filter
    if (currentCategory && currentCategory !== 'All') {
      result = result.filter((p) => p.category === currentCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default: featured first, then standard order
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [currentCategory, searchQuery, sortBy]);

  return (
    <div id="products-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Heading */}
      <div className="border-b border-stone-200 pb-6">
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Product Catalog
        </h1>
        <p className="text-sm text-stone-600 mt-1">
          Explore our collection of authentic electronics, apparel, footwear, and home items.
        </p>
      </div>

      {/* Control Bar: Search, Category Pills, and Sort */}
      <div className="space-y-4">
        {/* Search & Sort Row */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              id="catalog-search-input"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by title, description or category..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 placeholder:text-stone-400 transition-colors shadow-xs"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-3 text-stone-400 hover:text-stone-600 p-0.5 rounded-full"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-stone-500">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sort:</span>
            </div>
            <select
              id="catalog-sort-select"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 font-medium focus:outline-none focus:border-amber-600 shadow-xs cursor-pointer"
            >
              <option value="default">Featured / Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Pills Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-500 mr-1 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>
          {CATEGORIES.map((cat) => {
            const isSelected = currentCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                id={`cat-filter-${cat.toLowerCase()}`}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Active Filter Indicator */}
      <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
        <div>
          Showing <span className="font-semibold text-stone-900">{filteredProducts.length}</span>{' '}
          {filteredProducts.length === 1 ? 'product' : 'products'}
          {searchQuery && (
            <span>
              {' '}
              matching &quot;<span className="font-semibold text-stone-800">{searchQuery}</span>&quot;
            </span>
          )}
          {currentCategory !== 'All' && (
            <span>
              {' '}
              in <span className="font-semibold text-stone-800">{currentCategory}</span>
            </span>
          )}
        </div>

        {(searchQuery || currentCategory !== 'All' || sortBy !== 'default') && (
          <button
            onClick={handleResetFilters}
            className="text-amber-700 hover:underline font-medium hover:text-amber-800 transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Products Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div
          id="products-grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div
          id="no-products-found"
          className="py-16 text-center border border-dashed border-stone-300 rounded-2xl bg-stone-50/50 p-8 space-y-4 max-w-lg mx-auto"
        >
          <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center mx-auto text-stone-500">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-stone-800">No matching products found</h3>
            <p className="text-xs text-stone-500">
              We couldn&apos;t find anything matching your search criteria. Try adjusting your query or resetting your category filters.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
