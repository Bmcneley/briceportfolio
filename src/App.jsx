import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomFlightComputer from "./pages/projects/CustomFlightComputer";
import NasaUsliPayload from "./pages/projects/NasaUsliPayload";
import HighAltitudeWeatherAircraft from "./pages/projects/HighAltitudeWeatherAircraft";
import MidAmericanEnergyIntern from "./pages/projects/MidAmericanEnergyIntern";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/portfolio/custom-flight-computer"
          element={<CustomFlightComputer />}
        />
        <Route
          path="/portfolio/nasa-usli-payload"
          element={<NasaUsliPayload />}
        />
        <Route
          path="/portfolio/high-altitude-weather-aircraft"
          element={<HighAltitudeWeatherAircraft />}
        />
        <Route
          path="/portfolio/midamerican-energy-intern"
          element={<MidAmericanEnergyIntern />}
        />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
