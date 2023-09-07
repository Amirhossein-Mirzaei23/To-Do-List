//
function remove(event){

    console.log("yaya")
   }
   function add(){
    let input=document.getElementById("input")
    let li= document.createElement("li")
    let span= document.createElement("span") 
   let i=document.createElement("i")
   let ul=document.getElementById("ul")
   span.innerHTML=input.value
    //
    input.addEventListener("keydown", function (event) {
       let valuespan = event.target.value;
   console.log(valuespan)
   })
   //
   i.addEventListener("click",function(){
       console.log("amir")
      let parent= i.parentElement
   let GParent=parent.parentElement
   GParent.removeChild(parent)
   })
   //
   let odlLi= document.getElementById("oldLi")
   let oldLiClass = odlLi.className
   input.innerHTML="amir"
   console.log(oldLiClass)
   li.className=oldLiClass
   i.className="fa fa-trash-o delete"
   li.append(span)
   li.append(i)
   ul.append(li)
   ///
   input.value=""
   ///
   }