<template>
	<div>
		<div class="productlist">
			<p class="title">精品推荐</p>
			<ul class="list">
				<li v-for="(item,index) in productLists">
					<a href="/details">
					<img :src="item.ico"/>
					<div class="detals">
						<p>{{item.title }}</p>
						<p>{{item.details}}</p>
						<p class="price">￥{{item.price}}<del>￥{{item.originalCost}}</del></p>
						<p><button>立即购买</button></p>
					</div>
					</a>
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
			
		},
		mounted () {
			this.$http.get("api/productList").then((res) => {
				console.log(res.data)
				this.$store.dispatch("fetchProductList",res.data)
			}).catch((err)=>{
				console.log(err)
			})				
			console.log(this.productLists)
		}
		
		
		
	}
</script>

<style scoped lang="less">
	.productlist{
		margin:10px auto;
		width: 98%;
		padding: 5px;
		box-shadow: 1px -1px 4px #888888;
		.title{
			font-size: 10px;
			color: #969696;
			&:before{
				content: "";
				width: 5px;
				height: 10px;
				background:salmon;
				display: inline-block;
				margin:0 5px;
			}
		}
		.list{
			li{
				display:flex;/*设为伸缩容器*/  
  			    flex-flow:row;
  			    margin-top: 10px;
  			    a{
  			    	display: -webkit-box;
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
					display: inline-block;
					padding: 5px 10px;	
					border: 1px solid rgba(230, 230, 230, 0.8);
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
						font-size: .3rem;
						padding-left:20px
					}
				}
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
</style>