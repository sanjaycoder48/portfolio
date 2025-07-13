function toggleProfile(){
    const icon = document.getElementById('profileToggle');
    const section = document.getElementById('profileCard');


    if(section.classList.contains('hidden')){
        section.classList.remove('hidden');
        icon.classList.remove('hidden');
    }
    else{
        section.classList.add('hidden');
        icon.classList.add('hidden'); 
    }
}