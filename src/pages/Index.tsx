
import { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Database, Zap, Shield, CheckCircle, MessageCircle, Target, Eye, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import FeatureCards from '@/components/FeatureCards';
import TestimonialSection from '@/components/TestimonialSection';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const whatsappMessage = "Hi! I'm interested in Accelerate's lead enrichment services and would like to learn more about the free trial.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white overflow-hidden">
      <AnimatedBackground />
      
      {/* Subtle Cursor Glow Effect */}
      <div 
        className="fixed pointer-events-none z-10 w-64 h-64 rounded-full opacity-10 bg-gradient-to-r from-blue-400 to-slate-400 blur-3xl transition-all duration-500"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      {/* Header */}
      <header className="relative z-20 border-b border-gray-800/50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-slate-400 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Accelerate</span>
                <p className="text-xs text-gray-400">Accelerate Your Business</p>
              </div>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 border border-blue-500/20"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center bg-gray-900/50 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-gray-700/50">
              <Star className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-gray-300">Trusted by 10,000+ businesses worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Everything you need to
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                sell, scale, and succeed
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with bulk lead enrichment. Get verified contact data for 500M+ profiles 
              and turn cold prospects into hot leads. We accelerate your business growth with precision data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl border border-blue-500/20"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-gray-400">
              No credit card required • Free trial available
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500M+", label: "Verified Contacts" },
              { number: "300%", label: "Pipeline Growth" },
              { number: "95%", label: "Data Accuracy" },
              { number: "10K+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="relative z-10 py-8 border-y border-gray-800/50">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center text-gray-300">
              <Shield className="w-5 h-5 mr-2 text-blue-400" />
              <span className="font-semibold">Secure and compliant</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-700"></div>
            <div className="text-gray-300">
              <span className="font-semibold">Coverage and quality you can count on</span>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Grow, Renew and <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">Expand Customers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Drive revenue by expanding into new accounts and deepening relationships with current accounts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: "Reveal Account Insights",
                  description: "Use AI to deliver tailored, actionable account intelligence.",
                  gradient: "from-blue-500 to-slate-500"
                },
                {
                  icon: Target,
                  title: "Spot Ideal Buyers",
                  description: "Zero in on new and multithread existing accounts.",
                  gradient: "from-slate-500 to-gray-500"
                },
                {
                  icon: TrendingUp,
                  title: "Simplify Deal Progression",
                  description: "Accelerate deals with frictionless processes.",
                  gradient: "from-gray-500 to-blue-500"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-gray-900/30 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureCards />

      {/* Data Foundation Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              A data foundation <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">you can build on</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We gather public data from the web, our proprietary data, and the power of LLMs to convert 
              unstructured information into precise and standardized data sets.
            </p>
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8">
              <p className="text-lg text-gray-200">
                Get access to clean, precise, and reliable data that your B2B team needs to go-to-market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-gray-900/60 to-blue-900/30 backdrop-blur-md border border-gray-700/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">accelerate your business?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our lead enrichment service. 
              Start your free trial today and see the difference quality data makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl border border-blue-500/20"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Get Free Trial via WhatsApp
              </Button>
            </div>
            
            <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                Free trial available
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                GDPR compliant
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-400" />
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-slate-400 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Accelerate</span>
                <p className="text-xs text-gray-500">Accelerate Your Business</p>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 Accelerate. All rights reserved. Transform leads into revenue.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
