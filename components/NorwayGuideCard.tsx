// 'use client'

// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export default function NorwayGuideCard() {
//   return (
//     <Card className="max-w-6xl mx-auto mt-10 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//       {/* Left: Image */}
//       <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
//         <Image
//           src="/hero.png" // Replace with your actual image path
//           alt="Norway Hammock"
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Right: Text */}
//       <CardContent className="space-y-4">
//         <h1 className="text-4xl font-bold text-gray-900">Norway Guide</h1>

//         <div className="flex items-center gap-2 text-sm text-muted-foreground">
//           <Image
//             src="/asa-avatar.png" // Replace with avatar image path
//             alt="Ása Steinars"
//             width={28}
//             height={28}
//             className="rounded-full"
//           />
//           <span className="text-gray-800 font-medium">Guide by Ása Steinars</span>
//           <span>· Norway</span>
//           <span className="text-blue-600 font-semibold">★ New</span>
//         </div>

//         <p className="text-sm text-gray-700 leading-relaxed">
//           Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months on the road with my van exploring everything from the south tip up to Lofoten.
//         </p>

//         <p className="text-sm text-gray-700 leading-relaxed">
//           This guide is my best tips for Norway to make sure you get the most out of your trip. It’s focused around the fjords in the west and Lofoten in the north. In my opinion, it’s the best areas to explore in Norway.
//         </p>

//         <div className="flex gap-4 pt-2">
//           <Button variant="outline" className="px-6 text-base">Preview</Button>
//           <Button className="px-6 text-base bg-blue-600 hover:bg-blue-700 text-white">
//             GET ACCESS
//           </Button>
//         </div>

//         <p className="text-xs text-muted-foreground pt-2">Used for <span className="font-semibold">100+ trips</span></p>
//       </CardContent>
//     </Card>
//   )
// }


// components/TravelHeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const TravelHeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 max-w-7xl mx-auto">
      {/* Left side - Image */}
      <div className="w-full md:w-2/5 h-96 relative rounded-lg overflow-hidden">
        <Image 
          src="/hero.png" 
          alt="Person relaxing in a hammock with Norwegian fjord view"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      
      {/* Right side - Content */}
      <div className="w-full md:w-3/5 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Norway Guide</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden relative">
              <Image 
                src="/asa-avatar.png" 
                alt="Åsa Steinars"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="text-gray-700">Guide by Åsa Steinars</span>
            <span className="text-gray-700 mx-2">Norway</span>
            <div className="flex items-center bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
              <Star className="w-3 h-3 mr-1" /> New
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I
            often come back and I love this country almost as much as Iceland. Last summer I spent 3
            months on the road with my van exploring everything from the south tip up to Lofoten.
          </p>
          
          <div className="border-t border-gray-200 my-6 pt-6">
            <p className="text-gray-700">
              This guide is my best tips for Norway to make sure you get the most out of your trip. It's
              focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best
              areas to explore in Norway.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center relative">
          <button className="w-full sm:w-1/2 py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Preview
          </button>
          <button className="w-full sm:w-1/2 py-3 bg-[#2583b6] hover:bg-cyan-700 text-white font-medium rounded-md transition-colors">
            GET ACCESS
          </button>
          
          <div className="text-gray-500 text-sm sm:absolute sm:right-0 sm:-bottom-8 mt-2 sm:mt-0">
            Used for 100+ trips
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelHeroSection;