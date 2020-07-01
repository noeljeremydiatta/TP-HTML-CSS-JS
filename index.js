var typecli = document.getElementById("tcli");
var afficher1 = document.getElementById("open2");
var salaire = document.getElementById("sal");
var profession = document.getElementById("prof");
var cacher0 = document.getElementById("open3");
typecli.addEventListener('change', function(e) {
    if (typecli.value == 'cli1') {
        afficher1.style.display ='block';
        salaire.style.display = 'none';
        profession.style.display = 'none';
        cacher0.style.display = 'none';
    }
    
    else if (typecli.value == 'cli2') {
            afficher1.style.display = 'block';
            salaire.style.display = 'inline-block';
            profession.style.display = 'inline-block';
            cacher0.style.display = 'block';  
    } 
    else {
            afficher1.style.display = 'none';
            cacher0.style.display = 'block';
         }
             
        });

        var typeco = document.getElementById("tco");
        var afficher2 = document.getElementById("open1");
        var cacher1 = document.getElementById("agios");
        var ta = document.getElementById("agio")
        var cacher2 = document.getElementById("frais");
        var tf = document.getElementById("frai")
        typeco.addEventListener('change', function(e) {
        
            if (typeco.value == "1" || typeco.value == "3") {
                afficher2.style.display = 'block';
                cacher2.style.display = 'inline-block';
                tf.style.display = 'inline';
                cacher1.style.display = 'none';
                ta.style.display = 'none';
                
            } else {
                    afficher2.style.display = 'block';
                    cacher1.style.display = 'inline-block';
                    ta.style.display = 'inline';
                    cacher2.style.display = 'none';
                    tf.style.display = 'none';
                    
               
            
            }
        });
        var myform = document.getElementById("ouverture");
        var inputs = document.getElementsByTagName('input');
        myform.addEventListener('submit',function(e){
            if(!inputs.value){
                e.preventDefault();
                alert('veuiller remplir les champs');
            }else{

            }
        });
    