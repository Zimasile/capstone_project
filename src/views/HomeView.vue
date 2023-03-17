<template>
<SpinnerComponent v-if="showSpinner"/>
<HomePage/>
</template>

<script>
import SpinnerComponent from '@/components/SpinnerComponent.vue'
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    HomePage,
    SpinnerComponent
  }
}
</script>
