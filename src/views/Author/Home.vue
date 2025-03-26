<script setup>
import { onMounted, ref } from 'vue';

const author = ref(null);

onMounted(() => {
    const slug = 'arsenixc';
    const data = {
        'data': {
            'user_name': 'Arsenixc',
            'watcher': '67.1K',
        }
    }
})
</script>
<template>
    <div class="bg-gray-900 text-white">
        <!-- Header -->
        <div class="relative h-64 sm:h-80 md:h-96">
            <div class="absolute inset-0">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/arsenixc/art/Future-city-948674581"
                    alt="Banner" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900"></div>
            </div>

            <!-- Profile Info -->
            <div
                class="absolute bottom-0 left-0 p-4 md:p-8 flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/avatar/arsenixc" alt="arsenixc"
                    class="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white">
                <div class="text-center sm:text-left">
                    <div class="flex items-center justify-center sm:justify-start space-x-2">
                        <h1 class="text-3xl md:text-4xl font-bold">arsenixc</h1>
                        <span class="bg-yellow-600 text-xs md:text-sm px-2 py-1 rounded">CORE</span>
                    </div>
                    <p class="text-gray-300">Environment Artist</p>
                    <div class="flex flex-wrap justify-center sm:justify-start gap-4 mt-2 text-sm md:text-base">
                        <span>67.1K Watchers</span>
                        <span>465 Deviations</span>
                        <span>1.7M Pageviews</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="bg-gray-800 border-b border-gray-700 overflow-x-auto">
            <div class="container mx-auto px-4">
                <ul class="flex whitespace-nowrap">
                    <li><a href="#"
                            class="py-4 px-3 md:px-4 inline-block text-green-400 border-b-2 border-green-400">Home</a>
                    </li>
                    <li><a href="#" class="py-4 px-3 md:px-4 inline-block hover:text-green-400">Gallery</a></li>
                    <li><a href="#" class="py-4 px-3 md:px-4 inline-block hover:text-green-400">Favourites</a></li>
                    <li><a href="#" class="py-4 px-3 md:px-4 inline-block hover:text-green-400">Posts</a></li>
                    <li><a href="#" class="py-4 px-3 md:px-4 inline-block hover:text-green-400">About</a></li>
                </ul>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-6 md:py-8">
            <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">Future city</h2>

            <!-- Gallery Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <!-- Gallery Item -->
                <div
                    class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/arsenixc/art/Future-city-948674581"
                        alt="Future City" class="w-full h-40 sm:h-48 object-cover">
                    <div class="p-3 md:p-4">
                        <h3 class="font-semibold text-sm md:text-base">Future City</h3>
                        <p class="text-gray-400 text-xs md:text-sm">26.7K Views</p>
                    </div>
                </div>

                <!-- Thêm các gallery items tương tự -->
                <div
                    class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/arsenixc/art/Future-city-948674581"
                        alt="Future City" class="w-full h-40 sm:h-48 object-cover">
                    <div class="p-3 md:p-4">
                        <h3 class="font-semibold text-sm md:text-base">Night City</h3>
                        <p class="text-gray-400 text-xs md:text-sm">22.3K Views</p>
                    </div>
                </div>

                <div
                    class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/arsenixc/art/Future-city-948674581"
                        alt="Future City" class="w-full h-40 sm:h-48 object-cover">
                    <div class="p-3 md:p-4">
                        <h3 class="font-semibold text-sm md:text-base">Cyber City</h3>
                        <p class="text-gray-400 text-xs md:text-sm">19.8K Views</p>
                    </div>
                </div>
            </div>

            <!-- Featured Gallery Section -->
            <section class="mt-8 md:mt-12">
                <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                    <span>Featured Gallery</span>
                    <a href="#" class="ml-auto text-sm text-blue-400 hover:underline">See All</a>
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <div
                        class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/arsenixc/art/shining-nikki"
                            alt="Shining Nikki" class="w-full h-40 sm:h-48 object-cover">
                        <div class="p-3 md:p-4">
                            <h3 class="font-semibold text-sm md:text-base">Shining Nikki Headquarter</h3>
                            <p class="text-gray-400 text-xs md:text-sm">10.1K Views</p>
                        </div>
                    </div>
                    <!-- More Featured Items -->
                </div>
            </section>

            <!-- WRB Section -->
            <section class="mt-8 md:mt-12">
                <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                    <span>WRB</span>
                    <a href="#" class="ml-auto text-sm text-blue-400 hover:underline">See All</a>
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <div
                        class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/arsenixc/art/wink-witch-wrb"
                            alt="Wink Witch WRB" class="w-full h-40 sm:h-48 object-cover">
                        <div class="p-3 md:p-4">
                            <h3 class="font-semibold text-sm md:text-base">Wink Witch WRB</h3>
                            <p class="text-gray-400 text-xs md:text-sm">23.7K Views</p>
                        </div>
                    </div>
                    <!-- More WRB Items -->
                </div>
            </section>

            <!-- Deviation Spotlight -->
            <section class="mt-8 md:mt-12">
                <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">Deviation Spotlight</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div class="bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/arsenixc/art/akihabara"
                            alt="Akihabara South Exit night" class="w-full h-48 md:h-64 object-cover">
                        <div class="p-4">
                            <h3 class="font-semibold text-base md:text-lg">Akihabara South Exit night</h3>
                            <p class="text-gray-400 text-sm">562K Views</p>
                        </div>
                    </div>
                    <!-- More Spotlight Items -->
                </div>
            </section>

            <!-- Comments Section -->
            <section class="mt-8 md:mt-12">
                <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">Profile Comments <span
                        class="text-gray-400">2.3K</span></h2>

                <!-- Comment Form -->
                <div class="bg-gray-800 rounded-lg p-4 mb-6">
                    <div class="flex items-start space-x-4">
                        <div class="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0"></div>
                        <div class="flex-grow">
                            <textarea placeholder="Join the community to add your comment..."
                                class="w-full bg-gray-700 rounded-lg p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                                rows="3"></textarea>
                            <div class="mt-2 flex justify-end">
                                <button
                                    class="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                                    Comment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comments List -->
                <div class="space-y-4">
                    <!-- Comment Item -->
                    <div class="bg-gray-800 rounded-lg p-4">
                        <div class="flex items-start space-x-4">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/avatar/annasworld9999"
                                alt="annasworld9999" class="w-10 h-10 rounded-full">
                            <div class="flex-grow">
                                <div class="flex items-center">
                                    <h3 class="font-semibold text-sm">annasworld9999</h3>
                                    <span class="text-gray-400 text-xs ml-2">Mar 7, 2025</span>
                                </div>
                                <p class="text-sm mt-1">Amazing art!!!</p>
                                <button class="text-sm text-gray-400 mt-2 hover:text-white">Reply</button>
                            </div>
                        </div>
                    </div>

                    <!-- More Comments -->
                    <div class="bg-gray-800 rounded-lg p-4">
                        <div class="flex items-start space-x-4">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/avatar/dojdinka"
                                alt="dojdinka" class="w-10 h-10 rounded-full">
                            <div class="flex-grow">
                                <div class="flex items-center">
                                    <h3 class="font-semibold text-sm">dojdinka</h3>
                                    <span class="text-gray-400 text-xs ml-2">Aug 28, 2024</span>
                                </div>
                                <p class="text-sm mt-1">❤️</p>
                                <button class="text-sm text-gray-400 mt-2 hover:text-white">Reply</button>
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <button class="text-blue-400 hover:underline text-sm">Load more comments</button>
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section class="mt-8 md:mt-12">
                <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">About arsenixc</h2>
                <div class="bg-gray-800 rounded-lg p-4 md:p-6">
                    <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                        <span class="text-sm md:text-base">Artist // Professional // Digital Art</span>
                    </div>
                    <div class="flex flex-wrap gap-4 text-gray-400 text-sm md:text-base">
                        <span>Apr 27</span>
                        <span>Deviant for 16 years</span>
                        <a href="https://twitter.com/ArsXC" class="text-blue-400 hover:underline">twitter.com/ArsXC</a>
                    </div>
                    <div class="mt-4">
                        <p class="text-red-400 font-bold text-sm md:text-base">DO NOT USE MY WORKS ON YOUTUBE COVERS OR
                            OTHER GAMES etc. NO PERMISSION FOR ALL WORKS!</p>
                        <p class="mt-2 text-gray-300 text-sm md:text-base">Most of my pictures in galleries, especially
                            backgrounds is part of commercial projects, other companies have commercial rights to use
                            this
                            images, so its cannot use any else.</p>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-800 mt-8 md:mt-12 py-6 md:py-8">
            <div class="container mx-auto px-4 text-center text-gray-400 text-sm md:text-base">
                <p>&copy; 2025 arsenixc. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>
<style scoped></style>