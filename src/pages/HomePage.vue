<template>
  <main class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card  p-5 card align-items-center shadow rounded elevation-3">
      <img class="bg-img" src="https://em-content.zobj.net/source/twitter/348/mushroom_1f344.png" alt="tree">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Vue miner
      </h1>
      <button>pick</button>
      <button>picker</button>
      <button>maxpick</button>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 60vw, 100%);
    background-image: url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmF2ZXxlbnwwfHwwfHx8MA%3D%3D');
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;

    >.bg-img {
      height: 50%;
      width: 50%;
      object-fit: contain;
      object-position: bottom;
    }

  }
}
</style>
