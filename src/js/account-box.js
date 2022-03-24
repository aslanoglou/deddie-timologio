const accountBoxTooltip = document.querySelector('.account-box__tooltip');
const accountBoxIcon = document.querySelector('.account-box__icon');

document.addEventListener("click", async function (e) {
    if(e.target == accountBoxIcon){
        e.preventDefault();
        accountBoxTooltip?.classList.toggle('is-active');
    } else {
        accountBoxTooltip?.classList.remove('is-active');
    }
});
