import React from "react"
import "./AgeFilter.css"
class AgeFilter extends React.Component{

  state= {
    lowerRange: 13,
    upperRange: 26,
  }

  maxhandler=(value)=>{
    this.setState({
      upperRange: value
    });
    console.log("upper bound ", value);
    this.props.ageFilterCallback(this.state);

  }

  minhandler=(value)=>{
     this.setState({
       lowerRange: value
     });
     console.log("lower bound ", value);
     this.props.ageFilterCallback(this.state);
  }

  runnerCode=()=>{
    let inputLeft = document.getElementById("input-left");
    let inputRight = document.getElementById("input-right");

    let thumbLeft = document.querySelector(".slider > .thumb.left");
    let thumbRight = document.querySelector(".slider > .thumb.right");
    let range = document.querySelector(".slider > .range");

    const setLeftValue=()=> {
    let _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    this.minhandler(_this.value)
    }
    setLeftValue();

    const setRightValue=()=> {
    let _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
    console.log(_this.value);
    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
    // alert(percent)
    this.maxhandler(_this.value)
    }
    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);
    // inputLeft.addEventListener("click", setLeftValue);
    // inputRight.addEventListener("click", setRightValue);
    document.getElementById("thumb_left").addEventListener("mouseover", setLeftValue)
    document.getElementById("thumb_right").addEventListener("mouseover", setRightValue)

    inputLeft.addEventListener("mouseover", function() {
    thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function() {
    thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function() {
    thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function() {
    thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", function() {
    thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function() {
    thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function() {
    thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function() {
    thumbRight.classList.remove("active");
    });
  }

  componentDidMount=()=>{
      this.runnerCode()
  }

  render(){
    return( <>
          <div className="ageLabel">
              <span className="ageLabel__first">Under 14</span>
              <span className="ageLabel__mid">14</span>
              <span className="ageLabel__mid">15</span>
              <span className="ageLabel__mid">16</span>
              <span className="ageLabel__mid">17</span>
              <span className="ageLabel__mid">18</span>
              <span className="ageLabel__mid">19</span>
              <span className="ageLabel__mid">20</span>
              <span className="ageLabel__mid">21</span>
              <span className="ageLabel__mid">22</span>
              <span className="ageLabel__mid">23</span>
              <span className="ageLabel__mid">24</span>
              <span className="ageLabel__mid">25</span>
              <span className="ageLabel__last">Over 25</span>
          </div>
         <div className="middle">
                  <div className="multi-range-slider">
                       <input type="range" id="input-left" aria-label="age-filter-input-left" min="13" max="26" value={this.state.lowerRange.toString()}/>
                       <input type="range" id="input-right" aria-label="age-filter-input-left" min="13" max="26" value={this.state.upperRange.toString()}/>

                       <div className="slider">
                         <div className="track"></div>
                         <div className="range"></div>
                         <div id="thumb_left" className="thumb left"></div>
                         <div id="thumb_right" className="thumb right"></div>
                       </div>
                  </div>
              </div>

</>

    )
  }
}
export default AgeFilter
