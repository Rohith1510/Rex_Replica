"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import type { LocationData } from "@/types/location";
import { X } from "lucide-react";


const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const locations: LocationData[] = [
  {
    id: 1,
    name: "Eiffel Tower",
    description: "Iconic iron tower located on the Champ de Mars in Paris, France.",
    position: [48.8584, 2.2945],
    image: "/placeholder.svg?height=150&width=250",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
  },
  {
    id: 5,
    name: "Louvre Museum",
    description: "World's largest art museum and a historic monument in Paris.",
    position: [48.8606, 2.3376],
    image: "/placeholder.svg?height=150&width=250",
    address: "Rue de Rivoli, 75001 Paris, France",
  },
  {
    id: 6,
    name: "Notre-Dame Cathedral",
    description: "Famous medieval Catholic cathedral with French Gothic architecture.",
    position: [48.8529, 2.3500],
    image: "/placeholder.svg?height=150&width=250",
    address: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
  },
  {
    id: 7,
    name: "Sacré-Cœur Basilica",
    description: "A Roman Catholic church and popular landmark atop Montmartre hill.",
    position: [48.8867, 2.3431],
    image: "/placeholder.svg?height=150&width=250",
    address: "35 Rue du Chevalier de la Barre, 75018 Paris, France",
  },
  {
    id: 8,
    name: "Champs-Élysées",
    description: "Famous avenue in Paris known for theaters, cafés, and luxury shops.",
    position: [48.8698, 2.3074],
    image: "/placeholder.svg?height=150&width=250",
    address: "Avenue des Champs-Élysées, 75008 Paris, France",
  },
  {
    id: 9,
    name: "Arc de Triomphe",
    description: "Massive arch honoring those who fought and died for France.",
    position: [48.8738, 2.2950],
    image: "/placeholder.svg?height=150&width=250",
    address: "Place Charles de Gaulle, 75008 Paris, France",
  },
  {
    id: 10,
    name: "Palace of Versailles",
    description: "Historic royal residence located just outside of Paris.",
    position: [48.8049, 2.1204],
    image: "/placeholder.svg?height=150&width=250",
    address: "Place d'Armes, 78000 Versailles, France",
  },
  {
    id: 11,
    name: "Luxembourg Gardens",
    description: "Beautiful park with lawns, tree-lined promenades, and fountains.",
    position: [48.8462, 2.3371],
    image: "/placeholder.svg?height=150&width=250",
    address: "75006 Paris, France",
  },
  {
    id: 12,
    name: "Moulin Rouge",
    description: "World-famous cabaret known for the French can-can dance.",
    position: [48.8842, 2.3325],
    image: "/placeholder.svg?height=150&width=250",
    address: "82 Boulevard de Clichy, 75018 Paris, France",
  },
  {
    id: 2,
    name: "Statue of Liberty",
    description: "Colossal neoclassical sculpture on Liberty Island in New York Harbor.",
    position: [40.6892, -74.0445],
    image: "/placeholder.svg?height=150&width=250",
    address: "New York, NY 10004, United States",
  },
  {
    id: 3,
    name: "Sydney Opera House",
    description: "Multi-venue performing arts center at Sydney Harbour.",
    position: [-33.8568, 151.2153],
    image: "/placeholder.svg?height=150&width=250",
    address: "Bennelong Point, Sydney NSW 2000, Australia",
  },
  {
    id: 4,
    name: "Colosseum",
    description: "Ancient amphitheater in the center of Rome, Italy.",
    position: [41.8902, 12.4922],
    image: "/placeholder.svg?height=150&width=250",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
  },
];


function SetMapView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
}


function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

export default function MapComponent() {
  const [activeLocation, setActiveLocation] = useState<LocationData | null>(
    null
  );
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    48.8584, 2.2945,
  ]);
  const isMobile = useIsMobile();

  const handleMarkerClick = (location: LocationData) => {
    setActiveLocation(location);
    setMapCenter(location.position);
  };

  return (
    <div id="map" className="w-full px-4 py-10">
      
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#24565c]">
          Interactive Map
        </h2>
        <p className="mt-2 text-gray-700 text-md md:text-base">
        Get an Interactive, playful and visually appealing map that helps you navigate the noise
        </p>
      </div>
  
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-7xl mx-auto">
        <div className="relative h-[400px] w-full">
          <MapContainer
            center={mapCenter}
            zoom={3}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
            className="z-10"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SetMapView center={mapCenter} />
  
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={location.position}
                icon={customIcon}
                eventHandlers={{
                  click: () => handleMarkerClick(location),
                }}
              >
                {!isMobile && (
                  <Popup className="location-popup">
                    <div className="max-w-xs">
                      <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                      <img
                        src={location.image || "/placeholder.svg"}
                        alt={location.name}
                        className="w-full h-auto rounded-md mb-2"
                      />
                      <p className="text-sm mb-2">{location.description}</p>
                      <p className="text-xs text-gray-600">
                        <strong>Address:</strong> {location.address}
                      </p>
                    </div>
                  </Popup>
                )}
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
  
      
      {isMobile && activeLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex flex-col justify-end">
          <div className="bg-white p-4 rounded-t-xl max-h-[70vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-xl">{activeLocation.name}</h3>
              <button
                onClick={() => setActiveLocation(null)}
                className="p-1 rounded-full hover:bg-gray-100"
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>
  
            <img
              src={activeLocation.image || "/placeholder.svg"}
              alt={activeLocation.name}
              className="w-full h-auto rounded-lg mb-3 object-cover"
            />
  
            <p className="text-base mb-3">{activeLocation.description}</p>
  
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Address:</strong>
                <br />
                {activeLocation.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
}
