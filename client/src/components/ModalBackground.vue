<template>
  <div>
    <div class="modal-bg" v-if="modalOn">
      <div class="modal-click" v-on:click="modalOn = modalState">
        <!--  -->
      </div>
      <!--  -->
    </div>
    <div class="off">
      <!--  -->
    </div>
  </div>
</template>

<script>
// import { EventBus } from "../main";

export default {
  name: "modal-background",
  // props: {
  //   selectedService: {
  //     type: String
  //   }
  // },
  // This works but I don't have a way to listen for modals and trigger yet
  data: function() {
    return {
      modalOn: false
    };
  },
  computed: {
    modalState(modalOn) {
      if (!modalOn) {
        modalOn = true;
      } else {
        modalOn = false;
      }
      return modalOn;
    }
  }
};
</script>

<style scoped>
.modal-bg {
  background-color: #00000080;
  width: 100%;
  height: 100%;
  color: black;
  position: fixed;
  left: 0%;
  top: 0%;
}

.modal-click {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0%;
  top: 0%;
}
</style>
