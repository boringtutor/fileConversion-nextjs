import type { FC } from "react";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/app/ui/button";
import { TargetBox } from "./TargetBox";
import { useMemo } from "react";
import Selector from "./Selector";

export interface FileListProps {
  files: File[];
}

function experimentToGetFileData(files: File[]): void {
  //TODO state could be none
  //TODO none
  //TODO hovered
  //TODO file uploaded
  //TODO: Lift the state up from the TargetBox to container so we can disable the file upload

  const items = ["pdf", "docx", "csx", "json"];

  // function handleFileSelected(index: number) {
  //   console.log(`the file will be converted to  ==> ${items[index]}`);
  // }

  /**
   *  This method given a file extracts all the information and 
      and returns the information from the file with the actual 
      file
   * @param file
   * @returns this returns type of file uploaded,name of file,size of file,actual file
   */
  const label = (file: File) => {
    const result_string = file.name.split(".")[1];
    //("result string ->", result_string);
    return {
      type: result_string,
      name: file.name,
      size: file.size,
      file_to_be_converted: file,
    };
  };
  files.map((file) => {
    label(file);
  });
}

// function figureOutFile(files: any): void {
//   //console.log("display the data.....");
//   files.map((file: File) => {
//     //console.log(file.name.split(".")[1]);
//   });
// }

function list(files: File[]) {
  experimentToGetFileData(files);
  const label = (file: File) =>
    `'${file.name}' of size '${file.size}' and type '${file.type}' 
    and the file type is  : 
    ${file.name.split(".")[1]}`;

  //TODO:figuring out the files
  //figureOutFile(files); //NOTE:files will be displayed

  return files.map((file) => <li key={file.name}>{label(file)}</li>);
}

export const FileList: FC<FileListProps> = ({ files }) => {
  const fileList = useMemo(() => list(files), [files]);

  if (files.length === 0) {
    return <div>Ready for Upload</div>;
  }

  return <div>{fileList}</div>;
};

export const Container: FC = () => {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState(0);

  //TODO: Acces to current file to be converted to
  const [currentValue, setCurrentValue] = useState("pdf");

  const handleFileDrop = useCallback(
    (item: { files: any[] }) => {
      if (item) {
        // console.log("the item itself is ");
        // console.log(
        //   ".............................................................."
        // );
        // console.log(item);
        // console.log(
        //   ".............................................................."
        // );
        const files = item.files;
        setDroppedFiles(files);
        // setFileProp(files);
      }
    },
    [setDroppedFiles]
  );
  const items = ["pdf", "docx", "csx", "json"];

  function handleUploadFilesOnConvertClick() {
    console.log("convert is clicked");
    setButtonDisabled(1);
    console.log(buttonDisabled);
  }

  return (
    <>
      <div className="flex flex-col w-full h-full">
        {buttonDisabled === 1 ? (
          <div className="flex h-56 border-4 border-rose-400	border-dotted	 w-full hover:border-solid justify-center "></div>
        ) : (
          <TargetBox
            classNames="flex h-56 border-4 border-rose-400	border-dotted	 w-full hover:border-solid justify-center "
            onDrop={handleFileDrop}
          />
        )}

        <FileList files={droppedFiles} />
        <div className="flex  m-4">
          <div className="flex m-4 p-4">
            <div className="flex mr-4">
              <Selector setValue={setCurrentValue} items={items}></Selector>
            </div>
            {buttonDisabled === 0 ? (
              <Button
                className=" disabled:opacity-70 "
                onClick={handleUploadFilesOnConvertClick}
              >
                Convert
              </Button>
            ) : (
              <Button disabled className=" disabled:opacity-70 ">
                Convert
              </Button>
            )}

            {/*NOTE:Access to what user want the file to be converted.  */}
            <div>File will be converted to --- {currentValue}</div>
          </div>
        </div>
      </div>
    </>
  );
};
