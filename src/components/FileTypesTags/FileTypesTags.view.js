import React from "react";
import { Chip } from "@material-ui/core";

import "./FileTypesTags.styles.scss";

const FileTypesTags = ({ files = {} }) => {
  return (
    <div className="FileTypesTags">
      {Object.keys(files).map((file, index) => (
        <Chip
          key={index}
          label={files[file].language || "Unknown"}
          variant="outlined"
        />
      ))}
    </div>
  );
};

export default FileTypesTags;
