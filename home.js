const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
hamburger.addEventListener('click',()=>{
    navUl.classList.toggle('show');
});


/*order add to cart buttons*/

const openOrderButtons = document.querySelectorAll('[data-order-target]')
const closeOrderButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openOrderButtons.forEach(button => {
  button.addEventListener('click', () => {
    const order = document.querySelector(button.dataset.orderTarget)
    openOrder(order)
  })
})

overlay.addEventListener('click', function (){
    const orders = document.querySelectorAll('.order.active');
    orders.forEach(order => {
      closeOrder(order);
    });
  })

closeOrderButtons.forEach(button => {
  button.addEventListener('click', () => {
    const order = button.closest('.order')
    closeOrder(order)
  })
})

function openOrder(order) {
  if (order == null) return
  order.classList.add('active')
  overlay.classList.add('active')
}

function closeOrder(order) {
  if (order == null) return
  order.classList.remove('active')
  overlay.classList.remove('active')
}







   
