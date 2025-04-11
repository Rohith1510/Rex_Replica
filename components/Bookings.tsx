// components/ActivitiesShowcase.tsx
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Binoculars, Mountain } from 'lucide-react';

interface ActivityItem {
  id: number;
  title: string;
  imageUrl: string;
  category: 'Sightseeing' | 'Hike' | 'Adventure' | 'Culture';
  altText: string;
}

const Bookings: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      id: 1,
      title: 'One of my favourite spots',
      imageUrl: '/woodhouse.png',
      category: 'Sightseeing',
      altText: 'Person in red swimsuit at waterfall'
    },
    {
      id: 2,
      title: 'Swing with amazing views',
      imageUrl: '/hotel_lake.png',
      category: 'Sightseeing',
      altText: 'Person on swing over misty valley'
    },
    {
      id: 3,
      title: 'Beautiful view point',
      imageUrl: '/aurora_hotel.png',
      category: 'Hike',
      altText: 'Colorful hammock overlooking fjord'
    },
    {
      id: 4,
      title: 'Hidden mountain trail',
      imageUrl: '/mokey-forest.png',
      category: 'Hike',
      altText: 'Mountain hiking trail through forest'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Sightseeing':
        return <Binoculars className="w-4 h-4 mr-1" />;
      case 'Hike':
        return <Mountain className="w-4 h-4 mr-1" />;
      default:
        return <Binoculars className="w-4 h-4 mr-1" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side content */}
        <div className="w-full md:w-1/3 flex flex-col justify-center mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Page</h2>
          <p className="text-gray-500 mb-6">
          Get a curated list of reliable options when booking tours, hotels, and car rentals
          </p>
          <a href="#" className="font-medium text-gray-900 hover:underline inline-block">Preview for FREE</a>
        </div>

        {/* Right side carousel - maintains horizontal scroll on mobile */}
        <div className="w-full md:w-2/3">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {activities.map((activity) => (
                <CarouselItem key={activity.id} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col gap-2">
                    <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
                      <Image
                        src={activity.imageUrl}
                        alt={activity.altText}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      {getCategoryIcon(activity.category)}
                      <span>{activity.category}</span>
                    </div>
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Bookings;