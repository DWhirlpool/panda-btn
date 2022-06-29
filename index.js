function init() {
  
  const spriteSvg = color =>{  
    return `
      <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 2117.1 177.4" >
  <path class="panda_white" d="M1893.1,133.9l-76.9,8.4l-4.8-3l-5.1,0v-5.1h-5.1v-15.3l20.4-14h50.9l20.6,14V133.9z M1785.9,88.3V73h5.1V62.8
    h5.1v-5.1h5.1v-5.1h5.1v-5.1h5.1v-5.1l5.1,0l31.6-3.9l44.8,8.8l8.3,10.4v7.9l-71.4,36.2L1785.9,88.3z"/>
  <g>
    <path class="panda_white" d="M556.7,88.5l0-30.3h5.1v-5.1h5.1V42.9h5.1v-5.1h5.1v-5.1h10.2v-5l50.9,0v5l25.5,0v55.8L556.7,88.5z
        M656.9,102.8l11.9,6.4v10.1l-5.1,21.8l-20.4,3.7h-5.1v5.1h-40.7l-25.6-4.3l-5-21.2v-5.1l10.6-16.5H656.9z"/>
  </g>
  <path class="panda_white" d="M208.8,93.7V83.5h5.1V73.3h5.1l0-25.5l15.3,0h10.2v-5.1h35.6v5.1l25.5,0l0,15.3h5.1v10.2h5.1v15.3h-5.1v5.1
    l0,20.3l10.2,0v5.1h-5.1l-0.1,20.4h-30.5v5.1h-30.5v-5.1l-29.4,0l-6.3-10.2v-5.1h-5.1v-5.1h-5.1V114L208.8,93.7z"/>
  <g>
    <g>
      <path class="panda_white" d="M1172,48v-5.1h5.1 M1177.1,42.9h10.2V48h5.1v5.1h5.1v10.2h5.1v30.5l-15.3,30.6v10.2h-5.1v5.1l-12.8,10.2
        l-38.2,0v-5.1H1121v-5.1l51-91.7 M1135.8,49.6l11.5,44.2l-41.6,40.8h-5.1v-5.1h-5.1v-5.1h-5.1v-5.1h-5.1v-5.1h-5.1V88.7
        L1135.8,49.6z"/>
    </g>
    <path class="${color}" d="M1202.6,88.7h5.1v5.1h5v5.1h5.1v15.3h-5.1v10.2h-10.1v5.1h-15.3v-5.1h-5.1v-15.3h5.1V98.9h5.1v-5.1h10.2
      L1202.6,88.7z M1177.1,58.2v-5.1h10.2v5.1h5.1v10.2h-10.2v-5.1h-5.1V58.2 M1177.1,139.7h5.1v10.2h-5.1v5.1h-15.3v-5.1h-5.1v-10.2
      H1177.1 M1121.1,37.8h10.1v-5.1h20.4v-5.1h15.3v5.1h5.1v56.1h-5.1V104h-5.1v10.2h-5.1v5.1h-5.1v5.1h-5.1v5.1h-5.1v5.1h-10.2v5.1
      h-20.3v-5.1h-5.1v-10.2h5.1v-5.1h5.1v-5.1h5.1v-5.1h5V104h5.1V93.8h5.1V58.2h-5.1v10.2h-5v5.1h-5.1v5.1h-10.2v5.1h-10.2v5.1h-20.4
      V78.6h5.1V68.4h5.1v-5.1h5.1v-5.1h5.1V48h10.2v-5.1h5.1v-5.1L1121.1,37.8"/>
  </g>
  <g>
    <path class="panda_white" d="M1514.2,139.5v5.1h-5v5.1h-25.5v-5.1h-5.1v-5h-5.1v-5.1h-5.1v-5.1h-5.1v-5.7l-20.4-35.1V73.3l15.3-25.5h5.1v-5
      h5.1v-5.1h10.2v-5.1h10.2v-5.1h10.2L1514.2,139.5z M1539.7,42.8h5.1v5.1h5.1V53h5.1v5.1l-20.4,63h-10.2l-15.8-32.8l-0.2-49
      l5.8-11.8h5.1v5.1h10.2v5.1h5.1v5.1L1539.7,42.8"/>
    <path class="${color}" d="M1458.2,129.3H1448v-5.1h-5.1v-5.1h-5.1V93.6h5.1v-5.1h15.3v5.1h5.1v30.6h-5.1L1458.2,129.3z M1458.2,63.1
      h-5.1v5.1h-5.1v5.1h-5.1v-5.1h-5.1V58h5.1v-5.1h5.1v-5h10.2V63.1z M1504.1,134.4v10.2h-15.3v-5.1h-5.1v-5.1h5.1v-5.1h10.2v5.1
      L1504.1,134.4z M1509.1,134.4v-5.1h-5v-5.1h-5.1V114h-5.1v-5.1h-5.1v-5.1h-5.1V93.6h-5.1V47.8h5.1v-5.1h5.1v-5.1h5.1v-5.1h5.1v-5
      h15.2v61h5.1v10.2h5.1v10.2h5.1v5.1h5.1V83.4h5.1V68.2h5.1v-5.1h5.1V58h5.1v5.1h5.1v10.2h5.1V114h-5.1v10.2h-5.1v5.1h-10.2v5.1
      h-5.1v15.3h-25.5v-10.2h-5.1L1509.1,134.4"/>
  </g>
  <g>
    <path class="panda_white" d="M793.7,32.7v5.1h10.2l35.6,20.4v5.1h5.1v6.6l5.1,8.9l0,35.4h-5.1v10.2h-5.1v5.1h-5.1l-81.5-71.3v-5.1h-5.1
      V42.9h5.1v-5.1h5.1v-5.1L793.7,32.7z M821.3,126.8l2.9,12.9v5.1h-5.1v5.1h-10.2v5.1h-30.5v-6.3L747,98.6l3.4-14.1l20.6-2.8
      L821.3,126.8z"/>
    <path class="${color}" d="M844.6,68.3h10.2v5.1H865v15.3h-5.1v5.1h-5.1v5.1h-10.2L844.6,68.3L844.6,68.3z M839.5,47.9v10.2h-5.1v5.1
      h-15.3v-5.1H814V53h-5.1v-5.1h-5.1V32.6h5.1v-5.1h15.3v5.1h10.2v5.1h5.1V47.9 M763.1,42.8h5.1v-5.1h10.2v10.2h-5.1V53H758v-5.1h5.1
      V42.8z M752.9,53v5.1h25.5v5.1h10.2v5.1h5.1v5.1h5.1v5.1h5.1v5.1H814v5.1h5.1v5.1h5.1v5.1h5.1V109h5.1v25.5h-5.1v5.1h-10.2v-5.1
      H814v-5.1h-5.1v-5.1h-5.1v-5.1h-5v-5.1h-5.1v-5h-5.1V104h-5.1v-5.1h-15.3v-5.1H758v-5.1h-5.1v10.2h5.1v5.1h5.1v5h5.1v10.2h5.1v10.2
      h5.1v20.4h-15.3v-5.1H758v-5.1h-5.1v-5.1h-5.1v-5.1h-5.1v-5.1h-5.1v-5.1h-5.1v-10.1h-5.1V78.5h5.1v-5.1h-5.1V58.1h5.1V53H752.9z"/>
  </g>
  <path class="${color}" d="M577.1,129.5v5.1h10.2v5.1h10.2V155h-5.1v5.1h-15.3V155H572v-5.1h-5.1v-10.2h-5.1v-10.2h5.1v-5.1h5.1v5.1H577.1
    z M582.2,58.2h5.1v-5.1h5.1V48h5.1v5.1h5.1v5.1v5.1v5.1h-5.1v5.1h-15.3L582.2,58.2L582.2,58.2z M597.5,17.5h5.1v-5.1h20.3v5.1h10.2
    v20.3H628l0,0v5.1h-15.3v-5.1h-5.1v-5h-5v-5.1h-5.1L597.5,17.5L597.5,17.5z M663.7,155h-5.1v5.1h-10.2V155h-5.1v-15.3h10.2v-5.1h5.1
    v-5.1h5.1v-10.2h5.1v25.5h-5.1V155z M658.6,53.1V42.9h-5.1V32.7h5.1v-5h10.2v5h5.1V48h-5.1l0,0v5.1H658.6z M668.8,109.2h-51v5.1
    h-40.7v5h-10.2v-15.2h-5.1V99h-5.1v-5.1h-5.1v-5.1h-5.1V78.6h5.1v-5.1h15.3v5.1h15.3v5.1h50.9v-5.1h25.5v-5.1h5.1v-5.1h25.5v20.4
    h-5.1v5.1H679V99h-10.2l0,0V109.2z"/>
  <g>
    <polyline class="${color}" points="1962.2,83.6 1962.2,78.5 1962.2,73.4 1967.3,73.4 1967.3,73.4 1967.3,73.4 1967.3,68.3 1967.3,63.2 
      1972.4,63.2 1972.4,63.2 1972.4,63.2 1972.4,58.1 1972.4,53 1977.5,53 1977.5,53.1 1977.5,53 1977.5,48 1982.6,48 1982.6,48 
      1982.6,48 1982.6,42.9 1987.7,42.9 1987.7,37.8 1992.8,37.8 1992.8,37.8 1997.8,37.8 1997.9,37.8 1997.8,37.8 1997.8,32.7 
      2002.9,32.7 2008,32.7 2013.1,32.7 2013.1,32.7 2013.1,32.7 2013.1,32.7 2013.1,32.7 2013.1,27.6 2018.2,27.6 2023.3,27.6 
      2023.3,27.6 2028.4,27.6 2033.5,27.6 2038.6,27.6 2038.6,27.6 2043.7,27.6 2048.8,27.6 2048.8,32.7 2048.8,32.7 2048.8,32.7 
      2053.9,32.7 2059,32.7 2059,37.8 2064.1,37.8 2064.1,37.8 2069.2,37.8 2069.2,42.9 2074.3,42.9 2074.3,48 2074.3,48 2079.4,48 
      2079.4,53 2079.4,53.1 2079.4,58.1 2079.3,58.1 2079.4,58.1 2084.4,58.1 2084.4,63.2 2084.4,63.2 2084.4,63.2 2089.5,63.2 
      2089.5,68.3 2089.5,73.4 2094.6,73.4 2094.6,78.5 2094.6,83.6 2094.6,88.7 2094.6,88.7 2094.6,93.8 2094.6,98.9 2094.6,104 
      2094.6,109.1 2089.5,109.1 2089.5,114.2 2089.5,114.2 2089.5,119.3 2084.4,119.3 2084.4,124.4 2084.4,129.5 2079.4,129.5 
      2079.4,129.4 2079.4,129.5 2079.3,129.5 2079.4,129.5 2079.4,134.5 2074.3,134.5 2074.3,134.5 2074.3,139.6 2069.2,139.6 
      2069.2,144.7 2064.1,144.7 2064.1,144.7 2059,144.7 2059,149.8 2053.9,149.8 2048.8,149.8 2048.8,154.9 2043.7,154.9 2038.6,154.9 
      2038.6,154.9 2033.5,154.9 2028.4,154.9 2023.3,154.9 2023.3,154.9 2018.2,154.9 2013.1,154.9 2013.1,154.9 2008,154.9 2008,149.8 
      2002.9,149.8 1997.9,149.8 1997.8,149.8 1992.8,149.8 1992.8,144.7 1992.8,144.7 1992.8,144.7 1987.7,144.7 1987.7,139.6 
      1982.6,139.6 1982.6,139.6 1977.5,139.6 1977.5,134.5 1977.5,129.5 1977.5,129.4 1977.5,129.5 1972.4,129.5 1972.4,124.4 
      1972.4,119.3 1967.3,119.3 1967.3,114.2 1967.3,114.2 1967.3,109.1 1967.3,104 1967.3,104 1967.3,104 1962.2,104 1962.2,98.9 
      1962.2,93.8 1962.2,88.7 1962.2,88.7 1962.2,83.6 	"/>
  </g>
  <path class="${color}" d="M1811.4,144.5v-5.1h5.1v-5.1h10.2v-5.1h10.2v-5.1h50.9V119h-5.1v-5.1h-10.2v-5.1h-50.9v5.1h-10.2v5.1h-10.2v5.1
    h-5.1V119h-5.1v-15.3h-5.1V88.5h5.1v-5.1h10.2v-5.1h5.1v-5.1h10.2v-5.1h5.1V63h10.2v-5.1h45.8V63h20.4v-5.1h-5.1v-5.1h-10.2v-5.1
    h-45.8v-5.1h-20.4v-5.1h5.1v-5.1h15.3v-5.1h35.6v5.1h10.2v5.1h10.2v5.1h5.1v5.1h5.1v5.1h5.1v5.1h5.1v10.2h5.1v10.2h5.1v30.5h-5.1
    v5.1h-5.1v10.2h-5.1v10.2H1898v5.1h-5.1v5.1h-10.2v5.1h-10.2v5.1h-40.7v-5.1h-15.3v-5.1H1811.4z"/>
  <g>
    <path class="panda_white" d="M929.4,134.7h-5.1v-5.1h-5.1v-5.1h5.1l0.4-42l20.8-32.7L962.7,89l0.6,50.4L960,155h-5.1v-5.1h-10.2v-5.1h-5.1
      v-5h-10.2V134.7 M1010.9,139.8h-5.1v5h-10.2v5.1h-10.2v5.1h-10.2v-5.1h5.1l-19.6-90.7L960,43v-5.1h5v-5.1h5.1v-5.1h15.3v5.1h5.1
      v5.1h5.1V43h5.1v5.1h5.1v5.1h5.1v9.1l15.1,0.6v31.1h5.3v15.3h-5.1v5.1h-5.1v5.1h-5.1v15.3h-5.1L1010.9,139.8z"/>
    <path class="${color}" d="M985.4,53.2h-10.2v-5.1h-5.1V37.9h15.3V43h5.1v5.1h-5.1V53.2z M985.4,144.8h-5.1v5.1h-5.1v5.1H960V93.9h-5.1
      V83.7h-5.1V73.5h-5.1v-5.1h-5.1V99h-5.1v15.3h-5.1v5.1h-5.1v5.1h-5.1v-5.1h-5.1v-10.2H909V68.4h5.1V58.2h5.1v-5h10.2v-5.1h5.1V32.8
      h5.1v-5.1h15.3v5.1h5.1V43h5.1v10.2h5v5h5.1v10.2h5.1v5.1h5.1v5.1h5.1v10.2h5.1v45.9h-5.1v5h-5.1L985.4,144.8z M1036.4,124.5h-5.1
      v5.1h-5.1v5.1H1016v-5.1h-5.1v-5.1h5.1v-5.1h5.1v-5.1h5.1v-5.1h5.1v5.1h5.1L1036.4,124.5L1036.4,124.5z M1036.4,88.8h-5.1v5.1H1016
      v-5.1h-5.1V58.2h5.1v-5h10.2v5h5.1v5.1h5.1L1036.4,88.8L1036.4,88.8z"/>
  </g>
  <g>
    <path class="panda_white" d="M149.5,68.2V58h-5.1V47.8l-4.6-20.5l-20.9,0.1v-5.1h-10.2v-5.1H73.1v5.1H62.9l-16.6,5.1l-3.9,5l0.1,20.5h-5.1
      l0,33H27.3l-0.1,34.9h20.4v13.8l25.5-0.2v5.1l65.7,0l0.3-15.3h5.3v-5.1h5.1v-10.2L149.5,68.2z"/>
    <path class="${color}" d="M98.7,63.1H88.5V58h10.2V63.1z M103.8,73.3H83.4v-5.1h-5.1v-5.1h5.1v5.1h20.4V73.3z M124.1,42.7v5.1h5.1v5.1
      h5.1v10.2H119V58h-5.1V42.7H124.1z M149.6,42.7h-5.1v5.1h-5.1v-5.1h-5.1v-5.1h-5.1v-5.1h-5.1V22.3h5.1v-5.1h10.2v5.1h5.1v5.1h5.1
      L149.6,42.7L149.6,42.7z M103.8,134.4H119v-5.1h10.2v-5.1h10.2v30.6h-5.1v5H119v-5h-5.1v-5.1h-5.1v-5.1h-5V134.4z M68.1,42.7h5.1
      V58h-5.1v5.1H57.9V58h-5.1V47.8h5.1v-5.1H68.1 M52.8,17.2h5.1v5.1H63v5.1h-5.1v5.1h-5.1v5.1h-5.1v5.1h-5.1 M42.6,42.7h-5.1V27.4
      h5.1v-5.1h5.1v-5.1h5.1 M22.3,139.5h-5.1v-20.4h5.1V114h5v-5.1h20.4v5.1h5.1v5.1h5.1v5.1H63v10.2h-5.1v5.1h-5.1v5.1H42.6v5.1H32.4
      v-5.1H22.3V139.5z M52.8,78.3h5.1v5.1h66.2v-5.1h15.3v-5.1h5.1v-5h5.1v10.1h15.3v5.1h5.1v15.3h-5.1v5.1h-5.1v5.1h-15.3v-5.1h-10.2
      v-5.1h-10.2v-5.1H52.8v5.1H27.3v-5.1h-5V83.4h-5.1v-5.1h-5.1v-5H7V52.9h5.1v-5.1h10.2v5.1h5.1V58h5v5.1h5.1v5.1h5.1v5h5.1v5.1
      L52.8,78.3"/>
  </g>
  <path class="${color}" d="M285.3,42.7h5.1v-5.1h15.3v5.1h5.1v5.1h5.1V58h-5.1v5.1h-5.1V58h-5.1v-5.1h-5.1v-5.1h-10.2L285.3,42.7
    L285.3,42.7z M280.2,68.2h5.1v-5.1h10.2v5.1h5.1v10.2h-5.1v5.1h-10.2v-5.1h-5.1V68.2z M259.8,73.3H270v5.1h-10.2V73.3z M254.8,83.5
    h20.3v5.1h-20.3V83.5z M244.6,68.2v10.2h-5.1v5.1h-15.3V73.3h5.1v-5.1h5.1v-5.1h5.1v5.1L244.6,68.2z M208.9,47.8h5.1v-5.1h15.3v5.1
    h5.1v5.1h-5.1V58h-5.1v5.1h-5.1v5.1H214v-5.1h-5.1V47.8z M239.5,154.8v5.1h-15.3v-5.1h-5.1v-25.5h15.3v5.1h10.2v5.1h5.1v10.2h-5.1
    v5.1L239.5,154.8z M321,144.6v5.1h-5.1v5.1h-15.3v-5.1h-5.1v-5.1h-5.1v-10.2h10.2v-5.1h10.2v-5.1h5.1v-5.1h10.2v25.5H321z
      M341.4,98.8h-5.1v5h-5.1v5.1h-5.1v5.1h-25.5v-5.1h-61.1v5.1h-45.9v-5.1h-5.1V93.7h5.1v-5.1h15.3v5.1h101.9v-5.1h5.1v-5.1h5.1v-5.1
    h10.2v5.1h5.1v5.1h5.1L341.4,98.8L341.4,98.8z"/>
  <g>
    <path class="panda_white" d="M380.1,108.9v10.2h5.1v5.1h5.3l0.3,15.3l65.7,0v-5.1l25.5,0.2v-13.8h20.4l-0.1-34.9h-10.1l0-33h-5.1l0.1-20.5
      l-3.9-5l-16.6-5.1h-10.2v-5.1h-35.6v5.1h-10.2v5.1l-20.9-0.1l-4.6,20.5V58h-5.1v10.2L380.1,108.9z"/>
    <path class="${color}" d="M430.9,58h10.2v5.1h-10.2V58z M425.8,68.2h20.4v-5.1h5.1v5.1h-5.1v5.1h-20.4V68.2z M415.7,42.7V58h-5.1v5.1
      h-15.3V52.9h5.1v-5.1h5.1v-5.1H415.7z M380,42.7V27.4h5.1v-5.1h5.1v-5.1h10.2v5.1h5.1v10.2h-5.1v5.1h-5.1v5.1h-5.1v5.1h-5.1v-5.1
      H380L380,42.7z M425.8,144.6h-5v5.1h-5.1v5.1h-5.1v5h-15.3v-5h-5.1v-30.6h10.2v5.1h10.2v5.1h15.2V144.6z M461.5,42.7h10.2v5.1h5.1
      V58h-5.1v5.1h-10.2V58h-5.1V42.7H461.5 M487,42.7h-5.1v-5.1h-5.1v-5.1h-5.1v-5.1h-5.1v-5.1h5.1v-5.1h5.1 M476.8,17.2h5.1v5.1h5.1
      v5.1h5.1v15.3H487 M507.3,144.6h-10.1v5.1H487v-5.1h-10.2v-5.1h-5.1v-5.1h-5.1v-10.2h5.1v-5.1h5.1V114h5.1v-5.1h20.4v5.1h5v5.1h5.1
      v20.4h-5.1V144.6z M476.8,78.3h5.1v-5.1h5.1v-5h5.1v-5.1h5.1V58h5v-5.1h5.1v-5.1h10.2v5.1h5.1v20.4h-5.1v5h-5.1v5.1h-5.1v10.2h-5
      v5.1h-25.5v-5.1h-71.3v5.1h-10.2v5.1h-10.2v5.1h-15.3v-5.1h-5.1v-5.1h-5.1V83.4h5.1v-5.1H380V68.2h5.1v5h5.1v5.1h15.3v5.1h66.2
      v-5.1L476.8,78.3"/>
  </g>
  <g>
    <path class="panda_white" d="M1295.2,60.5l-2.9-12.9v-5.1h5.1v-5.1h10.2v-5.1h30.5v6.3l31.4,50.1l-3.4,14.1l-20.6,2.8L1295.2,60.5z
        M1322.8,154.6v-5.1h-10.2l-35.6-20.4V124h-5.1v-5.8l-5.1-13l0-32.2h5.1V62.9h5.1v-5.1h5.1l81.5,71.3v5.1h5.1v10.2h-5.1v5.1h-5.1
      v5.1H1322.8z"/>
    <path class="${color}" d="M1271.9,119h-10.2v-5.1h-10.2V98.6h5.1v-5.1h5.1v-5.1h10.2V119L1271.9,119z M1277,139.4v-10.2h5.1v-5.1h15.3
      v5.1h5.1v5.1h5.1v5.1h5.1v15.3h-5.1v5.1h-15.3v-5.1h-10.2v-5.1h-5.1V139.4 M1353.4,144.5h-5.1v5.1h-10.2v-10.2h5.1v-5.1h15.3v5.1
      h-5.1V144.5z M1363.6,134.3v-5.1h-25.5v-5.1h-10.2V119h-5.1v-5.1h-5.1v-5.1h-5.1v-5.1h-10.1v-5.1h-5.1v-5.1h-5.1v-5.1h-5.1V78.3
      h-5.1V52.8h5.1v-5.1h10.2v5.1h5.1v5.1h5.1V63h5.1v5.1h5v5.1h5.1v5h5.1v5.1h5.1v5.1h15.3v5.1h10.2v5.1h5.1V88.4h-5.1v-5.1h-5.1v-5
      h-5.1V68.1h-5.1V57.9h-5.1V37.5h15.3v5.1h5.1v5.1h5.1v5.1h5.1v5.1h5.1V63h5.1v5.1h5.1v10.1h5.1v30.6h-5.1v5.1h5.1v15.3h-5.1v5.1
      H1363.6z"/>
  </g>
  <g>
    <g>
      <path class="panda_white" d="M1650.3,139.3v5.1h-5.1 M1645.2,144.4H1635v-5.1h-5.1v-5.1h-5.1V124h-5.1V93.5l15.3-30.6V52.7h5.1v-5.1
        l12.8-10.2l38.2,0v5.1h10.2v5.1l-51,91.7 M1686.5,137.7L1675,93.5l41.6-40.8h5.1v5.1h5.1v5.1h5.1V68h5.1v5.1h5.1v25.5
        L1686.5,137.7z"/>
    </g>
    <path class="${color}" d="M1619.7,98.6h-5.1v-5.1h-5v-5.1h-5.1V73.1h5.1V62.9h10.1v-5.1h15.3v5.1h5.1v15.3h-5.1v10.2h-5.1v5.1h-10.2
      L1619.7,98.6z M1645.2,129.1v5.1H1635v-5.1h-5.1v-10.2h10.2v5.1h5.1V129.1 M1645.2,47.6h-5.1V37.4h5.1v-5.1h15.3v5.1h5.1v10.2
      H1645.2 M1701.2,149.5h-10.1v5.1h-20.4v5.1h-15.3v-5.1h-5.1V98.5h5.1V83.3h5.1V73.1h5.1V68h5.1v-5.1h5.1v-5.1h5.1v-5.1h10.2v-5.1
      h20.3v5.1h5.1v10.2h-5.1V68h-5.1v5.1h-5.1v5.1h-5v5.1h-5.1v10.2h-5.1v35.6h5.1v-10.2h5v-5.1h5.1v-5.1h10.2v-5.1h10.2v-5.1h20.4
      v10.2h-5.1v10.2h-5.1v5.1h-5.1v5.1h-5.1v10.2h-10.2v5.1h-5.1v5.1H1701.2"/>
  </g>
  </svg>
    `
  }

  const colorVariations = [
    'blue',
    'green',
    'pink',
    'brown',
    'dark_brown'
  ]

  const animationPattern = [ 
    11,11,11,11,10,
    9,8,7,6,5,4,
    9,8,7,6,5,4,
    3,2,1,0
  ]

  const frameSize = 45

  //rolling animation
  const animateSprite = (target, speed) => {
    let i = 0
    target.style.margin = `0px 0px 0px -${(animationPattern[i] * frameSize)}px`

    setInterval(function () {
      target.style.margin = `0px 0px 0px -${(animationPattern[i] * frameSize)}px`
      if (animationPattern[i] === 0) {
        i -= 2
      } else {
        i++
      }
    }, speed)
  }

  const panda-btn = document.getElementsByTagName('panda-btn')
  panda-btn.innerHTML = `
  <button>
      <div class="panda_face">
        <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 91.7 71.3" >
          <path class="panda_icon panda_white" d="M86.6,20.4v15.3h5.1v20.4h-5.1v5.1h-5.1v5H71.3v5.1H20.4v-5.1H10.2v-5H5.1v-5.1H0V35.7h5.1V20.4L25.5,5.1h40.7L86.6,20.4z"/>
          <path class="panda_icon pink" d="M40.7,45.8h10.2v5.1H40.7V45.8z M10.2,25.4H5.1v-5.1H0V10.2h5.1V5.1h5.1V0h10.2v5.1h5.1v5.1h-5.1v5.1h-5.1v5h-5.1V25.4z
            M30.5,45.8h-5v5.1H15.3V35.6h5.1v-5.1h10.1V45.8z M61.1,56H56v5.1H35.6V56H56v-5.1h5.1V56z M76.4,50.9H66.2v-5.1h-5.1V30.5h10.2
          v5.1h5.1V50.9z M91.7,20.3h-5.1v5.1h-5.1v-5.1h-5.1v-5h-5.1v-5.1h-5.1V5.1h5.1V0h10.2v5.1h5.1v5.1h5.1V20.3z"/>
        </svg>
      </div>
    </button>
  </div>
  <div class="cover"></div>
<path class="panda_icon panda_white" d="M86.6,20.4v15.3h5.1v20.4h-5.1v5.1h-5.1v5H71.3v5.1H20.4v-5.1H10.2v-5H5.1v-5.1H0V35.7h5.1V20.4L25.5,5.1h40.7
	L86.6,20.4z"/>
  <style>
  * {
  box-sizing: border-box;
}

.cover {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;
}

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.panda_face.hide { opacity: 0; }

span { margin-left:12px; }

.sign {
  position: absolute;
  color: white;
  bottom: 10px;
  right: 10px;
  font-size: 10px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.panda {
  position: absolute;
  height: 45px;
  width: 45px;
  overflow: hidden;
  transition: 2s;
}

.panda_inner {
  height: 100%;
}

.panda_inner svg {
  height: 100%;
  width: auto;
}

button {
  padding: 10px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid rgb(131, 88, 59);
  border-width:2px 2px 7px 2px;
  border-radius: 10px;
  background-color: rgb(83, 39, 9);
  color: white;
  transition: 0.3s;
  cursor: pointer;
}

button:hover {
  border-width:2px 2px 4px 2px;
  margin-top: 3px;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 4px hotpink;
}

.panda_face {
  position: relative;
  height: 25px;
  width: auto;
}

.panda_face {
  opacity: 1;
}

.panda_face svg {
  height: 100%;
  width: auto;
}

.panda_white { fill: white; }
.blue { fill: #12b7e9; }
.green { fill: rgb(43, 163, 113); }
.pink { fill: hotpink;}
.brown { fill: rgb(126, 80, 62);}
.dark_brown { fill: rgb(53, 34, 27);}

button:hover .panda_face {
  animation: bop infinite 0.5s;
}

@keyframes bop {
  0% {
    top: 0;
    transform: scale(1);
  }
  50% {
    top: -5px;
    transform: scale(0.95,1.05);
  }
  90% {
    transform: scale(1.1,0.9);
  }
  100% {
    top: 0;
    transform: scale(1);
  }
}

button.animate svg {
  animation: spin infinite linear 0.5s;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-720deg);
  }
}

@keyframes fadeout {
  0% { 
    opacity: 1;
  }
  90% { 
    opacity: 0;
  }
  100% { 
    opacity: 0;
    display: none;
  }
} 

button:hover .fade_in,
.panda_face.fade_in {
  animation: fade_in forwards 0.5s;
}

@keyframes fade_in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

button.animate {
  border-color: rgb(58, 28, 9);
  transform-origin: bottom right;
  animation: shake ease forwards 0.5s;
}

@keyframes shake {
  0% { 
    transform-origin: bottom right;
    transform: translate(0,0) rotate(0deg);
  }
  40% { 
    transform: translate(5px,0) rotate(45deg);
  }
  70% {
    transform-origin: bottom right; 
    transform: translate(5px,0) rotate(45deg);
  }
  85% { 
    transform-origin: bottom left; 
    transform: translate(0,0) rotate(-20deg);
  }
  95% { 
    transform: translate(0,0) rotate(0deg);
  }
  100% { 
    transform-origin: bottom right;
    transform: translate(0,0) rotate(0deg);
  }
}
</style>
  `
  const pandaFace = document.querySelector('.panda_face')
  const button = document.querySelector('button')
  const cover = document.querySelector('.cover')
  const pandaIcon = document.querySelectorAll('.panda_icon')
  let pandaPos = pandaFace.getBoundingClientRect()
  let pandaColor = pandaIcon[1].classList[1]
  let pandaSwitch = true


  const movePanda = target =>{
    target.style.transition = '10s'
    const randomTop = Math.ceil(Math.random() * 100)
    target.style.zIndex = randomTop
    target.style.top = `${randomTop}%`
    target.style.left = `${Math.ceil(Math.random() * 100)}%`
  }


  const animateButton = () =>{
    pandaColor = pandaIcon[1].classList[1]
    button.classList.add('animate')
    pandaIcon.forEach(ele=>ele.classList.add(pandaColor))
    pandaFace.classList.remove('fade_in')
  }


  const completeButtonAnimation = () =>{
    button.classList.remove('animate')
    pandaFace.classList.remove('hide')
    pandaFace.classList.add('fade_in')
    pandaIcon[1].classList.add(colorVariations[Math.floor(Math.random() * colorVariations.length)])
    pandaSwitch = true
  }


  const createAndAnimatePanda = () =>{
    const panda = document.createElement('div')
    panda.classList.add('panda')
    panda.style.top = `${pandaPos.y - 10}px`
    panda.style.left = `${pandaPos.x - 10}px`
    cover.appendChild(panda)

    const inner = document.createElement('div')
    inner.classList.add('panda_inner')
    inner.style.width = `${frameSize * 12}px`
    inner.innerHTML = spriteSvg(pandaColor)
    panda.appendChild(inner)

    animateSprite(inner, 110)
    pandaFace.classList.add('hide')

    setTimeout(()=>{
      panda.style.left = `${pandaPos.x > 300 ? pandaPos.x - 300 : 50}px`
      pandaIcon.forEach(ele=>ele.classList.remove(pandaColor))
    }, 40)

    setTimeout(()=>{
      movePanda(panda)
      setInterval(()=>{
        movePanda(panda)
      },4000)
    }, 2000)
  }
  

  const triggerPanda = ()=>{  
    if (!pandaSwitch) return   
    pandaSwitch = false

    animateButton()

    setTimeout(()=>{
      createAndAnimatePanda()

      setTimeout(()=>{
        completeButtonAnimation()
      },1200)  

    },560)
  }

  button.addEventListener('click', triggerPanda)

  window.addEventListener('resize', ()=>pandaPos = pandaFace.getBoundingClientRect())

}

window.addEventListener('DOMContentLoaded', init)
