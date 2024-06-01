// Mobile navigation item click event
function up(n) {
    if (document.getElementsByClassName('navitemlist')[n].style.display != 'block') {
        document.getElementsByClassName('navitemlist')[n].style.display = 'block';
        for(let i=0;i<4;i++){
            if(i!=n){
                document.getElementsByClassName('navitemlist')[i].style.display = 'none';

            }
        }
    } else {
        document.getElementsByClassName('navitemlist')[n].style.display = 'none';
    }
}