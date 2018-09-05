  function myFunction() {
   window.location.reload();
  }
  function createList(param) {
   var button = document.createElement("button")
   button.classList.add("accordion")
   var main = document.querySelector(".wrapper")
   main.appendChild(button)
   var div = document.createElement("div")
   div.classList.add("panel")
   main.appendChild(div)
   var p = document.createElement("p")
   div.appendChild(p)
   button.innerHTML = param.sectionName
   fetch('http://content.guardianapis.com/small-business-network/2016/feb/22/startup-of-the-year-competition-entry-pavillion-at-the-park?showblocks=body&api-key=7d20aee1-371a-4142-b225-eadb439e1a84')
    .then(
     function (response) {
      response.json().then(function (data) {
       var result = data.response.content
       p.innerHTML = result.apiUrl
       activateAccordion(button);
      });
     }
    )
  }
  fetch('https://content.guardianapis.com/search?api-key=7d20aee1-371a-4142-b225-eadb439e1a84')
   .then(
    function (response) {
     response.json().then(function (data) {
      var result = data.response.results
      for (var key in result) {
       createList(result[key])
      }
     });
    }
   )
  
  function activateAccordion(acc) {
   acc.addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
     panel.style.maxHeight = null;
    } else {
     panel.style.maxHeight = panel.scrollHeight + "px";
    }
   });
  }