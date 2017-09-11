<template>
	<div class="mainindex">
		<div class="contents">
			又突然一天
		</div>
		<mynav></mynav>
	</div>
</template>

<script>
import mynav from '../components/common/nav'
	export default{
        components:{
            mynav
        }
	}
</script>

<style lang="less" >
	/**nav*/
.mainindex{
   /*flex-flow: row wrap;flex-direction flex-wrap的简写*/
    display: flex;
    flex-direction: column;
    height: 100%;

 .contents{    
        flex:  1;
        background: greenyellow;        
    }
    .nav{
        height: 45px;
        background: #c42fff;
        li{
        	float: left;
        	text-align: center;
        	width: 33.3%;
        	line-height: 45px;
        }
    }
    
}
</style>