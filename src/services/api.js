async function geocodeAddress(address) {
  const apiKey = process.env.REACT_APP_OPEN_ROUTE_SERVICE_API_KEY;
  const url = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(
    address
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const coordinates = data.features[0].geometry.coordinates; // Coordenadas [longitude, latitude]
      return coordinates;
    } else {
      throw new Error("Endereço não encontrado");
    }
  } catch (error) {
    console.error("Erro ao geocodificar o endereço", error);
    throw error;
  }
}

export async function getTravelTimeORS(addressDestination) {
  const addressOrigin = "Avenida Afonso Pena 284 - Centro, Uberlandia"; // Endereço ficticio do restaurante
  try {
    const apiKey = process.env.REACT_APP_OPEN_ROUTE_SERVICE_API_KEY;

    // Geocodificação do endereço de origem
    const originCoordinates = await geocodeAddress(addressOrigin);

    // Geocodificação do endereço de destino
    const destinationCoordinates = await geocodeAddress(addressDestination);

    // Solicitação da rota usando as coordenadas obtidas
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${originCoordinates[0]},${originCoordinates[1]}&end=${destinationCoordinates[0]},${destinationCoordinates[1]}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const duration = data.features[0].properties.segments[0].duration; // Duração em segundos
      console.log(`Tempo estimado de viagem: ${duration} segundos`);
      return duration;
    } else {
      console.error(`Erro na API: ${data.error.message}`);
    }
  } catch (error) {
    console.error("Erro ao calcular a rota", error);
  }
}
