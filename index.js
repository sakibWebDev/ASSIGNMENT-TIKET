let tiketCount = 0; 
const keyborde = document.querySelectorAll(".kbd");
const coupon = document.getElementById('default-search'); 
const inputed = document.getElementById('default-input');
const pricesTiket = 550; 
const classed = "Econimical"; 
const sitCounter = document.getElementById('countTiketsFour');
const countDown = document.getElementById('availableSeat');
const totalAmount = document.getElementById('totalAmount');
const discounted = document.getElementById('discountAmount');
const apply = document.getElementById('applysix');
const lastApply = document.getElementById('grado');
const completebuy = document.getElementById('nextProcess');
const bodyed = document.getElementById('car-body'); 
let onclicked = 1; 

keyborde.forEach(element => {
    element.addEventListener('click', function() {
        if (tiketCount >= 4) {
            alert("You can only buy 4 tickets");
            return;
        }

        const text = element.innerText;
        const titleContainerSitname = document.getElementById('sit-name');
        const pricesAllCreate = document.getElementById('pricesAll');
        const classCreate = document.getElementById('econimical')
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const h2 = document.createElement("h2");
        tiketCount++;
        onclicked++;
        sitCounter.innerText = tiketCount;
        element.classList.add('bg-[#1DD100]');
        h1.innerText = tiketCount + "." + text;
        h2.innerText = classed;
        p.innerText = pricesTiket;
        titleContainerSitname.appendChild(h1);
        pricesAllCreate.appendChild(p);
        classCreate.appendChild(h2);
        countDown.innerText = 32 - tiketCount;
        totalAmount.innerText = tiketCount * pricesTiket;
    });
});

// Apply button click
apply.addEventListener('click', function() {
    const couponValue = coupon.value.toLowerCase().trim();
    let discount = 0;

    if ((couponValue === 'new15' || couponValue === 'couple20') && tiketCount >= 4) {
        discount = tiketCount * pricesTiket * (couponValue === 'new15' ? 0.15 : 0.2);
        discounted.innerText = discount;
        lastApply.innerText = tiketCount * pricesTiket - discount;
        return;
    } else {
        alert("Invalid coupon code or not enough tickets purchased.");
        lastApply.innerText = tiketCount * pricesTiket;
        return;
    }
});

// Complete buy button click 
completebuy.addEventListener('click', function() {
    const phoneNumber = inputed.value.trim();

    if (tiketCount > 0 && !isNaN(phoneNumber) && phoneNumber.length > 0) { 
        const successElement = document.getElementById('success');
        successElement.classList.remove('hidden');
        bodyed.classList.add('hidden');
        console.log("Purchase completed with phone number: " + phoneNumber);
        return;
    }

    alert("Please select at least one ticket and enter a valid phone number.");
});
