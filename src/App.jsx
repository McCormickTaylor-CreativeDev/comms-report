import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./App.css";

function App() {
  // Sample data for charts
  const channelEffectivenessData = [
    { quarter: "Q1 2024", social: 40, email: 65, direct: 55 },
    { quarter: "Q2 2024", social: 45, email: 60, direct: 60 },
    { quarter: "Q3 2024", social: 50, email: 55, direct: 70 },
    { quarter: "Q4 2024", social: 65, email: 50, direct: 75 },
    { quarter: "Q1 2025", social: 75, email: 45, direct: 85 },
  ];

  const citizenEngagementData = [
    { name: "Mobile App", value: 35 },
    { name: "Website", value: 25 },
    { name: "Social Media", value: 20 },
    { name: "In-Person", value: 15 },
    { name: "Print", value: 5 },
  ];

  const contentPerformanceData = [
    { type: "Email Blasts", engagement: 85 },
    { type: "Interactive Maps", engagement: 72 },
    { type: "Video", engagement: 67 },
    { type: "Blog Posts", engagement: 45 },
    { type: "PDF Reports", engagement: 32 },
  ];

  const COLORS = ["#013763", "#02775a", "#015d8f", "#039677", "#0288a7"];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-mt-blue to-mt-blue/80 text-white py-16">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">Communications Trends Report</h1>
                <h2 className="text-2xl font-light mb-8">Q2 2025 Insights & Analysis</h2>
              </div>
              <button className="px-4 py-2 bg-mt-green text-white rounded-lg font-medium hover:bg-mt-green/90 transition-colors duration-200 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                </svg>
                Share Report
              </button>
            </div>
            <p className="text-lg opacity-90 mb-6">
              Exploring the evolving landscape of public sector communications with data-driven insights and innovative
              approaches.
            </p>
            <div className="flex justify-between items-end">
              <div className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Published: May 15, 2025</div>

              {/* <div className="px-3 py-1 bg-white/20 rounded-full text-sm text-white placeholder">
                Contributors: X Team Members
              </div> */}
              <div>
                <h4 className="text-sm font-bold mb-2">Contributors</h4>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-mt-blue border-2 border-white flex items-center justify-center text-white text-xs">
                    JQ
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mt-green border-2 border-white flex items-center justify-center text-white text-xs">
                    RB
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mt-blue-light border-2 border-white flex items-center justify-center text-white text-xs">
                    JD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Executive Summary */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">Executive Summary</h2>
          <p className="text-gray-700 mb-6">
            Welcome to the Q2 2025 Communications Trends Report! This document explores the evolving landscape of public
            sector communications, specifically examining key trends, innovative solutions, and challenges. Through
            data-driven insights, case studies, and community sourced external resources, we aim to provide McCormick
            Taylor with real world examples and guidance to enhance outreach efforts for ourselves and our clients. As
            the communications landscape continues to transform, this report serves as a valuable resource for
            navigating and documenting these changes.
          </p>
          {/* <div className="inline-block bg-white p-6 rounded-lg shadow-md border-l-4 border-mt-green">
            <p className="font-medium">Quick Insight:</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div> */}
        </section>

        {/* Trend Analysis */}
        {/* <section className="mb-16">
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Communication Channel Effectiveness</h2>
              <p className="text-gray-600 mb-6">Tracking engagement across primary communication channels over time.</p>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={channelEffectivenessData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="social" stroke="#8884d8" name="Social Media" strokeWidth={2} />
                    <Line type="monotone" dataKey="email" stroke="#82ca9d" name="Email" strokeWidth={2} />
                    <Line type="monotone" dataKey="direct" stroke="#ff7300" name="Direct Engagement" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-gray-500">Source: Quarterly Engagement Analytics</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Read the detailed analysis
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section> */}

        {/* Key Insights Grid */}
        <section className="mb-16 max-w-4xl mx-auto placeholder">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Insight Card 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6 flex flex-col h-full">
                {/* <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div> */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">Citizen Engagement Channels</h3>
                <p className="text-gray-600 mb-4">
                  Analysis of which communication channels are driving the most meaningful engagement.
                </p>

                <div className="h-52 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={citizenEngagementData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                        {citizenEngagementData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <a href="#" className="text-mt-blue hover:text-mt-blue/80 font-medium inline-flex items-center mt-auto">
                  View channel breakdown
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Insight Card 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6 flex flex-col h-full">
                {/* <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                  </svg>
                </div> */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">Content Performance</h3>
                <p className="text-gray-600 mb-4">
                  Measuring engagement levels across different content formats to identify what resonates.
                </p>

                <div className="h-52 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={contentPerformanceData}
                      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                      layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="type" type="category" width={100} />
                      <Tooltip />
                      <Bar dataKey="engagement" fill="#82ca9d" barSize={20} radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <a href="#" className="text-mt-blue hover:text-mt-blue/80 font-medium inline-flex items-center mt-auto">
                  Explore content strategy guide
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Insight Card 3 */}
            {/* <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Emerging Technologies</h3>
                <p className="text-gray-600 mb-4">
                  How new technologies are reshaping communication approaches in the public sector.
                </p>

                <div className="mb-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">AI-powered personalization</span>
                    <span className="text-blue-600 font-medium">High Impact</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "88%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Conversational interfaces</span>
                    <span className="text-blue-600 font-medium">Medium Impact</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">AR/VR for public engagement</span>
                    <span className="text-blue-600 font-medium">Emerging</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "32%" }}></div>
                  </div>
                </div>

                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Read the technology forecast
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </section>

        {/* Project Spotlight */}
        <section className="mb-16 max-w-4xl mx-auto placeholder">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">Project Spotlight</h2>
          <div className="bg-gradient-to-r from-mt-blue/10 to-mt-blue/30 rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-7/12 p-8">
                <h3 className="text-xl font-bold text-mt-blue mb-2">MDTA Bridge Redesign Public Feedback Tool</h3>
                <p className="text-gray-600 italic mb-6">Client: MDTA</p>

                <div className="mb-6">
                  <h4 className="font-bold text-mt-blue mb-2">Challenge</h4>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-mt-blue mb-2">Approach</h4>
                  <p className="text-gray-700 mb-4">
                    Our team developed an engaging, interactive feedback tool to collect public input on the MDTA Bridge
                    Redesign.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                    <li>Mobile first design with responsive layout</li>
                    <li>Visual storytelling to explain the project and collect feedback</li>
                    <li>Public feedback system with real-time analytics</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-mt-blue mb-2">Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white/70 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-mt-blue mb-1">60%</div>
                      <div className="text-sm text-gray-600">Completion rate</div>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-mt-blue mb-1">85%</div>
                      <div className="text-sm text-gray-600">Engagement rate</div>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-mt-blue mb-1">63%</div>
                      <div className="text-sm text-gray-600">Positive feedback</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-5/12 bg-mt-blue text-white p-8 flex flex-col justify-center">
                <blockquote className="text-lg italic mb-6">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua."
                </blockquote>
                <div className="font-medium">
                  <div>Johnny Appleseed</div>
                  <div className="text-mt-blue">Communications Director, MDTAA</div>
                </div>

                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-block bg-white text-mt-blue px-4 py-2 rounded-lg font-medium hover:bg-mt-blue/10">
                    View full case study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Recommendations */}
        {/* <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">Strategic Recommendations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mt-green">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mt-green">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mt-green">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section> */}

        {/* Resource Library */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">Resource Library</h2>
          <p className="text-gray-700 mb-8">
            A curated collection of valuable resources, research papers, and tools relevant to this quarter's
            communication trends and strategies.
          </p>

          <div className="space-y-6">
            {/* Category 1: Research & Reports */}
            <div>
              <h3 className="text-lg font-semibold text-mt-blue mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
                Research & Reports
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Resource Card */}
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
                  <div className="flex flex-col h-full">
                    <h4 className="text-gray-800 font-medium mb-1">2025 Industry Outlook: Government Trends</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      A forward-looking report analyzing how all levels of government are accelerating efforts to
                      provide seamless, outcome-oriented services. It explores trends like data integration, responsible
                      AI, resilient infrastructure, and workforce upskilling to meet evolving community expectation
                    </p>
                    <a
                      href="https://www.slalom.com/us/en/insights/government-outlook-2025"
                      className="text-mt-blue hover:text-mt-blue/80 text-sm font-medium inline-flex items-center">
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Resource Card */}
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
                  <div className="flex flex-col h-full">
                    <h4 className="text-gray-800 font-medium mb-1">
                      Navigating the Shifting Sands: Why Government Communicators are Your MVPs in 2025
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      An in-depth article on the evolving role of government communicators in 2025, emphasizing the
                      importance of building public trust, translating policy, and improving service delivery through
                      clear, accessible, and inclusive communication strategies{" "}
                    </p>
                    <a
                      href="https://orlo.tech/us/us-blog/navigating-the-shifting-sands-why-government-communicators-are-your-mvps-in-2025/"
                      className="text-mt-blue hover:text-mt-blue/80 text-sm font-medium inline-flex items-center mt-auto">
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col col-span-2">
                  <div className="flex flex-col h-full">
                    <h4 className="text-gray-800 font-medium mb-1">Communication Trends to Watch in 2025</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      A blog post highlighting key communication trends for 2025, such as engaging audiences through
                      creativity, building relationships via active engagement, and the importance of social listening
                      for public sector organizations
                    </p>
                    <a
                      href="https://igpr.com/communication-trends-to-watch-in-2025/"
                      className="text-mt-blue hover:text-mt-blue/80 text-sm font-medium inline-flex items-center mt-auto">
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 2: Tools & Resources */}
            {/* <div>
              <h3 className="text-lg font-semibold text-mt-green mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"></path>
                </svg>
                Tools & Resources
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
                  <h4 className="text-gray-800 font-medium mb-2">Top GovTech Trends for 2025</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    A concise overview of the leading technology trends shaping government in 2025, including AI,
                    automation, cybersecurity, and innovative public service delivery. Useful for understanding the tech
                    landscape driving communication and engagement
                  </p>
                  <a
                    target="_blank"
                    href="https://governmenttechnologyinsider.com/contributed-article/top-govtech-trends-for-2025/"
                    className="text-mt-green hover:text-mt-green/80 text-sm font-medium inline-flex items-center mt-auto">
                    Access dashboard
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
                  <h4 className="text-gray-800 font-medium mb-2">Message Testing Template</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Standardized framework for evaluating the effectiveness of communication messaging before
                    deployment.
                  </p>
                  <a
                    href="#"
                    className="text-mt-green hover:text-mt-green/80 text-sm font-medium inline-flex items-center mt-auto">
                    Download template
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
                  <h4 className="text-gray-800 font-medium mb-2">Accessibility Checklist</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Comprehensive guide to ensuring all communication materials meet accessibility standards.
                  </p>
                  <a
                    href="#"
                    className="text-mt-green hover:text-mt-green/80 text-sm font-medium inline-flex items-center mt-auto">
                    View checklist
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Looking Ahead */}
        {/* <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">Looking Ahead</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="bg-mt-blue/10 p-6 rounded-lg border border-mt-blue">
            <h3 className="text-lg font-bold text-mt-blue mb-2">Next Quarter's Focus</h3>
            <p className="text-gray-700 mb-4">
              Our Q2 2025 report will explore how lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="px-3 py-1 bg-mt-blue/20 text-mt-blue rounded-full text-sm">
                AI Ethics in Government Communications
              </div>
              <div className="px-3 py-1 bg-mt-blue/20 text-mt-blue rounded-full text-sm">
                Measuring Communication ROI
              </div>
              <div className="px-3 py-1 bg-mt-blue/20 text-mt-blue rounded-full text-sm">
                Crisis Response Frameworks
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Communications Trends Report</h3>
              <p className="text-gray-600">Q1 2025 | Published March 11, 2025</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-2">Contributors</h4>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-mt-blue border-2 border-white flex items-center justify-center text-white text-xs">
                    JQ
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mt-green border-2 border-white flex items-center justify-center text-white text-xs">
                    RB
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mt-blue-light border-2 border-white flex items-center justify-center text-white text-xs">
                    JD
                  </div>
                </div>
              </div>

              <div>
                <button className="px-4 py-2 bg-mt-blue text-white rounded-lg font-medium hover:bg-mt-blue/90">
                  Share Report
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© McCormick Taylor</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
