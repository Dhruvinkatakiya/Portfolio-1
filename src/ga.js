// src/ga.js
export const initGA = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PBDP59088P'); // Your GA4 ID
};
