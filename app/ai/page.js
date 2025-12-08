<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Communication Portal</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Inter Font Family -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f7f9fc;
        }
        /* Custom styling for the Play button icon stroke to match the gradient start color */
        .logo-icon-color {
            stroke: #9333ea; /* Purple-600 */
        }
    </style>
</head>
<body class="min-h-screen antialiased flex flex-col items-center p-4 sm:p-8">

    <!-- Header / Logo Section - Updated with QuickChat Brand and Play Button Icon -->
    <header class="w-full max-w-4xl mb-12 flex justify-between items-center py-4">
        <!-- QuickChat Logo with Play Button Icon and Gradient Style -->
        <div class="flex items-center space-x-3">
            <!-- Icon: Play Button SVG -->
            <svg class="w-10 h-10 text-transparent fill-transparent logo-icon-color" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.82V8.18a1 1 0 011.555-.832l3.197 2.132c.207.138.207.485 0 .623z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <!-- Logo Text: QuickChat with gradient background and clipped text -->
            <span class="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
                QuickChat
            </span>
        </div>
    </header>

    <!-- Main Content Area: Videoask Embed -->
    <main class="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-100">
        <h1 class="text-3xl font-extrabold text-gray-900 mb-4 text-center">Let's Connect Via Video</h1>
        <p class="text-gray-500 mb-8 text-center max-w-lg mx-auto">Click below to start the interactive video experience. We look forward to hearing from you!</p>

        <!-- Responsive Iframe Container for Videoask -->
        <div class="relative w-full overflow-hidden" style="padding-top: 177.78%;">
             <!--
                The Videoask iframe is designed to be highly responsive and occupy the main content area.
                The padding-top trick ensures the iframe maintains a vertical aspect ratio even on smaller screens.
            -->
            <iframe
                src="https://www.videoask.com/f2ijwsnrz"
                allow="camera; microphone; geolocation; speaker; autoplay; fullscreen"
                class="absolute top-0 left-0 w-full h-full rounded-xl"
                style="border: none; min-height: 500px;"
                title="Interactive Video Link"
            ></iframe>
        </div>
    </main>

    <!-- Footer (Optional) -->
    <footer class="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 QuickChat.space</p>
    </footer>

</body>
</html>