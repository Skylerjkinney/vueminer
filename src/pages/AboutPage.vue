<template>
  <div class="about text-center">
    <h1>This is the upgrades page</h1>
    <section class="">
      <button v-for="upgrade in upgrades" @click="upgradePick(value)" class="">{{ upgrade.emoji }}{{ upgrade.value
      }}</button>
    </section>
  </div>
</template>

<script>
import HomePage from './HomePage.vue';

export default {
  setup() {
    function upgradePick(amount) {
      HomePage.upgradePick(amount)
    }
    const upgrades = [{ emoji: '🥄', amount: 5 }, { emoji: '🪣', amount: 10 }, { emoji: '🎒', amount: 20 }]
    return {
      upgrades,
      upgradePick
    }
  }
}
</script>

<style scoped lang="scss">
button {
  height: 40vh;
  width: 65vh;
  border: red;
  border-radius: 2rem;
  border-style: solid;
}
</style>