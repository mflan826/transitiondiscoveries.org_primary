import React, { useState } from "react";
import { PDFDownloadLink, Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <>
      <Document
        file={props.url}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="btn btn-primary mx-2"
          >
            &lt;
          </button>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className="btn btn-primary mx-2"
          >
            &gt;
          </button>
        </p>
      </div>
    </>
  );
};

export default PDFViewer;
