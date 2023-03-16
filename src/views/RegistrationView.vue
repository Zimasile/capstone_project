<template>
    <div>
        <RegistrationPage/>
    </div>
</template>

<script>
import RegistrationPage from '@/components/RegistrationPage.vue'

export default {
  name: 'RegistrationView',
  components: {
    RegistrationPage
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      cellnumber: "",
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    register() {
      return this.$store.dispatch("register", {
        name: this.name,
        surname: this.name,
        cellnumber: this.cellnumber,
        email: this.email,
        password: this.password,
      });
    },
  },
}
</script>
<style>

</style>