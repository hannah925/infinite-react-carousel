/* eslint-disable */
import React, { Component } from 'react';
import Carousel from '../src';
import { delay } from './test-helper';

const CustomArrow = (props) => (
  <div className="CustomArrow">
    <div
      className={`${props.className} ${props.customClassName}`}
      style={{
        ...props.customStyle,
        ...props.style,
        display: 'block',
      }}
      onClick={props.onClick}
      role="presentation"
    />
  </div>
);

class SliderWithScroll extends Component {
  constructor(props) {
    super(props);
    this.innerSlider = null;
  }

  testForScroll = async (befroeScroll, afterScroll, time = 200) => {
    befroeScroll();
    await delay(time);
    afterScroll();
  }

  render() {
    return (
      <Carousel
        ref={(ele) => {
          if (ele) {
            this.innerSlider = ele;
          }
        }}
        {...this.props}
      >
        <div>
          <h3>slide1</h3>
        </div>
        <div>
          <h3>slide2</h3>
        </div>
        <div>
          <h3>slide3</h3>
        </div>
        <div>
          <h3>slide4</h3>
        </div>
        <div>
          <h3>slide5</h3>
          <h3>slide5</h3>
          <h3>slide5</h3>
        </div>
        <div>
          <h3>slide6</h3>
        </div>
      </Carousel>
    );
  }
}

class SliderWithBeforeChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: null,
      nextSlide: null
    };
    this.innerSlider = null;
  }

  beforeChange = (currentSlide, nextSlide) => {
    this.setState({
      currentSlide,
      nextSlide
    });
    this.currentSlide = currentSlide;
    this.nextSlide = nextSlide;
  }

  testForScroll = async (befroeScroll, afterScroll, time = 200) => {
    befroeScroll();
    await delay(time);
    afterScroll();
  }

  render() {
    return (
      <Carousel
        ref={(ele) => {
          if (ele) {
            this.innerSlider = ele;
          }
        }}
        {...this.props}
        beforeChange={(currentSlide, nextSlide) => {
          this.beforeChange(currentSlide, nextSlide);
          if (this.props.beforeChange) {
            this.props.beforeChange(currentSlide, nextSlide);
          }
        }}
      >
        <div>slide1</div>
        <div>slide2</div>
        <div>slide3</div>
        <div>slide4</div>
        <div>slide5</div>
        <div>slide6</div>
      </Carousel>
    );
  }
}

export {
  CustomArrow,
  SliderWithScroll,
  SliderWithBeforeChange
};
