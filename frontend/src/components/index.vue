<template>
  <div class="section-blog">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-1 col-sm-12">
          <div v-if="loading">
            <h4>Loading...</h4>
          </div>
          <div v-else-if="blogs.length > 0" class="articles">
            <div v-for="blog in blogs" :key="blog.slug" class="article">
              <a :href="`/blog/${blog.slug}`">
                <img
                  :src="blog.featured_image"
                  :alt="blog.featured_image_alt"
                  width="100%"
                />
              </a>
              <div class="inner">
                <h3>
                  <a :href="`/blog/${blog.slug}`">{{ blog.title }}</a>
                </h3>
              </div>
            </div>
          </div>
          <div v-else>
            <h4>No blogs</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { butter } from "@/buttercms";

export default {
  name: "HomePage",
  data() {
    return {
      blogs: [],
      error: false,
      loading: true,
    };
  },
  async mounted() {
    try {
      const response = await butter.post.list({ page: 1, page_size: 10 });
      this.blogs = response.data.data;
    } catch (err) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
};
</script>
