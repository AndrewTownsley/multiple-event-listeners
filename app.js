const container = document.getElementById("container");
const option25 = document.getElementById("option25");
const option50 = document.getElementById("option50");
const option75 = document.getElementById("option75");
const option200 = document.getElementById("option200");
const section25 = document.getElementById("section25");
const section50 = document.getElementById("section50");
const section75 = document.getElementById("section75");
const section200 = document.getElementById("section200");
const pledgeSelects = document.querySelectorAll("input[type='radio']");
const btnRadio = document.querySelectorAll(".radio-btn");
console.log(btnRadio);





const changePledgeBorder = (e) => {
    if (e.target !== e.currentTarget) {
        const clickedItem = e.target;
        console.log(clickedItem);
        clickedItem.parentElement.classList.toggle('active');
    }
    e.stopPropagation();
}
container.addEventListener('click', changePledgeBorder, false)

// const selectPledgeOption = (pledge) => {

//     if (pledge.checked) {
//         pledge.parentElement.classList.toggle('active')
//     }
// }
// selectPledgeOption()

// const clearPledgeBorder = () => {
//     console.log("clear border");
//     const currentPledge = document.querySelector(".pledge-select.active");
//     if (currentPledge) {
//         currentPledge.classList.remove('active');
//     }
// }

// const changePledgeBorder = (btn) => {
//     const pledgeParent = btn.parentElement;
//     pledgeParent.classList.add('active')
//     console.log("clicked button");
//     console.log(pledgeParent);
// // }
// const changePledgeBorder = (event) => {
//     console.log("clicked button");
//     const pledge = event.currentTarget.parentElement
//     pledge.classList.add('active')
//     console.log(pledgeParent);
// }

// btnRadio.forEach(btn => {
//     btn.addEventListener('click',
//         // clearPledgeBorder(),
//         changePledgeBorder(btn)),
//         false
// })

// body.addEventListener('click', event => {
//     if (event.target !== btnRadio) {
//         console.log("Test test test");
//     } else if
//         (event.target == btnRadio) {
//         console.log("Button Clicked");
//         changePledgeBorder(event)
//     }
// })



// pledgeSelects.forEach(pledge =>
//     pledge.addEventListener('change', selectPledgeOption(pledge)));