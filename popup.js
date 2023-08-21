const btn = document.querySelector('#pictitle');

var count=0;

btn.addEventListener("click", async() => {

    if(count>0){
        alert("Title of the current tab is already picked.\nclick outside popup window to come out!");
        return ;
    
    }

   await chrome.tabs.query({ active:true, currentWindow:true },tabs =>{
    let tab_title = tabs[0].title;
    let x = document.getElementById("text").innerHTML +=tab_title+"\n";
    if(x)
    {
        var y=document.querySelector('.title');
        y.style.display="contents";
        count +=1;
    }

    });
        
});

  

