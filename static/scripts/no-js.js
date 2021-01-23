var body = document.querySelector('body')
body.classList.remove('no_js')
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    body.classList.add('preloader_ready')
    setTimeout(function () {
      body.classList.add('preloader_scroll')
    }, 500)
    setTimeout(function () {
      body.classList.remove('preloader_active')
      body.classList.remove('preloader_ready')
      body.classList.remove('preloader_scroll')
    }, 1000)
  }
}