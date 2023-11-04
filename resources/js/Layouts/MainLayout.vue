<template>
    <div>
        <div class="flex items-start w-full">
            <section
                class="min-w-[100px] min-h-screen p-3 bg-slate-200 dark:bg-slate-600 transition-all ease-in-out duration-300"
                :class="{
                    'md:max-w-[100px] transition-all ease-in-out duration-300':
                        sidebarClose,
                }"
            >
                <Sidebar :open="sidebarClose" />
            </section>
            <section class="flex-1">
                <div class="bg-white shadow-md p-3 dark:bg-slate-700">
                    <nav class="flex justify-between items-center px-5">
                        <div class="flex items-center gap-2">
                            <svg
                                width="28"
                                height="28"
                                fill="currentColor"
                                class="text-slate-600 dark:text-slate-100 cursor-pointer"
                                viewBox="0 0 16 16"
                                @click="handleChangMenu()"
                            >
                                <path
                                    d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                                ></path>
                            </svg>
                            <input
                                type="text"
                                class="p-1 rounded text-sm outline-none border-gray-200 text-gray-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-600 border"
                                placeholder="search.."
                            />
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-8 h-8 bg-slate-400 rounded-full p-1 text-white cursor-pointer"
                                v-if="isDark"
                                @click="toggleDark()"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-8 h-8 bg-slate-400 rounded-full p-1 text-white cursor-pointer"
                                v-else
                                @click="toggleDark()"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                />
                            </svg>
                        </div>
                    </nav>
                </div>
                <div class="max-w-screen-xl mx-auto p-3">
                    <slot></slot>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import Sidebar from "./Sidebar.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const menu = reactive({
    open: true,
});

const sidebarClose = ref(false);

const handleChangMenu = () => {
    sidebarClose.value = !sidebarClose.value;

    console.log("side close vlue", sidebarClose.value);
};

const sidebarWidth = computed(() => {
    menu.open ? "min-w-[100px]" : "min-w-[200px]";
});

console.log("sideClose ", sidebarClose.value);
</script>

<style lang="scss" scoped></style>
