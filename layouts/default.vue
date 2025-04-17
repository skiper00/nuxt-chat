<template>
    <div class="flex h-screen">
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel class="min-w-[250px]">
                <div class="w-1/3 bg-primary-black w-full h-full">
                    <ChatSidebar />
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
                <div class="w-2/3 flex flex-col w-full h-full">
                    <div class="border-b bg-primary-black">
                        <ChatHeader />
                    </div>
                    <div class="flex-1 overflow-y-auto p-4 bg-[#080707]">
                        <ChatContent />
                    </div>
                    <div class="border-t bg-primary-black relative">
                        <FooterInput />
                        <ScrollTDownBtn class="absolute bottom-[65px] right-6"/>
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
        <ModalAuth />
    </div>
</template>

<script setup>
import { 
    ResizablePanelGroup, 
    ResizablePanel, 
    ResizableHandle 
} from '@/components/ui/resizable';

</script>