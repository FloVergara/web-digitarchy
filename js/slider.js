(function(){

    const sliders = [...document.querySelectorAll('.student_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentStudent = document.querySelector('.student_body--show').dataset.id;
        value = Number(currentStudent);
        value+= add;

        sliders[Number(currentStudent)-1].classList.remove('student_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('student_body--show');
    }
})();