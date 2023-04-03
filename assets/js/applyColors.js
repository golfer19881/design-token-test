// JSONファイルを読み込む関数
async function loadColors() {
    try {
      const response = await fetch('assets/js/tokens.json');
      const data = await response.json();
      applyColors(data);
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  }
  
  // 色を適用する関数
  function applyColors(data) {
    const primaryColor = data.global.main.primaryColor.value;
    const secondaryColor = data.global.main.secondaryColor.value;
    
    // CSSを動的に追加
    const style = document.createElement('style');
    style.innerHTML = `
      .primary { color: ${primaryColor}; }
      .secondary { color: ${secondaryColor}; }
    `;
    document.head.appendChild(style);
  }
  
  // 色を読み込んで適用
  loadColors();  