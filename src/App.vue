<template>
  <b-container>

    <div class='component-views d-flex mb-5 justify-content-center'>
      <b-button
        v-for='(view, i) in views'
        :key='i'
        @click='currentComponent = view.value'
      >
        {{ view.name }}
      </b-button>
    </div>

    <user-list :items='users' field-id='email'>
      <template v-slot='{ item, my_key }'>
        <component :is='currentComponent' :user='item' :key='item[my_key]' />
      </template>
    </user-list>

<!--    <list :items='users'>-->
<!--      <template v-slot='{ item }'>-->
<!--        <component :is='currentComponent' :user='item' />-->
<!--      </template>-->
<!--    </list>-->
  </b-container>
</template>

<script>
import UserList from '@/components/UserList'
import UserItem from '@/components/UserItem'
import UserItemPhone from '@/components/UserItemPhone'
import UserItemAddress from '@/components/UserItemAddress'
import List from '@/components/List'

export default {
  name: 'App',
  components: {
    List,
    UserList
    // UserItem,
    // UserItemPhone,
    // UserItemAddress
  },
  data () {
    return {
      users: [],
      views: [
        {
          name: 'email',
          value: UserItem
        },
        {
          name: '+phone',
          value: UserItemPhone
        },

        {
          name: '+address',
          value: UserItemAddress
        }
      ],
      currentComponent: UserItem
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

<style lang='sass'>
#app
  padding: 3rem 1.5rem
  min-height: 100vh
  background-color: #374046

.component-views
  button + button
    margin-left: 20px
</style>
