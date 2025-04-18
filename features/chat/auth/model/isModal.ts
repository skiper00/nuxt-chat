import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore('modal', () => {
    const isModal = ref(true);

    const setModal = (value: boolean) => {
        isModal.value = value
    }

    return {
        isModal,
        setModal
    }
})