<script setup>
import ChartWrap from './ChartWrap.vue';
</script>
<template>
	<div style="height: 100%">
		<div class="header">
			<div class="selectRange"></div>
			<div class="header-title">大数据可视化平台</div>
			<div class="selectRange"></div>
		</div>
		<div class="page">
			<ChartWrap />
		</div>
	</div>
</template>
<style lang="scss" scoped>
.header {
	height: 80px;
	background: #03044a;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&-title {
		color: #75deef;
		font-size: 30px;
		letter-spacing: 10px;
	}

	.selectRange {
		height: 100%;

		.ivu-menu-horizontal {
			background: rgba(255, 255, 255, 0);

			&::after {
				height: 0;
			}

			.ivu-menu-item-active {
				border-bottom: 2px solid #264e5e;
			}

			.ivu-menu-item,
			.ivu-menu-submenu {
				color: #75deef;

				&:hover {
					border-bottom: 2px solid #264e5e;
				}
			}

			.ivu-select-dropdown {
				background: #09102e;

				.ivu-menu-item {
					color: #75deef;

					&:hover {
						border-bottom: 2px solid #264e5e;
						background-color: rgba(255, 255, 255, 0);
					}
				}
			}

			.ivu-menu-submenu-title {
				i {
					margin-right: 0;
				}

				.ivu-icon-ios-arrow-down {
					display: none;
				}
			}
		}
	}
}
.page {
	height: calc('100% - 80px');
	// height: 100vh;
}
</style>
