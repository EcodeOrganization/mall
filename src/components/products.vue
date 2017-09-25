<template>
	<div class="mainindex">
		<div class="contents">
			<img src="../assets/img/test.png"/>
		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			aa(){
				
				
				$("#ul li").each(function(){
					if(this.hasClass("current")){   //this.就是当前循环的li;;;;;      hasClass("class")返回true或者false
						//......
					}
				})
			}
		}
      
	}

</script>

<style>

</style>