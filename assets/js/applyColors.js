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
    const fs1 = data.global.fontsize.fs1.value;
    const fs2 = data.global.fontsize.fs2.value;
    const fs3 = data.global.fontsize.fs3.value;
    const fs4 = data.global.fontsize.fs4.value;
    const fontSizeBase = data.global.fontsize.fontSizeBase.value;
    const fontSizeParagraph = data.global.fontsize.fontSizeParagraph.value;
    
    // CSSを動的に追加
    const style = document.createElement('style');
    style.innerHTML = `
      .primary { color: ${primaryColor}; }
      .secondary { color: ${secondaryColor}; }
      .fs1 { font-size: ${fs1}; }
      .fs2 { font-size: ${fs2}; }
      .fs3 { font-size: ${fs3}; }
      .fs4 { font-size: ${fs4}; }
      .fontSizeParagraph { font-size: ${fontSizeParagraph}; }
    `;
    document.head.appendChild(style);
  }
  
  // 色を読み込んで適用
  loadColors();  