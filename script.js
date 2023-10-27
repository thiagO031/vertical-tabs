const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content")


const shiftTabs = (x) => {
  allTabs.forEach((tab, i) => {
  
    if(tab.id.includes(x)) {
      allTabs.forEach((tabItem) => { 
        tabItem.style = `transform: translateY(-${i*300}px);`;
      });
    }
  });
};



allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const linkId = elem.id;
    console.log(linkId)

    shiftTabs(linkId);
  });
});
