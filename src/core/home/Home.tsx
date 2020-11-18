/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement } from 'react';

import './Home.scss';

export function Home(): ReactElement {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-form row">
          <div className="fake-pic">
            <div className="fake-height" />
          </div>
          <div className="form col">
            <div className="form-box">
              <h3>Lorem ipsum</h3>
              <form action="#">
                <label htmlFor="fname">Lorem ipsum</label>
                <input
                  className="text-input"
                  type="text"
                  id="fname"
                />
                <br />
                <label htmlFor="lname">Lorem ipsum</label>
                <input
                  className="text-input"
                  type="text"
                  id="lname"
                />
                <br />
                <input
                  className="submit-button"
                  type="button"
                  value="Lorem ipsum"
                />
              </form>
              <p className="small-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
              <p>Lorem Ipsum has been the:</p>
              <div className="row form-icons">
                <div className="col">
                  <i className="fab fa-linkedin" />
                </div>
                <div className="col">
                  <i className="fab fa-google" />
                </div>
                <div className="col">
                  <i className="fab fa-facebook-square" />
                </div>
                <div className="col">
                  <i className="fab fa-github" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="green-section col">
          <div className="row picture-and-text">
            <div className="col some-text">
              <div className="text-box">
                <p className="title-text">
                  Lorem ipsum dolor{' '}
                  <span className="yellow-color">sit amet</span>
                </p>
                <p className="small-text small-text-margin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button type="button" className="yellow-button">
                  Lorem ipsum
                </button>
              </div>
            </div>
            <div className="col green-blob">
              <div className="fake-height" />
            </div>
          </div>
        </div>
      </div>
      <div className="row big-text-box">
        <div className="col box-align">
          <p>Lorem ipsum dolor sit amet</p>
          <p>Consectetur adipiscing elit. Pellentesque scelerisque!</p>
        </div>
      </div>
      <div className="numbering-section">
        <div className="row count-row">
          <div className="col circle-num">
            <div className="circle">
              <p>1</p>
            </div>
          </div>
          <div className="col color-box">
            <div className="yellow-color-box" />
          </div>
          <div className="col text-box">
            <p className="big-text">Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque scelerisque rhoncus mollis. Phasellus purus enim.
            </p>
          </div>
        </div>
        <div className="row count-row">
          <div className="col circle-num">
            <div className="circle">
              <p>2</p>
            </div>
          </div>
          <div className="col color-box">
            <div className="light-purple-color-box" />
          </div>
          <div className="col text-box">
            <p className="big-text">Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque scelerisque rhoncus mollis. Phasellus purus enim.
            </p>
          </div>
        </div>
        <div className="row count-row">
          <div className="col circle-num">
            <div className="circle">
              <p>3</p>
            </div>
          </div>
          <div className="col color-box">
            <div className="dark-purple-color-box" />
          </div>
          <div className="col text-box">
            <p className="big-text">Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque scelerisque rhoncus mollis. Phasellus purus enim.
            </p>
          </div>
        </div>
      </div>
      <div className="dark-purple-section col">
        <div>
          <div className="col big-text">
            <p>
              The quick brown <span className="yellow-color">fox</span> jumps
            </p>
            <p>over the lazy dog</p>
            <p>
              The quick brown <span className="green-color">fox</span> jumps
            </p>
            <p>over the lazy dog</p>
          </div>
        </div>
        <div className="cool-item-row">
          <div className="col some-item">
            <div className="title-text">
              <p>Lorem ipsum dolor</p>
            </div>
            <hr />
            <ul className="list-group row">
              <div className="list-item">
                <li>
                  <p>LOREM</p>
                </li>
              </div>
              <div className="list-item">
                <li>
                  <p>IPSUM</p>
                </li>
              </div>
            </ul>
            <p className="small-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque scelerisque rhoncus mollis. Phasellus purus enim,
              auctor eget finibus non, accumsan ut metus.
            </p>
          </div>
          <div className="col some-item">
            <div className="title-text">
              <p>Lorem ipsum dolor</p>
            </div>
            <hr />
            <ul className="list-group row">
              <div className="list-item">
                <li>
                  <p>LOREM</p>
                </li>
              </div>
              <div className="list-item">
                <li>
                  <p>IPSUM</p>
                </li>
              </div>
            </ul>
            <p className="small-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque scelerisque rhoncus mollis. Phasellus purus enim,
              auctor eget finibus non, accumsan ut metus.
            </p>
          </div>
          <div className="col some-item">
            <div className="title-text">
              <p>Lorem ipsum dolor</p>
            </div>
            <hr />
            <ul className="list-group row">
              <div className="list-item">
                <li>
                  <p>LOREM</p>
                </li>
              </div>
              <div className="list-item">
                <li>
                  <p>IPSUM</p>
                </li>
              </div>
            </ul>
            <p className="small-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque scelerisque rhoncus mollis. Phasellus purus enim,
              auctor eget finibus non, accumsan ut metus.
            </p>
          </div>
        </div>
      </div>
      <div className="light-purple-section col">
        <div className="text-box col">
          <p className="title-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="small-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div>
          <button type="button" className="yellow-button">Lorem ipsum</button>
        </div>
      </div>
    </>
  );
}
