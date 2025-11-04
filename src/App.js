import React, { useState } from 'react';
import { Search, Shield, MessageCircle, Palette, Handshake, X } from 'lucide-react';



const mockDesigners = [
  {
    id: 1,
    name: "Sarah Chen",
    specialty: "Minimalist Chic",
    styles: ["minimalist", "casual"],
    occasions: ["everyday", "work"],
    rating: 4.9,
    clients: 127,
    priceRange: "100$ - 200$",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    specialty: "Streetwear Expert",
    styles: ["streetwear", "bold"],
    occasions: ["casual", "party"],
    rating: 4.8,
    clients: 94,
    priceRange: "200$-250$",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    specialty: "Elegant & Formal",
    styles: ["elegant", "formal"],
    occasions: ["formal", "wedding"],
    rating: 5.0,
    clients: 156,
    priceRange: "750$-800$",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    id: 4,
    name: "David Kim",
    specialty: "Smart Casual",
    styles: ["casual", "business"],
    occasions: ["work", "everyday"],
    rating: 4.7,
    clients: 83,
    priceRange: "600$-750$",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    id: 5,
    name: "Priya Patel",
    specialty: "Boho & Festival",
    styles: ["boho", "creative"],
    occasions: ["party", "festival"],
    rating: 4.9,
    clients: 112,
    priceRange: "210$-240$",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    id: 6,
    name: "Alex Thompson",
    specialty: "Classic Timeless",
    styles: ["classic", "elegant"],
    occasions: ["formal", "work"],
    rating: 4.8,
    clients: 145,
    priceRange: "500$-650$",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    id: 7,
    name: "Jordan Lee",
    specialty: "Athleisure Pro",
    styles: ["athleisure", "casual"],
    occasions: ["everyday", "casual"],
    rating: 4.9,
    clients: 98,
    priceRange: "300$-450$",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan"
  },
  {
    id: 8,
    name: "Sofia Martinez",
    specialty: "Vintage Revival",
    styles: ["vintage", "creative"],
    occasions: ["party", "everyday"],
    rating: 4.7,
    clients: 76,
    priceRange: "250$-280$",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia"
  }
];

function App() {
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [matchedDesigners, setMatchedDesigners] = useState([]);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleFindDesigner = () => {
    setShowMatchModal(true);
    setMatchedDesigners([]);
    setSelectedStyle('');
    setSelectedProjectType('');
  };

  const handleMatch = () => {
    if (!selectedStyle || !selectedProjectType) {
      alert('Please select both style and occasion');
      return;
    }

    const matches = mockDesigners.filter(designer => 
      designer.styles.includes(selectedStyle) && 
      designer.occasions.includes(selectedProjectType)
    ).slice(0, 3);

    setMatchedDesigners(matches);
  };

  const closeModal = () => {
    setShowMatchModal(false);
    setMatchedDesigners([]);
    setSelectedStyle('');
    setSelectedProjectType('');
  };

  return (
    <div className="bg-white text-black min-h-screen" onClick={handleRefresh}>
      {/* Header */}
      <header className="w-full py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
            <div 
              className="text-lg sm:text-xl md:text-2xl text-black transition-transform duration-300 cursor-pointer hover:scale-105" 
              style={{
                fontSize: '2.5rem',
                letterSpacing: '-0.02em',
                textShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px',
                display: 'flex',
                alignItems: 'baseline',
                color: 'rgb(0, 182, 127)'
              }}
            >
              <span style={{ fontFamily: 'Pacifico, cursive', fontWeight: 100 }}>se</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1.7rem', letterSpacing: '-0.2em' }}>
                W<i style={{ fontSize: '1.7rem', fontFamily: 'Poppins, sans-serif', fontStyle: 'italic', letterSpacing: '0em' }}>N</i>
              </span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 410, letterSpacing: '-0.02em', fontSize: '2.2rem' }}>a.</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">How it works</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">For Designers</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">For Customers</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black transition-colors px-4 py-2">
              Sign In
            </button>
            <button className="bg-lime-accent text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight">
                Connect with 
                <span className="text-lime-accent font-medium"> talented designers</span>
                {' '}for your next outfit
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                A seamless platform where creativity meets opportunity. Find the perfect designer for your outfit or showcase your designs to customers worldwide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={handleFindDesigner}
                className="bg-lime-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition-colors"
              >
                I need a Designer
              </button>
              <button className="border border-gray-300 text-black px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition-colors">
                I am a Designer
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-lime-accent rounded-full flex items-center justify-center mx-auto">
                  <Handshake className="text-white" size={32} />
                </div>
                <p className="text-gray-500">Beautiful connections happen here</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Why choose Sewna?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make it simple for customers and designers to find each other and create amazing outfit together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 bg-lime-accent rounded-full flex items-center justify-center mx-auto">
                <Search className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium">Easy Discovery</h3>
              <p className="text-gray-600">
                Browse through curated portfolios and find designers that match your style and budget.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 bg-lime-accent rounded-full flex items-center justify-center mx-auto">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium">Secure Payments</h3>
              <p className="text-gray-600">
                Protected transactions with milestone-based payments ensure's security.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 bg-lime-accent rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium">Clear Communication</h3>
              <p className="text-gray-600">
                Built-in messaging and outfit management tools keep everyone on the same page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">How it works</h2>
            <p className="text-xl text-gray-600">
              Getting started is simple and straightforward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-medium text-center">For Customers</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Post your outfit inspiration</h4>
                    <p className="text-gray-600">Describe what you need and set your budget</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Review proposals</h4>
                    <p className="text-gray-600">Get proposals from qualified designers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Collaborate & deliver</h4>
                    <p className="text-gray-600">Work together to bring your outfit to life</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-medium text-center">For Designers</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Create your profile</h4>
                    <p className="text-gray-600">Showcase your portfolio and expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Find projects</h4>
                    <p className="text-gray-600">Browse and apply to customer proposals that interest you</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Deliver & get paid</h4>
                    <p className="text-gray-600">Complete outfit and receive secure payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of customers and designers who trust Sewna to bring their creative outfit to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center" onClick={(e) => e.stopPropagation()}>
            <button className="bg-lime-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition-colors">
              Post a Design
            </button>
            <button 
              onClick={handleFindDesigner}
              className="border border-gray-300 text-black px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition-colors"
            >
              Browse Designers
            </button>
          </div>
        </div>
      </section>

      {/* Designer Match Modal */}
      {showMatchModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-light">Find Your Perfect Designer</h2>
              <button 
                onClick={closeModal}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {matchedDesigners.length === 0 ? (
              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  Answer a few quick questions to get matched with designers that fit your needs.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">What style are you looking for?</label>
                    <select 
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-accent"
                    >
                      
                      <option value="">Select a style...</option>
                      <option value="minimalist">Minimalist & Clean</option>
                      <option value="casual">Casual & Comfortable</option>
                      <option value="streetwear">Streetwear & Urban</option>
                      <option value="bold">Bold & Statement</option>
                      <option value="elegant">Elegant & Sophisticated</option>
                      <option value="formal">Formal & Classic</option>
                      <option value="business">Business & Professional</option>
                      <option value="boho">Boho & Free-spirited</option>
                      <option value="creative">Creative & Artistic</option>
                      <option value="vintage">Vintage & Retro</option>
                      <option value="athleisure">Athleisure & Sporty</option>
                      <option value="classic">Classic & Timeless</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">What's the occasion?</label>
                    <select 
                      value={selectedProjectType}
                      onChange={(e) => setSelectedProjectType(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-accent"
                    >

                      <option value="">Select occasion...</option>
                      <option value="everyday">Everyday Wear</option>
                      <option value="work">Work & Office</option>
                      <option value="casual">Casual Outings</option>
                      <option value="party">Party & Night Out</option>
                      <option value="formal">Formal Events</option>
                      <option value="wedding">Weddings & Celebrations</option>
                      <option value="festival">Festivals & Concerts</option>
                      <option value="date">Date Night</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={handleMatch}
                  className="w-full bg-lime-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition-colors"
                >
                  Find My Matches
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-lime-accent bg-opacity-10 border border-lime-accent rounded-xl p-4">
                  <p className="text-lime-accent font-medium">
                    🎉 Great news! We found {matchedDesigners.length} designer{matchedDesigners.length > 1 ? 's' : ''} that match your needs!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matchedDesigners.map(designer => (
                    <div key={designer.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <img 
                          src={designer.image} 
                          alt={designer.name}
                          className="w-20 h-20 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{designer.name}</h3>
                          <p className="text-gray-600 text-sm">{designer.specialty}</p>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <span className="text-yellow-500">★</span>
                          <span className="font-medium">{designer.rating}</span>
                          <span>({designer.clients} Customers)</span>
                        </div>
                        <p className="font-semibold text-lime-accent">{designer.priceRange}</p>
                        <button className="w-full bg-lime-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setMatchedDesigners([])}
                  className="w-full border border-gray-300 text-black px-8 py-3 rounded-full font-medium hover:border-gray-400 transition-colors"
                >
                  Try Different Criteria
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;