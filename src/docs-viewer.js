/**
 * docs-viewer.js
 * Enhances static documentation with interactive features like Copy to Clipboard.
 */

(function () {
  function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('.markdown-rendered pre');
    
    codeBlocks.forEach((block) => {
      // Create button
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.type = 'button';
      button.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
      
      // Add to block
      block.style.position = 'relative';
      block.appendChild(button);
      
      button.addEventListener('click', async () => {
        const code = block.querySelector('code');
        const text = code ? code.innerText : block.innerText;
        
        try {
          await navigator.clipboard.writeText(text);
          button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
          button.classList.add('copied');
          
          setTimeout(() => {
            button.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
            button.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
          button.innerText = 'Error';
        }
      });
    });
  }

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCopyButtons);
  } else {
    addCopyButtons();
  }
})();

