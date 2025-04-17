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
                Войти
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const email = ref('')
const password = ref('')


</script>