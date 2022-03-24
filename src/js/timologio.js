import "./account-box"
const moreFiltersBtn = document.querySelector('.more-filters-btn');
const moreFilters = document.querySelector('.more-filters');

document.addEventListener("DOMContentLoaded", function(){
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    let tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });

    moreFiltersBtn?.addEventListener("click", async  function (e){
        e.preventDefault();
        moreFilters?.classList.toggle('d-none');
    })
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
