<template>
    <div class="flex h-screen">
        <div class="w-1/3 bg-primary-black ">
            <ChatSidebar />
        </div>
        <div class="w-2/3 flex flex-col">
            <div class="border-b bg-primary-black">
                <ChatHeader />
            </div>
            <div class="flex-1 overflow-y-auto p-4 bg-[#080707]">
                <ChatContent />
            </div>
            <div class="border-t bg-primary-black">
                <FooterInput />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>