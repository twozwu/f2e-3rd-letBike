<template>
  <div class="z-50 flex flex-col-reverse md:flex-row">
    <div
      class="w-screen border-t border-secondary-dark bg-primary md:h-screen md:w-fit md:border-none"
    >
      <div class="flex justify-evenly md:flex-col">
        <button>
          <img
            src="/images/logo.svg"
            alt=""
            class="object-fit mx-3 w-10 md:mt-6"
          />
        </button>
        <button
          class="m-1 rounded-xl bg-primary-dark py-1 px-9 md:m-0 md:mt-14 md:rounded-none md:py-3 md:px-0"
        >
          <img
            src="/images/icon_map.svg"
            alt=""
            class="object-fit mx-auto w-10"
          />
        </button>
      </div>
    </div>
    <div class="order-first md:order-1">
      <router-view />
    </div>
    <!-- <router-view /> -->
  </div>
</template>
<script></script>
