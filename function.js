// Phàn cuộn header 
const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    let yOffset = window.pageYOffset;
    if (yOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


//Phần cuộn slider
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let imgNuber = imgPosition.length
let index = 0
imgPosition.forEach(function(image, index){
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener("click", function(){
    slider (index)
        })
    })
function imgSlider(){
    index++;
    console.log(index)
    if( index>=imgNuber) {index =0}
    slider(index)
    }
function slider (index){
    imgContainer.style.left = "-" + index*100+ "%"
    const dotActive =document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
    }


setInterval(imgSlider, 5000)

//Phần mẫu
document.querySelectorAll('.horizontal-list li').forEach(item => {
            item.addEventListener('click', () => {
                // Loại bỏ lớp 'active' khỏi tất cả các mục
                document.querySelectorAll('.horizontal-list li').forEach(li => {
                    li.classList.remove('active');
                });

                // Thêm lớp 'active' vào mục được nhấn
                item.classList.add('active');

                // Ẩn tất cả các nội dung
                document.querySelectorAll('.content').forEach(content => {
                    content.classList.remove('active');
                });

                // Hiển thị nội dung tương ứng
                const contentId = item.getAttribute('data-content');
                document.getElementById(contentId).classList.add('active');
            });
        });
//Ảnh thay thế
document.querySelectorAll('.image-container').forEach(container => {
    const mainImg = container.querySelector('.main-img');
    const altSrc = mainImg.getAttribute('data-alt-src');
    container.style.setProperty('--alt-img', `url(${altSrc})`);
});


//Container
//Slide
var imgFeature=document.querySelector('.img-feature')
var listImg=document.querySelectorAll('.list-image img')
var prevBtn=document.querySelector('.prev')
var nextBtn=document.querySelector('.next')

var curentIndex=0;
function updateImageByIndex(index){
    //remove active class
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('act')
    })

    curentIndex=index
    imgFeature.src= listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('act')
}

listImg.forEach((imgElement, index)=>{

    imgElement.addEventListener('click',e=>{
        imgFeature.style.opacity='0'
  
      setTimeout(()=>{
        updateImageByIndex(index)
      imgFeature.style.opacity='1'
    },400)
    })
})

prevBtn.addEventListener('click',e=>{

    
   if( curentIndex == 0){
    curentIndex=listImg.length-1
   }else{
    curentIndex--
   }

  
   imgFeature.style.animation=''
   setTimeout(() => {
    updateImageByIndex(curentIndex)
    imgFeature.style.animation='slideLeft 1s ease-in-out forwards'
   }, 150)
})
nextBtn.addEventListener('click',e=>{
   if( curentIndex == listImg.length-1){
    curentIndex=0
   }else{
    curentIndex++
   }
   
   imgFeature.style.animation=''
   setTimeout(() => {
    updateImageByIndex(curentIndex)
    imgFeature.style.animation='slideRight 1s ease-in-out forwards'
   }, 150)
})
updateImageByIndex(0)



    // Hàm tăng số lượng
    function plusQuantity() {
        var quantityInput = document.getElementById('quantity');
        var currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    }

    // Hàm giảm số lượng
    function minusQuantity() {
        var quantityInput = document.getElementById('quantity');
        var currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    }

    //size
// Hàm xử lý khi chọn kích thước


