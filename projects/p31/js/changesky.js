// AFRAME.registerComponent("button-interaction-handler", {
//     init: function() {
//       var skyEl = this.el.sceneEl.querySelector("#background");

//       this.el.addEventListener("click", function() {
//         skyEl.setAttribute("src", "#chineseTemple");
//       });

//       this.el.addEventListener("mouseleave", function() {
//         skyEl.setAttribute("src", "#backgroundInsideHouse");
//       });
//     }
//   });
// AFRAME.registerComponent('cursor-listener', {
//     init: function () {
//       var lastIndex = -1;
//       var COLORS = ['red', 'green', 'blue'];
//       this.el.addEventListener('click', function (evt) {
//         lastIndex = (lastIndex + 1) % COLORS.length;
//         this.setAttribute('material', 'color', COLORS[lastIndex]);
//         // console.log('I was clicked at: ', evt.detail.intersection.point);
//       });
//     }
//   });
AFRAME.registerComponent('cursor-listener-0', {
    init: function () {
      var lastIndex = -1;
      var imgSky0 = ['sky00','sky01','sky02','sky03','sky04'];
      var skyEl = this.el.sceneEl.querySelector("#sky");
      this.el.addEventListener('click', function (evt) {
        lastIndex = (lastIndex + 1) % imgSky0.length;
        skyEl.setAttribute("src","#"+imgSky0[lastIndex].toString());
        // console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
  });