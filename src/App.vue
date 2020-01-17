<template>
  <div id="app">
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link class="navigation__link" to="/">Home</router-link>
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" to="/notify">Notify</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

