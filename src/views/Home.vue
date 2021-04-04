<template>
  <div class="home">
    <HelloWorld msg="n" />
    <section-one />
    <section-tow />
    <time-line />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/homePage/forHome.vue";
import sectionOne from "@/components/homePage/sectionFromhom.vue";
import sectionTow from "@/components/homePage/sectiontow.vue";
import timeLine from "@/components/homePage/timline.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    sectionOne,
    sectionTow,
    timeLine
  }
};
</script>
