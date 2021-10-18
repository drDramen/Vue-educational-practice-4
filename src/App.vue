<template>
  <div id="app">
    <b-container>
      <user-list :users="users">
      </user-list>
    </b-container>
  </div>
</template>

<script>
import UserList from '@/components/UserList'

export default {
  name: 'App',
  components: {
    UserList
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.getUsers().then(data => {
      this.users = data
    })
  },
  methods: {
    getUsers: function () {
      return fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
        .then(response => response.json())
    }
  }
}
</script>

<style lang="sass">
#app
  padding: 3rem 1.5rem
  min-height: 100vh
  background-color: #374046
</style>
