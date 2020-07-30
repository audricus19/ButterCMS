<template>
  <div class="section-blog-header">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-1 col-sm-12">
          <h3>Join thousands of subscribers and get our monthly newsletter!</h3>
          <form action method="post">
            <input
              type="email"
              value
              name="EMAIL"
              class="required email"
              placeholder="Email Address"
            />
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>