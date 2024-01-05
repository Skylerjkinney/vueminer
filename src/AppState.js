import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  pick: 0,

  clickUpgrades: [
    new Upgrade({

      name: 'Glow Stick',
      qty: 0,
      multiplier: 1,
      price: 50,
      picture: '✨'
    }),
    new Upgrade({
      name: 'Plastic Bag',
      qty: 0,
      multiplier: 3,
      price: 200,
      picture: '🛍️'
    }),
    new Upgrade({
      name: 'GreatSword + 3',
      qty: 0,
      multiplier: 5,
      price: 400,
      picture: '🤺'
    })
  ]
})
