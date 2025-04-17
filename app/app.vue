<template>
  <div>
    <NuxtLoadingIndicator color="#007bff" :duration="2000" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script lang="ts" setup>
// import { reactive, watch, onMounted, type Ref } from 'vue';
// import type { Auth0VueClient } from '@auth0/auth0-vue';

// const { $auth0 } = useNuxtApp();
// const auth0 = $auth0 as Auth0VueClient;

// const state = reactive({
//   isAuthenticated: false,
//   showModal: true,
//   isLoading: true
// });


// watch(auth0.isAuthenticated, (isAuth: boolean) => {
//   if (isAuth) {
//     state.isAuthenticated = isAuth;
//     state.showModal = !isAuth;
//   }
// })

// const closeAuthModal = () => {
//   state.showModal = false;
// }

// onMounted(()=>{
// state.isAuthenticated = auth0.isAuthenticated.value;
// state.showModal = !state.isAuthenticated
// })

</script>