import React from 'react';
// components
import { Worker, Viewer } from '@react-pdf-viewer/core';
// styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewer = ({ pdfs }) => {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js">
            {pdfs.map(pdf => {
                return (
                    <div className="pdf-container">
                        <Viewer fileUrl={pdf.url} />
                    </div>
                );
            })}
        </Worker>
    );
};

export default PDFViewer;
