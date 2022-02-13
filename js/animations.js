const elements = []

document.querySelectorAll('.vov').forEach(index => {
  elements.push('.' + index.classList[0])
})

elements.forEach(itemClass => document.querySelector(itemClass).style.opacity = 0)

document.querySelector('.nav').style.opacity = 1
document.querySelector('.header').style.opacity = 1


let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        if (include(entry, 'fadein')) {
          el('.' + entry.target.classList[0]).classList.add('fade-in')
        } else if (include(entry, 'fadeleft')) {
          el('.' + entry.target.classList[0]).classList.add('fade-in-left')
        } else if (include(entry, 'faderight')) {
          el('.' + entry.target.classList[0]).classList.add('fade-in-right')
        } else if (include(entry, 'fadedown')) {
          el('.' + entry.target.classList[0]).classList.add('fade-in-down')
        } else if (include(entry, 'fadeup')) {
          el('.' + entry.target.classList[0]).classList.add('fade-in-up')
        }
      }
    })
})

const include = (entry, text) => {
  return entry.target.classList.value.includes(text)
}

const el = (text) => {
  return document.querySelector(text)
}

const observe = (mas) => {
  mas.forEach((title) => {
    return observer.observe(el(title))
  })
}

setTimeout(() => observe(elements), 100)