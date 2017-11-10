const headers = document.querySelectorAll('#experience .item header');
headers.forEach(function(header){
    header.addEventListener('click',function(){
        this.parentNode.querySelector('ul').classList.toggle('hidden');
    });
});