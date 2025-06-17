import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  Menu,
  Bot,
  MessageSquare,
  Sparkles,
  Clock,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Mic,
  Image,
  MoreVertical
} from 'lucide-react';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Namaste! I\'m your AI legal assistant. How can I help you today? You can ask me to draft documents, research cases, or answer legal questions.',
      timestamp: new Date(),
      isWelcome: true
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickPrompts = [
    { text: "Draft RTI application for property documents", icon: FileText, category: "RTI" },
    { text: "Find Supreme Court cases on Article 21", icon: Search, category: "Research" },
    { text: "Generate consumer complaint template", icon: FileText, category: "Consumer" },
    { text: "Explain IPC Section 420 with examples", icon: Book, category: "Criminal" },
    { text: "Create affidavit for address proof", icon: FileText, category: "Civil" },
    { text: "Research defamation laws in India", icon: Search, category: "Research" }
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
    setShowSuggestions(false);

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
    setShowSuggestions(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-trust-600 to-navy-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">न्</span>
              </div>
              <span className="text-2xl font-bold gradient-text">NyayGPT</span>
            </Link>
            
            <Badge variant="outline" className="border-trust-200 text-trust-700 bg-trust-50 px-3 py-1 shadow-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              {user.plan === 'free' ? 'Free Plan' : 'Premium Plan'}
            </Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              🇮🇳 Hindi | English
            </Button>
            <Link to="/profile">
              <Avatar className="w-10 h-10 ring-2 ring-trust-200 hover:ring-trust-300 transition-all">
                <AvatarFallback className="bg-gradient-to-br from-trust-100 to-trust-200 text-trust-700 font-semibold">
                  {user.name?.[0]?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Enhanced Sidebar */}
        <div className="w-72 bg-white/70 backdrop-blur-sm border-r border-gray-200/50 p-6">
          <nav className="space-y-3">
            <Button
              variant={activeTab === 'chat' ? 'default' : 'ghost'}
              className={`w-full justify-start text-left h-12 ${
                activeTab === 'chat' 
                  ? 'bg-gradient-to-r from-trust-600 to-trust-700 text-white shadow-lg' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('chat')}
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              AI Legal Chat
            </Button>
            
            <Link to="/documents">
              <Button variant="ghost" className="w-full justify-start h-12 hover:bg-gray-100">
                <FileText className="w-5 h-5 mr-3" />
                Document Generator
              </Button>
            </Link>
            
            <Link to="/cases">
              <Button variant="ghost" className="w-full justify-start h-12 hover:bg-gray-100">
                <Search className="w-5 h-5 mr-3" />
                Case Finder
              </Button>
            </Link>
            
            <Button variant="ghost" className="w-full justify-start h-12 hover:bg-gray-100">
              <Book className="w-5 h-5 mr-3" />
              My Drafts
            </Button>
            
            <Button variant="ghost" className="w-full justify-start h-12 hover:bg-gray-100">
              <User className="w-5 h-5 mr-3" />
              Uploads
            </Button>
          </nav>

          {/* Enhanced Usage Stats */}
          <Card className="mt-8 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center">
                <Sparkles className="w-5 h-5 text-trust-600 mr-2" />
                Usage This Month
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Documents</span>
                  <Badge variant="secondary" className="text-xs">
                    {user.plan === 'free' ? '3/5' : '47/∞'}
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-trust-600 h-2 rounded-full" style={{width: user.plan === 'free' ? '60%' : '100%'}}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">AI Queries</span>
                  <Badge variant="secondary" className="text-xs">
                    {user.plan === 'free' ? '15/50' : '234/∞'}
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-navy-600 h-2 rounded-full" style={{width: user.plan === 'free' ? '30%' : '100%'}}></div>
                </div>
              </div>
            </CardContent>
            
            {user.plan === 'free' && (
              <div className="p-4 pt-0">
                <Button size="sm" className="w-full bg-gradient-to-r from-trust-600 to-trust-700 hover:from-trust-700 hover:to-trust-800 shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Upgrade to Premium
                </Button>
              </div>
            )}
          </Card>
        </div>

        {/* Enhanced Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white/50 backdrop-blur-sm">
          {activeTab === 'chat' && (
            <>
              {/* Chat Header */}
              <div className="border-b border-gray-200/50 p-6 bg-white/70 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-trust-500 to-trust-600 rounded-full flex items-center justify-center shadow-lg">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">NyayGPT Assistant</h2>
                        <p className="text-sm text-gray-500 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          Online & Ready to Help
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6 max-w-4xl mx-auto">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        {/* Avatar */}
                        <Avatar className="w-10 h-10 ring-2 ring-gray-200 shadow-md">
                          <AvatarFallback className={
                            message.type === 'user' 
                              ? 'bg-gradient-to-br from-trust-100 to-trust-200 text-trust-700' 
                              : 'bg-gradient-to-br from-navy-100 to-navy-200 text-navy-700'
                          }>
                            {message.type === 'user' ? user.name?.[0]?.toUpperCase() : <Bot className="w-5 h-5" />}
                          </AvatarFallback>
                        </Avatar>

                        {/* Message Bubble */}
                        <div className={`relative rounded-2xl p-4 shadow-lg ${
                          message.type === 'user'
                            ? 'bg-gradient-to-br from-trust-600 to-trust-700 text-white'
                            : 'bg-white border border-gray-200'
                        }`}>
                          {message.isWelcome && (
                            <div className="flex items-center space-x-2 mb-3 pb-3 border-b border-gray-100">
                              <Sparkles className="w-4 h-4 text-trust-600" />
                              <span className="text-sm font-medium text-trust-600">Welcome Message</span>
                            </div>
                          )}
                          
                          <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
                          
                          <div className={`flex items-center justify-between mt-3 pt-3 border-t ${
                            message.type === 'user' ? 'border-trust-500/30' : 'border-gray-100'
                          }`}>
                            <span className={`text-xs ${
                              message.type === 'user' ? 'text-trust-100' : 'text-gray-500'
                            }`}>
                              <Clock className="w-3 h-3 inline mr-1" />
                              {formatTime(message.timestamp)}
                            </span>
                            
                            {message.type === 'ai' && (
                              <div className="flex items-center space-x-2">
                                <Button size="sm" variant="ghost" className="h-8 px-2 hover:bg-gray-100">
                                  <ThumbsUp className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 px-2 hover:bg-gray-100">
                                  <ThumbsDown className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 px-2 hover:bg-gray-100">
                                  <Copy className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 px-2 hover:bg-gray-100">
                                  <Share className="w-3 h-3" />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="flex items-start space-x-3 max-w-3xl">
                        <Avatar className="w-10 h-10 ring-2 ring-gray-200 shadow-md">
                          <AvatarFallback className="bg-gradient-to-br from-navy-100 to-navy-200 text-navy-700">
                            <Bot className="w-5 h-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <div className="ai-thinking"></div>
                              <div className="ai-thinking"></div>
                              <div className="ai-thinking"></div>
                            </div>
                            <span className="text-gray-500 text-sm">NyayGPT is thinking...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Quick Suggestions */}
              {showSuggestions && messages.length === 1 && (
                <div className="px-6 py-4 border-t border-gray-200/50 bg-white/70 backdrop-blur-sm">
                  <p className="text-sm text-gray-600 mb-4 font-medium">✨ Quick prompts to get started:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {quickPrompts.map((prompt, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-left h-auto p-4 hover:bg-trust-50 hover:border-trust-200 transition-all group"
                        onClick={() => handleQuickPrompt(prompt.text)}
                      >
                        <div className="flex items-start space-x-3 w-full">
                          <div className="w-8 h-8 bg-gradient-to-br from-trust-100 to-trust-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <prompt.icon className="w-4 h-4 text-trust-600" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-xs font-medium text-trust-600 mb-1">{prompt.category}</div>
                            <div className="text-sm text-gray-700">{prompt.text}</div>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Message Input */}
              <div className="border-t border-gray-200/50 p-6 bg-white/80 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-end space-x-4">
                    <div className="flex-1 relative">
                      <Textarea
                        placeholder="Ask me anything about Indian law, or request document drafting..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        className="min-h-[60px] resize-none pr-24 border-gray-300 focus:border-trust-500 focus:ring-trust-500 rounded-xl shadow-sm"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <div className="absolute right-3 bottom-3 flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
                          <Mic className="w-4 h-4 text-gray-500" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
                          <Image className="w-4 h-4 text-gray-500" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                        <Paperclip className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                      <Button
                        onClick={handleSendMessage}
                        disabled={!currentMessage.trim() || isTyping}
                        className="bg-gradient-to-r from-trust-600 to-trust-700 hover:from-trust-700 hover:to-trust-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isTyping ? (
                          <RefreshCw className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <span>Press Enter to send, Shift+Enter for new line</span>
                    <span className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Secure & Encrypted</span>
                    </span>
                  </div>
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
