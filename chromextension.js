let myLeads = ["https://github.com/RoshanUrkande?tab=repositories", "https://www.linkedin.com/in/roshan-urkande%E2%86%97%EF%B8%8F%F0%9F%87%AE%F0%9F%87%B3-5483bb211/"];
let oldLeads = []
const inputEl = document.getElementById("input-el");
const inpuBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener("click",function(){
      
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
   
})


function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
      listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'>
     ${leads[i]}
    </a>
    </li>`;
    }
    ulEl.innerHTML = listItems;
  }


deleteBtn.addEventListener("dblclick",function(){
   localStorage.clear()
    myLeads=[]
    render(myLeads)
})


inpuBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads);
  
});




