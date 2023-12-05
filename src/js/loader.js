function hiddenScroll() {
    document.body.style.overflowY = 'hidden';
}

function seeScroll() {
    document.body.style.overflowY = 'visible';
}
window.addEventListener('load', () => {
hiddenScroll();
var words = ['Welcome',''],
    wordWrapper = document.getElementById('word'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){
  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }
}, 170);

    setTimeout(function(){
        seeScroll();
        const loader_container = document.querySelector('.loader_container');
        loader_container.style.opacity = 0;
        loader_container.style.visibility = 'hidden';
    }, 2000);
});

