
//   $('.uploadBtn ').on('click',function () {
//                 var arr1 = [];
//                 var img_input = $('.filelist').children('li');
//                 // console.log(img_input)
//                 // var img_input1 = $('.view').children('p');
//                 for(var i = 0;i<img_input.length-1;i++){
//                     arr1.push(img_input.eq(i).children('.imgWrap').children('input').val());
//                 }
//                 console.log(arr1)
// });
//   function ym(){
//       // $('body').on('click','#edui151',function () {
//           $('body').on('click','#edui151',function () {
//           // alert(11)
//           for(var i = 0;i<$( "#ueditor_0" ).contents().find('.view ').children('p').length-1;i++){
//               // alert(img_input)
//               $( "#ueditor_0" ).contents().find('.view ').children('p').eq(i).append("<input type='text' style='display: block'>");
//           }
//       })
//   }


  (function(globle , fun){
      globle.lyy = fun()
  })(window,function () {
      'use strict';
      var _this = {
          name: 'lyy',
          version: '1.0.0',
          arr: []
      };
      _this.ym = function () {
          $('.uploadBtn ').on('click',function () {
              var img_input = $('.filelist').children('li');
              for(var i = 0;i<img_input.length-1;i++){
                  _this.arr.push(img_input.eq(i).children('.imgWrap').children('input').val());
              }
              console.log(_this.arr);
              lyy.yn(_this.arr);
          });
      };
      _this.yn = function (rr) {
          console.log(rr);
          // console.log($('#edui151_body',window.parent.document).html());
          $('body',window.parent.document).on('click',$('#edui151_body',window.parent.document),function () {
         // $(window.parent).on('click',window.parent.$("#edui151_body"),function () {
              alert(1111)
              for(var i = 0;i<$( "#ueditor_0" ).contents().find('.view ').children('p').length-1;i++){
                  // alert(img_input)
                  $( "#ueditor_0" ).contents().find('.view ').children('p').eq(i).append("<input type='text' style='display: block'>");
              }
          })
      };
      return  _this;
  });
lyy.ym();
