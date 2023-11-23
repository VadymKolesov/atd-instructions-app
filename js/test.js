var url = "../../documents/work-regulations.pdf";
var canvas = document.getElementById("pdf-viewer");
const nextButton = document.getElementById("next");
const preButton = document.getElementById("pre");

pdfjsLib.getDocument(url).promise.then(function (pdf) {
  let pageNum = 1;
  pdf.getPage(pageNum).then(function (page) {
    var viewport = page.getViewport({ scale: 1.0 });
    var context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({ canvasContext: context, viewport: viewport });
  });

  nextButton.onclick = () => {
    pageNum++;
    console.log(pageNum);
  };
});
