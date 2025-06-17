
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from '@/contexts/AuthContext';
import { 
  User,
  ArrowDown,
  Crown,
  FileText,
  TrendingUp,
  Share,
  CreditCard,
  Settings
} from 'lucide-react';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  if (!isAuthenticated || !user) {
    navigate('/login');
    return null;
  }

  const usageStats = {
    documentsGenerated: user.plan === 'free' ? 3 : 47,
    queriesAsked: user.plan === 'free' ? 15 : 234,
    casesResearched: user.plan === 'free' ? 8 : 89,
    monthlyLimit: user.plan === 'free' ? 5 : null
  };

  const recentActivity = [
    { type: 'document', title: 'RTI Application - Property Records', date: '2 hours ago' },
    { type: 'query', title: 'Asked about IPC Section 420 penalties', date: '1 day ago' },
    { type: 'case', title: 'Researched consumer protection cases', date: '2 days ago' },
    { type: 'document', title: 'Generated affidavit template', date: '3 days ago' }
  ];

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
            <h1 className="text-lg font-semibold text-gray-900">Profile</h1>
          </div>

          <Link to="/dashboard">
            <Button variant="ghost">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-trust-400 to-navy-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {user.name?.[0]?.toUpperCase()}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
                <p className="text-gray-600 mb-2">{user.email}</p>
                
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Badge variant="outline" className="border-trust-200 text-trust-700">
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1).replace('_', ' ')}
                  </Badge>
                  {user.isVerified && (
                    <Badge className="bg-trust-100 text-trust-700 border-trust-200">
                      ✓ Verified
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Crown className={`w-4 h-4 ${user.plan === 'premium' ? 'text-yellow-500' : 'text-gray-400'}`} />
                  <span className="font-medium">
                    {user.plan === 'free' ? 'Free Plan' : 'Premium Plan'}
                  </span>
                </div>

                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  {user.plan === 'free' && (
                    <Button size="sm" className="w-full bg-trust-600 hover:bg-trust-700">
                      <Crown className="w-4 h-4 mr-2" />
                      Upgrade to Premium
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Usage Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Usage This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Documents Generated</span>
                    <span className="font-medium">
                      {usageStats.documentsGenerated}
                      {usageStats.monthlyLimit && `/${usageStats.monthlyLimit}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">AI Queries</span>
                    <span className="font-medium">{usageStats.queriesAsked}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cases Researched</span>
                    <span className="font-medium">{usageStats.casesResearched}</span>
                  </div>
                </div>

                {user.plan === 'free' && (
                  <div className="pt-4 border-t">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-xs text-yellow-700">
                        You're using {usageStats.documentsGenerated} of {usageStats.monthlyLimit} free documents. 
                        Upgrade for unlimited access.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Referral Program */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Refer & Earn</CardTitle>
                <CardDescription>Get 1 month free for each successful referral</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-trust-50 border border-trust-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-trust-700 mb-2">Your Referral Code</p>
                  <div className="flex items-center space-x-2">
                    <code className="bg-white px-3 py-1 rounded border text-sm">NYAY{user.id}REF</code>
                    <Button size="sm" variant="outline">
                      <Share className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-trust-600 mb-1">0</div>
                  <div className="text-sm text-gray-600">Successful Referrals</div>
                </div>
                
                <Button size="sm" variant="outline" className="w-full">
                  Share Referral Link
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest actions on NyayGPT</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.type === 'document' ? 'bg-trust-100' :
                        activity.type === 'query' ? 'bg-blue-100' : 'bg-purple-100'
                      }`}>
                        {activity.type === 'document' && <FileText className="w-5 h-5 text-trust-600" />}
                        {activity.type === 'query' && <User className="w-5 h-5 text-blue-600" />}
                        {activity.type === 'case' && <TrendingUp className="w-5 h-5 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Billing & Subscription */}
            {user.plan === 'premium' && (
              <Card>
                <CardHeader>
                  <CardTitle>Subscription & Billing</CardTitle>
                  <CardDescription>Manage your premium subscription</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-trust-50 border border-trust-200 rounded-lg">
                    <div>
                      <p className="font-medium text-trust-700">Premium Plan</p>
                      <p className="text-sm text-trust-600">₹399/month • Next billing: Jan 15, 2024</p>
                    </div>
                    <Badge className="bg-trust-600 text-white">Active</Badge>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Update Payment
                    </Button>
                    <Button size="sm" variant="outline">
                      Download Invoice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Account Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Professional Role</label>
                    <Select value={user.role} disabled>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="advocate">Advocate/Lawyer</SelectItem>
                        <SelectItem value="student">Law Student</SelectItem>
                        <SelectItem value="citizen">Citizen</SelectItem>
                        <SelectItem value="ias_aspirant">IAS Aspirant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Display Name</label>
                    <Input value={user.name} className="mt-1" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Email Address</label>
                    <Input value={user.email} disabled className="mt-1" />
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4 border-t">
                  <Button size="sm">Save Changes</Button>
                  <Button size="sm" variant="outline">Reset Password</Button>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">Danger Zone</CardTitle>
                <CardDescription>Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                  Delete Account
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={logout}
                  className="text-gray-600 border-gray-200"
                >
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
