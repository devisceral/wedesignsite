
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

// About us Tab
// id texto box-text
// class single-tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.getElementsByClassName('single-tab');

for (var a = 0; a < about_tags.length; a++){
  
  about_tags[a].onclick = function(){
    
    for (var b = 0; b < about_tags.length; b++){

      about_tags[b].style['background-color'] = unselected_color; 
      about_tags[b].style['font-weight'] ='normal';
    }

    this.style['background-color'] = selected_color; 
    this.style['font-weight'] = 'bold';
    
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


// Data Footer



  
   


   