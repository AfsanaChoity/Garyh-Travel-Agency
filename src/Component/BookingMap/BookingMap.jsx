import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import CustomButton from '../Shared/CustomButton'
import { IoLocation } from 'react-icons/io5'

export default function BookingMap() {
    return (
        <div>
            {/* Map Section */}
            <div>
                <div className='flex flex-col md:flex-row mb-8 md:items-center  gap-[60%] '>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Location/Map</h3>
                    <CustomButton text="View on google maps"></CustomButton>
                </div>
                <MapContainer
                    center={[39.8283, -98.5795]} // Change coordinates if needed
                    zoom={5}
                    style={{ width: "100%", height: "400px" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    <Marker position={[39.8283, -98.5795]} />
                </MapContainer>
            </div>

            <div className='flex items-center gap-1 my-2'>
                <IoLocation />
                <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            </div>
        </div>
    )
}
