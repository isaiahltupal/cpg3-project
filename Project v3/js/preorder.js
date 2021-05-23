var total = 0
var orderRows = document
var information = ""
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
	var removeOrder = document.getElementsByClassName('button-remove')
	var x;
	for (var i = 0; i < removeOrder.length; i++) {
		var button = removeOrder[i]
		button.addEventListener('click', removeItem)
	} 
}

function removeItem(event) {
    var btn = event.target
	var index = parseInt(btn.id)
	document.getElementsByClassName('order-quantity-input')[index].value = 0
	updateTotal()
}

function updateTotal(){
	orderRows = document.getElementsByClassName("order-row")
	total = 0;
  for (var i = 0; i < orderRows.length; i++) {
    var orderRow = orderRows[i]
    var priceElement = document.getElementsByClassName('order-price')[i]
    var quantityElement = document.getElementsByClassName('order-quantity-input')[i]
    var price = parseFloat(priceElement.innerText.replace('P ', ''))
	var quantity = quantityElement.value
	total = total + (price * quantity)
  }
	total = Math.round(total*100)/100
	document.getElementsByClassName('cart-total-price')[0].innerText = 'Total: P' + total
}


function confirmOrder(){
	updateTotal();

	//iterate through all
	for (var i = 0; i < orderRows.length; i++) {
		var priceElement = document.getElementsByClassName('order-price')[i]
		var quantityElement = document.getElementsByClassName('order-quantity-input')[i]
		var confirmElement = document.getElementsByClassName('steak_span')[i]
		var price = parseFloat(priceElement.innerText.replace('P ', ''))
		var quantity = quantityElement.value

		if(quantity>0){
			confirmElement.style.display="block"
		}
		else{
			confirmElement.style.display="none"
		}
		//total = total + (price * quantity)
		document.getElementsByClassName('confirm_cost')[i].innerHTML = 'P '+ price*quantity
		var foodname = document.getElementsByClassName('confirm_steak')[i].innerText
		document.getElementsByClassName('confirm_steak')[i].innerText = quantity + " x " +foodname
	  }

	document.getElementsByClassName('confirm_bg')[0].style.display = "block"
	document.getElementsByClassName('confirm_total')[0].innerText = 'Total: P' + total	
    var customername = document.getElementById('fname').value
	var numpeople = document.getElementById('points').value
	var date = document.getElementById('date').value
	var time = document.getElementById('time').value
	information = "Reservation for " + numpeople + " on " + date + " at " + time + " for " + customername 

	document.getElementsByClassName('reservation_info')[0].innerText = information
  

}

function orderconfirmed(){
	document.getElementsByClassName('confirm_bg')[0].style.display = "none"
	alert(information + " is confirmed")	
}

function cancelreserve(){
	document.getElementsByClassName('confirm_bg')[0].style.display = "none"
}