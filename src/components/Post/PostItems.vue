<template>
	<div class="card col-md-2 col-12 m-1" style="width: 18rem;" >
		  <div class="card-body">
			    <h5 class="card-title">{{ post.title }}</h5>
			    <p class="card-text">{{ post.body }}</p>
			    <div class="d-flex">
				<Buttons class="m-1">Подробнее</Buttons>
				<Buttons @click="$emit('remove', post)" class="m-1">Удалить</Buttons>
			    </div>
		  </div>
	</div>
</template>

<script>

	export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>