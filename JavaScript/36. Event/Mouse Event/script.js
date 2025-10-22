// document.getElementById('box').addEventListener('click', function() {
//         alert('Event click')
// })

// document.getElementById('box').addEventListener('contextmenu', function() {
//         alert('Event contextmenu')                                                    // right click dabane ke baad event play h
// })

// document.getElementById('box').addEventListener('dblclick', function() {
//         alert('Event dblclick')                                                    // double click ke baad event play hoga                                                  
// })

// document.getElementById('box').addEventListener('mousedown', function() {
//         alert('Event mousedown')                                                     // mouse dabate samay hi play ho jayge
// })

// document.getElementById('box').addEventListener('mouseup', function() {
//         alert('Event mouseup')                                                          // mouse dabake chodte waqt play hoga
// })

// document.getElementById('box').addEventListener('mouseover', function() {
//         alert('Event mouseover')                                                     // hoverover hote hi, event play ho jayega
// })

// document.getElementById('box').addEventListener('mouseout', function() {             // target se out hote hi event play ho jayege
//         alert('Event  mouseout')
// })



// HERE WE WILL LEARN MOUSEMOVE EVENT:
document.getElementById('box').addEventListener('mousemove', function(event) {
        this.textContent = `X: ${event.clientX}, Y: ${event.clientY}`
})
document.getElementById('box').addEventListener('mouseleave', function(event) {
        this.textContent = '';                                                           // target element of mousemove se bahar hote hi x/y coordinates dikhna band ho jaye ga
})

