<template>
	<router-view />
</template>

<script>
export default {
	name: 'App',
};
</script>
<style lang="scss" scoped>
html,
body {
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
}
html {
	font-size: 20px;
}
body {
	transform-origin: left top;
	background-size: 100% 100%;
}
#app {
	height: 100%;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
