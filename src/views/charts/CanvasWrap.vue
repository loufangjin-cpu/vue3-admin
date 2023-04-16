<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
let animationFrame1 = ref();
const animationFrame2 = ref();
let centerBox = {};
let dots = [];
let everyPer = 0;
let xOffset = 0;
const act = () => {
	//清空画布
	const canvas = document.querySelector('#main');
	canvas.style.width = centerBox.height + 'px';
	canvas.style.height = centerBox.height + 'px';
	const context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawPie(everyPer, context);
	animationFrame2.value = window.requestAnimationFrame(act);
	everyPer += Math.PI / 180;
	let speed = 0.07; //波浪速度，数越大速度越快
	xOffset += speed;
};

const drawPie = () => {
	console.log(1);
};
const drawDot = () => {
	console.log(2);
};

onMounted(() => {
	centerBox = {
		width: document.querySelector('#circlePie').offsetWidth,
		height: document.querySelector('#circlePie').offsetHeight,
	};
	for (let i = 0; i < 200; i++) {
		// 随机200个运动的圆点
		let x = Math.random() * centerBox.width; // 随机的x偏移量
		let y = Math.random() * centerBox.height; // 随机y轴偏移量
		let xa = Math.random() * 2 - 1; // x轴运动速度
		let ya = Math.random() * 2 - 1; // y轴运动速度
		dots.push({
			x: x,
			y: y,
			xa: xa,
			ya: ya,
			// 两个圆点之间需要连线的距离
			max: 40,
		});
	}
	act();
	drawDot();
});
onUnmounted(() => {
	window.cancelAnimationFrame(animationFrame1);
	window.cancelAnimationFrame(animationFrame2);
});
</script>
<template>
	<div id="circlePie" class="circlePie">
		<canvas id="main" width="500" height="500"></canvas>
		<canvas id="dot"></canvas>
	</div>
</template>
<style lang="scss" scoped>
.circlePie {
	height: 100%;
	padding: 0 0 40px;
	text-align: center;
	position: relative;

	canvas {
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, 0);
	}

	#dot {
		background: rgba(0, 0, 0, 0);
	}
}
</style>
