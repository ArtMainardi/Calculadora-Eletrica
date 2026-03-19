# Calculadora Elétrica ⚡

Este é um projeto interativo em JavaScript que oferece três ferramentas úteis para cálculos na área de elétrica e eletrônica:

- **Calculadora de Consumo de Energia** 💡
- **Conversor de Medidas Elétricas** 📏
- **Calculadora de Resistores (4 e 5 faixas)** 🎨

O projeto é executado no navegador e utiliza prompts para interação com o usuário, além de exibir uma interface visual para a calculadora de resistores.

---

## 📋 Funcionalidades

### 1. Calculadora de Consumo de Energia
Solicita ao usuário o nome do eletrodoméstico.

Permite escolher entre duas formas de entrada:
- Potência em Watts (converte automaticamente para kWh)
- Consumo direto em kWh

Calcula:
- Consumo por hora (em kWh)
- Custo por hora (considerando R$ 0,90 por kWh)
- Consumo diário (baseado nas horas de uso por dia)
- Custo diário
- Custo mensal (baseado nos dias de uso por mês)

Exibe os resultados no console do navegador.

### 2. Conversor de Medidas Elétricas
Permite converter valores entre diferentes múltiplos e submúltiplos de unidades elétricas, como:

- p (pico) - 10⁻¹²
- n (nano) - 10⁻⁹
- µ (micro) - 10⁻⁶
- m (mili) - 10⁻³
- unidade principal (A, V, Ω, W, etc.) - 10⁰
- k (quilo) - 10³
- M (mega) - 10⁶
- G (giga) - 10⁹

O usuário informa a unidade, o valor, a unidade de origem e a unidade de destino, e o sistema exibe o resultado convertido.

### 3. Calculadora de Resistor (4 e 5 faixas)
Interface visual interativa que permite ao usuário selecionar as cores das faixas de um resistor e obter o valor da resistência com tolerância.

- Suporte a resistores de 4 ou 5 faixas
- Cálculo automático do valor com base nas cores selecionadas
- Exibição do valor em Ω, kΩ, MΩ ou GΩ conforme a grandeza
- Atualização visual das faixas do resistor com as cores correspondentes
- Tabela de cores completa para:
  - Primeiras faixas (dígitos significativos)
  - Faixa multiplicadora
  - Faixa de tolerância

---

## 🚀 Como usar

1. Abra o arquivo `index.html` em um navegador.
2. No console (F12 → Aba Console), você verá a mensagem inicial.
3. Um prompt solicitará que você escolha uma das três opções:
   - `1` → Calculadora de Consumo
   - `2` → Conversor de Medidas
   - `3` → Calculadora de Resistor
4. Siga as instruções fornecidas pelos prompts e/ou interaja com a interface gráfica (no caso da calculadora de resistor).

-------------

## 📊 Exemplo de saída (Calculadora de Consumo)
Eletrodoméstico: Geladeira
Consumo kWh: 1.5 kWh
Valor total por hora: R$1.35
Consumo diário em kWh: 3.000 kWh
Valor total diário: R$2.70
Valor total por mês: R$81.00

-------------

## 🛠️ Tecnologias utilizadas

- **HTML5** – Estrutura da página
- **CSS3** – Estilização e animações
- **JavaScript (Vanilla)** – Lógica das calculadoras e interatividade

---

## 📁 Estrutura do Projeto
📦 Calculadora-Eletrica
├── 📂 Calculadora de Consumo
│ ├── calculoConsumo.js
│ └── calculoKwh.js
├── 📂 Conversor de Medidas
│ ├── conversorMedidas.js
│ ├── definirIndexInicial.js
│ └── definirIndexFinal.js
├── 📂 Calculadora Resistor
│ ├── addListeners.js
│ ├── atualizarResultado.js
│ ├── calculadoraResistor.js
│ ├── mudarCorSeletor.js
│ └── onOff5selectors.js
├── index.html
├── script.js
├── style.css
└── README.md

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Atividades

1) Converta as seguintes medidas para a unidade base indicada.  
a) Corrente elétrica (converter para Ampère – A)  
1. 750 mA = 0,75 A  
2. 4,2 mA = 0,0042 A  
3. 0,003 A = 0,003 A  
4. 1 200 mA = 1,2 A  
5. 15 µA = 0,000015 A  

b) Tensão elétrica (converter para Volt – V)  
6. 2,5 kV = 2.500 V  
7. 750 mV = 0,75 V  
8. 0,004 kV = 4 V  
9. 15 000 mV = 15 V  
10. 0,002 V = 0,002 V  

c) Resistência (converter para Ohm – Ω)  
11. 3,3 kΩ = 3.300 Ω  
12. 0,47 MΩ = 470.000 Ω  
13. 1200 Ω = 1.200 Ω  
14. 8,2 kΩ = 8.200 Ω  
15. 0,002 MΩ = 2.000 Ω  

2) Converta para múltiplos e submúltiplos indicados.  
16. 0,02 A → 20 mA  
17. 5 A → 5.000 mA  
18. 0,0004 A → 400 µA  
19. 2200 Ω → 2,2 kΩ  
20. 0,000015 V → 0,015 mV  

3) Converta para a forma científica em múltiplos.  
21. 12 000 W → 12 kW  
22. 0,00056 W → 0,56 mW  
23. 0,0000009 A → 0,9 µA  
24. 1 500 000 Ω → 1.5 MΩ  
25. 0,0047 V → 4.7 mV  

4) Desafios (aplicação prática)  
26. Um LED consome 25 mA. Quantos Ampères isso representa?  
0.025 A  

27. Uma fonte fornece 0,005 kV. Qual a tensão em Volts?  
5 V  

28. Um resistor de 2,2 kΩ equivale a quantos Ohms?  
2200 Ω  

29. Um instrumento mede 0,000032 A. Expresse em microampères.  
32 µA  

30. A resistência de um sensor é 0,0032 MΩ. Expresse em kΩ.  
3.2 kΩ

---

## 👨‍💻 Autor

Desenvolvido pelo Arthur Iensen Mainardi como projeto de estudo para cálculos elétricos e eletrônicos.

---

**Nota:** Este projeto foi desenvolvido para fins educacionais e pode ser utilizado como base para estudos de JavaScript, manipulação do DOM e lógica de programação.
