
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from '@/contexts/AuthContext';
import { 
  FileText, 
  Search, 
  User,
  Book,
  Send,
  Paperclip,
  Download,
  Share,
  Copy,
  Menu
} from 'lucide-react';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI legal assistant. How can I help you today? You can ask me to draft documents, research cases, or answer legal questions.',
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const quickPrompts = [
    "Draft RTI application for property documents",
    "Find Supreme Court cases on Article 21",
    "Generate consumer complaint template",
    "Explain IPC Section 420 with examples",
    "Create affidavit for address proof",
    "Research defamation laws in India"
  ];

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai' as const,
        content: generateAIResponse(currentMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (query: string) => {
    if (query.toLowerCase().includes('rti')) {
      return `Here's a draft RTI application based on your request:

**RIGHT TO INFORMATION APPLICATION**

To: The Public Information Officer
[Department Name]
[Address]

Subject: Request for information under Right to Information Act, 2005

Dear Sir/Madam,

I, [Your Name], a citizen of India, hereby request the following information under the Right to Information Act, 2005:

1. [Specific information requested]
2. [Additional details if needed]

I am ready to pay the prescribed fee. Please provide the information within the stipulated time frame of 30 days.

Yours faithfully,
[Your Name]
[Date]

**Legal Compliance Check:** ✅ This application meets all RTI Act requirements.

Would you like me to customize this further or add specific details?`;
    }

    return `I understand you're looking for legal assistance regarding: "${query}"

Based on Indian law, here's what I can help you with:

🔍 **Legal Analysis:** I'll research relevant statutes and case law
📄 **Document Drafting:** I can create legally compliant documents
⚖️ **Case References:** I'll find relevant Supreme Court and High Court judgments
📋 **Step-by-step Guidance:** I'll provide clear, actionable advice

What specific aspect would you like me to focus on? I can provide more detailed guidance once I understand your exact requirements.`;
  };

  const handleQuickPrompt = (prompt: string) => {
    setCurrentMessage(prompt);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-trust-600 to-navy-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">न्</span>
              </div>
              <span className="text-xl font-bold gradient-text">NyayGPT</span>
            </Link>
            
            <Badge variant="outline" className="border-trust-200 text-trust-700">
              {user.plan === 'free' ? 'Free Plan' : 'Premium Plan'}
            </Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Hindi | English
            </Button>
            <Link to="/profile">
              <div className="w-8 h-8 bg-trust-100 rounded-full flex items-center justify-center">
                <span className="text-trust-700 font-medium text-sm">
                  {user.name?.[0]?.toUpperCase()}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <nav className="space-y-2">
            <Button
              variant={activeTab === 'chat' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('chat')}
            >
              <FileText className="w-4 h-4 mr-2" />
              AI Chat
            </Button>
            
            <Link to="/documents">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Document Generator
              </Button>
            </Link>
            
            <Link to="/cases">
              <Button variant="ghost" className="w-full justify-start">
                <Search className="w-4 h-4 mr-2" />
                Case Finder
              </Button>
            </Link>
            
            <Button variant="ghost" className="w-full justify-start">
              <Book className="w-4 h-4 mr-2" />
              My Drafts
            </Button>
            
            <Button variant="ghost" className="w-full justify-start">
              <User className="w-4 h-4 mr-2" />
              Uploads
            </Button>
          </nav>

          {/* Usage Stats */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-sm mb-2">Usage This Month</h3>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Documents</span>
                <span>{user.plan === 'free' ? '3/5' : '47/∞'}</span>
              </div>
              <div className="flex justify-between">
                <span>AI Queries</span>
                <span>{user.plan === 'free' ? '15/50' : '234/∞'}</span>
              </div>
            </div>
            
            {user.plan === 'free' && (
              <Button size="sm" className="w-full mt-3 bg-trust-600 hover:bg-trust-700">
                Upgrade to Premium
              </Button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {activeTab === 'chat' && (
            <>
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-3xl rounded-lg p-4 ${
                        message.type === 'user'
                          ? 'bg-trust-600 text-white'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{message.content}</div>
                      
                      {message.type === 'ai' && (
                        <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-gray-100">
                          <Button size="sm" variant="ghost" className="h-8 px-2">
                            <Copy className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 px-2">
                            <Download className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 px-2">
                            <Share className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <div className="ai-thinking"></div>
                        <div className="ai-thinking"></div>
                        <div className="ai-thinking"></div>
                        <span className="text-gray-500 text-sm ml-2">NyayGPT is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Prompts */}
              {messages.length === 1 && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">Quick prompts to get started:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {quickPrompts.map((prompt, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-left h-auto p-3 text-xs hover:bg-trust-50 hover:border-trust-200"
                        onClick={() => handleQuickPrompt(prompt)}
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message Input */}
              <div className="border-t border-gray-200 p-6">
                <div className="flex items-end space-x-4">
                  <div className="flex-1">
                    <Textarea
                      placeholder="Ask me anything about Indian law, or request document drafting..."
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      className="min-h-[60px] resize-none"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <div className="flex items-center justify-between mt-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="w-4 h-4 mr-1" />
                        Upload PDF
                      </Button>
                      <p className="text-xs text-gray-500">
                        Press Enter to send, Shift+Enter for new line
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleSendMessage}
                    disabled={!currentMessage.trim() || isTyping}
                    className="bg-trust-600 hover:bg-trust-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
