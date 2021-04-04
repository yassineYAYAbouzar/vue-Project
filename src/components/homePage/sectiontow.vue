<template>
    <div class="section-tow">
        <div class="container">
            <h2>thi is abaout</h2>
            <div class="section">
        <div class="article">
            <i class="fa fa-users fa-5x" aria-hidden="true"></i>
            <h3>this is articel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel rem quos impedit voluptatem ut? Dignissimos vel voluptatibus repellat,
                adipisci porro aliquam qui ab pariatur vitae sapiente, et asperiores. Delectus, minus.
            </p>
        </div>
        <div class="article">
            <i class="fa fa-flask fa-5x" aria-hidden="true" ></i>
            <h3>this is articel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel rem quos impedit voluptatem ut? Dignissimos vel voluptatibus repellat,
                adipisci porro aliquam qui ab pariatur vitae sapiente, et asperiores. Delectus, minus.
            </p>
        </div>
        <div class="article">
            <i class="fa fa-magic fa-5x" aria-hidden="true"></i>
            <h3>this is articel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel rem quos impedit voluptatem ut? Dignissimos vel voluptatibus repellat,
                adipisci porro aliquam qui ab pariatur vitae sapiente, et asperiores. Delectus, minus.
            </p>
        </div>
        <div class="article ">
            <i class="fa fa-handshake-o fa-5x" aria-hidden="true"></i>
            <h3>this is articel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel rem quos impedit voluptatem ut? Dignissimos vel voluptatibus repellat,
                adipisci porro aliquam qui ab pariatur vitae sapiente, et asperiores. Delectus, minus.
            </p>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'sectionTow'
}
</script>
<style lang="scss" scoped>
h2{
    &::after {
    width: 7%;
    height: 11%;
    left: 46%;
    }
}
.article {
    width: 22%;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    
    &:first-child{
        background-color: gold;
    }
    &:nth-child(2){
        background-color: rgb(255, 94, 0);
    }
    &:nth-child(3){
        background-color: rgb(28, 17, 184);
    }
    &:nth-child(4){
        background-color: rgb(28, 196, 182);
    }
}

</style>