const modalOverlay = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", ()=> {
  modalOverlay.classList.add("open-modal");
})

closeBtn.addEventListener("click", ()=> {
  modalOverlay.classList.remove("open-modal");
})

function findOdd(A) {
  let count = 0;
  for(let i = 0; i < A.length; i++) {
    if(A[i]) {
      count++;
      if(count/2 != 0) {
        console.log(A[i]);
      }
    }
  }  
}

findOdd([0, 1, 3, 3, 5, 6, 0, 6, 1, 1]);