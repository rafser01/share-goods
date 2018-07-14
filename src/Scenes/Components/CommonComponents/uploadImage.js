import { MAX_PRO_PIC_SIZE } from "../../../constants/index";
export function UploadButton({ label, onUpload, id, that }) {
  let fileInput = null;
  // If no id was specified, generate a random one
  const uid =
    id ||
    Math.random()
      .toString(36)
      .substring(7);
  return (
    <span>
      <label htmlFor={uid} className="ui icon button">
        <i className="upload icon" />
        {label}
      </label>
      <input
        type="file"
        id={uid}
        style={{ display: "none" }}
        onChange={() => {
          if (fileInput.files[0].size <= MAX_PRO_PIC_SIZE) {
            that.setState({
              imageAlarm: false
            });
            onUpload(fileInput.files[0]);
          } else {
            that.setState({
              imageAlarm: true
            });
          }
        }}
        ref={input => {
          fileInput = input;
        }}
      />
    </span>
  );
}
