// template_qjo9svd
// service_ylb3grx
// oXAceCEXZ2PXuo1ck


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        console.log('it worked')
    }, 1000);
}

contact()

