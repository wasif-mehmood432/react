
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '../contexts/AuthContext';
import { MessageCircle, Plus, Star, Calendar, CreditCard } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [messages] = useState(3); // Mock message count

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">Manage your services and connect with customers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-pink-600 hover:bg-pink-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Service
                </Button>
                <Button variant="outline" className="w-full justify-start relative">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Messages
                  {messages > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
                      {messages}
                    </Badge>
                  )}
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Bookings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Reviews
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">New Messages</p>
                      <p className="text-2xl font-bold text-gray-900">{messages}</p>
                    </div>
                    <MessageCircle className="h-8 w-8 text-pink-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">This Week</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="text-2xl font-bold text-gray-900">4.9</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Subscription Card */}
            <Card className="border-2 border-dashed border-gray-300 bg-gradient-to-r from-pink-50 to-red-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Upgrade to Premium
                </h3>
                <p className="text-gray-600 mb-6">
                  Get more visibility, priority support, and advanced analytics for your services.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <div className="bg-white rounded-lg p-4 border flex-1 max-w-xs">
                    <h4 className="font-semibold text-gray-900 mb-2">Basic Plan</h4>
                    <p className="text-2xl font-bold text-gray-900 mb-2">$19/month</p>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• List up to 3 services</li>
                      <li>• Basic messaging</li>
                      <li>• Standard support</li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      Current Plan
                    </Button>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-2 border-pink-500 flex-1 max-w-xs relative">
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-pink-500">
                      Popular
                    </Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">Premium Plan</h4>
                    <p className="text-2xl font-bold text-gray-900 mb-2">$39/month</p>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• Unlimited services</li>
                      <li>• Priority messaging</li>
                      <li>• Analytics dashboard</li>
                      <li>• Premium support</li>
                    </ul>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">
                      Upgrade Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">New message from Sarah</p>
                      <p className="text-sm text-gray-600">Interested in your dog walking service</p>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">New 5-star review</p>
                      <p className="text-sm text-gray-600">Great service, highly recommended!</p>
                    </div>
                    <span className="text-sm text-gray-500">1 day ago</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Booking confirmed</p>
                      <p className="text-sm text-gray-600">Dog walking session scheduled for tomorrow</p>
                    </div>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
