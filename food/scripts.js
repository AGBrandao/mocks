  const macronutrientsData = [
    { name: 'Carboidratos', division: 'Carboidratos simples & complexos (Fibras)', sources: ['Arroz integral', 'Aveia', 'Batata-doce', 'Legumes', 'Frutas'] },
    { name: 'Gorduras', division: 'Poli-insaturadas, Monoinsaturadas, Saturadas', sources: ['Azeite de oliva', 'Abacate', 'Nozes', 'Sementes', 'Peixes gordurosos'] },
    { name: 'Proteínas', division: '8 Aminoácidos Essenciais', sources: ['Ovos', 'Carne', 'Peixe', 'Laticínios', 'Legumes'] },
];

  const aminoAcids = ['Leucina', 'Isoleucina', 'Valina', 'Lisina', 'Metionina', 'Fenilalanina', 'Treonina', 'Triptofano'];

  const divisionsData = [
  { name: 'Carboidratos simples', sources: ['Frutas', 'Vegetais', 'Grãos integrais', 'Legumes', 'Tubérculos'] },
  { name: 'Fibras', sources: ['Frutas', 'Vegetais', 'Grãos integrais', 'Legumes', 'Tubérculos'] },
  { name: 'Poli-insaturados', sources: ['Peixes', 'Nozes', 'Sementes', 'Óleos vegetais', 'Frutos do mar'] },
  { name: 'Monoinsaturados', sources: ['Azeite de oliva', 'Abacate', 'Nozes', 'Sementes', 'Amendoins'] },
  { name: 'Gorduras saturadas', sources: ['Manteiga', 'Queijo', 'Carnes gordas', 'Óleo de coco', 'Creme'] },
  { name: 'Aminoácidos', sources: ['Ovos', 'Carne', 'Peixe', 'Laticínios', 'Leguminosas'] }
];

  const sourcesData ={
  'Carboidratos simples': ['Cereais', 'Massas', 'Tapioca', 'Frutas doces', 'Pães', 'Mel'],
  'Fibras': ['Amora', 'Brócolis', 'Berinjela', 'Vegetais folhosos', 'Abobrinha', 'Chuchu'],
  'Poli-insaturados': ['Peixes', 'Nozes', 'Linhaça', 'Óleos vegetais', 'Chia', 'Sementes'],
  'Monoinsaturados': ['Azeite de oliva', 'Abacate', 'Amêndoas', 'Caju', 'Amendoins', 'Avelãs'],
  'Gorduras saturadas': ['Manteiga', 'Queijo', 'Carnes gordas', 'Óleo de coco', 'Creme de leite', 'Bacon'],
  'Aminoácidos': ['Ovos', 'Carne', 'Peixe', 'Laticínios', 'Leguminosas', 'Tofu']
};

  const dietRules = {
  'low_carb': ['Fibras', 'Poli-insaturados', 'Monoinsaturados', 'Aminoácidos','Gorduras saturadas'],
  'mediterranean': ['Carboidratos simples', 'Fibras', 'Poli-insaturados', 'Monoinsaturados', 'Aminoácidos'],
  'bluezone': ['Carboidratos simples', 'Fibras', 'Poli-insaturados', 'Monoinsaturados', 'Aminoácidos'],
  'carnivore': ['Gorduras saturadas', 'Aminoácidos'],
  'empty': ['Fibras', 'Poli-insaturados', 'Monoinsaturados', 'Aminoácidos','Gorduras saturadas', 'Carboidratos simples']
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
        div.style.backgroundColor = '#90ee90'; // Light green
      }
    });
  }