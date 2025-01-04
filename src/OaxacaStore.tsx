import { useState } from 'react';
import { ShoppingCart, Globe, Heart, Info } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  longDescription: string;
  price: string;
  category: string;
  image: JSX.Element;
}

interface ProductCardProps {
  product: Product;
  language: 'es' | 'en';
  isFavorite: boolean;
  onToggleFavorite: (productName: string) => void;
}
const ProductCard = ({ product, language, isFavorite, onToggleFavorite }: ProductCardProps) => {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
        <div className="h-48 bg-orange-50 flex items-center justify-center p-4">
          {product.image}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-red-900">{product.name}</h3>
            <button
              onClick={() => onToggleFavorite(product.name)}
              className="p-1 hover:bg-red-50 rounded-full"
            >
              <Heart
                className={`w-6 h-6 ${
                  isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                }`}
              />
            </button>
          </div>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-bold text-red-900 mt-2">{product.price}</p>
          
          {showDetails && (
            <div className="mt-4 p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-700">{product.longDescription}</p>
            </div>
          )}
          
          <div className="mt-4 flex gap-2">
            <button className="flex-1 bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-800 flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              {language === 'es' ? 'Agregar al Carrito' : 'Add to Cart'}
            </button>
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="px-4 py-2 border border-red-900 text-red-900 rounded-lg hover:bg-red-50 flex items-center justify-center"
            >
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  const content = {
    es: {
      title: 'Sabores de Oaxaca',
      subtitle: 'Auténticos productos oaxaqueños en Los Ángeles',
      categories: ['Gastronomía', 'Artesanías', 'Bebidas', 'Textiles'],
      all: 'Todos',
      products: [
        {
          name: 'Chapulines',
          description: 'Chapulines tostados con chile y limón',
          longDescription: 'Nuestros chapulines son preparados de manera tradicional, tostados con ajo, limón y chile. Un bocadillo rico en proteína y sabor auténtico de Oaxaca.',
          price: '$8.99',
          category: 'Gastronomía',
          image: (
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="#8D4925"/>
              <path d="M70 80c5-8 20-8 25 0M120 80c5-8 20-8 25 0" stroke="#2E1810" strokeWidth="3" fill="none"/>
              <path d="M70 100c15 20 60 20 75 0" stroke="#2E1810" strokeWidth="3" fill="none"/>
              <circle cx="60" cy="70" r="3" fill="#D35400"/>
              <circle cx="140" cy="70" r="3" fill="#D35400"/>
            </svg>
          )
        },
        {
          name: 'Quesillo',
          description: 'Queso Oaxaca tradicional (por libra)',
          longDescription: 'Quesillo artesanal elaborado con leche 100% de vaca, siguiendo las técnicas tradicionales de Oaxaca.',
          price: '$12.99',
          category: 'Gastronomía',
          image: (
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="#FFF8E1"/>
              <path d="M60 100c20-20 60-20 80 0" stroke="#FFECB3" strokeWidth="12" fill="none"/>
              <path d="M70 80c15-15 45-15 60 0" stroke="#FFECB3" strokeWidth="12" fill="none"/>
              <path d="M50 100c25-30 75-30 100 0" stroke="#FFE082" strokeWidth="2" fill="none"/>
            </svg>
          )
        },
        {
          name: 'Alebrije Grande',
          description: 'Figura decorativa tallada a mano',
          longDescription: 'Alebrije tallado a mano por artesanos oaxaqueños. Cada pieza es única, con colores vibrantes.',
          price: '$89.99',
          category: 'Artesanías',
          image: (
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="#FF5722"/>
              <path d="M60 120c10-40 60-40 80 0" fill="#E64A19"/>
              <path d="M70 90l30-20l30 20" fill="#FFA000"/>
              <circle cx="85" cy="85" r="5" fill="#FFC107"/>
              <circle cx="115" cy="85" r="5" fill="#FFC107"/>
            </svg>
          )
        },
        {
          name: 'Mezcal Artesanal',
          description: 'Mezcal espadín artesanal (750ml)',
          longDescription: 'Mezcal artesanal elaborado con agave espadín, siguiendo métodos tradicionales.',
          price: '$45.99',
          category: 'Bebidas',
          image: (
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="#2E7D32"/>
              <path d="M85 50h30v80h-30z" fill="#1B5E20"/>
              <path d="M90 40h20v10h-20z" fill="#1B5E20"/>
              <rect x="90" y="70" width="20" height="30" fill="#FFF8E1"/>
            </svg>
          )
        }
      ]
    },
    en: {
        title: 'Flavors of Oaxaca',
        subtitle: 'Authentic Oaxacan products in Los Angeles',
        categories: ['Food', 'Crafts', 'Beverages', 'Textiles'],
        all: 'All',
        products: [
          {
            name: 'Grasshoppers',
            description: 'Toasted grasshoppers with chile and lime',
            longDescription: 'Our grasshoppers are traditionally prepared, toasted with garlic, lime, and chile.',
            price: '$8.99',
            category: 'Food',
            image: (
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="#8D4925"/>
                <path d="M70 80c5-8 20-8 25 0M120 80c5-8 20-8 25 0" stroke="#2E1810" strokeWidth="3" fill="none"/>
                <path d="M70 100c15 20 60 20 75 0" stroke="#2E1810" strokeWidth="3" fill="none"/>
                <circle cx="60" cy="70" r="3" fill="#D35400"/>
                <circle cx="140" cy="70" r="3" fill="#D35400"/>
              </svg>
            )
          },
          {
            name: 'Oaxaca Cheese',
            description: 'Traditional Oaxaca string cheese (per pound)',
            longDescription: 'Artisanal string cheese made with 100% cow\'s milk, following traditional techniques.',
            price: '$12.99',
            category: 'Food',
            image: (
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="#FFF8E1"/>
                <path d="M60 100c20-20 60-20 80 0" stroke="#FFECB3" strokeWidth="12" fill="none"/>
                <path d="M70 80c15-15 45-15 60 0" stroke="#FFECB3" strokeWidth="12" fill="none"/>
                <path d="M50 100c25-30 75-30 100 0" stroke="#FFE082" strokeWidth="2" fill="none"/>
              </svg>
            )
          },
          {
            name: 'Large Alebrije',
            description: 'Hand-carved decorative figure',
            longDescription: 'Alebrije hand-carved by Oaxacan artisans. Each piece is unique, with vibrant colors.',
            price: '$89.99',
            category: 'Crafts',
            image: (
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="#FF5722"/>
                <path d="M60 120c10-40 60-40 80 0" fill="#E64A19"/>
                <path d="M70 90l30-20l30 20" fill="#FFA000"/>
                <circle cx="85" cy="85" r="5" fill="#FFC107"/>
                <circle cx="115" cy="85" r="5" fill="#FFC107"/>
              </svg>
            )
          },
          {
            name: 'Artisanal Mezcal',
            description: 'Espadín artisanal mezcal (750ml)',
            longDescription: 'Artisanal mezcal made with espadín agave, following traditional methods.',
            price: '$45.99',
            category: 'Beverages',
            image: (
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="#2E7D32"/>
                <path d="M85 50h30v80h-30z" fill="#1B5E20"/>
                <path d="M90 40h20v10h-20z" fill="#1B5E20"/>
                <rect x="90" y="70" width="20" height="30" fill="#FFF8E1"/>
              </svg>
            )
          }
        ]
      }
    } as const;
    const OaxacaStore = () => {
        const [language, setLanguage] = useState<'es' | 'en'>('es');
        const [selectedCategory, setSelectedCategory] = useState('all');
        const [favorites, setFavorites] = useState<string[]>([]);
      
        const text = content[language];
      
        const toggleFavorite = (productName: string) => {
          setFavorites(prev => 
            prev.includes(productName)
              ? prev.filter(name => name !== productName)
              : [...prev, productName]
          );
        };
      
        const filteredProducts = selectedCategory === 'all'
          ? text.products
          : text.products.filter(product => product.category === selectedCategory);
      
        return (
          <div className="min-h-screen bg-orange-50">
            <header className="bg-red-900 text-white p-6">
              <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">{text.title}</h1>
                <button
                  onClick={() => setLanguage(l => l === 'es' ? 'en' : 'es')}
                  className="flex items-center gap-2 px-4 py-2 bg-red-800 rounded-lg hover:bg-red-700"
                >
                  <Globe className="w-5 h-5" />
                  {language === 'es' ? 'English' : 'Español'}
                </button>
              </div>
              <p className="container mx-auto mt-2 text-lg">{text.subtitle}</p>
            </header>
      
            <main className="container mx-auto p-6">
              <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                    selectedCategory === 'all'
                      ? 'bg-red-900 text-white'
                      : 'bg-white text-red-900 border border-red-900'
                  }`}
                >
                  {text.all}
                </button>
                {text.categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-red-900 text-white'
                        : 'bg-white text-red-900 border border-red-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
      
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.name}
                    product={product}
                    language={language}
                    isFavorite={favorites.includes(product.name)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </main>
          </div>
        );
      };
      
      export default OaxacaStore;