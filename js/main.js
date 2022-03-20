// toggle navbar links button

function addNav() {
  document.querySelector(".navbar-nav").classList.add("active");

  document.querySelector(".main-container").classList.add("active");

  document.querySelector(".toggleIcon .fa-times").classList.add("active");

  document.querySelector(".fa-bars").classList.add("active");
}

function remNav() {
  document.querySelector(".navbar-nav").classList.remove("active");

  document.querySelector(".main-container").classList.remove("active");

  document.querySelector(".toggleIcon .fa-times").classList.remove("active");

  document.querySelector(".fa-bars").classList.remove("active");
}


// sticky nav bar

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#stickyNav").css({
        "background-color": "rgb(78 77 77 / 63%)",
        transition: "1s",
      });
    } else {
      $("#stickyNav").css({ "background-color": "" });
    }
  });
});

// Image preview

// /// Upload Image
$(document).ready(function () {
  // REMOVE IMAGE
  $(".images-upload-block").on("click", ".close", function () {
    // $(this).parents('.box-up').remove();
    // $(this).parents('.upload-img').remove();
    $(".uploaded-block").remove();
  });
  // ADD IMAGE
  $(".image-uploader").change(function (event) {
    $(this)
      .parents(".images-upload-block")
      .append(
        '<div class="uploaded-block"><img src="' +
          URL.createObjectURL(event.target.files[0]) +
          '"><span class="close">&times;</span></div>'
      );
  });
  $(".click_event").click(function (b) {
    b.preventDefault();
    $(this)
      .parents(".parent-img")
      .find(".drop-box")
      .append(
        '<div class="text-center m-2 box-up">' +
          '<div class="images-upload-block">' +
          '<label class="upload-img">' +
          '<span><i class="fa fa-image" aria-hidden="true"></i></span>' +
          '<input type="file"  id="imageArr" name="imageArr" class="image-uploader">' +
          "</label>" +
          "</div>" +
          "</div>"
      );
    // ADD IMAGE
    $(".image-uploader").change(function (event) {});
    // REMOVE IMAGE
    $(".images-upload-block").on("click", ".close", function () {
      $(this).parents(".box-up").remove();
      // $(this).parents('.upload-img').remove();
      // $(this).parents('.uploaded-block').remove();
      // $(this).parents('.images-upload-block').remove();
    });
  });
});

// show add to chart subject

document.querySelectorAll(".subItem").forEach((item) => {
  item.addEventListener("click", function () {
    item.nextElementSibling.classList.toggle("active");
  });
});

document.querySelectorAll(".addToBuy").forEach((x) => {
  x.addEventListener("click", () => {
    x.innerHTML = `
      <div class="checkTrue">
        <i class="fas fa-check-circle"></i>
        تمت الاضافة
      </div>
    `;
  });
});


// change personal image

function preview() {
  frame.src=URL.createObjectURL(event.target.files[0]);
}


// back to top button

function backToTop() {
  $('#back-to-top').on('click', function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
}
backToTop();
$(window).on('scroll',function(){
  function scrollTopBtn() {
    var scrollToTop = $('#back-to-top'),
      scroll = $(window).scrollTop();
    if (scroll >= 50) {
      scrollToTop.fadeIn();
    } else {
      scrollToTop.fadeOut();
    }
  }
  scrollTopBtn();
})



// go to tab from another page

// $(document).ready(function(){

//   $('body [data-value]').on("click", function(e){
//   // e.preventDefault();
//   sessionStorage.setItem("lolo", $(this).attr('data-value'))
// });

// setInterval(function () {$(sessionStorage.getItem('lolo')).tab('show')}, 400);

  
// })