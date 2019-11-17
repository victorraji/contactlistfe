<template>
  <div>
    <div class="header-body">
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/Contacts">All Contacts</router-link>
          </b-nav-item>
          <b-nav-item>|</b-nav-item>
          <b-nav-item>
            <router-link to="/NewContact">New</router-link>
          </b-nav-item>
          <b-nav-item>|</b-nav-item>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" v-model="search_item" placeholder="Search"></b-form-input>
            <b-button @click.prevent="search()" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
/*eslint-disable*/
import axios from "axios";
export default {
  data() {
    return {
      search_item: ""
    };
  },

  name: "HeaderNav",

  beforeMount() {},

  methods: {
    search() {
      let query = this.search_item;
      console.log(query);
      if (query === "") {
        setTimeout(
          () => this.$router.push({ path: "/SearchContactEmpty" }),
          3000
        );
      } else {
        setTimeout(
          () => this.$router.push({ path: "/SearchContact/" + query }),
          3000
        );
      }
    }
  }
};
</script>

<style>
.header-body {
  display: flex;
  justify-content: flex-end;
}
#nav {
  padding: 30px;
}
.title {
  width: 70%;
  height: 400px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
