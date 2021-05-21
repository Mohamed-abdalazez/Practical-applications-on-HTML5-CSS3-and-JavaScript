document.querySelector(".control-buttons").onclick = function () {
  let Name = prompt("What's Your Name ?");
  Name = (Name == null || Name == "" ? 'UnKnown' : Name);
  document.querySelector(".name span").innerHTML = (Name);
  document.querySelector(".control-buttons").remove();


  for (let i = 0; i < blocks.length; i++) {
    blocks[i].classList.add('is-flipped');
  }

  setTimeout(() => {
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].classList.remove('is-flipped');
    }
  }, 3000);


}


let duration = 1000, turn = 0,
  blocksContainer = document.querySelector(".meomry-box"),
  blocks = Array.from(blocksContainer.children),
  orderRang = [];



for (let i = 0; i < blocks.length; i++)
  orderRang[i] = i;
//orderRang = [...Array(blocks.length).keys()];


shuffleArray(orderRang);
blocks.forEach((it, i) => {
  it.style.order = orderRang[i];
  it.addEventListener('click', function () {
    flipBlock(it);
  })

});

function flipBlock(selectedBox) {
  selectedBox.classList.add('is-flipped');
  let allFlippedBlocks = blocks.filter(it => it.classList.contains('is-flipped'));
  if (allFlippedBlocks.length === 2) {
    stopClicking();
    win(allFlippedBlocks[0], allFlippedBlocks[1]);
  }
  if (turn == blocks.length / 2) {
    setTimeout(() => {
      alert("The Game Ended :D, Your Wrong Tries: " + document.querySelector('.tries span').innerHTML);
    }, duration);

  }
}


function shuffleArray(array) {
  let n = array.length,
    temp,
    random;
  for (let i = n - 1; i >= 0; i--) {
    random = Math.floor(Math.random() * n);
    temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
  return array;
}

function stopClicking() {
  blocksContainer.classList.add('no-clicking');
  setTimeout(() => {
    blocksContainer.classList.remove('no-clicking');
  }, duration);
}

function win(F_block, S_block) {
  let tries = document.querySelector('.tries span');
  if (F_block.dataset.type === S_block.dataset.type) {
    F_block.classList.remove('is-flipped');
    S_block.classList.remove('is-flipped');
    F_block.classList.add('ok');
    S_block.classList.add('ok');
    turn++;
  }
  else {
    tries.innerHTML = parseInt(tries.innerHTML) + 1;
    setTimeout(() => {
      F_block.classList.remove('is-flipped');
      S_block.classList.remove('is-flipped');
    }, duration);
  }
}

