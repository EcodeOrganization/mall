<template>
	<div>
		<div class="bannerlist">
			<ul><!--/v-for="(item,index) in bannerlists"-->
				<li>
					<img :src="bannerlists[newindex].src" />
				</li>
			</ul>
			<div class="button_info">
				<p>{{bannerlists[0].title}}
					<span class="circle">
						<i></i>
						<i></i>
						<i></i>
						<i></i>
					</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				isshow:null,
				newindex:3,
				bannerlists:[
					{
						id:1,
						src:require('../../assets/img/b2.png'),
						title:"第1张图",
						href:"https://baidu.com"
					},
					{
						id:2,
						src:require('../../assets/img/b1.png'),
						title:"第2张图",
						href:"https://baidu.com"
					},
					{
						id:3,
						src:require('../../assets/img/b3.png'),
						title:"第3张图",
						href:"https://baidu.com"
					},
					{
						id:4,
						src:require('../../assets/img/b4.png'),
						title:"第4张图",
						href:"https://baidu.com"
					}
				],
				
			}
		},
		props:{},
	/*	data(){
		    return {
				newindex:0
			}
		},*/
		computed:{
			nextindex:function(){
				var len=this.bannerlists;
				if(this.newindex ===3){
					return 0;
				}else{
					return this.newindex+1;
				}
			}
		},
		methods:{
			gotoo:function(index){   
		        this.newindex=index;
			},
			runInv(){
		       setInterval(()=>{// 相当于 this.invId=setInterval(function(){
		        this.gotoo(this.nextindex)
		        },1000)
		     },
		},
		mounted(){	
			 this.runInv();
		}
	}
</script>

<style scoped lang="less">
	.bannerlist{
		position: relative;
		height:100px;
		width: 100%;
		position: relative;
		overflow: hidden;
		.button_info{
			height: 20px;
			width: 100%;
			background: #dcdcdc;
			opacity: 0.7;
			position:absolute;
			bottom: 0;
			color: #011fff;
			font-size: 10px;
			text-align: left;
			.circle{
				opacity: 1;
				width: 60px;
				float:right;
				display: inline-block;
				padding: 0 5px;
				i{
					width:6px;
					height: 6px;
					display: inline-block;
					border-radius: 3px;
					background: #011fff;
					margin: 0 1px;				
				}		
			}		
		}
	}
	
</style>