import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

if(!navigator.geolocation){
  alert('Tu navegador no tiene opción de Geolocalización');
  throw new Error('Tu navegador no tiene opción de Geolocalización');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
