const adversario = 'Beatles'

const ENEMY = {
  Goku: 'Vegueta',
  Batman: 'Jocker',
  Lennon: 'Mccartney',
  Beatles: 'Stone'
}

const DEFAULT =  'Batman'
const result = ENEMY[adversario] || DEFAULT 
console.log(result)