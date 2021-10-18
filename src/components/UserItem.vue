<template>
  <div class="user-card">
    <div class="user-card__header">
      <span class="user-card__nick rounded-circle">{{ user.username }}</span>
      <h2 class="user-card__name">{{ user.name }}</h2>
    </div>
    <div class="user-card__info info__items">
      <a class="info__item" :href="`mailto:${user.email}`" :title="user.email">
        <b-icon-envelope/>
        {{ user.email }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: Object
  }
}
</script>
