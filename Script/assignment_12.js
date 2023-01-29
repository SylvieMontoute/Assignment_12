try{
function validatestiform(){
  let date = document.forms.stiform.date.value;
  let pcf = document.forms.stiform.pcf.value;
  let hp = document.forms.stiform.hp.value;
  let phonenumber = document.forms.stiform.phonenumber.value;
  let fullname= document.forms.stiform.fullname.value;
  let dob = document.forms.stiform.dob.value;
  let gender = document.forms.stiform.gender.value;
  let race = document.forms.stiform.race.value;
  let ethnicity = document.forms.stiform.ethnicity.value;
  let gendersp = document.forms.stiform.gendersp.value;
  let testresult = document.forms.stiform.testresult.value;
  let hivtesting = document.forms.stiform.hivtesting.value;
  let reason = document.forms.stiform.reason.value;
  let diagnosis = document.forms.stiform.diagnosis.value;
  let site = document.forms.stiform.site.value;

  if(!date){
    document.getElementById('dateErr').innerHTML="Date is required";
    document.forms.stiform.date.focus();
    return false;
  }
  if(!pcf){
    document.getElementById('pcfErr').innerHTML="This is required";
    document.forms.stiform.pcf.focus();
    return false;
  }
  if(!hp){
    document.getElementById('hpErr').innerHTML="This is required";
    document.forms.stiform.hp.focus();
    return false;
  }
  if(!phonenumber){
    document.getElementById('phonenumberErr').innerHTML="Number is required";
    document.forms.stiform.phonenumber.focus();
    return false;
  }
  if(!fullname){
    document.getElementById('fullnameErr').innerHTML="Full name is required";
    document.forms.stiform.fullname.focus();
    return false;
  }
  if(!dob){
    document.getElementById('dobErr').innerHTML="Date of birth is required";
    document.forms.stiform.dob.focus();
    return false;
  }
  if(!gender){
    document.getElementById('genderErr').innerHTML="Please select an option";
    return false;
  }
  else{
    document.getElementById('genderErr').innerHTML=" ";
  }
  if(!race){
    document.getElementById('raceErr').innerHTML="<br/>Please select an option";
    document.forms.stiform.race;
    return false;
  }
  else{
    document.getElementById('raceErr').innerHTML=" ";
  }
  if(!ethnicity){
    document.getElementById('ethnicityErr').innerHTML="<br/>Please select an option";
    document.forms.stiform.ethnicity;
    return false;
  }
  else{
    document.getElementById('ethnicityErr').innerHTML=" ";
  }
  if(!gendersp){
    document.getElementById('genderspErr').innerHTML="<br/>Please select an option";
    document.forms.stiform.gendersp;
    return false;
  }
  else{
    document.getElementById('genderspErr').innerHTML=" ";
  }
  if(!testresult){
    document.getElementById('testresultErr').innerHTML="<br/>Please select an option";
    document.forms.stiform.testresult;
    return false;
  }
  else{
    document.getElementById('testresultErr').innerHTML=" ";
  }
  if(!hivtesting){
    document.getElementById('hivtestingErr').innerHTML="<br/>Please select an option";
    document.forms.stiform.hivtesting;
    return false;
  }
  else{
    document.getElementById('hivtestingErr').innerHTML=" ";
  }
  if(!reason){
    document.getElementById('reasonErr').innerHTML="<br/>Please select an option";
    document.forms.stiform.reason;
    return false;
  }
  else{
    document.getElementById('reasonrErr').innerHTML=" ";
  }
  if(!diagnosis){
    document.getElementById('diagnosisErr').innerHTML="<br/>Please select an option";
    document.forms.stiform.diagnosis;
    return false;
  }
  else{
    document.getElementById('diagnosisErr').innerHTML=" ";
  }
  if(!site){
    document.getElementById('siteErr').innerHTML="<br/>Please select an option";
    document.forms.stiform.site;
    return false;
  }
  else{
    document.getElementById('siteErr').innerHTML=" ";
  }
}
function validatefn(){
  let namepattern = /^[A-Za-z\s]*$/;
  let fullname= document.forms.stiform.fullname.value;
  if(fullname){
    let x= namepattern.test(fullname);
    if(x==false){
      document.getElementById('fullnameErr').innerHTML="<br/> Name can only contain letters and white spaces";
      document.forms.stiform.fullname.focus();
    }
    else{
    document.getElementById('fullnameErr').innerHTML="";
    document.forms.stiform.fullname.style.borderColor='green';
    }
  }
}
}
catch{

}
