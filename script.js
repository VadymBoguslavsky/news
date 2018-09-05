function myFunction() {
  window.location.reload();
}
function createList(param) {
  var list = document.querySelector("#list")
  var main = document.querySelector(".wrapper")
  var newList = list.content.cloneNode(true);
  var text = newList.querySelector('.panel p');
  var btn = newList.querySelector('.accordion');
  btn.textContent = param.sectionName;

  function createText(el) {
    const urlText = 'https://content.guardianapis.com/small-business-network/2016/feb/22/startup-of-the-year-competition-entry-pavillion-at-the-park?showblocks=body&api-key=7d20aee1-371a-4142-b225-eadb439e1a84'
    fetch(urlText)
      .then(
        function (response) {
          response.json().then(function (data) {
            var result = data.response.content
            el.textContent = result.apiUrl

          });
        }
      )
  }
  createText(text)
  main.appendChild(newList)
  activateAccordion(btn);

}
const urlBtn = 'https://content.guardianapis.com/search?api-key=7d20aee1-371a-4142-b225-eadb439e1a84'
fetch(urlBtn)
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