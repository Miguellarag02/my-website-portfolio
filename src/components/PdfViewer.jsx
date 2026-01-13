const PdfViewer = ({ pdfLink }) => {
  if (!pdfLink) {
    return (
      <div className="h-[70vh] w-full overflow-y-auto rounded-xl border p-4">
        No hay un PDF disponible para este proyecto.
      </div>
    );
  }

  return (
    <div className="h-[70vh] w-full overflow-y-auto rounded-xl border">
      <object
        data={pdfLink}
        type="application/pdf"
        className="w-full h-full"
      >
        <p className="p-4">
          No se pudo mostrar el PDF.{" "}
          <a className="underline" href={pdfLink} target="_blank" rel="noreferrer">
            Abrir en una pestaña
          </a>
        </p>
      </object>
    </div>
  );
}

export default PdfViewer
