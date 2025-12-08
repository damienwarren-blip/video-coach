import React from 'react';

// This is a placeholder component to hold the static HTML content
// converted into JSX, ensuring Next.js serves it correctly.

const QuickChatVideoPortal = () => {
    return (
        <div className="min-h-screen antialiased flex flex-col items-center p-4 sm:p-8 bg-white font-inter">

            {/* In a real Next.js app, external Tailwind and Fonts are handled differently,
               but for this single-file conversion, we rely on the component structure. */}
            

            {/* Header / Logo Section - Updated with QuickChat Brand and Play Button Icon */}
            <header className="w-full max-w-4xl mb-12 flex justify-between items-center py-4">
                {/* QuickChat Logo with Play Button Icon and Gradient Style */}
                <div className="flex items-center space-x-3">
                    {/* Icon: Play Button SVG */}
                    <svg className="w-10 h-10 text-transparent fill-transparent stroke-purple-600" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.82V8.18a1 1 0 011.555-.832l3.197 2.132c.207.138.207.485 0 .623z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {/* Logo Text: QuickChat with gradient background and clipped text */}
                    <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
                        QuickChat
                    </span>
                </div>
            </header>

            {/* Main Content Area: Videoask Embed */}
            <main className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-100">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">Let's Connect Via Video</h1>
                <p className="text-gray-700 mb-8 text-center max-w-lg mx-auto font-medium">Click below to start the interactive video experience. We look forward to hearing from you!</p>

                {/* Responsive Iframe Container for Videoask */}
                <div className="relative w-full overflow-hidden" style={{ paddingTop: '177.78%' }}>
                    <iframe
                        src="https://www.videoask.com/f2ijwsnrz"
                        allow="camera; microphone; geolocation; speaker; autoplay; fullscreen"
                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                        style={{ border: 'none', minHeight: '500px' }}
                        title="Interactive Video Link"
                    ></iframe>
                </div>
            </main>

            {/* Footer (Optional) */}
            <footer className="mt-8 text-center text-sm text-gray-400">
                <p>&copy; 2025 QuickChat.space</p>
            </footer>

        </div>
    );
};

export default QuickChatVideoPortal;