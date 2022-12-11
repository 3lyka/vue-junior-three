<template>
<div class="container">
	<div class="row">
	    <form method="post">
  				<div class="mb-3">
    					<label class="form-label">Заголовок<span class="text-danger">*</span></label>
    					<Inputs v-model="post.title" />
    				<div class="form-text">Укажите обязательно</div>
  				</div>
  				<div class="mb-3">
    					<label class="form-label">Описание</label>
    					<Inputs  v-model="post.body" />
  			     </div>
 			 		<Buttons type="submit" @click.prevent="createPost">Создать</Buttons>
		</form>
	  </div>
</div>
</template>
<script>

export default {
	data() {
		return {
			post: {
				title: "",
				body: "",
			},
			
		}
	},
	methods: {
        createPost() {
		this.post.id = Date.now();
            this.$emit('create', this.post);
		this.post = {
			title: "",
			body: "",
		}
        },
    },
}
</script>
<style lang="scss">
	
</style>