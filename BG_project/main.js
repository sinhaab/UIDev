jQuery(document).ready(function () {

$(".secondlevelFields").hide();
$(".thirdlevelFields").hide();
$(".thirdlevelNormalFields").hide();
 $('.thirdlevelExpertFields').hide();
 
// $('#experts,#interests').hide();    
})
function onSignup(){

console.log("isnide signup");
$("#firstlevelFields").hide();
$(".secondlevelFields").show();
}


function displayExpert(check) {
  if (check) {
      $("#firstlevelFields").hide();
$(".secondlevelFields").hide();
    $('.thirdlevelExpertFields').show();
  } else {
    $('#experts').hide();
    $('#noExpert').prop('checked',false);
  }
}

function displayIntrests(check) {
  if (check) {
          $("#firstlevelFields").hide();
$(".secondlevelFields").hide();

$('.thirdlevelNormalFields').show();
    $('#isExpert').prop('checked',true);
  } else {
    $('#interests').hide();
  }
}
function onRegister(){
console.log("isndie register");
var inputs = $("form :input");
var obj = $.map(inputs, function(x, y) {
    return {
        Key: x.id,
        Value: $(x).val()
    };
});
console.log(obj);

}