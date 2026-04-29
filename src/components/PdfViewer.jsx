import { useLanguage } from "../context/LanguageContext.jsx";

const PdfViewer = ({ pdfLink }) => {
  const { UI_TEXTS } = useLanguage();
  if (!pdfLink) {
    return (
      <div className="h-[70vh] w-full overflow-y-auto rounded-xl border p-4">
        {UI_TEXTS.pdf.noPdf}
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-y-auto rounded-xl border">
      <object
        data={pdfLink}
        type="application/pdf"
        className="w-full h-full"
      >
        <p className="p-4">
          {UI_TEXTS.pdf.cannotShowPdf}{" "}
          <a className="underline" href={pdfLink} target="_blank" rel="noreferrer">
            {UI_TEXTS.pdf.openInTab}
          </a>
        </p>
      </object>
    </div>
  );
}

export default PdfViewer
