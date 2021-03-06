
// Menu Mobile

var botao_menu = document.getElementById('hamburguer-icon');
var menu = document.getElementById('sliding-header-menu-outer');
var close_icon = document.getElementById('close-icon');

botao_menu.onclick = function(){

  menu.style.right = '0px';
  
};

close_icon.onclick = function(){

  menu.style.right = '-320px';
};

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.getElementsByClassName('single-tab');
var box_text = document.getElementById('box-text');

for (var a = 0; a < about_tags.length; a++){
  
  about_tags[a].onclick = function(){
    
    for (var b = 0; b < about_tags.length; b++){

      about_tags[b].style['background-color'] = unselected_color; 
      about_tags[b].style['font-weight'] ='normal';
    }

    this.style['background-color'] = selected_color; 
    this.style['font-weight'] = 'bold';

    var selected = this.innerHTML;

    box_text.innerHTML = aboutUs[selected];

  }
  
};

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];
// service-previous
// service-next
// service-text
// service-title

// Funcionalidade botão previous ----------------------->

var current_service = 0;


document.getElementById('service-previous').onclick = function() {

  if(current_service == 0){

    var service_previous = our_services.length -1;
  }else{

    var service_previous = current_service -1;
  }

  document.getElementById('service-text').innerHTML = our_services[service_previous].text;
  document.getElementById('service-title').innerHTML = our_services[service_previous].title;
  current_service = service_previous;
}

// Funcionalidade botão next ----------------------->

document.getElementById('service-next').onclick = function() {

  if(current_service == our_services.length -1){
   var service_next = 0
    
  }else{
    
    service_next = current_service +1;
    
  }

  document.getElementById('service-text').innerHTML = our_services[service_next].text;
  document.getElementById('service-title').innerHTML = our_services[service_next].title;
  current_service = service_next;
}


// Data Footer

var current_year = new Date;
current_year = current_year.getFullYear();
document.getElementById('current_year').innerHTML = current_year;



  
   


   