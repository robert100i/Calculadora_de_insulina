function calcularInsulina() {
  // Obter o valor da glicose inserida pelo usuário
  const glicoseInput = document.getElementById('glicoseInput');
  const glicoseAtual = parseFloat(glicoseInput.value);

  // Obter a meta de glicose desejada pelo usuário
  const glicoseMetaInput = document.getElementById('glicoseMetaInput');
  const glicoseMeta = parseFloat(glicoseMetaInput.value) || 90; // Valor padrão 90 se não for especificado

  // Verificar se a entrada é um número válido
  if (isNaN(glicoseAtual) || isNaN(glicoseMeta)) {
    alert('Por favor, insira valores numéricos válidos para a glicose.');
    return;
  }

  // Obter o valor da glicose por unidade de insulina
  const glicosePorUnidadeInput = document.getElementById('glicosePorUnidadeInput');
  const glicosePorUnidade = parseFloat(glicosePorUnidadeInput.value);

  // Verificar se a entrada é um número válido
  if (isNaN(glicosePorUnidade)) {
    alert('Por favor, insira um valor numérico para a glicose por unidade de insulina.');
    return;
  }

  // Obter a quantidade de carboidratos consumidos (opcional)
  const carboidratosInput = document.getElementById('carboidratosInput');
  const carboidratosConsumidos = parseFloat(carboidratosInput.value) || 0;

  // Obter a quantidade de carboidratos por unidade de insulina adicional (opcional)
  const carboidratosPorInsulinaInput = document.getElementById('carboidratosPorInsulinaInput');
  const carboidratosPorInsulina = parseFloat(carboidratosPorInsulinaInput.value) || 0;

  // Calcular a quantidade total de insulina necessária
  const insulinaBase = (glicoseAtual - glicoseMeta) / glicosePorUnidade;
  const insulinaAdicional = carboidratosPorInsulina ? carboidratosConsumidos / carboidratosPorInsulina : 0;
  const totalInsulina = insulinaBase + insulinaAdicional;

  // Exibir o resultado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `Você precisa tomar ${totalInsulina.toFixed(2)} unidades de insulina.`;
}
