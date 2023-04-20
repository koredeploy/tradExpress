import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loading = (props) => {
    const override= {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
  return (
    <div>
        <ClipLoader
        color={'purple'}
        loading={props.newLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading