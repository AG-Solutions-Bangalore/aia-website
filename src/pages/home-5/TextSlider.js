import React from 'react';
import SingleTextSlider from '../../components/TextSlider';


const TextSlider = () => {
  return (
    <div className="ed-text-slider-area ed-text-slider-height fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="ed-text-slider-wrap d-flex align-content-center">
              <SingleTextSlider title="cfe curriculum" />
              <SingleTextSlider title="cia curriculum" />
              <SingleTextSlider title="cia challenge curriculum" />
              <SingleTextSlider title="cia challenge prep course" />
              <SingleTextSlider title="cams" />
              <SingleTextSlider title="qia course" />
              <SingleTextSlider title="cfe curriculum" />
              <SingleTextSlider title="cia curriculum" />
              <SingleTextSlider title="cia challenge curriculum" />
              <SingleTextSlider title="cia challenge prep course" />
              <SingleTextSlider title="cams" />
              <SingleTextSlider title="qia course" />
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextSlider;
