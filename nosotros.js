const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada) =>{
        if(entrada.isIntersecting) {
            entrada.target.classList.add('visible');// console.log('La imagen esta en el viewport')
         }//else{
        //     entrada.target.classList.remove('visible');
        // }
    });
}    ///funcion cargar imagen vasia
const observador = new IntersectionObserver(cargarImagen, {   ///recuperamos la funcion y creamos una nueva insterseccion para la imagen
    root: null,  ///valores predeterminados
    rootMargin: '0px 0px 0px 0px',   //de donde se ejecuta
    threshold: 1.0    
});
observador.observe(imagen2);  //mandamos a mostrar el resultado
observador.observe(imagen1);
