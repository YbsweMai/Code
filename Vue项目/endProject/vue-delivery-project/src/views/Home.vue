<template>
  <div>
    <!-- <Login></Login> -->
    <Loading></Loading>
    <h1>{{ $t("tags.beijing") }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

/* components */
import Loading from '../components/Loading/Loading';

/* views */
// import Login from '@/views/Login/Login';

export default {
   name: 'Home',
   components: {
      // Login,
      Loading
   }
};
</script>
