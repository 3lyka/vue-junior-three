<template>
  <div class="container">
    <div class="row">
      <h2>Создание поста</h2>
      <form method="post">
        <input @input="inputTitle" v-bind:value="title" class="title__post" type="text" name="" id="" placeholder="Название поста">
        <input @input="inputBody" v-bind:value="body" class="body__post" type="text" name="" id="" placeholder="Описание поста">
        <button class="btn button__add-post" type="submit" @click.prevent="createPost">Добавить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostForm"
}
</script>

<style scoped>

</style>