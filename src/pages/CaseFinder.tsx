
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from '@/contexts/AuthContext';
import { 
  Search,
  FileText,
  ArrowDown,
  Filter,
  Calendar,
  BookOpen
} from 'lucide-react';

const CaseFinder = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filters, setFilters] = useState({
    court: '',
    year: '',
    section: ''
  });

  const mockCases = [
    {
      id: 1,
      title: 'State of Maharashtra v. Arun Kumar',
      citation: '2023 SCC 145',
      court: 'Supreme Court',
      year: '2023',
      summary: 'This case deals with the interpretation of Section 420 of IPC regarding cheating and dishonestly inducing delivery of property.',
      headnote: 'Criminal Law - Cheating - Essential ingredients - Fraudulent intention must be present at the time of making promise',
      relevantSections: ['IPC 420', 'IPC 415'],
      category: 'Criminal Law'
    },
    {
      id: 2,
      title: 'Rajesh Sharma v. State of Delhi',
      citation: '2023 Delhi HC 892',
      court: 'Delhi High Court',
      year: '2023',
      summary: 'Case regarding bail application under Section 420 IPC. Court held that economic offences have serious impact on economy.',
      headnote: 'Bail - Economic Offences - Section 420 IPC - Serious nature of offence considered',
      relevantSections: ['IPC 420', 'CrPC 437'],
      category: 'Criminal Law'
    },
    {
      id: 3,
      title: 'Union of India v. ABC Company Ltd.',
      citation: '2023 SC 567',
      court: 'Supreme Court',
      year: '2023',
      summary: 'Constitutional validity of certain provisions of Consumer Protection Act. Court upheld the legislative competence.',
      headnote: 'Constitutional Law - Legislative Competence - Consumer Protection - Concurrent List',
      relevantSections: ['Consumer Protection Act 2019', 'Article 254'],
      category: 'Constitutional Law'
    }
  ];

  const handleSearch = async () => {
    setIsSearching(true);
    
    // Simulate search
    setTimeout(() => {
      if (searchQuery.toLowerCase().includes('420') || searchQuery.toLowerCase().includes('cheating')) {
        setSearchResults(mockCases.filter(caseItem => 
          caseItem.relevantSections.some(section => section.includes('420')) ||
          caseItem.summary.toLowerCase().includes('cheat')
        ));
      } else {
        setSearchResults(mockCases);
      }
      setIsSearching(false);
    }, 2000);
  };

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-trust-600 to-navy-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">न्</span>
              </div>
              <span className="text-xl font-bold gradient-text">NyayGPT</span>
            </Link>
            <ArrowDown className="w-4 h-4 text-gray-400 rotate-[-90deg]" />
            <h1 className="text-lg font-semibold text-gray-900">Case Finder</h1>
          </div>

          <Link to="/dashboard">
            <Button variant="ghost">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Legal Cases & Judgments</CardTitle>
            <CardDescription>
              Find relevant Supreme Court and High Court cases with AI-powered search
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by case name, section, or legal issue (e.g., 'IPC 420', 'consumer protection', 'Article 21')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-base"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="bg-trust-600 hover:bg-trust-700"
              >
                {isSearching ? (
                  <div className="flex items-center space-x-2">
                    <div className="ai-thinking"></div>
                    <div className="ai-thinking"></div>
                    <div className="ai-thinking"></div>
                  </div>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </>
                )}
              </Button>
            </div>

            {/* Filters */}
            <div className="flex space-x-4">
              <Select value={filters.court} onValueChange={(value) => setFilters(prev => ({ ...prev, court: value }))}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by Court" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supreme">Supreme Court</SelectItem>
                  <SelectItem value="high">High Courts</SelectItem>
                  <SelectItem value="district">District Courts</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.year} onValueChange={(value) => setFilters(prev => ({ ...prev, year: value }))}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            {/* Quick Search Suggestions */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Quick searches:</span>
              {['IPC 420', 'Article 21', 'Consumer Protection', 'Bail Application', 'Property Law'].map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  className="text-xs h-7"
                  onClick={() => setSearchQuery(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Search Results ({searchResults.length})</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Sort by Date
                </Button>
                <Button variant="outline" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Relevance
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {searchResults.map((caseItem: any) => (
                <Card key={caseItem.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-navy-900 mb-2">
                            {caseItem.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span className="font-medium">{caseItem.citation}</span>
                            <span>|</span>
                            <span>{caseItem.court}</span>
                            <span>|</span>
                            <span>{caseItem.year}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="border-trust-200 text-trust-700">
                          {caseItem.category}
                        </Badge>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">Headnote:</p>
                        <p className="text-sm text-gray-700">{caseItem.headnote}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">AI Summary:</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{caseItem.summary}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {caseItem.relevantSections.map((section: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {section}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <FileText className="w-3 h-3 mr-1" />
                            Full Text
                          </Button>
                          <Button size="sm" className="bg-trust-600 hover:bg-trust-700">
                            <BookOpen className="w-3 h-3 mr-1" />
                            Cite This
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Results State */}
        {searchResults.length === 0 && searchQuery && !isSearching && (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No cases found</h3>
              <p className="text-gray-600 mb-4">
                Try different keywords or broaden your search terms
              </p>
              <Button variant="outline" onClick={() => setSearchQuery('')}>
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Default State */}
        {searchResults.length === 0 && !searchQuery && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-trust-600" />
                </div>
                <h3 className="font-semibold mb-2">Supreme Court Cases</h3>
                <p className="text-sm text-gray-600 mb-4">Browse latest SC judgments</p>
                <Button size="sm" variant="outline">Browse</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="font-semibold mb-2">IPC Sections</h3>
                <p className="text-sm text-gray-600 mb-4">Search by penal code sections</p>
                <Button size="sm" variant="outline">Search</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-trust-600" />
                </div>
                <h3 className="font-semibold mb-2">Recent Judgments</h3>
                <p className="text-sm text-gray-600 mb-4">Latest court decisions</p>
                <Button size="sm" variant="outline">View</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseFinder;
