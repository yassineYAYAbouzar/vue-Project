<template>
  <div class="about">
    <welcome-massege />
  </div>
</template>
<script>
// @ is an alias to /src
import WelcomeMassege from "@/components/aboutpage/foreabout.vue";

export default {
  data:function (){
        return {

        }
    },
  name: "about",
  components: {
    WelcomeMassege,
  }, 
    
};

</script>
