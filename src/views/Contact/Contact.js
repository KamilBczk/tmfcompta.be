import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import "leaflet/dist/images/marker-shadow.png";

function Map() {
  const position = [51.505, -0.09];

  return (
    <MapContainer className="markercluster-map" center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}

function Contact() {
  // const mapRef = useRef();
  const position = [50.82224, 4.36968];
  
  return (
    <>
    <div className='generic-banner generic-banner-contact'>
      <div className='text-box center-xy'>
        <h1 className='title-xl text-bold text-white-b300'>Contact</h1>
      </div>
    </div>
    <div className='section section-contact-first'>
      <div className='container'>
        <h2 className='title'>Contactez<span className='text-prusian-blue-b300'>-nous</span></h2>
        <div className='grid-total grid-2'>
          <div className='grid-elem'>
            <div className='input-container-2'>
              <div class="input-container">
                <input type="text" id="lastname" name="lastname" required />
                <label for="lastname">Nom*</label>
              </div>
              <div class="input-container">
                <input type="text" id="firstname" name="firstname" required />
                <label for="firstname">Prénom*</label>
              </div>
            </div>
            <div className='mt input-container-2'>
              <div class="input-container">
                <input type="email" id="email" name="email" required />
                <label for="email">Mail*</label>
              </div>
              <div class="input-container">
                <input type="text" id="tel" name="tel" defaultValue="+32 " />
                <label for="tel">Numéro de télephone</label>
              </div>
            </div>
            <div className='mt input-container-1'>
              <div class="input-container">
                <input type="text" id="company" name="company" required />
                <label for="company">Société*</label>
              </div>
            </div>
            <div className='mt input-container-1'>
              <div class="input-container">
                <textarea id="message" name="message" rows="4" required></textarea>
                <label for="message">Votre message*</label>
              </div>
            </div>
          </div>
          <div className='grid-elem'>
            <div className='grid-1'>
              {/* <MapContainer className="markercluster-map" center={position} zoom={18} maxZoom={18}><TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /><Marker position={position}><Popup>TMF Comtpa</Popup></Marker></MapContainer> */}
              <Map/>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <MapContainer ref={mapRef} center={position} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </MapContainer> */}
    </>
  )
}




export default Contact