<template>
    <div>
        <p>Подождите загрузка...</p>
    </div>
</template>

<script lang="ts" setup>
import { navigateTo } from '#app';
import { useModalStore } from '~/features/chat/auth/model/store/isModal';

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const modalStore = useModalStore();

onMounted(async () => {
    try {
        const { data: { session } } = await supabase.auth.getSession();
        if (user.value || session) {
            modalStore.setModal(false)
            await navigateTo('/')
        } else {
            modalStore.setModal(true)
            await navigateTo('/login')
        }
    } catch (e) {
        console.error('Ошибка при проверке сессии:', e)
    }
})

</script>