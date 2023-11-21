const panel = document. querySelectorAll ('.panel')

panels.forEach(panel=> {
    panel . addEventListener('click',  ()  => {
        removeActiveClases ()
        panel. classList . add('active')
    })
})

function removeActiveClasses () {
    panels . for Each (panel =>  {
        panel . classList.remove ('active' )
    })
}