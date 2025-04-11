'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ItinerarySection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side content */}
        <div className="w-full md:w-1/3 flex flex-col justify-center mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">1 itinerary</h2>
          <p className="text-gray-500 mb-6">
          Get expertly curated itineraries that help you organise all the &apos;things to do&apos; in an ideal time order
          </p>
          <Link href="/preview" className="font-medium text-gray-900 hover:underline">
            Preview for FREE
          </Link>
        </div>

        {/* Right side grid */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Itinerary Builder Card */}
            <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center aspect-[3/4]">
              <div className="w-16 h-16 mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H9.01"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9H15.01"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-600">Itinerary Builder</h3>
              <p className="text-gray-500 mt-2">Create your own itinerary</p>
            </div>

            {/* Lofoten Road Trip Card */}
            <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
              <Image 
                src="/lofoten_road.png" 
                alt="Lofoten Road Trip" 
                fill 
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium">Day 8</p>
                <h3 className="text-xl font-bold">Lofoten Road Trip</h3>
              </div>
            </div>

            {/* Empty Preview Card */}
            <div className="border border-gray-200 rounded-lg flex items-center justify-center aspect-[3/4]">
              <Link href="/preview" className="text-gray-900 font-medium">
                Preview for FREE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}