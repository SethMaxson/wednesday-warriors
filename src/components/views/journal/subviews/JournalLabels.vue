<script setup lang="ts">
defineProps({
	class: {
		type: String,
		required: false
	},
	session: {
		type: [Number, String],
		required: false,
		default: 0
	},
	name: {
		type: String,
		required: true
	},
	party: {
		type: String,
		required: false
	},
	date: {
		type: String,
		required: false
	}
})
</script>

<template>
	<div class="row align-items-start border-bottom w-100 m-0" :class="class">
		<div class="col-1 border-end">
			{{session}}
		</div>
		<div class="col border-end">
			{{name}}
		</div>
		<div class="col border-end">
			{{party}}
		</div>
		<div class="col">
			{{date}}
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'JournalLabels',
}
</script>
