const body = document.querySelector('.general');
body.addEventListener('mouseover', todo);
console.log(body);            
                                    
                               
                               
                               
     function todo (){
      
      let priceCategory = document.getElementById('priceCategory');
      let buttonCategory = document.getElementById('traerRespuesta');
      // let category1 = document.getElementById('Anual_Plan'); 
      // let category2 = document.getElementById('Monthy_Plan');                              
      // let category3 = document.getElementById('Week_Plan');                              
      // console.log(buttonCategory.innerHTML.trim());
      // console.log(category1);
      // console.log(priceCategory);
      
      if ( buttonCategory.innerHTML.trim() === 'Anual Plan' ){
        priceCategory.innerHTML=102.99
      }
      
        else if ( buttonCategory.innerHTML.trim() === 'Monthy Plan'){
          priceCategory.innerHTML=54.83
        }
        else if ( buttonCategory.innerHTML.trim() === 'Week Plan'){
          priceCategory.innerHTML=12.99
        }
        
        else{                                        
        } 
      } 
      todo();   
                                  
              