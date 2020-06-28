<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background: white;
}
.body {
  max-width: 600px;
  margin: 0 auto;
  font-family: sans-serif;
}
.title {
  color: rgba(222, 61, 61, 1);
  font-family: sans-serif;
}
.subtitle {
  font-family: sans-serif;
}
.unselectable {
  user-select: none;
}
.passphrase {
  width: 100%;
}
.emphasis {
  font-weight: bold;
}
</style>
<template>
  <div v-if="isVisible" class="container">
    <div class="resetter">
      <div class="body">
        <h1 class="title">This is not a good use of time!</h1>
        <p>Unfulfilling websites like this one contain momentarily stimulating concent but are ultimately forgettable and on average not time well spent</p>
        <p>If you decide to visit this website you will get a cheap dopamine hit at the cost of future seretonin.</p>
        <p>
          <span class="emphasis">You</span>
          must
          <span class="emphasis">use technology to serve your own offline needs</span>. Don't be used.
        </p>
        <h2 class="subtitle">Things to try instead</h2>
        <ul>
          <li>Choose a new jrnl entry</li>
          <li>Curate your Things3 Backlog</li>
          <li>Plan out your leisure for the remainder of the week</li>
          <li>Nip outside for a walk and some air</li>
          <li>Join an effort</li>
          <li>Pick a recipe for dinner</li>
          <li>Think more about how this website is flawed</li>
        </ul>
        <p>If you really need to go ahead, type out the following</p>
        <div>
          <small class="unselectable">{{passphrase}}</small>
        </div>
        <div>
          <input v-model="override" placeholder="Type out the phrase above" class="passphrase" />
        </div>
        <button @click="dismiss" :disabled="isButtonDisabled">Proceed</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isVisible: true,
      passphrase: "I know the risks, give me that dopamine",
      override: ""
    };
  },
  computed: {
    isButtonDisabled: function() {
      return this.override != this.passphrase;
    }
  },
  methods: {
    dismiss: function() {
      this.isVisible = false;
    }
  }
};
</script>
