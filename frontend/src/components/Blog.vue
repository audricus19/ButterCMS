<template>
  <div class="section-blog-post">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="post-container">
            <a class="back" href="/">Back to all posts</a>

            <div v-if="loading">
              <h4>Loading...</h4>
            </div>
            <div v-else-if="blog && !error">
              <h1>{{ blog.title }}</h1>

              <span class="by">
                Posted by
                <strong
                  >{{ blog.author.first_name }}
                  {{ blog.author.last_name }}</strong
                >
                on
                <strong>
                  {{ formattedDate }}
                </strong>
              </span>

              <div class="featured-image">
                <img
                  :src="blog.featured_image"
                  :alt="blog.featured_image_alt"
                  width="100%"
                />
              </div>

              <div class="post-body" v-html="blog.body"></div>

              <div class="post-author">
                <div class="headshot">
                  <img
                    :src="blog.author.profile_image"
                    :alt="blog.author.first_name"
                    width="100%"
                  />
                </div>
                <p>
                  <strong>About the author: </strong>He is a senior full-stack
                  developer who has 3 years of experience with Vue.js and over 5
                  years with Python and Django.
                </p>
              </div>
            </div>
            <div v-else>
              <h4>No blog content</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

import { butter } from "@/buttercms";

export default {
  name: "Blog",
  data() {
    return {
      blog: null,
      error: false,
      loading: true,
    };
  },
  computed: {
    formattedDate() {
      return moment(this.blog.created).format("MMM DD, YYYY");
    },
  },
  async mounted() {
    try {
      const response = await butter.post.retrieve(this.$route.params.slug);
      this.blog = response.data.data;
    } catch (err) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
};
</script>
