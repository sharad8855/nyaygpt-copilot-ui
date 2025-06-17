
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  User, 
  Book,
  ArrowDown,
  ArrowUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturesSection from '@/components/FeaturesSection';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 legal-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-50 via-white to-trust-50"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-trust-200 text-trust-700">
              🇮🇳 Made for Indian Legal System
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              India's AI
              <br />
              <span className="typing-animation inline-block">Legal Copilot</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Draft RTI applications, research legal cases, generate PILs, and get instant legal guidance. 
              Built specifically for Indian law by legal experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/login">
                <Button size="lg" className="bg-trust-600 hover:bg-trust-700 text-white px-8 py-4 text-lg font-semibold hover-scale">
                  Try Free - No Credit Card
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-navy-200 hover:border-navy-300">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-trust-500 rounded-full"></div>
                Free 7-day trial
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-trust-500 rounded-full"></div>
                No setup required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-trust-500 rounded-full"></div>
                Hindi & English support
              </span>
            </div>
          </div>
        </div>
        
        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-on-scroll">
              <div className="text-3xl md:text-4xl font-bold text-trust-400 mb-2">50K+</div>
              <div className="text-gray-300">Documents Generated</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-3xl md:text-4xl font-bold text-trust-400 mb-2">2M+</div>
              <div className="text-gray-300">Legal Queries Answered</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-3xl md:text-4xl font-bold text-trust-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-3xl md:text-4xl font-bold text-trust-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Use Cases by Role */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Built for Every Legal Professional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a lawyer, student, citizen, or government official, NyayGPT adapts to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: User,
                title: "Advocates",
                description: "Draft contracts, research precedents, analyze cases",
                features: ["Case research", "Document drafting", "Client consultation notes"],
                color: "trust"
              },
              {
                icon: Book,
                title: "Law Students",
                description: "Study materials, mock cases, exam preparation",
                features: ["Legal concepts", "Case summaries", "Practice questions"],
                color: "navy"
              },
              {
                icon: User,
                title: "Citizens",
                description: "RTI applications, consumer complaints, legal rights",
                features: ["RTI generator", "Legal document templates", "Rights awareness"],
                color: "trust"
              },
              {
                icon: FileText,
                title: "IAS Aspirants",
                description: "Constitutional law, governance, policy analysis",
                features: ["Constitution study", "Policy research", "Current affairs"],
                color: "navy"
              }
            ].map((role, index) => (
              <Card key={index} className="animate-on-scroll hover-scale border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${role.color}-100 flex items-center justify-center`}>
                    <role.icon className={`w-8 h-8 text-${role.color}-600`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-${role.color}-500 rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 gradient-text">See NyayGPT in Action</h2>
            <p className="text-xl text-gray-600 mb-8">
              Watch how easy it is to generate legal documents and get expert guidance in under 30 seconds.
            </p>
            
            <div className="relative bg-gradient-to-br from-navy-100 to-trust-100 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-white rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-trust-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[12px] border-r-0 border-b-[8px] border-t-[8px] border-l-trust-600 border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600 mb-4">30-second demo video</p>
                  <Button className="bg-trust-600 hover:bg-trust-700">
                    ▶ Play Demo
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-trust-600">30 sec</div>
                  <div className="text-sm text-gray-600">Average response time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-trust-600">1-click</div>
                  <div className="text-sm text-gray-600">Document download</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-trust-600">100%</div>
                  <div className="text-sm text-gray-600">Legal compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Legal Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of legal professionals already using NyayGPT to streamline their practice and serve clients better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-trust-600 hover:bg-trust-700 text-white px-8 py-4 text-lg font-semibold hover-scale">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg">
                Talk to Sales
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              ⚖️ This tool is not a substitute for licensed legal advice.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
