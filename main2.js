//aléatoire image
let myelement=document.getElementById('myImg'),
     myImgs=[
        
         'images/changeimg/cssProperties.png',
         'images/changeimg/cssSelectors.jpg',
         'images/changeimg/htmlAttrVal.jpg',
         'images/changeimg/htmlBasics.png',
         'images/changeimg/htmlElements.png',
         'images/changeimg/htmlTags.png',
         'images/changeimg/phpCRUD.png',
         'images/changeimg/javascriptVariables.png',
          'images/changeimg/javascriptOperators.png'
         
         ];
    function changeImage(myelement,myImgs){
       'use strict';
        setInterval(function(){
            var myRandomNum=Math.floor(Math.random()*myImgs.length);
            myelement.src=myImgs[myRandomNum];
            myImgs.style.img='not-repeat';
        },3000);
    }
    
    changeImage(myelement,myImgs);
    //aléatoire image 2
    let myelement2=document.getElementById('myImg2'),
     myImgs2=[
        
         'images/changeimg/cssProperties.png',
         'images/changeimg/cssSelectors.jpg',
         'images/changeimg/htmlAttrVal.jpg',
         'images/changeimg/htmlBasics.png',
         'images/changeimg/htmlElements.png',
         'images/changeimg/htmlTags.png',
         'images/changeimg/phpCRUD.png',
         'images/changeimg/javascriptVariables.png',
          'images/changeimg/javascriptOperators.png'
         
         ];
    function changeImage2(myelement2,myImgs2){
       'use strict';
        setInterval(function(){
            var myRandomNum2=Math.floor(Math.random()*myImgs2.length);
            myelement2.src=myImgs2[myRandomNum2];
            
        },3000);
    }
    
    changeImage2(myelement2,myImgs2);
    //aléatoire image 3
    let myelement3=document.getElementById('myImg3'),
     myImgs3=[
        
         'images/changeimg/cssProperties.png',
         'images/changeimg/cssSelectors.jpg',
         'images/changeimg/htmlAttrVal.jpg',
         'images/changeimg/htmlBasics.png',
         'images/changeimg/htmlElements.png',
         'images/changeimg/htmlTags.png',
         'images/changeimg/phpCRUD.png',
         'images/changeimg/javascriptVariables.png',
          'images/changeimg/javascriptOperators.png'
         
         ];
    function changeImage3(myelement3,myImgs3){
       'use strict';
        setInterval(function(){
        var myRandomNum3=Math.floor(Math.random()*myImgs3.length);
        myelement3.src=myImgs3[myRandomNum3];
            
        },3000);
    }
    
    changeImage3(myelement3,myImgs3);
      //aléatoire image 4
      let myelement4=document.getElementById('myImg4'),
      myImgs4=[
         
          'images/changeimg/cssProperties.png',
          'images/changeimg/cssSelectors.jpg',
          'images/changeimg/htmlAttrVal.jpg',
          'images/changeimg/htmlBasics.png',
          'images/changeimg/htmlElements.png',
          'images/changeimg/htmlTags.png',
          'images/changeimg/phpCRUD.png',
          'images/changeimg/javascriptVariables.png',
           'images/changeimg/javascriptOperators.png'
          
          ];
     function changeImage4(myelement4,myImgs4){
        'use strict';
         setInterval(function(){
         var myRandomNum4=Math.floor(Math.random()*myImgs4.length);
         myelement4.src=myImgs4[myRandomNum4];
             
         },3000);
     }
     
     changeImage4(myelement4,myImgs4);