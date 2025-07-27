

import { useState } from "react"
import { Search, Plus, MoreHorizontal, Paperclip, Send } from "lucide-react"

import img1 from "../../assets/InboxImages/img1.jpg"
import img2 from "../../assets/InboxImages/img2.jpg"
import img3 from "../../assets/InboxImages/img3.jpg"
import img4 from "../../assets/InboxImages/img4.jpg"
import img5 from "../../assets/InboxImages/img5.jpg"
import img6 from "../../assets/InboxImages/img6.jpg"
import img7 from "../../assets/InboxImages/img7.jpg"
import img8 from "../../assets/InboxImages/img8.jpg"
import img9 from "../../assets/InboxImages/img9.jpg"
import img10 from "../../assets/InboxImages/img10.jpg"


const Inbox = () => {
    const [selectedChat, setSelectedChat] = useState("jane-cooper")
    const [newMessage, setNewMessage] = useState("")

    const conversations = [
        {
            id: "jane-cooper",
            name: "Jane Cooper",
            avatar: img1,
            lastMessage: "Yeah sure, tell me zafor",
            time: "just now",
            isOnline: true,
            unread: false,
        },
        {
            id: "jenny-wilson",
            name: "Jenny Wilson",
            avatar: img2,
            lastMessage: "Thank you so much, sir",
            time: "2 d",
            isOnline: false,
            unread: true,
        },
        {
            id: "marvin-mckinney",
            name: "Marvin McKinney",
            avatar: img3,
            lastMessage: "You're Welcome",
            time: "1 m",
            isOnline: false,
            unread: true,
        },
        {
            id: "eleanor-pena",
            name: "Eleanor Pena",
            avatar: img4,
            lastMessage: "Thank you so much, sir",
            time: "1 m",
            isOnline: false,
            unread: false,
        },
        {
            id: "ronald-richards",
            name: "Ronald Richards",
            avatar: img5,
            lastMessage: "Sorry, I can't help you",
            time: "2 m",
            isOnline: true,
            unread: false,
        },
        {
            id: "kathryn-murphy",
            name: "Kathryn Murphy",
            avatar: img6,
            lastMessage: "new message",
            time: "2 m",
            isOnline: false,
            unread: false,
        },
        {
            id: "jacob-jones",
            name: "Jacob Jones",
            avatar: img7,
            lastMessage: "Thank you so much, sir",
            time: "6 m",
            isOnline: false,
            unread: false,
        },
        {
            id: "cameron-williamson",
            name: "Cameron Williamson",
            avatar: img8,
            lastMessage: "It's okay, no problem brother, I will fix everythin...",
            time: "6 m",
            isOnline: false,
            unread: false,
        },
        {
            id: "arlene-mccoy",
            name: "Arlene McCoy",
            avatar: img9,
            lastMessage: "Thank you so much, sir",
            time: "9 m",
            isOnline: false,
            unread: false,
        },
        {
            id: "dianne-russell",
            name: "Dianne Russell",
            avatar: img10,
            lastMessage: "You're Welcome",
            time: "9 m",
            isOnline: false,
            unread: false,
        },
    ]

    const messages = [
        {
            id: 1,
            sender: "Time",
            avatar: img1,
            content:
                "Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I'll be happy to help 😊",
            time: "10:30 AM",
            isOwn: false,
        },
        {
            id: 2,
            sender: "You",
            content: "Hello, Good Evening.",
            time: "10:32 AM",
            isOwn: true,
        },
        {
            id: 3,
            sender: "You",
            content: "I'm Zafor",
            time: "10:32 AM",
            isOwn: true,
        },
        {
            id: 4,
            sender: "You",
            content: "I only have a small doubt about your lecture. can you give me some time for this?",
            time: "10:33 AM",
            isOwn: true,
        },
        {
            id: 5,
            sender: "Time",
            avatar: img2,
            content: "Yeah sure, tell me zafor",
            time: "10:35 AM",
            isOwn: false,
        },
    ]

    const selectedConversation = conversations.find((conv) => conv.id === selectedChat)

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            console.log("Sending message:", newMessage)
            setNewMessage("")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className="container mx-auto my-20 flex   border border-gray-200 rounded-2xl">
            {/* Left Sidebar - Conversations */}
            <div className=" border-r border-gray-200 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold text-gray-900">Message</h1>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                            <Plus className="w-4 h-4" />
                            <span className="text-sm font-medium">Compose</span>
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((conversation) => (
                        <div
                            key={conversation.id}
                            onClick={() => setSelectedChat(conversation.id)}
                            className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors ${selectedChat === conversation.id ? "bg-blue-50 border-r-2 border-blue-500" : ""
                                }`}
                        >
                            <div className="relative">
                                <img
                                    src={conversation.avatar || "/placeholder.svg"}
                                    alt={conversation.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                {conversation.isOnline && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                                    <span className="text-xs text-gray-500">{conversation.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                            </div>

                            {conversation.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side - Chat Area */}
            <div className="flex-1 flex flex-col">
                {selectedConversation ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img
                                        src={selectedConversation.avatar || "/placeholder.svg"}
                                        alt={selectedConversation.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    {selectedConversation.isOnline && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                    )}
                                </div>
                                <div>
                                    <h2 className="font-semibold text-gray-900">{selectedConversation.name}</h2>
                                    <p className="text-sm text-green-600">Active Now</p>
                                </div>
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <MoreHorizontal className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 bg-white overflow-y-auto p-4 space-y-4">
                            {/* Today Label */}
                            <div className="flex justify-center">
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Today</span>
                            </div>

                            {/* Messages */}
                            {messages.map((message) => (
                                <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                                    <div className={`flex gap-2 max-w-xs lg:max-w-md ${message.isOwn ? "flex-row-reverse" : ""}`}>
                                        {!message.isOwn && (
                                            <img
                                                src={message.avatar || "/placeholder.svg"}
                                                alt={message.sender}
                                                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                                            />
                                        )}

                                        <div
                                            className={`px-4 py-2 rounded-2xl ${message.isOwn
                                                    ? "bg-blue-600 text-white rounded-br-md"
                                                    : "bg-gray-100 text-gray-900 rounded-bl-md"
                                                }`}
                                        >
                                            <p className="text-sm">{message.content}</p>
                                        </div>
                                        <div className="text-xs text-gray-500">Time</div>
                                    </div>
                                </div>
                            ))}


                        </div>

                        {/* Message Input */}
                        <div className="p-4  border-t border-gray-200">
                            <div className="flex items-center gap-3">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Paperclip className="w-5 h-5 text-gray-500" />
                                </button>
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message"
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <button
                                    onClick={handleSendMessage}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    <span className="text-sm font-medium">Send</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-gray-500">Select a conversation to start messaging</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Inbox;
