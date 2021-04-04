<template>
  <div class="our-blog">
    <div class="container">
      <div class="blogest">
      <div class="postes-aera">
        <blogPosts/>
      </div>
      <div class="sidebar">
        <sidebar />
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import blogPosts from "@/components/blog/blogPostes.vue";
import sidebar from "@/components/blog/sidebarBlog.vue";

export default {
  name: "blog",
  components: {
    blogPosts,
    sidebar,
  },
};
</script>
<style lang="scss" >
.blogest{
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 80px;
  margin-bottom: 126px;
}
.sidebar {
    width: 24%;
    margin-top: 60px;
    background: #03a9f4;
    border-radius: 15px;
    padding: 20px;
}
</style>