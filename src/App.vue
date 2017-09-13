<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
	#app{
		height: 100%;
	}
	.mainindex{
   /*flex-flow: row wrap;flex-direction flex-wrap的简写*/
    display: flex;
    flex-direction: column;
    height: 100%;
 	.contents{    
        flex:  1;
        overflow-y: scroll;
       /* background: cornflowerblue;  */  
    }   
}
</style>
