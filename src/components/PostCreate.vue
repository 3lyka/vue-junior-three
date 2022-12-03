<template>
	<div class="container">
  		<div class="row">
			<div class="hello" v-for="posts in post">
    				<h5>Название поста : {{ posts.title }}</h5>
    				<p>Описание : {{ posts.body }}</p>
  			</div>
    		</div>
	</div>
  <div class="container">
    <div class="row">
      <h4>Создание поста</h4>
      <form method="post">
        <input @input="inputTitle" v-bind:value="title" class="m-1 title__post" type="text" name="" id=""
               placeholder="Название поста">
        <input @input="inputBody" v-bind:value="body" class="m-1 body__post" type="text" name="" id=""
               placeholder="Описание поста">
        <button class="btn btn-primary m-1 button__add-post" type="submit" @click.prevent="createPost">Добавить</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostCreate",

  data() {
    return {
      post: [
        {id: 1, title: 'Первый пост', body: "описание"},
        {id: 2, title: 'Второй пост', body: "описание"},
        {id: 3, title: 'Третий пост', body: "описание поста три"},
      ],
      title: '',
      body: '',
    }
  },

  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.post.push(newPost);
      this.title = '';
      this.body = '';
    },
    inputTitle(event) {
      this.title = event.target.value;
    },
    inputBody(event) {
      this.body = event.target.value;
    }
  },
}
</script>

<style scoped>

</style>