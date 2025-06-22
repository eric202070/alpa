const modal_results = document.querySelector(`.modal_results`);

const allResults = document.querySelector(`.allResults`);
let content




document.addEventListener('click', (e)=>{
  content = document.querySelector('.content')

  if(e.target.closest('.allResults') || e.target.closest(".arrowOne") || e.target.closest(".arrowTwo")){
    console.log(e.target);
    if(modal_results.classList.contains('animation')){
      modal_results.style.height = '42rem'
      modal_results.classList.remove('animation');

      allResults.classList.remove('animation');
      modal_results.classList.add('closeAnimation');

    } else if(modal_results.classList.contains('closeAnimation')){
       modal_results.style.height = '0'
      modal_results.classList.remove('closeAnimation');
      modal_results.classList.add('animation')
      allResults.classList.add('animation')
    } else{
       modal_results.style.height = '0'
      modal_results.classList.add('animation');
      allResults.classList.add('animation');
    }
  }
  console.log(modal_results.classList)
})

modal_results.addEventListener('mousedown', (e)=>{
  let insideModalResults = document.querySelector('.insideModalResults');
  if(e.target == modal_results || e.target == insideModalResults){
    if(modal_results.classList.contains('animation')){
      modal_results.style.height = '42rem'
      modal_results.classList.remove('animation');

      allResults.classList.remove('animation');
      modal_results.classList.add('closeAnimation');

    }
  }
})
