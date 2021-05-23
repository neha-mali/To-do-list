// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  // var tBR = document.createElement("br");
  span.className = "close";
  // span.appendChild(linebreak);
  span.appendChild(txt);
  // span.appendChild(tBR);
  myNodelist[i].appendChild(span);

  // console.log(myNodelist);

  // myNodelist[i].appendChild(linebreak);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    // console.log(div.li);
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      // var tgt = ev.target;
      // tgt.remove();
      ev.target.classList.toggle("checked");

      // var list_1 = document.getElementById("myUL1");
      // console.log(list_1);
      var sp = ev.target.textContent;

      str = sp.substring(0, sp.length - 1);

      var list_1 = document.getElementById("myUL1");
      var entry = document.createElement("li");
      var doc = document.getElementById("myUL");
      entry.appendChild(document.createTextNode(str));
      list_1.appendChild(entry);
      var tgt = ev.target;
      var ch = tgt.parentNode.removeChild(tgt);
      // console.log(doc);
      document.getElementById("myInput").value = "";
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      console.log(span);
      list_1.appendChild(span);

      // var select = document.getElementById("myUL");
      // select.removeChild(select.lastChild);

      // console.log(list_1);
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        };
      }

      var myNodelist1 = document.getElementsByTagName("LI");
      var i;
      for (i = 0; i < myNodelist1.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist1[i].appendChild(span);
        // console.log(myNodelist);
      }
      // var select = document.getElementById("myUL");
      // select.removeChild(select.lastChild);

      var close1 = document.getElementsByClassName("close");
      var i;
      for (i = 0; i < close1.length; i++) {
        close1[i].onclick = function () {
          var div1 = this.parentElement;
          // console.log(div.li);
          div1.style.display = "none";
        };
      }

      // console.log(div.li);

      // console.log(myNodelist);

      // console.log(list_1);
      // console.log(sp);
      // var entry = document.createElement("li");
      // entry.appendChild(document.createTextNode(sp));
      // list_1.appendChild(entry);
      // console.log(list_1);
      // var select = document.getElementById("myUL");
      // select.removeChild(select.lastChild);
    }
  },
  false
);

// function for adding to completed list
// const items = document.querySelectorAll(".float-child > #myUL >li");
// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     var sp = e.target.textContent;
//     console.log(sp);
// str = sp.substring(0, sp.length - 1);
// console.log(str);
// var list_1 = document.getElementById("myUL1");
// var entry = document.createElement("li");
// entry.appendChild(document.createTextNode(str));
// list_1.appendChild(entry);
//     // console.log(list_1);
//   });
// });

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  // const lineBreak = document.createElement("br");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // li.appendChild(lineBreak);
  var i;
  for (i = 1; i < span.length; i++) {
    var newElem = document.createElement("BR");
    div.insertBefore(newElem, spans[i]);
  }
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;

      div.style.display = "none";
    };
  }
}

