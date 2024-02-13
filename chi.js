      var imagePathMapChic = {
        white_cabinets_white_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca6de2ebdfb542812eb41d_Mask%20group%20(17).jpg",
        white_cabinets_dark_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca72384e70f0dbf1fec192_f%20(1).jpg",
        white_cabinets_brown_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca6eef07fde9db58878b2c_f.jpg",
        white_cabinets_green_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca72c9f8344e73e1bafa71_f%20(2).jpg",
        dark_cabinets_white_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca77eb49f77adfb0ce5634_Mask%20group%20(23).jpg",
        dark_cabinets_dark_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca790e5d723315aa5b683c_Mask%20group%20(25).jpg",
        dark_cabinets_brown_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca787acc0b90972cd8cb9b_Mask%20group%20(24).jpg",
        dark_cabinets_green_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca79a0a7bd2cb0d4276c0f_Mask%20group%20(26).jpg",
        brown_cabinets_white_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca7434a96a6218600aae50_Mask%20group%20(19).jpg",
        brown_cabinets_dark_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca75337fb56b3bb3512628_Mask%20group%20(21).jpg",
        brown_cabinets_brown_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca74cd7ccbc5c29fc251e3_Mask%20group%20(20).jpg",
        brown_cabinets_green_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca756dc96548f1753ff1d6_Mask%20group%20(22).jpg",
        green_cabinets_white_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca7ab08695954d69f1b11f_Mask%20group%20(27).jpg",
        green_cabinets_dark_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca7bd324f9691985dc2af0_Mask%20group%20(29).jpg",
        green_cabinets_brown_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca7b55258d481ce0ee42fc_Mask%20group%20(28).jpg",
        green_cabinets_green_island_chic:
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65ca7c6078712455e7b741e8_Mask%20group%20(30).jpg",
      };
      
      var activeStatesChic = {
        cabinets: "white",
        island: "white",
      };

    function changeImageChic(color, type) {
  var imgElement = document.querySelectorAll("#roomImage")[1];
  var sliderImages = document.querySelectorAll("#chicSlider .slide-item img");

  activeStates[type] = color;

  var imagePathKey = `${activeStates.cabinets}_cabinets_${activeStates.island}_island_chic`;
  imgElement.src = imagePathMapChic[imagePathKey];
  imgElement.srcset = imagePathMapChic[imagePathKey];

  document
    .querySelectorAll(`.chic .${type}_color .color_button button`)
    .forEach((button) => {
      button.classList.remove("active");
    });

  event.currentTarget.classList.add("active");

  // Set slider
   if (!event.currentTarget.classList.contains("ignoreSlider")) {
  var sliderCombinationKey = `Slider${activeStates.cabinets.capitalize()}CombinationChic`;
  var sliderCombination = window[sliderCombinationKey];
  
  for (var i = 0; i < sliderImages.length; i++) {
          var combinationIndex =
            i %
            sliderCombination[`${activeStates.cabinets}_${activeStates.island}`]
              .length;
          sliderImages[i].src =
            sliderCombination[
              `${activeStates.cabinets}_${activeStates.island}`
            ][combinationIndex];
          sliderImages[i].srcset =
            sliderCombination[
              `${activeStates.cabinets}_${activeStates.island}`
            ][combinationIndex];
        }
      }  
}
      function activateButtonChic(button) {
        const type = button.dataset.type;

        button.parentNode.parentNode
          .querySelectorAll(".active")
          .forEach((sibling) => {
            sibling.classList.remove("active");
          });

        button.classList.add("active");
        changeImageChic(button.dataset.color, type);
      }
      document
        .querySelectorAll(".chic .color_button button")
        .forEach((button) => {
          button.addEventListener("click", () => activateButtonChic(button));
        });




var SliderWhiteCombinationChic = {
        white_white: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caa975d1f17213f9cdfa5c_WHITE_white_ISland%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caa9d2dc7fd01e8bbe2a0e_CAMERA_5%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaa24a18e27c19efe9852_CAMERA_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaa24a18e27c19efe9852_CAMERA_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaae7ec1b3ed03adb2f58_CAMERA_2%20(1).png",

        ],
        white_brown: [
           "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caa975d1f17213f9cdfa5c_WHITE_white_ISland%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caa9d2dc7fd01e8bbe2a0e_CAMERA_5%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaa24a18e27c19efe9852_CAMERA_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaa24a18e27c19efe9852_CAMERA_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaae7ec1b3ed03adb2f58_CAMERA_2%20(1).png",

        ],
        white_dark: [
           "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caa975d1f17213f9cdfa5c_WHITE_white_ISland%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caa9d2dc7fd01e8bbe2a0e_CAMERA_5%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaa24a18e27c19efe9852_CAMERA_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaa24a18e27c19efe9852_CAMERA_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaae7ec1b3ed03adb2f58_CAMERA_2%20(1).png",

        ],
        white_green: [
           "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caa975d1f17213f9cdfa5c_WHITE_white_ISland%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caa9d2dc7fd01e8bbe2a0e_CAMERA_5%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaa24a18e27c19efe9852_CAMERA_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaa24a18e27c19efe9852_CAMERA_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caaae7ec1b3ed03adb2f58_CAMERA_2%20(1).png",

        ],
      };

      var SliderBrownCombinationChic = {
        brown_white: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caad060f9ec061e3c820b4_BROWN__brown_island%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caad6fb27298335fc03324_CAMERA_2%20(2)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caada0b3bd55d0022a4499_CAMERA_3%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caafe8412a14373566d985_CAMERA_4%20(2)%20(2).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab0d45af2fcdc2359f34c_CAMERA_5%20(2)%20(1).png",

        ],
        brown_brown: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caad060f9ec061e3c820b4_BROWN__brown_island%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caad6fb27298335fc03324_CAMERA_2%20(2)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caada0b3bd55d0022a4499_CAMERA_3%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caafe8412a14373566d985_CAMERA_4%20(2)%20(2).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab0d45af2fcdc2359f34c_CAMERA_5%20(2)%20(1).png",

        ],
        brown_dark: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caad060f9ec061e3c820b4_BROWN__brown_island%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caad6fb27298335fc03324_CAMERA_2%20(2)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caada0b3bd55d0022a4499_CAMERA_3%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caafe8412a14373566d985_CAMERA_4%20(2)%20(2).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab0d45af2fcdc2359f34c_CAMERA_5%20(2)%20(1).png",

        ],
        brown_green: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caad060f9ec061e3c820b4_BROWN__brown_island%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caad6fb27298335fc03324_CAMERA_2%20(2)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caada0b3bd55d0022a4499_CAMERA_3%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65caafe8412a14373566d985_CAMERA_4%20(2)%20(2).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab0d45af2fcdc2359f34c_CAMERA_5%20(2)%20(1).png",

        ],
      };

      var SliderDarkCombinationChic = {
        dark_white: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab63f496e820eee30d878_BLUE_FULL%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab67bad9bad5384f3176f_FULL_BLUE_CAME_2%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6a4ab974e1ae7423313_FULL_BLUE_CAME_3%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6ca657166131aebeb30_FULL_BLUE_CAME_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6f0d04800958222b36f_FULL_BLUE_CAME_5%20(1).png",

        ],
        dark_brown: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab63f496e820eee30d878_BLUE_FULL%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab67bad9bad5384f3176f_FULL_BLUE_CAME_2%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6a4ab974e1ae7423313_FULL_BLUE_CAME_3%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6ca657166131aebeb30_FULL_BLUE_CAME_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6f0d04800958222b36f_FULL_BLUE_CAME_5%20(1).png",

        ],
        dark_dark: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab63f496e820eee30d878_BLUE_FULL%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab67bad9bad5384f3176f_FULL_BLUE_CAME_2%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6a4ab974e1ae7423313_FULL_BLUE_CAME_3%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6ca657166131aebeb30_FULL_BLUE_CAME_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6f0d04800958222b36f_FULL_BLUE_CAME_5%20(1).png",

        ],
        dark_green: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab63f496e820eee30d878_BLUE_FULL%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab67bad9bad5384f3176f_FULL_BLUE_CAME_2%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6a4ab974e1ae7423313_FULL_BLUE_CAME_3%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6ca657166131aebeb30_FULL_BLUE_CAME_4%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab6f0d04800958222b36f_FULL_BLUE_CAME_5%20(1).png",

        ],
      };

      var SliderGreenCombinationChic = {
        green_white: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab7aca861c1efea4da30e_CAMERA_4%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab7d0398b038eefae2b7a_CAMERA_5%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab8339ce39d69fc9b9c6f_GREEN_FULL%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab85d0ad7ed60e090f92c_CAMERA_2%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab88971c2fc96f5228d14_CAMERA_3%20(4)%20(1).png",

        ],
        green_brown: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab7aca861c1efea4da30e_CAMERA_4%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab7d0398b038eefae2b7a_CAMERA_5%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab8339ce39d69fc9b9c6f_GREEN_FULL%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab85d0ad7ed60e090f92c_CAMERA_2%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab88971c2fc96f5228d14_CAMERA_3%20(4)%20(1).png",
         
        ],
        green_dark: [
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab7aca861c1efea4da30e_CAMERA_4%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab7d0398b038eefae2b7a_CAMERA_5%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab8339ce39d69fc9b9c6f_GREEN_FULL%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab85d0ad7ed60e090f92c_CAMERA_2%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab88971c2fc96f5228d14_CAMERA_3%20(4)%20(1).png",
         
        ],
        green_green: [
         "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab7aca861c1efea4da30e_CAMERA_4%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab7d0398b038eefae2b7a_CAMERA_5%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab8339ce39d69fc9b9c6f_GREEN_FULL%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab85d0ad7ed60e090f92c_CAMERA_2%20(3)%20(1).png",
          "https://uploads-ssl.webflow.com/658341e50aaaf9480b039557/65cab88971c2fc96f5228d14_CAMERA_3%20(4)%20(1).png",
        
        ],
      };
