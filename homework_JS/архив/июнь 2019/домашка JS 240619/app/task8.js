outer: for(let d = 1; d > 0;){

    for(let day = 0; day <= 8; day++){
        switch (day) {
            case 2:
                if(confirm('Понедельник. Хотите увидеть следующий день?')){     
                    break;
                }else break outer;
            case 3:
                if(confirm('Вторник. Хотите увидеть следующий день?')){     
                    break;
                }else break outer;
            case 4:
                if(confirm('Среда. Хотите увидеть следующий день?')){     
                    break;
                }else break outer;
            case 5:    
                if(confirm('Четверг. Хотите увидеть следующий день?')){     
                    break;
                }else break outer;
            case 6:    
               if(confirm('Пятница. Хотите увидеть следующий день?')){     
                    break;
                }else break outer;
            case 7:    
                if(confirm('Суббота. Хотите увидеть следующий день?')){     
                    break;
                }else break outer;
            case 8:    
                if(confirm('Воскресенье. Хотите увидеть следующий день?')){     
                    break;
                }else break outer;            
        }  
    }  
   
}