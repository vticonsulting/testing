<template>
  <div
    class="flex flex-col min-h-screen bg-white"
    style="min-height: -webkit-fill-available"
  >
    <TheHeader />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/Header";
import TheFooter from "../components/Footer";

export default {
  name: "DefaultLayout",
  components: { TheHeader, TheFooter }
};
</script>
