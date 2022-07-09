import { MapContainer, Marker, TileLayer } from "react-leaflet";
import '../styles/MapStyles.scss'

export const MapView = () => {
     return (
          <div className="map-location">
               <MapContainer center={{lat: '5.231', lng: '5.2231'}} zoom={13} >
                    <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[5.231,5.2231]}/>
                    <Marker position={[5.281,5.2231]}/>
               </MapContainer>
          </div>
     );
};
