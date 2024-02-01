import React, { useEffect, useRef } from 'react';
import { PDFViewer } from './components/pdf';

export default function PdfPreviewPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
    }
  }, []);
  return (
    <div>
      <PDFViewer pdf_url="http://localhost:8000/aaa.pdf" />
    </div>
  );
}
