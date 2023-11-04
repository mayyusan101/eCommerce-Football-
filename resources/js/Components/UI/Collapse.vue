<template>
    <div class="max-w-sm relative overflow-hidden">
        <input
            type="checkbox"
            class="top-0 left-0 w-full h-12 opacity-0 absolute cursor-pointer peer"
        />
        <div class="p-3 bg-green-400 text-white h-12 w-full">
            Focus me to see content
        </div>
        <div
            class="absolute top-3 right-1 peer-checked:rotate-180 transition-transform duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white rotate-0"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
        </div>
        <div
            class="p-0 overflow-hidden bg-slate-200 text-gray-900 dark:text-gray-600 dark:bg-white max-h-0 peer-checked:max-h-[100px] peer-checked:p-3 transition-all duration-300"
        >
            This is contact to show when you open
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
