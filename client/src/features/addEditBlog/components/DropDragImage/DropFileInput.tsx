import "./drop-file-input.scss";

import React, { useRef, useState } from "react";

import fileCSS from "../../../../assets/images/file-css-solid-240.png";
import fileDefault from "../../../../assets/images/file-blank-solid-240.png";
import filePdf from "../../../../assets/images/file-pdf-solid-240.png";
import filePng from "../../../../assets/images/file-png-solid-240.png";
import uploadImg from "../../../../assets/images/cloud-upload-regular-240.png";

const DropFileInput = ({ onFileChange }: IDropFileInputProps) => {
  const wrapperRef = useRef<HTMLInputElement>(null);

  const [fileList, setFileList] = useState<File[]>([]);

  const onDragEnter = () => wrapperRef.current!.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current!.classList.remove("dragover");

  const onDrop = () => wrapperRef.current!.classList.remove("dragover");

  const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    const selectedFile = files as FileList;

    const newFile = selectedFile?.[0];

    if (newFile) {
      const updatedList: File[] = [...fileList, newFile];
      setFileList(updatedList);
      onFileChange(updatedList);
    }
  };

  const fileRemove = (file: File) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>Drag & Drop your files here</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to upload</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <img
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
                <p>{item.size}B</p>
              </div>
              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

const ImageConfig: any = {
  default: fileDefault,
  pdf: filePdf,
  png: filePng,
  css: fileCSS,
};

// DropFileInput.propTypes = {
//   onFileChange: PropTypes.func,
// };

export interface IDropFileInputProps {
  onFileChange: any;
}

export default DropFileInput;
