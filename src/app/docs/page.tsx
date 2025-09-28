
import Link from "next/link";

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Documentation</h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                            <p className="text-gray-600 mb-4">
                                Learn how to create your first seating chart with SeatMap Studio.
                            </p>
                            <Link href="/demo" className="text-blue-600 hover:text-blue-800 font-medium">
                                Try the Demo →
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
                            <p className="text-gray-600 mb-4">
                                Complete API documentation for integrating with your platform.
                            </p>
                            <button className="text-gray-500 font-medium" disabled>
                                Coming Soon
                            </button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-4">Examples</h2>
                            <p className="text-gray-600 mb-4">
                                Real-world examples and use cases for different venue types.
                            </p>
                            <Link href="/demo" className="text-blue-600 hover:text-blue-800 font-medium">
                                View Examples →
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-4">Integration Guide</h2>
                            <p className="text-gray-600 mb-4">
                                Step-by-step guide for integrating with your ticketing platform.
                            </p>
                            <button className="text-gray-500 font-medium" disabled>
                                Coming Soon
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}