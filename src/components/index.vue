<template>
	<div class="mainindex">
		<div class="contents">
			
		</div>
		<nav class="nav">
			<ul>
				<router-link :to="/setting" tag="li"></router-link>
				
			</ul>			
		</nav>
	</div>
</template>

<script>
	export default{

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