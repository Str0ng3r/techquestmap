import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const SimpleMap: React.FC = () => {
  const [markers, setMarkers] = useState<MarkerProps[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const defaultProps = {
    center: {
      lat: 49.99835602,
      lng: 30.01502627,
    },
    zoom: 11,
  };
  const AnyReactComponent: React.FC<MarkerProps> = ({ text }) => (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "red",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        zIndex: -1,
      }}
    >
      {text}
    </div>
  );

  const handleMapClick = (event: any) => {
    if (!selectedLocation) {
      setSelectedLocation({ lat: event.lat, lng: event.lng });
      console.log(markers);
      console.log(event.lat);
      console.log(event.lng);
    } else {
      addMarker(selectedLocation.lat, selectedLocation.lng, "Новый маркер");
      setSelectedLocation(null);
    }
  };

  const addMarker = (lat: number, lng: number, text: string) => {
    const newMarker = { id: Date.now(), lat, lng, text };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBvSbPw0kTkcLrbl_wWqs8Swdj1xYrFJYc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={handleMapClick}
      >
        {markers.map((marker) => (
          <AnyReactComponent
            lat={marker.lat}
            lng={marker.lng}
            text={marker.text}
          />
        ))}
        <AnyReactComponent
          lat={50.43772206429597}
          lng={30.51246244651873}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
