<template>
<div class="timeLine">
    <div class="container">
        <div class="timline-content">
            <div class="year">2020</div>
            <div class="left">
                <div class="content-tem">
                    <h3>testing heading</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error maxime ex. Eveniet natus molestiae repellat quis doloribus dolor dolorum nulla officiis. Molestias repellendus adipisci libero repellat, ipsum nostrum fugiat?</p>
                </div>
            </div>
            <div class="clearfix"></div>
            
            <div class="left rghit">
                <div class="content-tem">
                    <h3>testing heading</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error maxime ex. Eveniet natus molestiae repellat quis doloribus dolor dolorum nulla officiis. Molestias repellendus adipisci libero repellat, ipsum nostrum fugiat?</p>
                </div>
            </div>
            
        </div>
        <div class="timline-content">
            <div class="year">2020</div>
            <div class="left">
                <div class="content-tem">
                    <h3>testing heading</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error maxime ex. Eveniet natus molestiae repellat quis doloribus dolor dolorum nulla officiis. Molestias repellendus adipisci libero repellat, ipsum nostrum fugiat?</p>
                </div>
            </div>
            <div class="clearfix"></div>
            
            <div class="left rghit">
                <div class="content-tem">
                    <h3>testing heading</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error maxime ex. Eveniet natus molestiae repellat quis doloribus dolor dolorum nulla officiis. Molestias repellendus adipisci libero repellat, ipsum nostrum fugiat?</p>
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'timeLine'
}
</script>
<style lang="scss">
.timeLine{
    background-color: rgb(250, 245, 245);
    text-align: left;
    padding-bottom: 20px;
    padding-top: 20px;
    .timline-content{
        position: relative;
        overflow: hidden;
        &::before{
            content: "";
            width: 2px;
            height: 100%;
            background-color: chocolate;
            position: absolute;
            left: 50%;
            margin-left: -1px;
            top: 0;
        }
        .year{
            margin: 20px auto;
            width: 50px;
            background-color: cyan;
            position: relative;
            z-index: 2;
            border-radius: 4px;
            text-align: center;
            color: #fff;
            padding: 2px 5px;
            font-weight: bold;
        }
        
        .left{
            width: calc(50% - 25px);
            margin-bottom: 40px;
            position: relative;
            float: left;
            &::before{
                content: "";
                width: 14px;
                height: 14px;
                border-radius: 50px;
                background-color: #333;
                border: 3px solid rgb(167, 13, 13);
                position: absolute;
                right: -35px;
                top: 19px;
                }
            .content-tem{
                padding: 20px;
                background-color: darkgrey;
                border-radius: 7px;
                &::before{
                    content: "";
                    border-style: solid;
                    border-width: 10px;
                    border-color: transparent transparent transparent #F50;
                    height: 0;
                    width: 0;
                    position: absolute;
                    right: -20px;
                    top: 20px;
                }
            }
        }
        .rghit{
            float: right;
            &::before{
                left: -35px;
            }
            .content-tem{
                &::before{
                    left: -20px;
                    border-color: transparent #F50 transparent transparent;
                }
            }
        }
    }
}
.clearfix{
    clear: both;
}
</style>