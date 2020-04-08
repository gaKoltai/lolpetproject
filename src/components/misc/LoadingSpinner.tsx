import React, { Fragment } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";

const style = "width: 100%; height: 100%; display: block; position: fixed; color: #ff5859; z-index: 1;";

interface Props {}

const LoadingSpinner = (props: Props) => {
    const { promiseInProgress } = usePromiseTracker();

    return <Fragment>{promiseInProgress && <HashLoader size="150" color="#ff5859" css={style} />}</Fragment>;
};

export default LoadingSpinner;
