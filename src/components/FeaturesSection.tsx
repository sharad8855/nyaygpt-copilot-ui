
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  Book,
  User
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "RTI & PIL Generator",
      description: "Generate Right to Information requests and Public Interest Litigations with AI assistance",
      features: ["Auto-fill templates", "Legal compliance check", "Multi-language support"],
      badge: "Most Popular",
      color: "trust"
    },
    {
      icon: Search,
      title: "Legal Research",
      description: "Search through millions of Indian judgments and legal precedents instantly",
      features: ["Supreme Court cases", "High Court judgments", "AI-powered summaries"],
      badge: "New",
      color: "navy"
    },
    {
      icon: Book,
      title: "Document Drafts",
      description: "Create legal documents like contracts, affidavits, and complaints",
      features: ["Professional templates", "Real-time editing", "Legal citations"],
      badge: "Pro",
      color: "trust"
    },
    {
      icon: User,
      title: "Legal Q&A",
      description: "Get instant answers to legal questions from our AI trained on Indian law",
      features: ["24/7 availability", "Context-aware responses", "Follow-up questions"],
      badge: "AI-Powered",
      color: "navy"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Powerful Legal Tools at Your Fingertips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to handle Indian legal workflows efficiently and accurately.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="animate-on-scroll hover-scale border-0 shadow-lg relative overflow-hidden">
              {feature.badge && (
                <Badge 
                  className={`absolute top-4 right-4 bg-${feature.color}-100 text-${feature.color}-700 border-${feature.color}-200`}
                >
                  {feature.badge}
                </Badge>
              )}
              
              <CardHeader>
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 bg-${feature.color}-500 rounded-full mr-3`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-500 text-sm mb-4">
            Trusted by 10,000+ legal professionals across India
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-medium">Delhi High Court Advocates</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-sm font-medium">Supreme Court Lawyers</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-sm font-medium">Law Students</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
