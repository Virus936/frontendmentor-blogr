const options = {
  threshold:0.2
}

const display = (entries, observeur) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1
      entry.target.style.transform = 'translateX(0)'
    }
    else{
      entry.target.style.opacity=0
      entry.target.style.transform = 'translateX(-20px)'
    }
  })
  
}
const observer = new IntersectionObserver(display, options)


sections = document.querySelectorAll('section')
sections.forEach(section=>observer.observe(section))
