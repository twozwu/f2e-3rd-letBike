<template>
  <div class="flex flex-col md:flex-row">
    <div
      class="z-50 order-1 w-screen border-t border-secondary-dark bg-primary md:order-first md:h-screen md:w-fit md:border-none"
    >
      <div class="flex justify-evenly md:mt-6 md:flex-col">
        <button
          class="my-1 min-h-[48px] rounded-xl py-1 px-5 md:m-0 md:rounded-none md:py-3 md:px-0"
        >
          <img src="/images/logo.svg" alt="" class="w-10 md:mx-3" />
        </button>
        <button
          class="my-1 rounded-xl bg-primary-dark py-1 px-9 md:m-0 md:mt-14 md:rounded-none md:py-3 md:px-0"
        >
          <img src="/images/icon_map.svg" alt="" class="mx-auto w-10" />
        </button>
        <button
          class="my-1 rounded-xl py-1 px-9 md:m-0 md:rounded-none md:py-5 md:px-0"
        >
          <img src="/images/icon_bike.svg" alt="" class="mx-auto w-10" />
        </button>
        <button
          class="my-1 rounded-xl py-1 px-9 md:m-0 md:rounded-none md:py-5 md:px-0"
        >
          <img src="/images/icon_route.svg" alt="" class="mx-auto w-10" />
        </button>
      </div>
    </div>
    <!-- <div class="order-first md:order-1">
      <router-view />
    </div> -->
    <router-view />
  </div>
</template>
<script>
// import Menu from "./components/Menu.vue";
</script>
