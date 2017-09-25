<template>
	<div class="allcontent">
		<myheaders></myheaders>
		<div class="details">
			<div class="typeshow">
				<ul>
					<li class="qqqq"><img src="../../assets/img/d1.png"></li>
					<li><img src="../../assets/img/d2.png"></li>
					<li><img src="../../assets/img/d3.png"></li>
					<li><img src="../../assets/img/d4.png"></li>
					<li><img src="../../assets/img/d5.png"></li>
				</ul>
				<div class="length">
					<p><span></span><span></span><span></span><span></span></p>
				</div>	
			</div>
			<div class="priceinfo">
				<p class="pri">￥79</p>
				<p class="others"><span>月销量：1122</span><span>产地：上海</span></p>
			</div>
			<div class="appraise">
				<p class="count">商品评价(66)</p>
				<ul>
					<li class="clearfix">
						<p class="clearfix"><img class="img" src="../../assets/img/u1.png"><span class="username">小破孩</span>
							<mystar :num=3></mystar></p>
						<p class= "text">其他商品没有统一的货源，产品判断上就有所不同，
							不过还是要更关注自身需求从评论里找出点端倪，
							而不是泛泛的看评价的有多好或者有多差。
						</p>
						<p class="date"><span>2017.09.19</span></p>
					</li>
					
					<li>
						<p class="clearfix"><img class="img" src="../../assets/img/u1.png"><span class="username">小破孩</span>
							<mystar :num=2></mystar>
						</p>
						<p class= "text">耶耶耶！！其他商品没有统一的货源，产品判断上就有所不同，
							不过还是要更关注自身需求从评论里找出点端倪，
							而不是泛泛的看评价的有多好或者有多差。
						</p>
						<p class="date"><span>2017.09.19</span></p>
					</li>
						<li>
						<p class="clearfix"><img class="img" src="../../assets/img/u1.png"><span class="username">小破孩</span>
							<mystar :num=1></mystar>
						</p>
						<p class= "text">耶耶耶！！其他商品没有统一的货源，产品判断上就有所不同，
							不过还是要更关注自身需求从评论里找出点端倪，
							而不是泛泛的看评价的有多好或者有多差。
						</p>
						<p class="date"><span>2017.09.19</span></p>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</template>
<!--//https://www.ctolib.com/qingyangmoke-vue-plugin-touch.html-->
<!--<script type="text/javascript" src="../../assets/js/touchwipe.js" ></script>-->
<script>
	
	/*$(function(){
		//console.log("添加成功");	
		 	$(".qqqq").touchwipe({
	 			wipeLeft: function() {
	 				  console.log("向左滑动");
	 			}, //左侧滑动事件
	 			wipeRight: function() { 
	 			 console.log("向右滑动");
	 			}, //右侧滑动事件
 	
 			});
			
	});*/	
	import header from "./header"	
	import star from "./star"	
	export default {
		components:{
			myheaders:header,
			mystar:star
		},
		methods:{
			
		},
		computed:{
			id(){
				return  this.$route.params.id
			},
			detailslist:{
				get(){
					return this.$store.state.getdetails					
				},
				set(){
				}
			}
		},
		mounted(){
			//console.log(this.$store);
			console.log(this.detailslist);
		},
		created(){
			this.$http.get('/api/getdetails',{id: this.id}
			).then(function (response) {
					this.$store.dispatch('setGetdetails', response.data)		
					
			}).catch(function (error) {
				
			});
		}
	}
</script>

<style lang="less">
	.allcontent{
		display: flex;
		flex-direction: column;
	}
	.details{
		flex:  1;
	
		.typeshow{
			position: relative;
			ul{
				width: 100%;
				height: 320px;
				overflow: hidden;
			
			}
			.length{
				position: absolute;
				bottom: 0;
				height: 20px;
				width: 100%;
				background: #888888;
				opacity: 0.5;
				text-align: center;
				span{
					width:6px;
					height: 6px;
					border-radius:3px;
					margin: 0 5px;
					background: white;
					display: inline-block;	
				}				
			}
		}
		.priceinfo{
			   box-shadow: 1px -1px 4px #888888;
			   
			   p{
			   		padding: 0 10px;
				   	line-height: 30px;
				   	&.pri{
			   			color: red;
			   			font-weight: bold;
			   			font-size: 18px;
			   		}
			   		&.others{
			   			span{
			   				width: 50%;
							display: inline-block;
							color:#9c9c9c;
			   			}
			   		}
			   }
			
		}
		.appraise{
			margin: 10px;
		    .count{
		    	height:30px;
		    	line-height: 30px;
			   	font-size: 16px;
			   	color: #9c9c9c;
		    	
		    }
		    ul{
		    	li{
		    		margin:5px 0;
		    		border-bottom: 1px solid #ececec;
		    		height: 150px;
		    		.img{
		    			width: 50px;
					    height: 50px;
					    border-radius: 25px;
					    float: left;
		    		}
		    		.img1{
		    			width: 20px;
					    height: 20px;
					    border-radius: 10px;
					   float: left;
		    		}
		    		
		    		.username{
		    			    float: left;
						    display: inline-block;
						    margin: 25px 5px 0;
						    font-size: 14px;
						    color: #9c9c9c;
		    		}
		    		
		    		.text{
		    			padding: 5px 0;
		    			text-indent:2em;
		    			line-height: 20px;
		    		}
		    		.date{
		    			float: right;
		    			padding-right: 10px;
		    		}
		    	}
		    }
		}
	}
</style>