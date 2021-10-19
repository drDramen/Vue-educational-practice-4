<template>
  <div id="app">
    <b-container>
      <div class="component-views d-flex mb-5 justify-content-center">
        <b-button
          v-for="(view, i) in views"
          :key="i"
          @click="currentComponent = view.value"
        >
          {{ view.name }}
        </b-button>
      </div>
      <user-list
        :users="users"
        :currentComponent="currentComponent"
      />
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
      users: [],
      views: [
        {
          name: 'email',
          value: 'UserItem'
        },
        {
          name: '+phone',
          value: 'UserItemPhone'
        },

        {
          name: '+address',
          value: 'UserItemAddress'
        }
      ],
      currentComponent: 'UserItem'
    }
  },
  created () {
    this.getUsers().then(data => {
      this.users = data
    })
    console.log(UserList)
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

.component-views
  button + button
    margin-left: 20px
</style>
