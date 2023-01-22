// criar uma váriavel para buscar a classe do button
const button = document.querySelector('.js-theme')

// criar uma váriavel para chave de mapeamento 
const theme ={
    't-dark':'t-light',
    't-light': 't-dark'
}

// ao clicar no button não carregar a página ou enviar o formulário
if(button){
    button.addEventListener('click', function (Event) {
            Event.preventDefault();

            // Criar váriavel para agregar tema atual
            const currentTheme = document.body.dataset.theme;

            // Adiciona o data-theme t-dark no body e Fazer a verificação para saber qual o padrão que a página inicializa , noc aso vai ser com tema 't-light'
            document.body.setAttribute('data-theme', theme[currentTheme]|| 't-light');
        });
};

// Fazer o texto digitado no input aparecer em algum canto da tela 
