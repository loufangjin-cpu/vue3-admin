<template>
	<layout>
		<template #home>
			<router-view v-slot="{ Component }">
				<!-- <transition name="move" mode="out-in"> -->
				<component :is="Component"></component>
				<!-- </transition> -->
			</router-view>
		</template>
	</layout>
</template>

<script>
import Layout from './Layout.vue';
import Home from 'views/Home.vue';
export default {
	components: { Layout, Home },
};
</script>

<style></style>
