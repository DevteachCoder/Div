`use strict`
document.addEventListener('DOMContentLoaded',()=>{
    
    const adv = document.querySelectorAll('.promo__adv img');
    const wrapper = document.querySelector('promo__bg');
    //  const genre = wrapper.querySelector('.promo__genre');
    const  seriesList = document.querySelector('.promo__interactive-list');
    addForm = document.querySelector('form.add'),
    inpuTVAl = addForm.querySelector('.adding_input'),
    checkbox = addForm.querySelector("[type = 'checkbox']")

    addForm.addEventListener('submit', (event)=> {
        event.preventDefault()

        const newSeries = inpuTVAl.value;
        const favourite = checkbox.checked;
    })
    
    
    
    
    
    const seriesDB = {
        series:[
            'Omar',
            'The Final Legacy',
            'Ertugrul',
            'Magnificent Centery',
            'The Great Suljuks:Guardians...',
        ],
    }
    adv.forEach((item)=>{
        item.remove();
    })
    
    wrapper.style.backgroundImage = 'url()'
    
    seriesList.innerHTML = ''
    
     
})

const adv = document.querySelectorAll('.promo__adv img');
const wrapper = document.querySelector('promo__bg');
 const genre = wrapper.querySelector('.promo__genre');
const  seriesList = document.querySelector('.promo__interactive-list');
addForm = document.querySelector('form.add'),
inpuVAl = addForm.querySelector('.adding__input'),
checkbox = addForm.querySelector("[type = 'checkbox']")





const seriesDB = {
    series:[
        'Omar',
        'The Final Legacy',
        'Ertugrul',
        'Magnificent Centery',
        'The Great Suljuks:Guardians...',
    ],
}
adv.forEach((item)=>{
    item.remove();
})

wrapper.style.backgroundImage = 'url()'

seriesList.innerHTML = ''

