'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Instagram, MessageCircle } from "lucide-react";

interface GuideProfileProps {
  name?: string;
  joinDate?: string;
  bio?: string;
  location?: string;
  image?: string;
  stats?: {
    things?: number;
    itineraries?: number;
    travelTips?: number;
  };
  socialLinks?: {
    website?: string;
    instagram?: string;
    tiktok?: string;
    threads?: string;
  };
}

export default function GuideProfile({
  name = "Åsa Steinars",
  joinDate = "April 2022",
  bio = "Åsa Steinars is an adventure photographer and videographer from Iceland. Growing up in the north, surrounded by extreme landscapes and forever changing weather has given her a tight bond to nature and its forces. This you can clearly see in her photography. She works as a full time content creator, helping people to travel Iceland like she does. She has a total following of almost 2 million across her social media platforms.",
  location = "Norway",
  image = "/hero.png",
  stats = {
    things: 161,
    itineraries: 1,
    travelTips: 0
  },
  socialLinks = {
    website: "#",
    instagram: "#", 
    tiktok: "#",
    threads: "#"
  }
}: GuideProfileProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image Card */}
        <div className="w-full rounded-3xl overflow-hidden shadow-md border-16 border-white">
          <img 
            src={image} 
            alt={`Guide ${name}`} 
            className="w-full h-[450px] object-cover"
          />
          <div className="p-5 bg-white">
            <div className="mb-1 text-sm text-gray-500">
              {stats.things} things to do | {stats.itineraries} itinerary | {stats.travelTips} travel tips
            </div>
            <h2 className="text-xl font-bold mb-0.5">{location} Guide</h2>
            <p className="text-gray-600">{location}</p>
          </div>
        </div>

        {/* Right: Centered Content */}
        <div className="flex flex-col justify-center h-full">
          <div>
            <h1 className="text-3xl font-bold">Guide by {name}</h1>
            <p className="text-gray-500 mt-1">Joined in {joinDate}</p>

            <div className="flex gap-3 mt-4">
              {socialLinks.website && (
                <a href={socialLinks.website} target="_blank" rel="noopener noreferrer">
                  <Globe size={22} className="text-gray-700 hover:text-gray-900" />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram size={22} className="text-gray-700 hover:text-gray-900" />
                </a>
              )}
              {socialLinks.tiktok && (
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
                  {/* TikTok SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gray-700 hover:text-gray-900">
                    <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V9C13.3333 10 14.6 12 17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
              {socialLinks.threads && (
                <a href={socialLinks.threads} target="_blank" rel="noopener noreferrer">
                  {/* Threads SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gray-700 hover:text-gray-900">
                    <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9.5C9 8.11929 10.1193 7 11.5 7H12.5C13.8807 7 15 8.11929 15 9.5C15 10.8807 13.8807 12 12.5 12H11.5C10.1193 12 9 13.1193 9 14.5C9 15.8807 10.1193 17 11.5 17H12.5C13.8807 17 15 15.8807 15 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">{bio}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button className="bg-white text-black border border-gray-200 hover:bg-gray-50 rounded-full px-6">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button variant="outline" className="bg-white text-black border border-gray-200 hover:bg-gray-50 rounded-full px-6">
                Storefront
              </Button>
              <Button variant="outline" className="bg-white text-black border border-gray-200 hover:bg-gray-50 rounded-full px-6">
                Guide Affiliate Program
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
