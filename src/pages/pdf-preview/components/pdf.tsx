import React, { useEffect } from 'react';

// const staticPath =
//   APP_ENV === 'mock' ? window.location.origin + '/' : PUBLIC_PATH;

const staticPath = window.location.origin + '/';
const _window = window as any;

// 创建canvas
function createPage() {
  const div = document.createElement('canvas');
  const container = document.getElementById('pdf-container');
  container && container.appendChild(div);
  return div;
}

// canvas渲染
async function renderPage(pdfDoc: any, num: any) {
  for (let i = 1; i <= num; i++) {
    // eslint-disable-next-line no-await-in-loop
    const page = await pdfDoc.getPage(i);
    const viewport = page.getViewport({ scale: 2.0 });
    const canvas = createPage();
    const ctx = canvas.getContext('2d');

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // eslint-disable-next-line no-await-in-loop
    await page.render({
      canvasContext: ctx,
      viewport,
    });
    // 渲染2页可以先看了
    if (i === 2) {
      //   window.fullLoading.hide();
    }
  }
  //   window.fullLoading.hide();
}

export const PDFViewer = ({ pdf_url }: { pdf_url: string }) => {
  let loadingTask: any | null = null;

  const loadPdf = () => {
    return new Promise((resolve) => {
      var pdf = document.createElement('script');
      pdf.id = 'pdfjs';
      pdf.src = staticPath + 'pdf.js';
      pdf.onload = function () {
        setTimeout(() => {
          resolve(undefined);
        }, 100);
      };
      document.head.append(pdf);
    });
  };

  const init = async (pdf_url: string) => {
    await loadPdf();
    // window.fullLoading.show();

    _window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      staticPath + 'pdf.worker.min.js';

    loadingTask = _window.pdfjsLib.getDocument({
      url: decodeURIComponent(pdf_url),
      withCredentials: true,
    });

    loadingTask.promise
      .then(function (pdf) {
        renderPage(pdf, pdf.numPages);
      })
      .catch(() => {
        // _window.fullLoading.hide();
      });
  };

  useEffect(() => {
    if (pdf_url) {
      init(pdf_url);
    }
  }, [pdf_url]);

  return <div id="pdf-container" />;
};
