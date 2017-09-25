<template>
	<div class="header">
		<i @click="back()"></i>
		<span class="h1">{{this.title}}</span>			
	</div>
</template>

<script>
	export default{
		props:{
			title:null
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		mouneted(){
			
		}
	}
</script>

<style lang="less">
	.header{
		height: 45px;
		line-height: 45px;
		width: 100%;
		i{
			float: left;
			display: inline-block;
			width: 32px;
			height: 32px;
			margin: 5px 10px;
			background:url(../../assets/img/icon_back.png) no-repeat left top;
		}
		.h1{
		    position: relative;
		    top: 0;
		    margin-left: 50px;
		    width: 120px;
		    display: inline-block;
		    text-align: center;
		    font-size: 16px;
    		font-weight: bold;
    		color:#929292;
		    
		}
	}
</style>