let selectedSeat= 0;
const seats = document.querySelectorAll('.seat');
// console.log(seats)
seats.forEach((seat)=>{
    seat.addEventListener('click', (e)=>{
        selectedSeat ++


        if(selectedSeat<=4){
            const totalSelectedSeat= document.getElementById('totalSelectedSeat');
            totalSelectedSeat.innerText= selectedSeat;
            e.target.style.backgroundColor = "#1DD100"
            e.target.style.color = "#FFFFFF"
    
            const seatNumber = e.target.innerText;
            const div = document.createElement('div');
            div.classList.add('flex');
            div.classList.add('justify-between');
            const p1 = document.createElement('p');
            p1.innerText= seatNumber;
            const p2 = document.createElement('p');
            p2.innerText="Economy";
            const p3 = document.createElement('p');
            p3.innerText= "550";
           div.appendChild(p1);
           div.appendChild(p2);
           div.appendChild(p3);
           const selectedSeatSec = document.getElementById('selectedSeatSec');
           selectedSeatSec.appendChild(div);
           e.target.disabled= true;
           totalPrice = selectedSeat*550;
           document.getElementById('TotalPrice').innerText=totalPrice;
           document.getElementById('grandTotal').innerText=totalPrice;
           document.getElementById('avallabelSeat').innerText= 40 - selectedSeat;

           if(selectedSeat===4){
            document.getElementById('cuponSection').classList.remove('pointer-events-none')
           }


           const phnNumber = document.getElementById('phnNumber').value;
           if(phnNumber.length>0 && selectedSeat>0){
               document.getElementById('nextBtn').disabled=false;
           }
           else{
               document.getElementById('nextBtn').disabled=true;
           }
           
        }
        else{
            console.log("Selection limit over!")
            return false;
        }


        // console.log(selectedSeat)
    })
})

const cuponBtn = document.getElementById('cuponBtn');
cuponBtn.addEventListener('click', ()=>{
    const cuponName = document.getElementById('cuponId').value;
    const totalPrice = parseInt(document.getElementById('TotalPrice').innerText);
    if((cuponName === "NEW15") || (cuponName === "Couple 20")){

        document.getElementById('discountSec').classList.remove('hidden');
        document.getElementById('discountSec').classList.add('flex');

        if(cuponName === "NEW15"){
            const discount = totalPrice*0.15;
            const grandTotal = totalPrice - discount;
            document.getElementById('grandTotal').innerText=grandTotal;
            document.getElementById('discount').innerText=discount;
        }
        else if(cuponName === "Couple 20"){
            const discount = totalPrice*0.20;
            const grandTotal = totalPrice - discount;
            document.getElementById('grandTotal').innerText=grandTotal;
            document.getElementById('discount').innerText=discount;
        }
        
        document.getElementById('cuponSection').classList.add('hidden')
        document.getElementById('discountSec').classList.remove('hidden')
        document.getElementById('discountSec').classList.add('flex');
        
    }
    
    else{

        alert('Invalid cupon code!')
    }
    // console.log(cuponName);
});

const phnNumber =document.getElementById('phnNumber');
phnNumber.addEventListener('input', (e)=>{
    const selectedSeat = parseInt(document.getElementById('totalSelectedSeat').innerText);
    const phnNumber = e.target.value;
    if(phnNumber.length>0 && selectedSeat>0){
        document.getElementById('nextBtn').disabled=false;
    }
    else{
        document.getElementById('nextBtn').disabled=true;
    }
})


const nextBtn= document.getElementById('nextBtn');
nextBtn.addEventListener('click', ()=>{
    const mainPart = document.getElementById('mainPart');
    const successModal = document.getElementById('successModal');
    mainPart.classList.add('hidden');
    successModal.classList.remove('hidden');
})

const continueBtn= document.getElementById('continueBtn');
continueBtn.addEventListener('click', ()=>{
    location.reload();
})
