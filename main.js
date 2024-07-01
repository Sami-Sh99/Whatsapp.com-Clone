const images = document.querySelectorAll('.column.chat img');
const delay = [500,800,1000,1500,1700,2000,2500]
images.forEach( (image,i) => {
    setTimeout( () =>{
        image.classList.remove('hidden');
        image.classList.add('visible');
    } , delay[i])
});