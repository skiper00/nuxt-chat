<template>
    <div class="space-y-6">
        <form class="space-y-4">
            <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" type="email" v-model="email" placeholder="Введите email" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="space-y-2">
                <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
                <input id="password" type="password" v-model="password" placeholder="Введите пароль" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                Зарегистрироваться
            </button>
        </form>

        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">или</span>
            </div>
        </div>

        <div class="space-y-3">
            <button
                class="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md text-gray-600 font-medium hover:bg-gray-100 transition">
                <Icon icon="flat-color-icons:google" width="24" height="24" />
                Войти через Google
            </button>
            <button
                class="w-full flex items-center justify-center py-2 gap-2 border border-gray-300 rounded-md text-gray-600 font-medium hover:bg-gray-100 transition">
                    <Icon icon="mdi:github" width="24" height="24" color="black"/>
                Войти через GitHub
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';



const email = ref('')
const password = ref('')

</script>