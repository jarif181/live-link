let total = 0;
const applyCouponButton = document.getElementById('btn-disabled');
const innerInput = document.getElementById('inputValue')
const makeAll = document.getElementById('btnAll')

function btn(target) {
    const seletedCard = document.getElementById('seleted-card')
    const varName = target.childNodes[5].innerText;
    const li = document.createElement('li')
    li.innerText = varName;
    seletedCard.appendChild(li)
    const cardPrice = target.childNodes[7].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(cardPrice);
    document.getElementById('all-selected').innerText = total;

    if (total < 200) {
        applyCouponButton.disabled = true;
      } else {
        applyCouponButton.disabled = false;
      }
    //   / Disable/enable make purchase button based on total amount
  if (total < 0) {
    makeAll.disabled = true;
  } else {
    makeAll.disabled = false;
  }

 

}

applyCouponButton.addEventListener('click', function(){
    const inputValue = innerInput.value
    if(inputValue === 'SELL200'){
        
        discount = Math.round(total * 0.2);
        document.getElementById('Discount').innerText = discount
        allTotal = total - discount;
        document.getElementById('allTotal').innerText =allTotal;
    }
})




