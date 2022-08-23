window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile__menu'),
    menuItem = document.querySelectorAll('.mobile__item, .mobile__dropdown_link, .mobile__close'),
    // menuLink = document.querySelectorAll('.mobile__dropdown_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('mobile__menu_active');
        });
    });
    // 
});

let dropdown = document.getElementsByClassName("mobile__dropdown_btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    // this.classList.toggle("mobile__link_arrow_active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}

function validateForms(form){
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: 'required',
      email: {
        required: true,
        email: true
      }},
    messages: {
      name: {
        required:"Введіть будь ласка ваше ім'я",
        minlength: jQuery.validator.format("Введіть більше {0} символів")
      },
      phone: "Введіть ваш номер телефону",
      email: {
        required: "Введіть вашу пошту",
        email: "Введіть коректу форму емейл@mail.com"
      }
    }
  });
}
validateForms('.form__items');

$('input[name=phone]').mask("+38 (999) 999-99-99");

$('[data-form-items=forms]').on('click', function(){
  $('#thanks').fadeIn('slow');
});
$('#modal__close').on('click', function(){
  $('#thanks').fadeOut();  
});

$('.form__items').submit(function(e){
  e.preventDefault();

  if(!$(this).valid()) {
    return;
  }
  $.ajax({
    type:"POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find('input').val('');
    $('form').trigger('reset');
  });
  return false;
  
});


$(document).ready(function(){
  $('.mobile-slider__wrapper').slick(
    {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 600,
      arrows: false,
      dots: true,
    }
  );
  $('.mobile-choose-first__wrapper').slick(
    {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 600,
      arrows: false,
      dots: true,
    }
  );
  $('.mobile-choose-second__wrapper').slick(
    {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 600,
      arrows: false,
      dots: true,
    }
  );
});
