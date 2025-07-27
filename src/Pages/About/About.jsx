import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet"; // react-leaflet for the map
import { FaPaperPlane } from "react-icons/fa";  // For the airplane icon in the Send button

const ContactPage = () => {
  return (
    <div className="container mx-auto pt-20">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center px-4">
        <div className="lg:w-2/5">
          <h2 className=" font-medium text-[#004D6E]">Who we are</h2>
          <h3 className="text-2xl lg:text-4xl text-gray-700 mt-2 font-semibold">We care about customer services</h3>
          <p className="text-lg text-gray-600 mt-4">
            Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#468F9D] text-white rounded-lg hover:bg-teal-600 transition duration-300">
            Email Support
          </button>
        </div>

        {/* Contact Form Section */}
        <div className="border border-gray-200 p-6 rounded-lg shadow-md lg:w-3/5 mb-10 lg:mb-0">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
          <form className="">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="text"
              placeholder="Subjects"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="w-full px-6 py-2 bg-[#468F9D] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-teal-600 transition duration-300"
            >
              
              Send Message
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      

      {/* Map Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Find Us on the Map</h3>
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
    </div>
  );
};

export default ContactPage;
