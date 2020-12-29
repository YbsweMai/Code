<template>
  <dir class="about">
    <h1>This is an about page</h1>
    <button @click="showModal">
      show
    </button>
  </dir>
</template>

<script>
export default {
   methods:{
      showModal (){
         this.$modal.show('regist',{
            text: 'This text is passed as a property'
         }, {
            draggable: true,
            clickToClose: false
         });

      }

   }
};
</script>