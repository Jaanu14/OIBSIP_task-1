



let button = document.querySelector('.btn');
let btn = document.querySelectorAll('span');
let ans = document.getElementById('text');
let val = document.getElementById('text').value;
let v = document.querySelector('.radic');


for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        
        if(this.innerHTML=="=")
        {
            try{
                ans.innerHTML = eval(ans.innerHTML);
            }catch{
                alert('Invalid Operation');
                ans.innerHTML = '';
            }
        }
        else{
            if(this.innerHTML=="AC"){
                ans.innerHTML = "";
            }
            else if(this.innerText== "<<"){
               ans.innerHTML = ans.innerHTML.slice(0,-1);
            }
            else{
                ans.innerHTML += this.innerHTML;
            }
        }

    })
}