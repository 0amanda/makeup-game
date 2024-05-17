const blackeyelinerposition = { x: 0, y: 0 };
const redeyelinerposition = { x: 0, y: 0 };
const redlipstickposition = { x: 0, y: 0 };
const blacklipstickposition = { x: 0, y: 0 };
const blackliplinerposition = { x: 0, y: 0 };
const lipcomboposition = { x: 0, y: 0 };
const removerposition = { x: 0, y: 0 };




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

//blackeyeliner
interact('.blackeyeliner').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move (event) {
      // Update the position of blackeyeliner
      blackeyelinerposition.x += event.dx;
      blackeyelinerposition.y += event.dy;

      // Apply the transformation to move blackeyeliner
      event.target.style.transform = `translate(${blackeyelinerposition.x}px, ${blackeyelinerposition.y}px)`;
    },
    end(event) {
      console.log(event.type, event.target);
    }
  }
});

//redeyeliner
interact('.redeyeliner').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move (event) {
      // Update the position of redeyeliner
    redeyelinerposition.x += event.dx;
     redeyelinerposition.y += event.dy;

      // Apply the transformation to move redeyeliner
      event.target.style.transform = `translate(${redeyelinerposition.x}px, ${redeyelinerposition.y}px)`;
    },
    end(event) {
      console.log(event.type, event.target);
    }
  }
});

//redlipstick
interact('.redlipstick').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move (event) {
      // Update the position of redlipstick
    redlipstickposition.x += event.dx;
     redlipstickposition.y += event.dy;

      // Apply the transformation to move redlipstick
      event.target.style.transform = `translate(${redlipstickposition.x}px, ${redlipstickposition.y}px)`;
    },
    end(event) {
      console.log(event.type, event.target);
    }
  }
});

//blacklipstick
interact('.blacklipstick').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move (event) {
      // Update the position of blacklipstick
    blacklipstickposition.x += event.dx;
     blacklipstickposition.y += event.dy;

      // Apply the transformation to move blacklipstick
      event.target.style.transform = `translate(${blacklipstickposition.x}px, ${blacklipstickposition.y}px)`;
    },
    end(event) {
      console.log(event.type, event.target);
    }
  }
});

//blacklipliner
interact('.blacklipliner').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move (event) {
      // Update the position of blacklipliner
    blackliplinerposition.x += event.dx;
     blackliplinerposition.y += event.dy;

      // Apply the transformation to move blacklipliner
      event.target.style.transform = `translate(${blackliplinerposition.x}px, ${blackliplinerposition.y}px)`;
    },
    end(event) {
      console.log(event.type, event.target);
    }
  }
});

//lipcombo
interact('.lipcombo').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move (event) {
      // Update the position of lipcombo
    lipcomboposition.x += event.dx;
     lipcomboposition.y += event.dy;

      // Apply the transformation to move lipcombo
      event.target.style.transform = `translate(${lipcomboposition.x}px, ${lipcomboposition.y}px)`;
    },
    end(event) {
      console.log(event.type, event.target);
    }
  }
});

//remover
interact('.remover').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move (event) {
      // Update the position of remover
    removerposition.x += event.dx;
     removerposition.y += event.dy;

      // Apply the transformation to move remover
      event.target.style.transform = `translate(${removerposition.x}px, ${removerposition.y}px)`;
    },
    end(event) {
      console.log(event.type, event.target);
    }
  }
});

//dropzone

interact(".dropzone").dropzone({
  accept: '.blackeyeliner, .redeyeliner, .remover',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.10,
  ondrop: function (event) {
    console.log("Dropped into dropzone:");
 // Determine which element was dropped and show the corresponding result div
 if (event.relatedTarget.classList.contains('blackeyeliner')) {
  document.getElementById('blackeyelinerslider').style.display = 'block'
  document.getElementById('redeyelinerslider').style.display = 'none';
  ;
} else if (event.relatedTarget.classList.contains('redeyeliner')) {
  document.getElementById('redeyelinerslider').style.display = 'block'
  document.getElementById('blackeyelinerslider').style.display = 'none'
  ;    
} else if (event.relatedTarget.classList.contains('remover')) {
  document.getElementById('blackeyelinerslider').style.display = 'none'
  document.getElementById('redeyelinerslider').style.display = 'none';;
}}
  })
  .on('dropactivate', function (event) {
    event.target.classList.add('drop-activated')
})

//dropzone lips

// Function to set z-index of the elements with a specified class
function setAlwaysOnTop(draggable) {
  const elements = document.querySelectorAll('.' + draggable);
  elements.forEach(function(element) {
    element.style.zIndex = 9999; // Adjust as needed
  });
}

// Set the z-index for the divs that should always stay on top by class
setAlwaysOnTop('draggable');

let maxZIndex = 0;

function bringToFront(element) {
  maxZIndex += 1;
  element.style.zIndex = maxZIndex;

}

// Function to reset z-index of other elements
function resetZIndex() {
  document.querySelectorAll('.result').forEach(function(element) {
    element.style.zIndex = ""; // Reset z-index
  });
}



interact(".dropzone2").dropzone({
  accept: '.lippie, .remover',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.10,
  ondrop: function (event) {
    console.log("Dropped into dropzone:");
 // Determine which element was dropped and show the corresponding result div
 if (event.relatedTarget.classList.contains('blacklipliner')) {
  document.getElementById('blacklipline').style.display = 'block'
  bringToFront(document.getElementById('blacklipline'));

  ;
}else if (event.relatedTarget.classList.contains('redlipstick')) {
  document.getElementById('redlip').style.display = 'block'
  bringToFront(document.getElementById('redlip'));

  ;    
}else if (event.relatedTarget.classList.contains('blacklipstick')) {
  document.getElementById('blacklip').style.display = 'block'
  bringToFront(document.getElementById('blacklip'));

  ;  
}else if (event.relatedTarget.classList.contains('lipcombo')) {
  document.getElementById('redandblacklip').style.display = 'block'
  bringToFront(document.getElementById('redandblacklip'));

  ;  
}else if (event.relatedTarget.classList.contains('remover')) {
  document.getElementById('blacklipline').style.display = 'none'
  document.getElementById('redlip').style.display = 'none'
  document.getElementById('blacklip').style.display = 'none'
  document.getElementById('redandblacklip').style.display = 'none';
  ;
  ;

  ;  
}

}})
  .on('dropactivate', function (event) {
    event.target.classList.add('drop-activated')
})



