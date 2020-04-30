 const clears=()=>{

document.getElementById('pop').style.display="none";

}
const show=()=>{
    document.getElementById('pop').style.display="flex";
    document.getElementsByClassName('hidden')[0].style.display="block";
    document.getElementsByClassName('hidden1')[0].style.display="block";
    document.getElementsByClassName('hidden2')[0].style.display="block";
}
const hide=()=>{

    document.getElementsByClassName('hidden')[0].style.display="none";
  
    
    }
const hide1=()=>{

        document.getElementsByClassName('hidden1')[0].style.display="none";
      
        
        }
    const hide2=()=>{

        document.getElementsByClassName('hidden2')[0].style.display="none";
        
        
        }