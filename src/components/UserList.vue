<template>
  <div>
    <div class="row">
      <div
        v-for="user in users"
        :key="user.id"
        class="col-sm-6 col-md-4 d-flex align-items-stretch"
      >
        <component
          :is="currentComponent"
          :user="user"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    },
    currentComponent: Object
  }
}
</script>

<style lang="sass">
.user-card
  display: flex
  flex-direction: column
  width: 100%
  margin-bottom: 1.5rem
  text-align: center
  border-radius: 10px
  background-color: #fff
  box-shadow: 5px 5px 2px 0 rgba(0, 0, 0, .35)
  overflow: hidden

  &__header
    flex-grow: 1
    padding: 1.5rem
    text-align: center
    background-color: #9e9e9e

  &__nick
    display: flex
    justify-content: center
    align-items: center
    margin: 0 auto 1rem
    width: 100px
    height: 100px
    text-transform: uppercase
    color: #fff
    background-color: #00bcd4

  &__info
    display: flex
    flex-direction: column
    text-align: left
    margin-top: auto
    padding: 1rem
    font-size: .85rem

.info__item
  margin-bottom: .75rem
  text-decoration: none

  &:hover
    text-decoration: underline
</style>
