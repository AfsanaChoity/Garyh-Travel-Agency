import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import SharedHeading from '../Component/Shared/SharedHeading'
import MyListingTable from '../LandOwnerComponents/SingleComponents/MyListingTable'
import AddListingModal from '../LandOwnerComponents/SingleComponents/AddListingModal';

export default function MyListing() {
     const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddNewListing = () => {
        console.log("Add new listing clicked")
    }
    return (
        <div>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                {/* <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">My Listing</h1> */}
                <SharedHeading text="My Listing"></SharedHeading>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-200 text-gray-700 font-medium cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add New Listing</span>
                </button>
            </div>

            {/* Listing Table */}
            <div>
                <MyListingTable></MyListingTable>
            </div>

            {/* Add Listing Modal */}
            <div>
                <AddListingModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
            </div>
        </div>
    )
}
