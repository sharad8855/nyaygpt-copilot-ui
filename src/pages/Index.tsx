
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
  ArrowUp,
  Eye,
  Target,
  Scale,
  Globe,
  Users,
  Zap
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
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-trust-50"></div>
          <div className="absolute inset-0 legal-pattern opacity-5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-trust-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-navy-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll">
            <Badge variant="outline" className="mb-8 px-6 py-3 text-base font-semibold border-trust-200 text-trust-700 bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-trust-500 rounded-full animate-pulse"></div>
                <span>🇮🇳 Made for Indian Legal System</span>
              </div>
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text leading-tight">
              India's AI
              <br />
              <span className="typing-animation inline-block relative">
                Legal Copilot
                <div className="absolute -right-1 top-0 w-1 h-full bg-trust-600 animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Transform your legal workflow with AI-powered document drafting, case research, and legal guidance. 
              <span className="text-trust-600 font-semibold"> Built by legal experts, for legal professionals.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-to-r from-trust-600 to-trust-700 hover:from-trust-700 hover:to-trust-800 text-white px-12 py-6 text-xl font-semibold hover-scale shadow-2xl border-0 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative">Start Free Trial</span>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-2 border-navy-200 hover:border-navy-300 hover:bg-navy-50 font-semibold shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-trust-500 rounded-full"></div>
                  <span>Watch Demo</span>
                </div>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 text-base text-gray-500">
              <span className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <div className="w-3 h-3 bg-trust-500 rounded-full animate-pulse"></div>
                Free 7-day trial
              </span>
              <span className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <div className="w-3 h-3 bg-trust-500 rounded-full animate-pulse"></div>
                No setup required
              </span>
              <span className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <div className="w-3 h-3 bg-trust-500 rounded-full animate-pulse"></div>
                Hindi & English support
              </span>
            </div>
          </div>
        </div>
        
        {/* Enhanced floating scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-12 h-12 border-2 border-trust-400 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-lg">
            <ArrowDown className="w-5 h-5 text-trust-600" />
          </div>
        </div>
      </section>

      {/* Enhanced Quick Stats */}
      <section className="py-24 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="animate-on-scroll group">
              <div className="text-4xl md:text-6xl font-bold text-trust-400 mb-4 group-hover:scale-110 transition-transform">50K+</div>
              <div className="text-gray-300 text-lg font-medium">Documents Generated</div>
              <div className="w-16 h-1 bg-trust-400 mx-auto mt-3 rounded-full"></div>
            </div>
            <div className="animate-on-scroll group">
              <div className="text-4xl md:text-6xl font-bold text-trust-400 mb-4 group-hover:scale-110 transition-transform">2M+</div>
              <div className="text-gray-300 text-lg font-medium">Legal Queries Answered</div>
              <div className="w-16 h-1 bg-trust-400 mx-auto mt-3 rounded-full"></div>
            </div>
            <div className="animate-on-scroll group">
              <div className="text-4xl md:text-6xl font-bold text-trust-400 mb-4 group-hover:scale-110 transition-transform">95%</div>
              <div className="text-gray-300 text-lg font-medium">Accuracy Rate</div>
              <div className="w-16 h-1 bg-trust-400 mx-auto mt-3 rounded-full"></div>
            </div>
            <div className="animate-on-scroll group">
              <div className="text-4xl md:text-6xl font-bold text-trust-400 mb-4 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-300 text-lg font-medium">AI Assistance</div>
              <div className="w-16 h-1 bg-trust-400 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-trust-200 text-trust-700 bg-white shadow-md">
              Our Purpose
            </Badge>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Vision & Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Democratizing legal access and empowering justice through AI technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <Card className="animate-on-scroll hover-scale border-0 shadow-2xl bg-gradient-to-br from-white to-trust-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-trust-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <CardHeader className="relative z-10 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-trust-500 to-trust-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:rotate-12 transition-transform">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-navy-900 mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To become the leading AI-powered legal platform that makes quality legal services accessible 
                  to every Indian citizen, regardless of their economic background or geographical location.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-trust-500 rounded-full"></div>
                    <span className="text-gray-600">Democratize legal access across India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-trust-500 rounded-full"></div>
                    <span className="text-gray-600">Bridge the legal literacy gap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-trust-500 rounded-full"></div>
                    <span className="text-gray-600">Empower citizens with legal knowledge</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="animate-on-scroll hover-scale border-0 shadow-2xl bg-gradient-to-br from-white to-navy-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <CardHeader className="relative z-10 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:rotate-12 transition-transform">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-navy-900 mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To provide intelligent, accurate, and culturally-aware AI tools that simplify complex 
                  legal processes while maintaining the highest standards of compliance and ethics.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-navy-500 rounded-full"></div>
                    <span className="text-gray-600">Deliver accurate AI-powered legal solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-navy-500 rounded-full"></div>
                    <span className="text-gray-600">Support legal professionals with advanced tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-navy-500 rounded-full"></div>
                    <span className="text-gray-600">Maintain ethical AI practices in law</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mt-20 animate-on-scroll">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-trust-500 to-trust-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-navy-900">Justice</h4>
                <p className="text-gray-600">Ensuring fair and equal access to legal resources for all</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-navy-900">Innovation</h4>
                <p className="text-gray-600">Leveraging cutting-edge AI to solve complex legal challenges</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-trust-500 to-trust-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-navy-900">Trust</h4>
                <p className="text-gray-600">Building reliable AI systems that legal professionals can depend on</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Use Cases by Role */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-trust-200 text-trust-700 bg-white shadow-md">
              For Everyone
            </Badge>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Built for Every Legal Professional</h2>
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
                color: "trust",
                gradient: "from-trust-500 to-trust-600"
              },
              {
                icon: Book,
                title: "Law Students",
                description: "Study materials, mock cases, exam preparation",
                features: ["Legal concepts", "Case summaries", "Practice questions"],
                color: "navy",
                gradient: "from-navy-500 to-navy-600"
              },
              {
                icon: User,
                title: "Citizens",
                description: "RTI applications, consumer complaints, legal rights",
                features: ["RTI generator", "Legal document templates", "Rights awareness"],
                color: "trust",
                gradient: "from-trust-500 to-trust-600"
              },
              {
                icon: FileText,
                title: "IAS Aspirants",
                description: "Constitutional law, governance, policy analysis",
                features: ["Constitution study", "Policy research", "Current affairs"],
                color: "navy",
                gradient: "from-navy-500 to-navy-600"
              }
            ].map((role, index) => (
              <Card key={index} className="animate-on-scroll hover-scale border-0 shadow-xl bg-white relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${role.color}-100 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500`}></div>
                <CardHeader className="text-center relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform`}>
                    <role.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-navy-900">{role.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">{role.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className={`w-3 h-3 bg-${role.color}-500 rounded-full mr-4`}></div>
                        <span className="font-medium">{feature}</span>
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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-trust-200 text-trust-700 bg-gray-50 shadow-md">
              See It In Action
            </Badge>
            <h2 className="text-5xl font-bold mb-6 gradient-text">See NyayGPT in Action</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Watch how easy it is to generate legal documents and get expert guidance in under 30 seconds.
            </p>
            
            <div className="relative bg-gradient-to-br from-navy-100 via-white to-trust-100 rounded-3xl p-12 shadow-2xl">
              <div className="aspect-video bg-white rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-trust-50 to-navy-50 opacity-50"></div>
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-trust-500 to-trust-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[16px] border-r-0 border-b-[12px] border-t-[12px] border-l-white border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg font-medium">Interactive 30-second demo</p>
                  <Button size="lg" className="bg-gradient-to-r from-trust-600 to-trust-700 hover:from-trust-700 hover:to-trust-800 text-white px-8 py-4 text-lg font-semibold shadow-xl">
                    ▶ Play Demo
                  </Button>
                </div>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="text-3xl font-bold text-trust-600 mb-2 group-hover:scale-110 transition-transform">30 sec</div>
                  <div className="text-gray-600 font-medium">Average response time</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-trust-600 mb-2 group-hover:scale-110 transition-transform">1-click</div>
                  <div className="text-gray-600 font-medium">Document download</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-trust-600 mb-2 group-hover:scale-110 transition-transform">100%</div>
                  <div className="text-gray-600 font-medium">Legal compliance</div>
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

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Transform Your Legal Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of legal professionals already using NyayGPT to streamline their practice and serve clients better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-to-r from-trust-600 to-trust-700 hover:from-trust-700 hover:to-trust-800 text-white px-12 py-6 text-xl font-semibold hover-scale shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative">Start Free Trial</span>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-12 py-6 text-xl font-semibold shadow-xl">
                Talk to Sales
              </Button>
            </div>
            
            <p className="text-base text-gray-400 bg-navy-800/50 backdrop-blur-sm px-6 py-3 rounded-full inline-block">
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
