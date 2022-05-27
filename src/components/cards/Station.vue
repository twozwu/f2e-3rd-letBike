<template>
  <div class="warp">
    <div
      class="flex min-w-[220px] flex-col justify-between rounded-lg bg-primary p-3 hover:bg-primary md:flex-row md:bg-primary-light"
    >
      <div class="flex flex-col">
        <div class="flex">
          <img
            src="/images/icon-station.svg"
            alt=""
            class="mr-3 hidden md:block"
          />
          <div class="flex flex-col px-2">
            <h3 class="">捷運市政府站(3號出口)</h3>
            <div class="flex flex-col justify-between text-sm md:flex-row">
              <span class="mr-3 text-green-600">• 正常營運</span>
              <span class="text-gray-400">YouBike1.0｜總數：30 </span>
            </div>
          </div>
        </div>
        <span class="mt-4 text-sm text-gray-400"
          >地址：忠孝東路/松仁路(東南側)</span
        >
      </div>
      <div
        class="mt-3 flex space-x-5 text-secondary md:mt-0 md:flex-col md:justify-between md:space-x-0"
      >
        <div class="flex rounded-xl bg-primary-dark px-3 py-1.5">
          <span class="mr-1 text-accent-light">20</span>可選
        </div>
        <div class="flex rounded-xl bg-primary-dark px-3 py-1.5">
          <span class="mr-1 text-blue-300">20</span>可選
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
