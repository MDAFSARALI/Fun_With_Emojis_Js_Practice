const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬'
];

const randomEmoji=function(){
  let randomPostion=Math.floor(Math.random()*(emojis.length));
  btn.innerHTML=emojis[randomPostion];
  console.log(randomPostion)
}
// setInterval(btn.addEventListener("hover",randomEmoji()), 1000);
// setInterval(randomEmoji, 1000);

btn.addEventListener('mouseover',randomEmoji)
