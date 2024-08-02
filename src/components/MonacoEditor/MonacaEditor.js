import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { Button, Modal } from "react-bootstrap";
import { FaCopy } from "react-icons/fa";
import "./Modal.css"; // Ensure your CSS is correct for additional styling

function MonacoEditorComponent({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editorValue, setEditorValue] = useState(data);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const copyCodeToClipboard = () => {
    navigator.clipboard
      .writeText(editorValue)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div>
      {/* Copy icon for clipboard functionality */}
      <FaCopy
        onClick={copyCodeToClipboard}
        style={{
          cursor: "pointer",
          fontSize: "24px",
          color: "black",
          marginBottom: "10px"
        }}
      />

      {/* Small-sized editor */}
      <div>
        <MonacoEditor
          height="300px"
          width="400px"
          defaultLanguage="javascript"
          value={editorValue}
          theme="vs-dark"
          options={{
            selectOnLineNumbers: true,
            minimap: { maxColumn: 20 },
            fontSize: 14,
            scrollBeyondLastLine: true,
            quickSuggestions: true,
            parameterHints: true,
          }}
          onChange={handleEditorChange}
        />
      </div>

      {/* Button to open modal */}
      <Button
        variant="secondary"
        onClick={toggleModal}
        style={{ marginTop: "10px" }}
      >
        Editörü Büyüt
      </Button>

      {/* Modal with large-sized editor */}
      <Modal show={isOpen} onHide={toggleModal} centered size="xl" >
        <Modal.Header closeButton>
          <Modal.Title>Büyük Editör</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MonacoEditor
            height="400px"
            width="1000px"
            defaultLanguage="javascript"
            value={editorValue}
            theme="vs-dark"
            options={{
              selectOnLineNumbers: true,
              minimap: true,
              fontSize: 16,
              scrollBeyondLastLine: true,
              quickSuggestions: true,
              parameterHints: true,
            }}
            onChange={handleEditorChange}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MonacoEditorComponent;
