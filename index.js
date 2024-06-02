      
      
      function initializeGallery() {
         previewImages=document.querySelectorAll(".preview");
        for (var i=0;i<previewImages.length;i++) {
          previewImages[i].setAttribute("tabindex","0");
          console.log(previewImages[i]);
        }
      }
       
       function upDate(previewPic){
        document.getElementById('image').innerHTML=previewPic.alt;
       document.getElementById('image').style.backgroundImage="url('" +previewPic.src+"')";
          }

          function unDo(){
               document.getElementById('image').innerHTML="Hover over an image to display the alt text.";
                 document.getElementById('image').style.backgroundImage="url('')";    
                }
            
 
