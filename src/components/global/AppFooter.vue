<template>
    <div class="appfooter">
        <div class="container">
            <div class="footer">
                <img src="../../assets/30.svg" alt="">
                <ul class="contact">
                    <li><i class="fa fa-phone"></i>0606610742</li>
                    <li><i class="fa fa-phone"></i>yassinebouza97@gmail.com</li>
                </ul>
                <ul class="information">
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/blog">blog</router-link></li>
                </ul>
                <ul class="social-media">
                    <li><a><i class="fa fa-facebook-official"></i></a></li>
                    <li><a><i class="fa fa-facebook-official"></i></a></li>
                    <li><a><i class="fa fa-facebook-official"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'AppFooter',
}
</script>
<style lang="scss">
.appfooter{
    background-image: url("../../assets/04.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 200px;
    overflow: hidden;
    .footer {
    display: flex;
    justify-content:space-between;
    color: #fff;
    padding: 40px 0;
    img{
        width: 70px;
    }
    ul{
        text-align: left;
        li {
            list-style: none;
            line-height: 3em;
            i{
                padding-right: 19px;
            }
        }
        }
    .social-media {
    display: flex;
}
}
}
a {
    text-decoration: none;
    color: #fff;
}
</style>