import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore('modal', () => {
    const isModal = ref(false);

    const setModal = (value: boolean) => {
        isModal.value = value
    }

    return {
        isModal,
        setModal
    }
})