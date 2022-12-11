<template>
	<div class="container">
  		<div class="row d-flex justify-content-center">
			<PostItems 
			v-for="post in posts" 
			:post="post"
			::key="post.id"
			@remove="$emit('remove', post)"
			/>
    		</div>
	</div>
</template>

<script>
import PostItems from './PostItems.vue';

	export default {
components: { PostItems },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>

</style>