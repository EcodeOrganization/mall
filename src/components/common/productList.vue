<template>
	<div>
		<div class="productlist">
			<ul class="list">
				<li v-for="(item,index) in productLists" @click="jump(item.id)">
					<!--<router-link to="/details/10">-->
					<a>
						<img :src="item.ico"/>
						<div class="detals">
							<p class="titt">{{item.title }}</p>
							<p class="explain">{{item.details}}</p>
							<p class="price">￥{{item.price}}<del>￥{{item.originalCost}}</del> 
							<!--<span class="collect></span>  未收藏的样式-->
								<span class="collect collected"></span</p>
							<p class="button"><button>立即购买</button></p>
						</div>
					</a>
					<!--</router-link>-->
				</li>				
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		computed:{
			productLists:{
				get(){
					return this.$store.state.productList
				},
				set(){}
			}
		},
		methods:{
			jump (value) {
				this.$router.push('/details/' +  value)
			}
		},
		mounted () {
			this.$http.get(this.resource+"/productList").then((res) => {
				this.$store.dispatch("fetchProductList",res.data)
			}).catch((err)=>{
				console.log(err)
			})				
		}	
	}
</script>

<style scoped lang="less">
	.productlist{
		margin:5px auto;
		width: 98%;
		padding: 2px 5px;
		box-shadow: 1px -1px 4px #888888;
		
		.list{
			li{
  			    margin-top: 10px;
  			    a{
  			    	display: -webkit-box;
  			    	display:flex;/*设为伸缩容器*/  
  			   		 flex-flow:row;
  			    }
	  			p{
	  			   line-height: 25px;
	  			}
				img{
					width:120px;
					height: 120px;
				}
				.detals{
					flex:1;
					padding: 5px 10px;	
					border: 1px solid rgba(230, 230, 230, 0.8);
				}
				.explain{
					line-height: 15px;
					color: #b3b3b3;
					font-size: 12px;
				}
				.titt{
					font-size: 14px;
    				font-weight: bold;
				}
				.price{
					color: #ff4b6d;
					font-size: 20px;
					del{
						color: #d8d8d8;
						font-size: 12px;
						padding-left:20px
					}
					.collect{
						display: inline-block;
						width:25px;
						height: 25px;
						margin-left: 10px;
						background: url(../../assets/img/icon-collect.png) no-repeat right bottom;
						background-size: 80% 80%;
						&.collected{
							background: url(../../assets/img/icon-collect1.png) no-repeat right bottom;
							background-size: 80% 80%;
						}
					
					}
				}
				.button{
					button{
						background: #fff;
					    border: 1px solid #4d00ff;
					    padding: 4px 10px;
					    border-radius: 4px;
					    color: #4d00ff;
					}
					
				}
				
			}
		}
		
	}
</style>