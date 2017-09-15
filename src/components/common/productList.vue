<template>
	<div>
		<div class="productlist">
			<p class="title">精品推荐</p>
			<ul class="list">
				<li>
					<img src="../../assets/img/c1.png" />
					<div class="detals">
						<p>风衣</p>
						<p>秋季蝙蝠袖连帽针织短外套</p>
						<p class="price">￥100<del>￥145</del></p>
						<p><button>立即购买</button></p>
					</div>
				</li>
				<li>
					<img src="../../assets/img/c4.png" />
					<div class="detals">
						<p class="titt">风衣</p>
						<p>秋季蝙蝠袖连帽针织短外套</p>
						<p class="price">￥55 <del>￥78</del></p>
						<p><button>立即购买</button></p>
					</div>
				</li>
				<li>
					<img src="../../assets/img/c2.png" />
					<div class="detals">
						<p class="titt">风衣</p>
						<p>秋季蝙蝠袖连帽针织短外套</p>
						<p class="price">￥55 <del>￥78</del></p>
						<p><button>立即购买</button></p>
					</div>
				</li>
				<li>
					<img src="../../assets/img/c3.png" />
					<div class="detals">
						<p class="titt">风衣</p>
						<p>秋季蝙蝠袖连帽针织短外套</p>
						<p class="price">￥55 <del>￥78</del></p>
						<p><button>立即购买</button></p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		
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