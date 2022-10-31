let asideaguas = document.querySelector('aside.aguas')
let botaguas = document.querySelector('input.aguas')

function aguasmais() {
    asideaguas.innerHTML = `<h3><input type="button" value="V" class="aguas" onclick="aguasmenos()"> Águas Sulfurosas x Águas Termais</h3>
        <p>É muito comum que as pessoas se confundam e não saibam a diferença entre águas termais e águas sulfurosas. Por isso, é importante ressaltar e diferenciar os dois tipos de água.</p>
        <p>As águas termais são águas naturalmente quentes, geralmente por ação do <strong>gradiente geotérmico</strong>, que é a diferença de temperatura, de acordo com a profundidade em relação à superfície. Em média, na cidade de Poços de Caldas, a temperatura aumenta em 32,5°C a cada quilômetro. Como as águas chegam à profundidade de aproximadamente 3.330m, elas podem alcançar a temperatura de 125°C, saindo a cerca de 40°C quando voltam à superfície.</p>
        <p>Por outro lado, as águas sulfurosas não são classificadas em relação à sua temperatura, mas sim à composição química. Durante o seu ciclo, a água pode, por conta das características vulcânicas do solo poços-caldense, adquirir composição sulfurosa, ou seja, receber ação do enxofre presente nas rochas. É esse enxofre que dá à água propriedades medicinais.</p>
        <img src="img/ciclo-agua-termal.jpg" alt="Ciclo da Água Termal">
        <p class="legenda">Fonte: <a href="https://colegiovascodagama.pt/ciencias3c/images/vulcan7.jpg" rel="external" target="_blank" class="externo">https://colegiovascodagama.pt/ciencias3c/images/vulcan7.jpg</a></p>`
}

function aguasmenos() {
    asideaguas.innerHTML = `<h3><input type="button" value=">" class="aguas" onclick="aguasmais()"> Águas Sulfurosas x Águas Termais</h3>`
}