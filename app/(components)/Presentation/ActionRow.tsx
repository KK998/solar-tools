import { Button, Modal } from "flowbite-react";
import jsPDF from "jspdf";
import {
  useContext,
  useState,
  useRef,
  ReactElement,
  useMemo,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import Print from "./Print";
import { ApiContext } from "@/app/(services)/context";

export function downloadObjectAsJson(exportObj: any, exportName: string) {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

const ActionRow = ({
  printRef,
}: {
  printRef: React.RefObject<HTMLDivElement>;
}) => {
  const { offGrid, onGrid, sevanje } = useContext(ApiContext);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const images: ReactElement<HTMLImageElement>[] = useMemo(() => [], []);
  if (printRef.current) {
    const canvasElements = printRef.current.querySelectorAll("canvas");
    canvasElements.forEach((canvas, i) => {
      const data = canvas.toDataURL("image/png").trim();
      if (data !== "data:,") {
        images.push(
          // Need to use image as I print this...
          // eslint-disable-next-line @next/next/no-img-element
          <img src={data} alt="chart image" key={`${canvas.id}-${i}`} />
        );
      }
    });
  }

  const handlePDFSave = useCallback(() => {
    if (ref.current) {
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1920, 1080],
      });
      doc.setFont("Inter-Regular", "normal");
      doc.html(ref.current, {
        async callback(doc) {
          images.forEach(({ props: { src } }) => {
            if (src !== "data:,") {
              doc.addPage();
              doc.addImage(src, "PNG", 10, 10, 1910, 1070);
            }
          });
          await doc.save(`PDF_REPORT_${new Date().getTime()}.pdf`);
        },
      });
    }

    setShowModal(false);
  }, [images]);

  const handleModalOpen = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleGetJSON = useCallback(() => {
    if (offGrid) {
      downloadObjectAsJson(offGrid, "off-grid");
    }
    if (onGrid) {
      downloadObjectAsJson(onGrid, "on-grid");
    }
    if (sevanje) {
      downloadObjectAsJson(sevanje, "sevanje");
    }
  }, [offGrid, onGrid, sevanje]);

  if (!offGrid && !onGrid && !sevanje) {
    return null;
  }

  return (
    <div className="w-full flex flex-wrap justify-end items-center gap-4">
      <Button onClick={handleModalOpen}>PDF</Button>
      <Button onClick={handleGetJSON}>JSON</Button>
      {showModal &&
        createPortal(
          <Modal
            style={{ zIndex: 9999 }}
            size="7xl"
            show={showModal}
            onClose={handleModalClose}
          >
            <Modal.Header>Vsebina za PDF</Modal.Header>
            <Modal.Body>
              <div ref={ref}>
                <Print images={images} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button color="failure" onClick={handleModalClose}>
                Zapri
              </Button>
              <Button color="success" onClick={handlePDFSave}>
                Shrani v PDF
              </Button>
            </Modal.Footer>
          </Modal>,
          document.body
        )}
    </div>
  );
};

export default ActionRow;
