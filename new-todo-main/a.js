const inputText=document.querySelector(".input-text");
const addButton=document.querySelector(".add-button");
const UL=document.querySelector("ul");

const likeButtons=document.querySelectorAll(".like");
// likeButtons.forEach(like=>{
//     like.addEventListener("click",()=>{
//     console.log("clicked");
//     })
// })
likeButtons.forEach(like=>{
    like.addEventListener("click",()=>{
        console.log("hello");
    });
})
//forEach에 반복적으로 쓰일인자,{
//      반복적으로 쓰일인자.addEventListener~ 
//   }
// 
//이렇게 까지만 하면 현재에 있는 것에는 좋아요누르기로 인한 효과가 적용되지만
//새로생긴 것에 대해서는 클릭이벤트가 발생하지 않는다.

inputText.addEventListener("keypress",e=>{
    console.log(e);
    if(e.keyCode===13){
        
    }
})
//엔터를 누르면 리스트에 입력이 되게 하기 위한 event인 keypress
//엔터를 누르고 e의 상세보기를 하면 키코드가 13이다.
//스페이스는 32등이 나온다.
//event의 키코드가 13인경우 입력을 시켜주게 만들면 된다.


addButton.addEventListener("click",function(){
   const li=document.createElement("li");
   const like=document.createElement("span");
   const icons=document.createElement("i")
   const item=document.createElement("span");
   const manage=document.createElement("span");
   const icons_done=document.createElement("i");
   const icons_clear=document.createElement("i");
   
   
//    li.innerText=inputText.value;
//    UL.appendChild(li);
  
   UL.appendChild(li);
   like.classList.add("like");
   li.appendChild(like);
   icons.classList.add("material-icons");
   icons.innerText="favorite";
   like.appendChild(icons);

   like.addEventListener("click",()=>{
       console.log("hello");
   })
   //새로생긴 것에도 적용하기 위해서 새로생긴 like도 클릭시 콘솔로그실행된다..

   item.classList.add("item");
   item.innerText=inputText.value;
   li.appendChild(item);

   manage.classList.add("manage");
   icons_done.classList.add("material-icons","check");
   icons_clear.classList.add("material-icons","clear");
    // 왜 material-icons와 check를 띄워야하는지 모르겠다...

   icons_done.innerText="done";
   icons_clear.innerText="clear";
   li.appendChild(manage);
   manage.appendChild(icons_done);
   manage.appendChild(icons_clear);


   

}) 