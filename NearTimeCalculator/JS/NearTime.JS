function calculatePrice() {
  //variables
  var setupFee = parseInt(document.getElementById('ssfee').value);
  var storageFee = parseInt(document.getElementById('vcsfee').value);
  var rerender_min = parseInt(document.getElementById('rrmin').value);
  var cameraNum = parseInt(document.getElementById('camera-select').value);
  var hourNum = parseInt(document.getElementById('hour-select').value);
  var minNum = parseInt(document.getElementById('minute-select').value);
  //error checks
  if (isNaN(setupFee)) setupFee = 0;
  if (isNaN(storageFee)) storageFee = 0;
  if (isNaN(rerender_min)) rerender_min = 0;
  //calculations
  var totalMin = (hourNum * 60) + minNum;
  var price = setupFee + storageFee + ((totalMin * rerender_min) * cameraNum);
  //return
  document.getElementById('price').innerHTML = "$"+price;
}