import React from 'react';

const Loading = () => {
  return (
    <div className="d-flex">
      <h1 className="text-align-center pr-5">Loading</h1>
      <div class="spinner-border text-primary mt-1 mr-3" role="status"></div>
      <div class="spinner-border text-primary mt-1 mr-3" role="status"></div>
      <div class="spinner-border text-primary mt-1 mr-3" role="status"></div>
      <div class="spinner-border text-primary mt-1 mr-3" role="status"></div>
    </div>
  );
};

export default Loading;
