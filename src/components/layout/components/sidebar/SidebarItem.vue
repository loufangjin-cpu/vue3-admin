<template>
	<el-submenu v-if="item.children.length > 0" :index="item.menuId">
		<template #title>
			<i class="el-icon-location"></i>
			<span>{{ item.menuName }}</span>
		</template>
		<sidebar-item v-for="inner in item.children" :key="inner.menuId" :item="inner"></sidebar-item>
	</el-submenu>
	<el-menu-item v-else :index="item.menuId" @click="handleMenu(item)">
		<i class="el-icon-setting"></i>
		<span v-if="collapse">{{ item.menuName }}</span>
		<template #title>{{ item.menuName }}</template>
	</el-menu-item>
</template>

<script>
import { setTabs, getTabs } from 'utils/storage.js';
import { useStore } from 'vuex';

export default {
	props: {
		item: {
			type: Object,
			default() {
				return {};
			},
		},
		collapse: {
			type: Boolean,
			default() {
				return false;
			},
		},
	},
	setup() {
		const store = useStore();
		// 点击菜单回调
		const handleMenu = (obj) => {
			const { menuId, menuName } = obj;
			let tabs = getTabs();
			let flag = true;
			tabs.forEach((item) => {
				if (item.id === menuId) {
					flag = false;
				}
			});
			if (flag) {
				tabs.push({
					id: menuId,
					name: menuName,
					active: true,
				});
			}
			store.commit('getActiveMenu', menuId);
			setTabs(tabs, menuId);
		};

		return {
			handleMenu,
		};
	},
};
</script>

<style></style>
