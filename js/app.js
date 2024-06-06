const images = [
    "https://picsum.photos/id/450/900/400",
    "https://picsum.photos/id/666/900/400",
    "https://picsum.photos/id/390/900/400",
    "https://picsum.photos/id/649/900/400",
    "https://picsum.photos/id/782/900/400",
    "https://picsum.photos/id/350/900/400",
]

const list = document.querySelector('.list')

loadImages(list, images)





function loadImages(container, images = []){
    if (images.length === 0) return;

    // elemento donde se cargara la imagen al hacer click
    // const loader = document.querySelector('.loader')
    const imgLoader = document.querySelector('.img-loader')

    images.forEach((item) => {
        // creamos la imagen <img />
        const img = document.createElement('img')
        img.src = item // le asigno la imagen en la propiedad src
        img.classList.add('img-list') // añadimos la clase img-list

        // asigno un escuchador de evento para que este se ejecute al hacer click
        img.addEventListener('click', (evento) => {
            //console.log("Haciendo click a la imagen")
            loadImage(imgLoader, evento.target)
        })

        container.appendChild(img)

        
    })

    function loadImage(container, image){
        // console.log(image)
        container.classList.remove('animate__animated', 'animate__fadeIn', 'img-list') // añadimos la clase img-list
        container.src = image.src
        // una vez finalizada la carga añadimos el estilo nuevamente
        container.onload = function(){
            container.classList.add('animate__animated', 'animate__fadeIn', 'img-list') // añadimos la clase img-list
        }
    }

    /* const size = images.length;
    for(let i = 0; i < size; i++){
        const img = document.createElement('img')
        img.src = images[i]
        img.classList.add('img-list')
        container.appendChild(img)
    } */
}


