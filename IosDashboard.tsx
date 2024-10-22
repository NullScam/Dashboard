import React, { useState } from 'react';
import { Bell, Calendar, ChevronRight, FileText, Home, PieChart, Settings, Users, Mail, Phone, Globe } from 'lucide-react';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function IosDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const notifications = [
    { id: 1, title: 'New creative submitted', description: 'Logo design for Project X is ready for review' },
    { id: 2, title: 'Deadline approaching', description: 'Website redesign project due in 2 days' },
    { id: 3, title: 'Feedback required', description: 'Please provide feedback on the latest social media post designs' },
  ];

  const projects = [
    { id: 1, name: 'Website Redesign', progress: 75, status: 'In Progress' },
    { id: 2, name: 'SEO Campaign', progress: 40, status: 'In Progress' },
    { id: 3, name: 'Social Media Strategy', progress: 90, status: 'Review' },
  ];

  const clientDetails = {
    name: 'Acme Corporation',
    contactPerson: 'John Doe',
    email: 'john.doe@acme.com',
    phone: '+1 (555) 123-4567',
    website: 'www.acme.com',
    totalProjects: 7,
    activeProjects: 4,
    totalSpend: '$45,000',
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Creative Dog Logo" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Creative Dog</span>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-6 w-6 text-gray-500" />
              </Button>
              <Avatar className="h-10 w-10 ml-4">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-6 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
          
          <Card className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-900">Client Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-semibold text-gray-900">{clientDetails.name}</h2>
                  <p className="text-sm text-gray-500">{clientDetails.contactPerson}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {clientDetails.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {clientDetails.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe className="h-4 w-4 mr-2" />
                    {clientDetails.website}
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 pt-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Projects</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{clientDetails.totalProjects}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Projects</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{clientDetails.activeProjects}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Spend</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{clientDetails.totalSpend}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Active Projects</CardTitle>
                <FileText className="h-6 w-6" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4</div>
                <p className="text-sm opacity-90">2 in progress, 2 in review</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Pending Approvals</CardTitle>
                <Users className="h-6 w-6" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">7</div>
                <p className="text-sm opacity-90">3 high priority</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
              <ul className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <li key={notification.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{notification.title}</p>
                        <p className="text-sm text-gray-500">{notification.description}</p>
                      </div>
                      <div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Project Progress</h2>
              <ul className="space-y-4">
                {projects.map((project) => (
                  <li key={project.id}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900">{project.name}</p>
                      <span className="text-sm text-gray-500">{project.status}</span>
                    </div>
                    <Progress value={project.progress} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 fixed bottom-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around py-3">
            <Button variant="ghost" className="flex flex-col items-center" onClick={() => setActiveTab('overview')}>
              <Home className={`h-6 w-6 ${activeTab === 'overview' ? 'text-blue-500' : 'text-gray-400'}`} />
              <span className={`text-xs mt-1 ${activeTab === 'overview' ? 'text-blue-500' : 'text-gray-500'}`}>Home</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center" onClick={() => setActiveTab('projects')}>
              <FileText className={`h-6 w-6 ${activeTab === 'projects' ? 'text-blue-500' : 'text-gray-400'}`} />
              <span className={`text-xs mt-1 ${activeTab === 'projects' ? 'text-blue-500' : 'text-gray-500'}`}>Projects</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center" onClick={() => setActiveTab('calendar')}>
              <Calendar className={`h-6 w-6 ${activeTab === 'calendar' ? 'text-blue-500' : 'text-gray-400'}`} />
              <span className={`text-xs mt-1 ${activeTab === 'calendar' ? 'text-blue-500' : 'text-gray-500'}`}>Calendar</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center" onClick={() => setActiveTab('settings')}>
              <Settings className={`h-6 w-6 ${activeTab === 'settings' ? 'text-blue-500' : 'text-gray-400'}`} />
              <span className={`text-xs mt-1 ${activeTab === 'settings' ? 'text-blue-500' : 'text-gray-500'}`}>Settings</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}