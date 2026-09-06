import { Product } from '../types';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviewsCount: 324,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    description: 'Immerse yourself in pure studio-grade acoustics. Engineered with hybrid active noise cancellation, plush memory foam earcups, and up to 40 hours of playtime on a single fast charge.',
    features: [
      'Custom 40mm dynamic acoustic drivers',
      'Dual active noise cancellation microphones',
      '40-hour battery life with USB-C quick charge',
      'Foldable compact design with travel hardcase'
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-2',
    name: 'Smart Fitness & Health Watch',
    category: 'Electronics',
    price: 149.5,
    originalPrice: 179.0,
    rating: 4.7,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    description: 'Track workouts, heart rate rhythm, sleep phases, and notifications seamlessly. Features a high-contrast AMOLED touch display encased in aerospace aluminum.',
    features: [
      'Always-on 1.4-inch vibrant AMOLED display',
      'Comprehensive 24/7 heart & SpO2 health tracking',
      '50m water resistance rating (5 ATM)',
      'Up to 10 days of continuous battery life'
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-3',
    name: 'Custom Mechanical Gaming Keyboard',
    category: 'Electronics',
    price: 119.0,
    rating: 4.9,
    reviewsCount: 241,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
    description: 'Tactile, responsive, and crafted for maximum typing comfort. Features hot-swappable mechanical switches, doubleshot PBT keycaps, and custom RGB lighting.',
    features: [
      'Hot-swappable tactile mechanical switches',
      'Durable textured doubleshot PBT keycaps',
      'Sound-dampening silicone internal padding',
      'Detachable braided Type-C cable connection'
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-4',
    name: 'Compact Waterproof Bluetooth Speaker',
    category: 'Electronics',
    price: 64.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviewsCount: 115,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80',
    description: 'Take vibrant, room-filling sound anywhere you travel. Built with IPX7 waterproofing, 360-degree bass projection, and a rugged outdoor lanyard loop.',
    features: [
      '360-degree room-filling acoustic profile',
      'IPX7 certified waterproof and dustproof',
      '14 hours of continuous playback',
      'Built-in microphone for speakerphone calls'
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-5',
    name: 'Vintage Distressed Denim Jacket',
    category: 'Fashion',
    price: 89.0,
    originalPrice: 110.0,
    rating: 4.6,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
    description: 'A timeless wardrobe essential crafted from 100% durable cotton denim. Styled with classic brass button hardware, chest flap pockets, and an easy relaxed fit.',
    features: [
      '100% heavyweight ringspun cotton denim',
      'Reinforced seams for lasting durability',
      'Twin button-flap chest utility pockets',
      'Pre-washed for soft broken-in comfort'
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-6',
    name: 'Organic Cotton Crewneck Sweater',
    category: 'Fashion',
    price: 59.99,
    rating: 4.7,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
    description: 'Ultra-soft everyday sweater knitted with certified organic cotton yarn. Breathable, warm, and tailored with ribbed cuffs and hem for refined casual layering.',
    features: [
      '100% certified organic combed cotton',
      'Breathable mid-weight knit construction',
      'Ribbed collar, cuffs, and hemline',
      'Machine washable & shrink-resistant'
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-7',
    name: 'Breezy Linen Button-Down Shirt',
    category: 'Fashion',
    price: 49.5,
    originalPrice: 65.0,
    rating: 4.5,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=80',
    description: 'Stay cool in warmer climates with naturally textured pure linen. Designed with a clean spread collar, mother-of-pearl style buttons, and a relaxed silhouette.',
    features: [
      'Pure French flax natural linen fabric',
      'Naturally temperature regulating & airy',
      'Classic spread collar & chest pocket',
      'Tailored curved hem for tuck or untuck'
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-8',
    name: 'Pro Performance Running Sneakers',
    category: 'Shoes',
    price: 135.0,
    originalPrice: 160.0,
    rating: 4.8,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
    description: 'Engineered for distance and everyday agility. Powered by responsive cloud foam midsoles and a featherlight engineered mesh upper for maximum breathability.',
    features: [
      'High-rebound energetic foam midsole cushioning',
      'Engineered multi-zone breathable mesh upper',
      'High-abrasion zoned rubber outsole traction',
      'Reflective rear details for low-light safety'
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-9',
    name: 'Minimalist White Leather Trainers',
    category: 'Shoes',
    price: 110.0,
    rating: 4.7,
    reviewsCount: 154,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80',
    description: 'Handcrafted low-top trainers made with premium full-grain Italian leather. Features cushioned arch support and an understated silhouette that pairs with any attire.',
    features: [
      'Supple full-grain calfskin leather upper',
      'Waxed cotton laces & stitched rubber cupsole',
      'Ergonomic memory foam footbed lining',
      'Minimalist stitch-free toe cap profile'
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-10',
    name: 'All-Terrain Waterproof Hiking Boots',
    category: 'Shoes',
    price: 159.0,
    originalPrice: 189.0,
    rating: 4.9,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80',
    description: 'Conquer rugged trails and mountain terrain with high-traction lugged soles, reinforced rubber toe bumpers, and waterproof membrane sealing.',
    features: [
      'Breathable waterproof membrane construction',
      'Vibram style deep lugged rubber outsoles',
      'Padded ankle collar with quick-lace speed hooks',
      'Shock-absorbing dual-density EVA midsoles'
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-11',
    name: 'Slim RFID-Blocking Leather Wallet',
    category: 'Accessories',
    price: 38.0,
    originalPrice: 48.0,
    rating: 4.8,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80',
    description: 'Eliminate pocket bulk with this precision-crafted cardholder. Holds up to 10 cards and folded bills with integrated anti-theft RFID protection.',
    features: [
      'Top-grain vegetable-tanned genuine leather',
      'Certified RFID-blocking protective lining',
      'Quick-draw front slot for your daily card',
      'Ultra-slim 8mm profile when loaded'
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-12',
    name: 'Classic Polarized Wayfarer Sunglasses',
    category: 'Accessories',
    price: 54.0,
    rating: 4.6,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80',
    description: 'Shield your eyes with 100% UV400 polarized optical lenses in a lightweight acetate frame with reinforced barrel hinges and scratch-resistant coating.',
    features: [
      'UV400 Category 3 glare-reducing polarized lenses',
      'Durable handcrafted Italian cellulose acetate',
      'Sturdy 5-barrel stainless steel hinges',
      'Includes microfiber cleaning cloth & hard case'
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-13',
    name: 'Commuter Canvas Laptop Backpack',
    category: 'Accessories',
    price: 79.99,
    originalPrice: 99.0,
    rating: 4.8,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    description: 'Designed for modern professionals and travelers. Features a padded 16-inch laptop chamber, water-resistant waxed canvas shell, and ergonomic airflow straps.',
    features: [
      'Water-repellent 16oz heavyweight waxed canvas',
      'Dedicated padded sleeve fits up to 16" laptops',
      'Secret passport anti-theft zipper pocket on back',
      'Luggage pass-through strap for rolling suitcases'
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-14',
    name: 'Artisan Ceramic Pour-Over Coffee Set',
    category: 'Home',
    price: 44.0,
    rating: 4.9,
    reviewsCount: 178,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    description: 'Brew clean, aromatic specialty coffee at home. Handcrafted ceramic dripper with spiral interior ribs paired with a heat-resistant borosilicate glass carafe.',
    features: [
      'Hand-glazed heat-retentive ceramic dripper',
      '600ml borosilicate glass server with measurement markers',
      'Optimized spiral flow channels for even extraction',
      'Compatible with standard V-cone paper filters'
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-15',
    name: 'Minimalist Dimmable LED Desk Lamp',
    category: 'Home',
    price: 68.5,
    originalPrice: 85.0,
    rating: 4.7,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
    description: 'Elevate your workspace with flicker-free warm ambient illumination. Built with touch-sensitive step-less dimming and an adjustable gooseneck arm.',
    features: [
      'Eye-care flicker-free LED light panel (CRI > 90)',
      '3 color temperatures (3000K, 4500K, 6000K)',
      'Smooth touch dimmer with memory brightness recall',
      'Weighted non-slip anodized aluminum base'
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-16',
    name: 'Hand-Poured Soy Wax Scented Candle',
    category: 'Home',
    price: 26.0,
    rating: 4.8,
    reviewsCount: 133,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
    description: 'Transform any room with subtle notes of cedarwood, amber, and crushed sage. Poured with 100% natural American soy wax and an organic crackling wood wick.',
    features: [
      '100% natural biodegradable clean-burning soy wax',
      'Infused with premium botanical essential oils',
      'Natural crackling wooden wick with 55-hour burn time',
      'Reusable amber glass apothecary jar with metal lid'
    ],
    inStock: true,
    isFeatured: false
  }
];

export const CATEGORIES = ['All', 'Electronics', 'Fashion', 'Shoes', 'Accessories', 'Home'] as const;
