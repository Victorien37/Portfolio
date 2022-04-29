const ratio = .6 //60%
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
//Rend visible les éléments en fonction du ratio :
//Si le ratio est suppérieur au ratio demander, on rend visible l'élément caché
const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}
//Variable qui renvoie un ratio en fonction du scroll de la page.
//En le conbiant avec la fonction des ratios des éléments, cela nous permet de savoir quel est le ratio de visibilité d'un élément sur la page 
var observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function(r) {
    observer.observe(r)
})