// is code ko likh kr hum kishi or v webpage me kishi div ko hide ya dikha skte hai 
// bs aapne ko ji btn se hide krna hai uspe line one likhna hoga example let addbtn = document.querySelector(".add-btn");
// uske baad jis div ko hide ya dikhna hai uspe v lgana hoga example 
// let modal = document.querySelector(".modal-cont");
// then eak eventlis lgana hoga jese ki is example me hum add-btn pr lgana chyte hai 
// toh addbtn.addEventListener('click',function()
// then aapne ko ab style dena hai kishko jisko hum hide krna chyte hai
//ye wo div hai jisko hide krna tha   modal.style.display = "flex";


let addbtn = document.querySelector(".add-btn");
let modalcont = document.querySelector(".modal-cont");
let taskarea = document.querySelector(".textarea-cont");
let maincont=document.querySelector(".main-cont");

let allprioritycolor = document.querySelectorAll(".priority-color");
let removeBtn = document.querySelector(".remove-btn");

let addmodal = true;
let removeFlag = false;
let colors=['pink','blue','green','black']
let modalpriorityColor = colors[colors.length-1];


addbtn.addEventListener('click',function(){
    if(addmodal){
         modalcont.style.display = "flex";
    }
    else{
        modalcont.style.display = "none";
    }
    addmodal =!addmodal;
})

for(let i=0;i<allprioritycolor.length;i++)
   {
      let priorityDivOneColor = allprioritycolor[i];
      priorityDivOneColor.addEventListener("click",function(){
          for(let j=0;j<allprioritycolor.length;j++)
          {
              allprioritycolor[j].classList.remove("active");
          }

          priorityDivOneColor.classList.add("active");
          modalpriorityColor= priorityDivOneColor.classList[0];

      })
   }


modalcont.addEventListener('keydown',function(e){
    let key = e.key;
    if(key=='Enter')
    {
       createTicket(modalpriorityColor, taskarea.value);
       taskarea.value= "";
       modalcont.style.display="none";
       addmodal =!addmodal;
    }
})

removeBtn.addEventListener("click",function(){
    if(removeFlag)
    {
        removeBtn.style.color='black'
    }
    else
    {
        removeBtn.style.color='red'
    }
    removeFlag =! removeFlag


})

function createTicket(ticketColor,task)
 {    
// <div class="ticket-cont">

        
//     <div class="ticket-color black">

//      </div>
//      <div class="ticket-id">
//         ewjewio

//      </div>
//      <div class="task-area">
//         wejifweei

//       </div>

//  </div>
    let ticketcont = document.createElement("div");
    ticketcont.setAttribute('class','ticket-cont');
    ticketcont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
                            <div class="ticket-id">Some id</div>
                            <div class="task-area">${task}</div>`
    maincont.appendChild(ticketcont);  
    ticketcont.addEventListener("click",function(){
        if(removeFlag){
            ticketcont.remove();
        }

    })

    //handel color

    let ticketColorBand = ticketcont.querySelector(".ticket-color");
    ticketColorBand.addEventListener('click',function(){
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIdx = -1;
        for(let i=0;i<colors.length;i++)
        {
            if(currentTicketColor == colors[i])
                {
                    currentTicketColorIdx =i;
                    break;
                }
        }
        let nextColorIdx =(currentTicketColorIdx+1)%colors.length;
        let nextColor = colors[nextColorIdx];
        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(nextColor);
    })

}