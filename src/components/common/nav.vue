<template>
	<div>
		<nav class="nav">
			<ul>
                <li class="ind"><router-link to="/index"><i></i>首页</router-link></li>
                <li class="pro"><router-link to="/products"><i></i>产品</router-link></li>
                <li class="set"><router-link to="/setting"><i></i>我的</router-link></li>
            </ul>			
		</nav>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="less">
	.active{
		color: royalblue !important;
	}
    .nav{
        height: 50px;
        background: #fff;
        li{
        	float: left;
        	text-align: center;
        	width: 33.3%;
        	
        	a{
        		top: 20px;
        		color: #4d00ff;
        	}
        	i{
        		display: block;
        		width: 25px;
        		height: 25px;
        		text-align: center;
        		margin: 5px auto;
        	}
        	&.ind{
        		i{
        			background: url(../../assets/img/1.png) no-repeat center top;
        		}
        	}
        	&.pro{
        		i{
        			background: url(../../assets/img/22.png) no-repeat center top;
        		}	
        	}
        	&.set{
        		i{
        			background: url(../../assets/img/3.png) no-repeat center top;
        		}
        	}
        	
        	
        	
        }
    }
</style>