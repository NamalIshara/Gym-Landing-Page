function showTab(tabNumber){
    console.log(tabNumber);
    document.getElementsByClassName("show")[0].classList.add('hide');
    document.getElementsByClassName("show")[0].classList.remove('show');
    document.getElementById("tabContent-"+tabNumber).classList.add('show');
    document.getElementById("tabContent-"+tabNumber).classList.remove('hide');
}