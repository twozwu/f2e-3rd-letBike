<template>
  <div class="pb-[57px] md:relative">
    <div
      id="float"
      class="absolute bottom-0 z-10 h-fit w-full rounded-t-xl bg-primary-light p-3 text-white md:top-10 md:left-14 md:w-[452px] md:rounded-xl"
    >
      <div class="flex">
        <span class="my-3 font-medium md:text-2xl"
          >下班後來兜風，找單車站...</span
        >
        <img src="/images/icon_bike.svg" alt class />
      </div>
      <div class="flex">
        <input
          class="mr-2 w-full rounded-lg bg-primary-dark p-3 text-white shadow"
          type="text"
          placeholder="搜尋想去的地點附近的車站"
        />
        <button class="w-12 rounded-lg bg-accent text-lg text-black shadow">
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div class="mt-3 flex items-center justify-between">
        <div class="space-x-2 space-y-2">
          <button
            class="rounded-full border border-secondary py-1 px-3 text-secondary hover:bg-secondary hover:text-black"
          >
            keyword
          </button>
        </div>
      </div>
      <div
        class="mt-3 mb-3 flex items-center justify-between border-b border-secondary-dark pb-2"
      >
        <span>附近站點</span>
        <div class="space-x-2">
          <button class="rounded-full bg-secondary py-1 px-3 text-primary">
            全部
          </button>
          <button
            class="rounded-full border border-secondary py-1 px-3 text-secondary"
          >
            可租
          </button>
          <button
            class="rounded-full border border-secondary py-1 px-3 text-secondary"
          >
            可選
          </button>
        </div>
      </div>
      <div class="divide-y divide-secondary/60 overflow-y-auto">
        <Station />
      </div>
    </div>
  </div>
</template>

<script setup>
import Station from "./cards/Station.vue";
</script>

<style></style>
