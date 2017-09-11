<template>
	<div class="mainindex">
		<div class="contents">
			
		</div>
		<nav class="nav">
			<ul>
				<li>首页</li>
				<li>买买买</li>
				<li>我的</li>
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

}
 .contents{
       
        flex:  1;
        background: greenyellow;
        
    }
    .nav{
        height: 45px;
        background: blueviolet;
    }
</style>