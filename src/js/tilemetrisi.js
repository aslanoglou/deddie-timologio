// import { Datepicker } from 'vanillajs-datepicker';

document.addEventListener("DOMContentLoaded", function(){
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    let tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// const getDatePickerTitle = elem => {
//     // From the label or the aria-label
//     const label = elem.nextElementSibling;
//     let titleText = '';
//     if (label && label.tagName === 'LABEL') {
//         titleText = label.textContent;
//     } else {
//         titleText = elem.getAttribute('aria-label') || '';
//     }
//     return titleText;
// }
//
// const elems = document.querySelectorAll('.datepicker_input');
// for (const elem of elems) {
//     const datepicker = new Datepicker(elem, {
//         'format': 'dd/mm/yyyy', // UK format
//         title: getDatePickerTitle(elem)
//     });
// }