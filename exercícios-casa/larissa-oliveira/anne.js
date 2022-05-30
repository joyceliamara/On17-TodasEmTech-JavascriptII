const padronizacaoDocumento = document.querySelector("body");
padronizacaoDocumento.style.backgroundColor = "#356370";
padronizacaoDocumento.style.textAlign = "justify";
padronizacaoDocumento.style.color = "white";
padronizacaoDocumento.style.fontStyle = "Poppins, sans-serif";
padronizacaoDocumento.style.fontSize = "20px";

const titulo = document.querySelector("#titulo");
titulo.style.color = "#963E41";
titulo.style.backgroundColor = "white";
titulo.style.textAlign = "center";
titulo.style.margin = "0px";
titulo.style.padding = "30px";

const subtitulo = document.querySelector("h2");
subtitulo.style.textAlign = "center";
subtitulo.style.color = "#B8C8C8";

const partePrincipal = document.querySelector("#parte-principal");
partePrincipal.style.padding = "0 100px";

const paragrafo = document.querySelector("p");
paragrafo.setAttribute("class", "paragrafo");

const initialWidth = "60%";
const largerWidth = "80%";
const imagemAnne = document.querySelector("#imagem");
imagemAnne.style.display = "block";
imagemAnne.style.margin = "20px auto";
imagemAnne.style.width = initialWidth;

const buttonTrailer = document.querySelector("#button-trailer");
buttonTrailer.style.border = "solid 1px";
buttonTrailer.style.textAlign = "center";
buttonTrailer.style.display = "block";
buttonTrailer.style.margin = "0 auto 20px";
buttonTrailer.style.padding = "10px";
buttonTrailer.style.fontSize = "20px";

const linkTrailer = document.querySelector("#link-trailer");
linkTrailer.style.textDecoration = "none";
linkTrailer.style.color = "#963E41";
linkTrailer.setAttribute("href", "https://www.youtube.com/watch?v=bBervTlBurY");

const footer = document.querySelector("#rodape");
footer.style.backgroundColor = "white";
footer.style.color = "#963E41";
footer.style.textAlign = "center";
footer.style.padding = "10px 0";
footer.style.fontSize = "14px";

// Exercicio 2
const artigo = document.querySelector("article");
const pae = artigo.parentElement.nodeName;
console.log("O pai/mae do artigo é um elemento", pae);
const filhes = artigo.children;
console.log("Os filhes do artigo são:", filhes);
const irmao = paragrafo.nextElementSibling.nodeName;
console.log("O próximo irmão do parágrafo é um elemento", irmao);

// Exercicio 3
imagemAnne.addEventListener("mouseenter", () => {
  const imagem = document.querySelector("#imagem");
  imagem.style.width = largerWidth;
});

imagemAnne.addEventListener("mouseleave", () => {
  const imagem = document.querySelector("#imagem");
  imagem.style.width = initialWidth;
});
