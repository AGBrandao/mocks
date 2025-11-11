  const macronutrientsData = [
    { name: 'Carboidratos', division: 'Carboidratos simples & complexos (Fibras)', sources: ['Arroz integral', 'Aveia', 'Batata-doce', 'Legumes', 'Frutas'] },
    { name: 'Gorduras', division: 'Saturadas, Poli-insaturadas & Monoinsaturadas', sources: ['Azeite de oliva', 'Abacate', 'Nozes', 'Sementes', 'Peixes gordurosos'] },
    { name: 'Proteínas', division: '9 Aminoácidos Essenciais', sources: ['Ovos', 'Carne', 'Frango', 'Laticínios', 'Legumes'] },
];

  const aminoAcids = ['Leucina', 'Isoleucina', 'Valina', 'Lisina', 'Metionina', 'Fenilalanina', 'Treonina', 'Triptofano'];

  const divisionsData = [
  { name: 'Carboidratos simples', sources: ['Frutas', 'Vegetais', 'Grãos integrais', 'Legumes', 'Tubérculos'] },
  { name: 'Fibras', sources: ['Frutas', 'Vegetais', 'Grãos integrais', 'Legumes', 'Tubérculos'] },
  { name: 'Gorduras saturadas', sources: ['Manteiga', 'Queijo', 'Carnes gordas', 'Óleo de coco', 'Creme'] },
  { name: 'Monoinsaturadas', sources: ['Azeite de oliva', 'Abacate', 'Nozes', 'Sementes', 'Amendoins'] },
  { name: 'Poli-insaturadas', sources: ['Peixes', 'Nozes', 'Sementes', 'Óleos vegetais', 'Frutos do mar'] },
  { name: 'Aminoácidos', sources: ['Ovos', 'Carne', 'Frango', 'Laticínios', 'Leguminosas'] }
];

  const sourcesData ={
  'Carboidratos simples': ['Cereais', 'Massas', 'Tapioca', 'Frutas doces', 'Pães', 'Mel'],
  'Fibras': ['Amora', 'Brócolis', 'Berinjela', 'Vegetais folhosos', 'Abobrinha', 'Chuchu'],
  'Gorduras saturadas': ['Manteiga', 'Queijo', 'Carnes gordas', 'Óleo de coco', 'Creme de leite', 'Bacon'],
  'Monoinsaturadas': ['Azeite de oliva', 'Abacate', 'Amêndoas', 'Caju', 'Amendoins', 'Avelãs'],
  'Poli-insaturadas': ['Peixes', 'Nozes', 'Linhaça', 'Óleos vegetais', 'Chia', 'Sementes'],
  'Aminoácidos': ['Ovos', 'Carne', 'Frango', 'Laticínios', 'Leguminosas', 'Tofu']
};

  const dietRules = {
  'low_carb': ['Fibras', 'Poli-insaturadas', 'Monoinsaturadas', 'Aminoácidos','Gorduras saturadas'],
  'mediterranean': ['Carboidratos simples', 'Fibras', 'Poli-insaturadas', 'Monoinsaturadas', 'Aminoácidos'],
  'bluezone': ['Carboidratos simples', 'Fibras', 'Poli-insaturadas', 'Monoinsaturadas', 'Aminoácidos'],
  'carnivore': ['Gorduras saturadas', 'Aminoácidos'],
  'paleo': ['Fibras', 'Poli-insaturadas', 'Monoinsaturadas', 'Aminoácidos','Gorduras saturadas', 'Carboidratos simples'],
  'vegetarian': ['Fibras', 'Poli-insaturadas', 'Monoinsaturadas', 'Aminoácidos','Gorduras saturadas', 'Carboidratos simples'],
  'vegan': ['Fibras', 'Poli-insaturadas', 'Monoinsaturadas', 'Aminoácidos','Gorduras saturadas', 'Carboidratos simples'],
  'empty': ['Fibras', 'Poli-insaturadas', 'Monoinsaturadas', 'Aminoácidos','Gorduras saturadas', 'Carboidratos simples']
};

  const macronutrientsDiv = document.getElementById('macronutrients');
  const divisionsDiv = document.getElementById('divisions');
  const sourcesDiv = document.getElementById('sources');
  const buttonsDiv = document.getElementById('diet-buttons');

  let activeDiet = null;

  // Generate Macronutrients
  macronutrientsData.forEach(nutrient => {
    const div = document.createElement('div');
    div.className = 'nutrient';
    div.innerHTML = `<h3>${nutrient.name}</h3><p><strong>Classificação:</strong> ${nutrient.division}</p>`;
    macronutrientsDiv.appendChild(div);
  });

  // Generate Divisions
  divisionsData.forEach(divs => {
    const div = document.createElement('div');
    div.className = 'division';
    div.dataset.name = divs.name;
    div.innerHTML = `<h4>${divs.name}</h4>`;
    divisionsDiv.appendChild(div);
  });

  // Generate Sources
  Object.keys(sourcesData).forEach(divName => {
    const div = document.createElement('div');
    div.className = 'sources';
    div.dataset.name = divName;
    div.innerHTML = `<h4>${divName}</h4><ul>${sourcesData[divName].map(source => `<li>${source}</li>`).join('')}</ul>`;
    sourcesDiv.appendChild(div);
  });

  // Handle diet button clicks
Array.from(buttonsDiv.children).forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      Array.from(buttonsDiv.children).forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      activeDiet = btn.dataset.diet;
      highlightDivisions();
    });
  });

  function highlightDivisions() {
    // Reset all divisions
    document.querySelectorAll('.division').forEach(div => {
      div.style.backgroundColor = '#a11e1eff';
    });

    if (!activeDiet) return;

    const allowedDivs = dietRules[activeDiet];

    // Highlight allowed divisions
    document.querySelectorAll('.division').forEach(div => {
      if (allowedDivs.includes(div.dataset.name)) {
        div.style.backgroundColor = ' #74b168'; // Light green
      }
    });
  }

  // Adicione ao final do seu scripts.js

// Adicione ao final do seu scripts.js

// Cria os botões de gerar e copiar
const container = document.createElement('div');
container.style.marginTop = '20px';
container.style.textAlign = 'center';

const btnGerar = document.createElement('button');
btnGerar.innerText = 'GERAR';
btnGerar.style.marginRight = '10px';

const btnCopiar = document.createElement('button');
btnCopiar.innerText = 'COPIAR';

container.appendChild(btnGerar);
container.appendChild(btnCopiar);
document.body.appendChild(container);

// Cria o elemento para mostrar o resultado
const resultadoDiv = document.createElement('div');
resultadoDiv.style.marginTop = '20px';
resultadoDiv.style.padding = '10px';
resultadoDiv.style.border = '1px solid #ccc';
resultadoDiv.style.borderRadius = '8px';
resultadoDiv.style.backgroundColor = '#fff';
resultadoDiv.style.maxWidth = '600px';
resultadoDiv.style.marginLeft = 'auto';
resultadoDiv.style.marginRight = 'auto';
resultadoDiv.id = 'resultado';
document.body.appendChild(resultadoDiv);

// Função para filtrar itens dependendo da dieta
function filtrarItensPorDieta(grupo, dieta) {
  let itens = sourcesData[grupo];

  // Regras específicas para dieta carnívora
  if (dieta === 'carnivore') {
    // Excluir leguminosas e tubérculos
    if (grupo === 'Carboidratos simples') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Legumes', 'Batata-doce', 'Chuchu', 'Berinjela', 'Abobrinha'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
    if (grupo === 'Aminoácidos') {
      // Pode incluir apenas alimentos de origem animal
      const permitidos = ['Ovos', 'Carne', 'Frango', 'Laticínios'];
      itens = itens.filter(item => permitidos.includes(item));
    }
  }

    // Regras específicas para dieta mediterranea
  if (dieta === 'mediterranean') {
    // Excluir 
    if (grupo === 'Aminoácidos') {
      // removê-los
      const proibidos = ['Carne'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
  }

      // Regras específicas para dieta blue zone
  if (dieta === 'bluezone') {
    // Excluir leguminosas e tubérculos
    if (grupo === 'Aminoácidos') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Carne', 'Laticínios', 'Frango'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
        if (grupo === 'Gorduras Saturadas') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Bacon', 'Carnes gordas'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
  }

    // Regras específicas para dieta paleo
  if (dieta === 'paleo') {
    // Excluir leguminosas e tubérculos
    if (grupo === 'Carboidratos simples') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Pães', 'Tapioca', 'Massas', 'Cereais'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
    if (grupo === 'Poli-insaturadas') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Óleos vegetais'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
        if (grupo === 'Gorduras saturadas') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Creme de leite', 'Óleo de coco', 'Manteiga', 'Queijo'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
  }

    // Regras específicas para dieta vegetariana
  if (dieta === 'vegetarian') {
    // Excluir leguminosas e tubérculos
    if (grupo === 'Gorduras saturadas') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Bacon', 'Carnes gordas'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
        if (grupo === 'Poli-insaturadas') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Peixes'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
    if (grupo === 'Aminoácidos') {
      // Pode incluir apenas alimentos de origem animal
      const permitidos = ['Tofu', 'Leguminosas', 'Laticínios', 'Ovos'];
      itens = itens.filter(item => permitidos.includes(item));
    }
  }

    // Regras específicas para dieta vegana
  if (dieta === 'vegan') {
    // Excluir leguminosas e tubérculos
    if (grupo === 'Gorduras saturadas') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Bacon', 'Manteiga', 'Queijo', 'Carnes gordas', 'Creme de leite'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
        if (grupo === 'Poli-insaturadas') {
      // Supondo que leguminosas e tubérculos estão incluídos, removê-los
      const proibidos = ['Peixes'];
      itens = itens.filter(item => !proibidos.includes(item));
    }
    if (grupo === 'Aminoácidos') {
      // Pode incluir apenas alimentos de origem animal
      const permitidos = ['Tofu', 'Leguminosas'];
      itens = itens.filter(item => permitidos.includes(item));
    }
  }

  return itens;
}

// Função para gerar o conjunto de refeições
function gerarRefeicao() {
  if (!activeDiet) {
    alert('Por favor, selecione uma dieta primeiro.');
    return;
  }

  const regras = dietRules[activeDiet];

  // Filtra os grupos permitidos na dieta
  const gruposPermitidos = Object.keys(sourcesData).filter(g => regras.includes(g));

  const totalItens = 8;
  const resultadoItens = [];

  // Para cada grupo permitido, seleciona aleatoriamente itens sem repetir dentro do grupo
  const gruposItensMap = {};

  gruposPermitidos.forEach(grupo => {
    const itensOriginais = filtrarItensPorDieta(grupo, activeDiet);
    // Faz uma cópia para manipulação
    let itensDisponiveis = [...itensOriginais];
    gruposItensMap[grupo] = {
      disponíveis: itensDisponiveis,
      usados: []
    };
  });

  // Seleciona itens de cada grupo até atingir 8 itens
  let contador = 0;
  while (resultadoItens.length < totalItens) {
    for (const grupo of gruposPermitidos) {
      if (resultadoItens.length >= totalItens) break;

      const mapa = gruposItensMap[grupo];
      // Se não há itens disponíveis, repõe a lista
      if (mapa.disponíveis.length === 0) {
        // Recria a lista de disponíveis
        const itensOriginais = filtrarItensPorDieta(grupo, activeDiet);
        mapa.disponíveis = [...itensOriginais];
        mapa.usados = [];
      }

      // Seleciona aleatoriamente um item da lista disponível
      const idx = Math.floor(Math.random() * mapa.disponíveis.length);
      const itemSelecionado = mapa.disponíveis[idx];

      resultadoItens.push(itemSelecionado);

      // Move o item para usados e remove da disponíveis
      mapa.usados.push(itemSelecionado);
      mapa.disponíveis.splice(idx, 1);
    }
    // Se todos os itens possíveis forem usados e ainda não atingimos 8, recomeça
    // (a lógica acima já faz isso ao repor a lista)
  }

  // Mostra o resultado
  resultadoDiv.innerHTML = '<h3>Ideias para alimentação em um dia:</h3><ul>' +
    resultadoItens.map(item => `<li>${item}</li>`).join('') +
    '</ul>';
}

// Função para copiar o resultado
function copiarResultado() {
  const resultadoTexto = resultadoDiv.innerText || resultadoDiv.textContent;
  navigator.clipboard.writeText(resultadoTexto).then(() => {
    alert('Resultado copiado para a área de transferência!');
  });
}

// Eventos dos botões
btnGerar.addEventListener('click', gerarRefeicao);
btnCopiar.addEventListener('click', copiarResultado);