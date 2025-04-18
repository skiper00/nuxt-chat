<template>
    <div v-if="modalStore.isModal" class="fixed inset-0 bg-indigo-950 bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">

            <div class="flex justify-between items-center border-b pb-3 mb-4">
                <h2 class="text-xl font-semibold text-gray-800">
                    {{ showSignUp ? 'Регистрация' : 'Вход' }}
                </h2>
                <button @click="modalStore.setModal(false)" class="text-gray-500 text-2xl hover:text-gray-800 ">
                    ×
                </button>
            </div>
            <div class="mb-4">
                <SignUp v-if="showSignUp" />
                <SignIn v-else />
            </div>
            <div class="text-center">
                <button @click="showSignUp = !showSignUp" class="text-blue-500 hover:underline">
                    {{ showSignUp ? 'Уже есть аккаунт? Войдите' : 'Нет аккаунта? Зарегистрируйтесь' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useModalStore } from '../model/isModal';

const modalStore = useModalStore()
const showSignUp = ref(false)

</script>