import React, { useState, useEffect, lazy, Suspense } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { CV_PATH, CV_FILENAME } from "../../data/profile";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Import Document and Page directly (react-pdf is already a dependency)
import { Document, Page } from "react-pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages: n }) {
    setNumPages(n);
    setLoadError(false);
  }

  function onDocumentLoadError() {
    setLoadError(true);
  }

  const scale = width > 786 ? 1.7 : 0.6;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download & Open buttons — top */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            gap: "1rem",
            paddingBottom: "1.5rem",
          }}
        >
          <Button
            variant="primary"
            href={CV_PATH}
            download={CV_FILENAME}
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
          <Button
            variant="primary"
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineEye /> &nbsp;Open in new tab
          </Button>
        </Row>

        {/* PDF Viewer */}
        <Row className="resume">
          {loadError ? (
            /* Graceful fallback */
            <div
              style={{
                textAlign: "center",
                color: "#adb5bd",
                padding: "3rem",
                border: "1px solid rgba(190,80,244,0.2)",
                borderRadius: "12px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
                The CV preview could not be loaded.
              </p>
              <Button
                variant="primary"
                href={CV_PATH}
                download={CV_FILENAME}
              >
                <AiOutlineDownload /> &nbsp;Download CV directly
              </Button>
            </div>
          ) : (
            <Document
              file={CV_PATH}
              className="d-flex justify-content-center flex-column align-items-center"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <p style={{ color: "white", textAlign: "center" }}>Loading CV…</p>
              }
            >
              {numPages &&
                Array.from({ length: numPages }, (_, i) => (
                  <Page
                    key={i + 1}
                    pageNumber={i + 1}
                    scale={scale}
                    style={{ marginBottom: "1.5rem" }}
                  />
                ))}
            </Document>
          )}
        </Row>

        {/* Download button — bottom */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            gap: "1rem",
            paddingTop: "1.5rem",
          }}
        >
          <Button
            variant="primary"
            href={CV_PATH}
            download={CV_FILENAME}
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
