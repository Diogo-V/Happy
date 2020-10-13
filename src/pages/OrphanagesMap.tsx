import React from 'react';
import { Link } from 'react-router-dom';
import {FiPlus} from "react-icons/fi";

// Leaflet maps (OpenStreetMap) and its default style
import { Map, TileLayer }  from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

// Logo at the top left corner
import mapMarkerImg from '../images/map-marker.svg';

// Page CSS
import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>

                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Choose an orphanage from the map</h2>
                    <p>Many children are waiting for your arrival!</p>
                </header>

                <footer>
                    <strong>Lisbon</strong>
                    <span>Alameda</span>
                </footer>

            </aside>

            <Map center={[38.7368192,-9.1408937]} zoom={20} style={{ width: '100%', height: '100%' }}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    );
}

export default OrphanagesMap;
