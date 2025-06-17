
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Advocate Priya Sharma",
      role: "Senior Advocate, Delhi High Court",
      content: "NyayGPT has revolutionized how I prepare RTI applications for my clients. What used to take hours now takes minutes, and the accuracy is phenomenal.",
      rating: 5,
      verified: true,
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Law Student, NLSIU Bangalore",
      content: "As a law student, this tool has been invaluable for understanding complex cases and preparing for exams. The AI explanations are clear and comprehensive.",
      rating: 5,
      verified: true,
      avatar: "RK"
    },
    {
      name: "Dr. Meera Patel",
      role: "Consumer Rights Activist",
      content: "Finally, a tool that helps common citizens navigate the legal system. I've successfully filed multiple consumer complaints using NyayGPT's templates.",
      rating: 5,
      verified: false,
      avatar: "MP"
    },
    {
      name: "Advocate Arjun Singh",
      role: "Corporate Lawyer, Mumbai",
      content: "The case research feature is incredible. I can find relevant precedents in seconds rather than spending hours in the library.",
      rating: 5,
      verified: true,
      avatar: "AS"
    }
  ];

  return (
    <section className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Trusted by Legal Professionals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what lawyers, students, and citizens are saying about NyayGPT.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-on-scroll hover-scale border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-trust-400 to-navy-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Badge variant="outline" className="text-xs border-trust-200 text-trust-700">
                          ✓ Verified Advocate
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{testimonial.role}</p>
                    <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                    <div className="flex items-center mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-trust-600 mb-1">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-trust-600 mb-1">2,500+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-trust-600 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Documents Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
