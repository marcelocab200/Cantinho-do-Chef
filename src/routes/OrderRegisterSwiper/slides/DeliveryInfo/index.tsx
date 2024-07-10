import React from "react";
import "./styles.scss";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import mapStyles from "../../../../misc/mapStyles";
import Input from "../../../../components/UI/Input";

export default function DeliveryInfo() {
  const position = { lat: -18.912863, lng: -48.275471 }; // Coordenadas de Uberlândia-MG

  const options = {
    styles: mapStyles, // Estilização do mapa
    mapTypeControl: false, // Remove opção de tipo de mapa (mapa/satélite)
    streetViewControl: false, // Remove opção de visão de rua
    fullscreenControl: false, // Remove opção de fullscreen
    restriction: {
      // Esta restrição define o limite do mapa de acordo com as coordenadas (neste caso, mostra apenas Uberlândia)
      latLngBounds: {
        north: -18.849,
        south: -19.0,
        west: -48.35,
        east: -48.2,
      },
      strictBounds: false,
    },
  };

  return (
    <div className="Delivery-info-container">
            <div className="Delivery-info">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ height: "25rem", width: "25rem" }}
          center={position}
          zoom={12}
          options={options}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
      <Input label="Qual seu endereço?" placeholder="Digite seu endereço" type="text"/>
    </div>
    </div>

  );
}
