<template>
    <div class="w-full h-full">
        <h1
            class="text-gray-800 dark:text-slate-100 text-base sm:text-2xl font-semibold mb-4 block"
            :class="{ hidden: sidebarClose }"
        >
            MYS Ecommerce Site
        </h1>
        <ul class="flex flex-col gap-3">
            <li class="py-1 px-2 bg-gray-200">Dashboard</li>

            <li class="py-1 px-2 bg-gray-200">Products</li>
            <li class="py-1 px-2 bg-gray-200">Mail</li>
            <li class="py-1 px-2 bg-gray-200">Cart</li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    open: Boolean,
});

console.log("open", props.open);
</script>

<style lang="scss" scoped></style>
