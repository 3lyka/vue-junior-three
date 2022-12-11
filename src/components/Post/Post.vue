<template>
	<div>
		<PostForm 
		class="mb-3" 
		@create="createPost" 
		
		/>
		<PostList 
		class="mb-3" 
		:posts="posts"
		@remove="removePost"
		/>
	</div>
</template>

<script>
import PostForm from './PostForm.vue';
import PostList from './PostList.vue';


export default {
    name: "Post",
    data() {
        return {
            posts: [
                { id: 1, title: "Первый пост", body: "описание" },
                { id: 2, title: "Второй пост", body: "описание" },
            ],
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
		console.log(this.posts);
        },
	  removePost(post) {
		this.posts = this.posts.filter(p => p.id !== post.id)
	  }
    },
    components: {  PostForm, PostList }
}
</script>

<style scoped>

</style>