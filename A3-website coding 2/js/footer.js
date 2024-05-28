function up1(n) {
  if (document.getElementsByClassName('list-ul')[n].style.display != 'block') {

      document.getElementsByClassName('list-ul')[n].style.display = 'block';
  } else {
      document.getElementsByClassName('list-ul')[n].style.display = 'none';
  }
}