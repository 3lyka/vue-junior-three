<script>
import Post from "@/components/Post/Post.vue";
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";

export default {
	components: {
    Post,
    Header,
    Footer
},
  data() {
    return {
	methods: {
		
	},
	computed: {
		
	}
    }
  },
}

</script>
<template>
  <router-view>
    <div class="app">
	<Header />
	<Post />
	<Footer />
    </div>
  </router-view>


</template>

<style lang="scss">
	a {
		text-decoration: none;
	}
	button {
		cursor: pointer;
	}
	li {
		text-decoration: none;
	}
</style>