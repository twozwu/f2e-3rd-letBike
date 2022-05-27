<template>
  <!-- id="map"要在最外層，script才能綁到 -->
  <div id="map" class="relative h-[calc(100vh-57px)] w-full md:h-screen">
    <div
      id="float"
      class="absolute bottom-0 h-fit w-full rounded-t-xl bg-primary-light p-3 text-white md:top-10 md:left-14 md:w-[452px] md:rounded-xl"
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
      <div class="divide-y-2">
        <div class="flex justify-between p-3">
          <div class="flex flex-col">
            <div class="flex">
              <img src="/images/icon-station.svg" alt="" />
              <div class="flex flex-col px-2">
                <h3 class="">捷運市政府站(3號出口)</h3>
                <div class="flex items-center justify-between text-sm">
                  <span class="mr-3 text-green-600">• 正常營運</span>
                  <span class="text-gray-400">YouBike1.0｜總數：30 </span>
                </div>
              </div>
            </div>
            <span class="mt-4 text-sm text-gray-400"
              >地址：忠孝東路/松仁路(東南側)</span
            >
          </div>
          <div class="flex flex-col justify-between">
            <div class="flex rounded-xl bg-primary px-3 py-1.5">
              <span class="mr-1 text-accent-light">20</span>可選
            </div>
            <div class="flex rounded-xl bg-primary px-3 py-1.5">
              <span class="mr-1 text-blue-300">20</span>可選
            </div>
          </div>
        </div>
        <div class="flex justify-between p-3">
          <div class="flex flex-col">
            <div class="flex">
              <img src="/images/icon-station.svg" alt="" />
              <div class="flex flex-col px-2">
                <h3 class="">捷運市政府站(3號出口)</h3>
                <div class="flex items-center justify-between text-sm">
                  <span class="mr-3 text-green-600">• 正常營運</span>
                  <span class="text-gray-400">YouBike1.0｜總數：30 </span>
                </div>
              </div>
            </div>
            <span class="mt-4 text-sm text-gray-400"
              >地址：忠孝東路/松仁路(東南側)</span
            >
          </div>
          <div class="flex flex-col justify-between">
            <div class="flex rounded-xl bg-primary px-3 py-1.5">
              <span class="mr-1 text-accent-light">20</span>可選
            </div>
            <div class="flex rounded-xl bg-primary px-3 py-1.5">
              <span class="mr-1 text-blue-300">20</span>可選
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref, onMounted } from "vue";
import icon_myLocation from "@/assets/images/icon_myLocation.svg";

let mapbox = null;
const userLocationIcon = L.icon({
  iconUrl: icon_myLocation,
  iconSize: [170, 170],
  iconAnchor: [85, 85],
  popupAnchor: [0, -20],
});

onMounted(() => {
  init();
  getUserLocation();
});

function init() {
  mapbox = L.map("map").setView([0, 0], 13);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/dark-v10",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiaG9udGVydHJpYm9yIiwiYSI6ImNrejN2c2libTAwcWUyc2xpaDEyY2kwM3EifQ.rz7mhiE7aH3L8pVhIxMWrQ",
    }
  ).addTo(mapbox);

  // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   attribution:
  //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  // }).addTo(mapbox);
}

function getUserLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const longitude = position.coords.longitude; // 經度
    const latitude = position.coords.latitude; // 緯度
    const userLocation = [latitude, longitude];
    mapbox.setView(userLocation, 15);
    L.marker(userLocation, { icon: userLocationIcon })
      .addTo(mapbox)
      .bindPopup("現在位置");
  });
}
</script>
<style>
@media (max-width: 960px) {
  .leaflet-control-attribution {
    display: none;
  }
}
</style>
<style scoped>
#float {
  z-index: 500;
}
</style>
