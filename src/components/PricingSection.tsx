
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for students and individuals",
      features: [
        "5 document generations/month",
        "Basic legal Q&A",
        "Hindi & English support",
        "Community support"
      ],
      limitations: [
        "Limited to basic templates",
        "No priority support"
      ],
      buttonText: "Get Started Free",
      popular: false,
      color: "gray"
    },
    {
      name: "Premium",
      price: "₹399",
      period: "per month",
      description: "For practicing lawyers and professionals",
      features: [
        "Unlimited document generations",
        "Advanced legal research",
        "Case law database access",
        "Priority AI responses",
        "Download as PDF/DOC",
        "WhatsApp integration",
        "Email support"
      ],
      limitations: [],
      buttonText: "Start 7-Day Free Trial",
      popular: true,
      color: "trust"
    },
    {
      name: "Enterprise",
      price: "₹4,999",
      period: "per year",
      description: "For law firms and organizations",
      features: [
        "Everything in Premium",
        "API access",
        "Custom templates",
        "Team collaboration",
        "Bulk document processing",
        "Advanced analytics",
        "Dedicated account manager",
        "Custom integrations"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      popular: false,
      color: "navy"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your legal practice. All plans include our core AI features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`animate-on-scroll hover-scale relative border-0 shadow-lg ${
                plan.popular ? 'ring-2 ring-trust-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-trust-600 text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-trust-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/login" className="block">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-trust-600 hover:bg-trust-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-600 mb-4">
            🔒 All plans include bank-level security and data protection
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
            <span>✓ 7-day free trial</span>
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
