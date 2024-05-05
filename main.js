const itemAposition = { x: 0, y: 0 };

let slideIndex = [1, 1, 1];
let slideId = ["hair-slider","eyeliner-slider", "eyelinerred-slider"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);


function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "inline";
}

//itemA
interact('.itemA').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move (event) {
      // Update he posittion of itemA
      itemAposition.x += event.dx;
      itemAposition.y += event.dy;

      // Apply the transformation to move itemA
      event.target.style.transform = `translate(${itemAposition.x}px, ${itemAposition.y}px)`;
    },
    end(event) {
      console.log(event.type, event.target);
    }
  }
});
//dropzone

interact(".dropzone").dropzone({
  accept: ".draggable",
  ondropactivate: function (event) {
    event.target.classList.add("drop-active");
  },
  ondropdeactivate: function (event) {
    event.target.classList.remove("drop-active");
  },
  ondrop: handleDrop,
  ondragleave: function (event) {
    var draggableElement = event.relatedTarget;
  },
});

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  target.style.transform = "translate(" + x + "px, " + y + "px)";

  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

function handleDrop(event) {
  var draggableElement = event.relatedTarget;
  var dropzoneElement = event.target;

  // console.log($('.draggable'));
  //   $('.draggable').css('transform', 'translate(0px, 0px)');

  // Do something when a draggable element is dropped into a drop zone
  console.log("Dropped into dropzone:", dropzoneElement);
  console.log("draggable element: ", draggableElement);
}
