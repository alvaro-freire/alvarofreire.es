import React from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import Link from "next/link";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countriesVisited = [
  "724", "620", "250", "531", "170", "840", "440", "233", "380", "191", "70", "826",
  "372", "56", "528", "792", "642", "348", "40", "703", "752", "578", "208", "504",
  "276", "470", "196"
];

const TravelMap = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-semibold">My Travel Map 🌍</h1>
        <Link href="/">
          <a className="text-gray-300 hover:text-white transition duration-200">Home</a>
        </Link>
      </nav>

      <div className="flex flex-grow justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-4 w-[85vw] h-[85vh] flex justify-center items-center overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 100 }} width={700} height={400}>
              <ZoomableGroup translateExtent={[[-100, -50], [900, 550]]}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isVisited = countriesVisited.includes(geo.id);
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isVisited ? "#E5484D" : "#D6D6DA"}
                          stroke="#FFFFFF"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover: { fill: isVisited ? "#DF2026" : "#BEBEBE", transition: "0.2s", outline: "none" },
                            pressed: { fill: "#FF5733", outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelMap;
