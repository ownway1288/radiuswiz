function radiuswiz(options) {
    let elements = document.querySelectorAll('.radiuswizard')

     elements.forEach(el => {
     if (options.circle) {
                el.style.borderRadius = '50%'
      } else {
                el.style.borderRadius = `25px`
      }
   })
}
module.exports.radiuswiz = radiuswiz
