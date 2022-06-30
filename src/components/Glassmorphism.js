import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import "../styles/Glassmorphism.css";
import GlassmorphismPreviewer from "./GlassmorphismPreviewer";
import GlassmorphismContent from "./GlassmorphismContent";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function Glassmorphism() {
  const [previewIsHidden, setpreviewIsHidden] = useState(false);
  const [bgHexColor, setBgHexColor] = useState("#ffffff");
  const [bgOpacity, setBgOpacity] = useState(0.1);
  const [filterBlur, setFilterBlur] = useState(2);
  const [borderRadius, setBorderRadius] = useState(16);
  const [borderOpacity, setBorderOpacity] = useState(0.2);

  const [copied, setCopied] = useState(false);
  const [codeBlockText, setCodeBlockText] = useState(null);
  const codeBlockRef = useRef(null);

  const [isReset, setIsReset] = useState(false);

  const onClickReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset the changes?"
    );
    if (confirmReset) {
      setIsReset(true);
      setBgHexColor("#ffffff");
      setBgOpacity(0.1);
      setFilterBlur(2);
      setBorderRadius(16);
      setBorderOpacity(0.2);

      const timeout = setTimeout(() => {
        setIsReset(false);
        clearTimeout(timeout);
      }, 5000);
    }
    return;
  };

  const onCopyToClipboard = () => {
    setCopied(true);

    const timeout = setTimeout(() => {
      setCopied(false);
      clearTimeout(timeout);
    }, 5000);
  };

  const popMessageOnTrue = (trueBool, message) => {
    return trueBool ? (
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
        style={{ zIndex: 1 }}
      >
        {message}
        <span className="visually-hidden">status messages</span>
      </span>
    ) : null;
  };

  useEffect(() => {
    setInterval(() => {
      setCodeBlockText(codeBlockRef.current.innerText);
    }, 500);
  }, [setCodeBlockText]);

  return (
    <div className="glassmorphism">
      {!previewIsHidden ? (
        <GlassmorphismPreviewer
          bgHexColor={bgHexColor}
          bgOpacity={bgOpacity}
          filterBlur={filterBlur}
          borderRadius={borderRadius}
          borderOpacity={borderOpacity}
        />
      ) : null}

      <GlassmorphismContent
        bgHexColor={bgHexColor}
        bgOpacity={bgOpacity}
        filterBlur={filterBlur}
        borderRadius={borderRadius}
        borderOpacity={borderOpacity}
        codeBlockRef={codeBlockRef}
      />

      <div className="glassmorphism__editor">
        <div className="fixed-bottom p-2 card">
          <Row>
            <Col md={12} lg={2}>
              <Row className="p-1">
                <Col xs={6} sm={6} md={6} lg={12} xl={12}>
                  <label htmlFor="bgColor" className="form-label">
                    Background Color
                  </label>
                  <input
                    className="form-control form-control-color"
                    type="color"
                    id="bgColor"
                    value={bgHexColor}
                    onChange={({ target }) => 
                      setBgHexColor(target.value)
                    }
                    tabIndex={1}
                  />
                </Col>
                <Col xs={6} sm={6} md={6} lg={12} xl={12}>
                  <span className="d-block" tabIndex={2}>Actions</span>
                  <Button
                    className="m-1"
                    variant={previewIsHidden ? "outline-primary" : "outline-danger"}
                    title={previewIsHidden ? "Show Preview" : "Hide Preview"}
                    onClick={() => setpreviewIsHidden(!previewIsHidden)}
                    tabIndex={2}
                  >
                    {previewIsHidden ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="m-1 position-relative"
                    title="Reset Changes"
                    onClick={onClickReset}
                    tabIndex={2}
                  >
                    {popMessageOnTrue(isReset, "Is Reset!")}
                    <RestartAltIcon />
                  </Button>
                  <CopyToClipboard
                    text={codeBlockText}
                    onCopy={onCopyToClipboard}
                  >
                    <Button
                      variant="outline-primary"
                      className="m-1 position-relative"
                      title="Copy to Clipboard"
                      tabIndex={2}
                    >
                      {popMessageOnTrue(copied, "Copied!")}
                      <ContentCopyIcon />
                    </Button>
                  </CopyToClipboard>
                </Col>
              </Row>
            </Col>
            <Col lg={10}>
              <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className="p-1">
                    <label htmlFor="transparency" className="form-label">
                      Transparency <Badge>{bgOpacity}A</Badge>
                    </label>
                    <div className="d-flex justify-content-between">
                      <span>0</span>
                      <input
                        className="form-range mx-3"
                        type="range"
                        id="transparency"
                        value={bgOpacity * 100}
                        onChange={({ target }) => 
                          setBgOpacity(target.value / 100)
                        }
                        tabIndex={1}
                      />
                      <span>1</span>
                    </div>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className="p-1">
                    <label htmlFor="blur" className="form-label">
                      Blur <Badge>{filterBlur} px</Badge>
                    </label>
                    <div className="d-flex justify-content-between">
                      <span>0</span>
                      <input
                        type="range"
                        className="form-range mx-3"
                        id="blur"
                        value={filterBlur * 5}
                        onChange={({ target }) =>
                          setFilterBlur(target.value / 5)
                        }
                        tabIndex={1}
                      />
                      <span>20</span>
                    </div>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className="p-1">
                    <label htmlFor="borderRadius" className="form-label">
                      Border Radius <Badge>{borderRadius}px</Badge>
                    </label>
                    <div className="d-flex justify-content-between">
                      <span>0</span>
                      <input
                        type="range"
                        className="form-range mx-3"
                        id="borderRadius"
                        value={borderRadius}
                        onChange={({ target }) => 
                          setBorderRadius(target.value)
                        }
                        tabIndex={1}
                      />
                      <span>100</span>
                    </div>
                  </div>
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className="p-1">
                    <label htmlFor="outline" className="form-label">
                      Outline <Badge>{borderOpacity}A</Badge>
                    </label>
                    <div className="d-flex justify-content-between">
                      <span>0</span>
                      <input
                        type="range"
                        className="form-range mx-3"
                        id="outline"
                        value={borderOpacity * 100}
                        onChange={({ target }) =>
                          setBorderOpacity(target.value / 100)
                        }
                        tabIndex={1}
                      />
                      <span>1</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
