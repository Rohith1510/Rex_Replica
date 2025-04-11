import {
    MapPin,
    Map,
    Repeat,
    Send,
    Download,
    Share2
  } from "lucide-react"
  
  const features = [
    { icon: <MapPin className="w-5 h-5 text-[#3c3b4e]" />, text: "161 things to do" },
    { icon: <Map className="w-5 h-5 text-[#3c3b4e]" />, text: "Interactive Map" },
    { icon: <Repeat className="w-5 h-5 text-[#3c3b4e]" />, text: "1 Itinerary" },
    { icon: <Send className="w-5 h-5 text-[#3c3b4e]" />, text: "Priority in chat" },
    { icon: <Download className="w-5 h-5 text-[#3c3b4e]" />, text: "Offline usage in app" },
    { icon: <Share2 className="w-5 h-5 text-[#3c3b4e]" />, text: "Itinerary Builder access" }
  ]
  
  export default function FeaturesGrid() {
    return (
      <div className="mt-8 sm:mt-10 md:mt-16 mb-8 sm:mb-10 md:mb-16 border-y py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[#3c3b4e]">
              {feature.icon}
              <span className="text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  