<template>
	<div>
		<input :value="modelValue" @input="updateInput" type="text" class="form-control">
	</div>
</template>
<script>
export default {
	name: 'Inputs',
	props: {
		modelValue: { String, Number}
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	},
}
</script>
<style lang="scss">
	
</style>