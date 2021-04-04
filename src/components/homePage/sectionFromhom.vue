<template>
    <div class="section section-one">
        <div class="container">
            <div class="content">
                <h2>helllo world</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est consequatur quidem doloremque provident voluptatum pariatur eum magni veniam vel ullam fugiat blanditiis, laudantium sequi ducimus quae reiciendis velit fuga.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est consequatur quidem doloremque provident voluptatum pariatur eum magni veniam vel ullam fugiat blanditiis, laudantium sequi ducimus quae reiciendis velit fuga.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est consequatur quidem doloremque provident voluptatum pariatur eum magni veniam vel ullam fugiat blanditiis, laudantium sequi ducimus quae reiciendis velit fuga.
                </p>
            </div>
            <img src="assets/image-daniel.png" alt="">
        </div>
        
    </div>
</template>
<script>
export default {
    name:'sectionOne'
}
</script>
<style lang="scss">
.container{
    width: 80%;
    margin: auto;
}
.section{
    display: flex;
    text-align: left;
    margin-bottom: 60px;
    margin-top: 60px;
    justify-content: space-between;
    .content {
        width: 60%;
        
}
}
h2{
    position: relative;
    &::after {
    content: "";
    width: 13%;
    bottom: -11px;
    height: 11%;
    left: 5%;
    position: absolute;
    background-color: #333;
    cursor: pointer;
            }
        }
</style>