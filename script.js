var mySelect = document.getElementById("column1");
var mySelect2 = document.getElementById("column2");
var imageContainer = document.getElementById("imageContainer");
var imageContainer2 = document.getElementById("imageContainer2");

mySelect.addEventListener("change", function() {
  var selectedOption = mySelect.value;
  var imagePath = "";
  var mainImagePath = "";

  switch(selectedOption) {
    case "option1_1":
      imagePath = "dashboard_1.jpg";
      break;
    case "option1_2":
      imagePath = "dashboard_2.png";
      break;
    case "option1_3":
      imagePath = "dashboard_3.jpg";
      break;
    case "option1_4":
      imagePath = "dashboard_4.png";
      break;
    case "option1_5":
      imagePath = "dashboard_5.jpg";
      break;    
    default:
      imagePath = "main_image.jpg";
  }

  

  if(imagePath !== "") {
    imageContainer.innerHTML = "<img src='" + imagePath + "'>";
    imageContainer.style.display = "block";
  } else {
    mainImagePath =  "<img src='" + mainImagePath + "'>";
    imageContainer.style.display = mainImagePath;
  }
});


mySelect2.addEventListener("change", function() {
    var selectedOption2 = mySelect2.value;
    var imagePath2 = "";
    var mainImagePath2 = "";
  
    switch(selectedOption2) {
      case "option2_1":
        imagePath2 = "dashboard_4.png";
        break;
      case "option2_2":
        imagePath2 = "dashboard_2.png";
        break;
      case "option2_3":
        imagePath2 = "dashboard_3.jpg";
        break;
      case "option2_4":
        imagePath2 = "dashboard_1.png";
        break;
      case "option2_5":
        imagePath2 = "dashboard_5.jpg";
        break;    
      default:
        imagePath2 = "main_image.jpg";
    }
  
    
  
    if(imagePath2 !== "") {
      imageContainer2.innerHTML = "<img src='" + imagePath2 + "'>";
      imageContainer2.style.display = "block";
    } else {
      mainImagePath2 =  "<img src='" + mainImagePath2 + "'>";
      imageContainer2.style.display = mainImagePath2;
    }
});
  
