<template>
  <!-- id="map"要在最外層，script才能綁到 -->
  <div id="map" class="relative h-[calc(100vh-57px)] w-full md:h-screen"></div>
  <!-- <div id="map" class="relative md:h-screen"></div> -->
</template>
<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref, onMounted } from "vue";
import icon_myLocation from "@/assets/images/icon_myLocation.svg";
import Station from "./cards/station.vue";

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
