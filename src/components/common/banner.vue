<template>
	<div>
		<div class="bannerlist">
			<ul>
				<img :src="bannerlists[newindex].srco" />
				</li>
			</ul>
			<div class="button_info">
				<p>{{bannerlists[newindex].title}}
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
				newindex:0,
					/*bannerlists:
						[
							{
								id:1,
								srco:require('../../assets/img/b2.png'),
								title:"第1张图",
								href:"https://baidu.com"
							},
							{
								id:2,
								srco:require('../../assets/img/b1.png'),
								title:"第2张图",
								href:"https://baidu.com"
							},
							{
								id:3,
								srco:require('../../assets/img/b3.png'),
								title:"第3张图",
								href:"https://baidu.com"
							},
							{
								id:4,
								srco:require('../../assets/img/b4.png'),
								title:"第4张图",
								href:"https://baidu.com"
							}
						],*/
						bannerlists:[
						{
							id:null,
							srco:null,
							title:null,
							href:null					
						}
					],
				len:0
			}
		},
		props:{},
		computed:{
			nextindex:function(){
				var len=this.bannerlists.length-1;
				if(this.newindex==len){//这个地方如果写this.newindex ===len 的话，静态数据会报错（我刚刚截图的错）
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
			var self=this;
			this.$http.get('api/bannerlists',{})
			.then(function(res){
				
			/*		
				res.map(item => {
	            item.srco = require('${item.srco}')
	        })*/
			
				
			 self.bannerlists=res.data;
			 
			 
			})
			.catch(function(err){
				console.log(err);
			});
			 this.runInv();		 
		}
	}
</script>

<style scoped lang="less">
	.bannerlist{
		position: relative;
		height:120px;
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

		