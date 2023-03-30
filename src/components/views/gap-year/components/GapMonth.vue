<script setup lang="ts">
defineProps({
	class: {
		type: String,
		required: false
	},
	month: {
		type: [Number, String],
		required: true,
		default: 0
	},
	location: {
		type: String,
		required: false
	},
	questHaver: {
		type: String,
		required: false
	}
})
</script>

<template>
	<div class="row border-bottom border-2 m-0 row-cols-12" :class="class">
		<!-- <div class="col-2 col-md-1 border-end border-2 text-end bg-info-subtle fw-bold">
			{{month}}
		</div>
		<div class="col-5 col-md-2 border-end border-2">
			{{location}}
		</div>
		<div class="col-5 col-md-2 border-end border-2">
			{{questHaver}}
		</div>
		<div class="col-12 col-md-7">
			<slot></slot>
		</div> -->
		<div class="col-2 col-md-1 border-end border-2 text-end fw-bold">
			{{month}}
		</div>
		<div class="col-10 col-md-11">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GapMonth',
})
</script>
