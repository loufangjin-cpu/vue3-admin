<script setup>
import { CanvasWrap } from './pageBox';
</script>
<template>
	<el-row :gutter="16">
		<el-col :xs="24" :sm="24" :md="24">
			<el-card shadow="never">
				<CanvasWrap />
			</el-card>
		</el-col>
	</el-row>
</template>

<style lang="scss" scoped></style>
