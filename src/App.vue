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
import UserItem from '@/components/UserItem'
import UserItemPhone from '@/components/UserItemPhone'
import UserItemAddress from '@/components/UserItemAddress'

export default {
  name: 'App',
  components: {
    UserList
  },
  data () {
    return {
      users: [],
      views: [
        { name: 'email', value: UserItem },
        { name: '+phone', value: UserItemPhone },
        { name: '+address', value: UserItemAddress }
      ],
      currentComponent: UserItem
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    getUsers: async function () {
      const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      this.users = await response.json()
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
