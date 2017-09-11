<template>
	<div>
		<nav class="nav">
			<ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/products">产品</router-link></li>
                <li><router-link to="/setting">设置</router-link></li>
            </ul>			
		</nav>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="less">
    .nav{
        height: 45px;
        background: blueviolet;
    }
</style>