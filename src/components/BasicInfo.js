import React, { Component } from 'react';
import img from '../assets/img.jpg';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';

class BasicInfo extends Component {
  render() {
    const {
      data,
    } = this.props;

    return (
      <div className="sectionContainer">
        <h1>{data.sections[0].personalData[0].title}</h1>
        <div className="item-image"><img src={img} alt="Imagen personal" /></div>
        <div className="item-info">
          <div className="item-info-basic">
            <ul>
              <li className="li-nodecoration-basic"><h2>{data.sections[0].personalData[0].name} {data.sections[0].personalData[0].surname}</h2></li>
              <li className="li-nodecoration-basic"><a href="mailTo:{data.sections[0].personalData[0].email}">{data.sections[0].personalData[0].email}</a></li>
              <li className="li-nodecoration-basic"><a href="tel:+34{data.sections[0].personalData[0].tel}">{data.sections[0].personalData[0].tel}</a></li>
            </ul>
          </div>
          <div className="item-info-basic">
            <ul>
              <li className="li-nodecoration-basic">
                <a href={data.sections[0].personalData[0].linkedinURL} target="_blank">
                  <img src={linkedin} width="125px" />
                </a>
              </li>
              <li className="li-nodecoration-basic">
                <a href={data.sections[0].personalData[0].facebookURL} target="_blank">
                  <img src={facebook} width="125px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInfo;
