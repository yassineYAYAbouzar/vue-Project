<template>
    <div class="Header">
            <div class="header-top">
            <img src="../../assets/30.svg" alt="">
            <div id="nav">
                <router-link to="/">home</router-link> 
                <router-link to="/about">About</router-link>
                <router-link to="/blog" replace>blog</router-link>
            </div>
            </div>
    </div>
</template>


<script>
export default {
    name:'AppHeader'
}
</script>
<style lang="scss" scoped>
.Header{
    position: fixed;
    z-index: 999;
    width: 100%;
    background: forestgreen;
    top: 0;
    .header-top{
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 80%;
    margin: auto;
    #nav {
    align-self: center;
    a{
        margin-left: 10px;
    }
    }
    }
}
</style>

