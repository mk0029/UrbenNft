import React from "react";
import { Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import LOGO from "../assets/img/png/Logo.png";
import bgWavs from "../assets/img/png/GroupLOGOBG.png";
import LeftIcon from "../assets/img/png/LeftIcon.png";
import RightIcon from "../assets/img/png/RightIcon.png";
import user from "../assets/img/png/useer.png";
import wheel from "../assets/img/png/wheel.png";
import bell from "../assets/img/png/bell.png";
import Btn_slideLeft from "../assets/img/png/ArrowLeftSquare.png";
import Btn_slideRight from "../assets/img/png/ArrowRightSquare.png";
import DASHBORDMAIN from "../assets/img/png/Dashbord_img.png";
import Block1 from "../assets/img/png/Block1.png";
import Block2 from "../assets/img/png/Block2.png";
import Block3 from "../assets/img/png/Block2.png";
import BlackHeart from "../assets/img/png/Heart.png";
import LinerS from "../assets/img/png/Liners.png";
import arrow from "../assets/img/svg/Arrow - Right.svg";
import surfing from "../assets/img/webp/surfing.webp";
import dragn from "../assets/img/webp/dragn.webp";
import division from "../assets/img/webp/division.webp";
import dragonz from "../assets/img/webp/dragonz.webp";
import last from "../assets/img/webp/last avtar.webp";
import clubavtar from "../assets/img/webp/club avtar (1).webp";
import club from "../assets/img/webp/club.webp";
import noryoz from "../assets/img/webp/naryoz avtar.webp";
import noryoj from "../assets/img/webp/noryoj.webp";
import ragnorak from "../assets/img/webp/ragnork.webp";
import meta from "../assets/img/webp/meta.webp";
import resist from "../assets/img/webp/resist.webp";
import s_img from "../assets/img/svg/s_img.svg";
import dropdown_img from "../assets/img/svg/Arrow - Down 2.svg";
import cat_img from "../assets/img/png/cat.png";
import monkey_img from "../assets/img/png/monkey.png";
import children_img from "../assets/img/png/children.png";

function Header() {
  return (
    <>
      <section>
        <div className="d-flex min-vh-100 ">
          <div className="min_width_310 d-none  d-lg-flex position-relative min_h_1024 d-flex flex-column">
            <img
              className=" position-absolute bgWAVSlogo w-100 z_index0"
              src={bgWavs}
              alt="bgwavs"
            />
            <div className=" container z_index1 position-relative pb-5 ">
              <div className=" d-flex justify-content-center pt-4">
                <img className="widthLogo " src={LOGO} alt="logo" />
              </div>{" "}
              <div className="d-flex flex-column gap-2 align-items-start  d-lg-none mt-5 ">
                <div className="me-4 d-flex align-items-end gap-4">
                  <a href="#">
                    <img style={{ width: "48px" }} src={user} alt="icon" />
                  </a>
                  <span>
                    <a href="#">
                      <img style={{ height: "18px" }} src={wheel} alt="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img style={{ height: "18px" }} src={bell} alt="icon" />
                    </a>
                  </span>
                </div>
                <div className="d-flex align-items-start">
                  <span className="">
                    <span className="ff_liber fs_lg fw-bold text_tertiary mb-0 ">
                      Cody Fisher
                      <span className="d-block">
                        <a
                          href="#mailto: kenzi.lawson@example.com"
                          className="ff_liber fs_md fw-semibold text_secondary mb-0"
                        >
                          kenzi.lawson@example.com
                        </a>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className=" container d-flex flex-grow-1 w-100">
              {" "}
              <div className=" d-flex flex-column justify-content-between h-100 w-100">
                <div className=" d-flex flex-column gap-2 mt-5">
                  <h2 className=" ff_inter fw-bold fs_md pb-3 ms-3">
                    MARKETPLACE
                  </h2>

                  <a href="#" className=" btn_commn d-block">
                    <span className=" me-lg-3 me-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Iconly/Bulk/Category">
                          <g id="Category">
                            <path
                              id="Fill 1"
                              opacity="0.4"
                              d="M12.0562 1.5H14.5957C15.6474 1.5 16.4996 2.35939 16.4996 3.41997V5.98089C16.4996 7.04148 15.6474 7.90087 14.5957 7.90087H12.0562C11.0045 7.90087 10.1523 7.04148 10.1523 5.98089V3.41997C10.1523 2.35939 11.0045 1.5 12.0562 1.5Z"
                              fill="#A8A8A8"
                            />
                            <path
                              id="Combined Shape"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.40389 1.5H5.94337C6.99507 1.5 7.84726 2.35939 7.84726 3.41997V5.98089C7.84726 7.04148 6.99507 7.90087 5.94337 7.90087H3.40389C2.35219 7.90087 1.5 7.04148 1.5 5.98089V3.41997C1.5 2.35939 2.35219 1.5 3.40389 1.5ZM3.40389 10.0991H5.94337C6.99507 10.0991 7.84726 10.9585 7.84726 12.0191V14.58C7.84726 15.6399 6.99507 16.5 5.94337 16.5H3.40389C2.35219 16.5 1.5 15.6399 1.5 14.58V12.0191C1.5 10.9585 2.35219 10.0991 3.40389 10.0991ZM14.5961 10.0991H12.0566C11.0049 10.0991 10.1527 10.9585 10.1527 12.0191V14.58C10.1527 15.6399 11.0049 16.5 12.0566 16.5H14.5961C15.6478 16.5 16.5 15.6399 16.5 14.58V12.0191C16.5 10.9585 15.6478 10.0991 14.5961 10.0991Z"
                              fill="#A8A8A8"
                            />
                          </g>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_33_462"
                            x1="9.6924"
                            y1="-0.142327"
                            x2="14.9603"
                            y2="9.69608"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FFC881" />
                            <stop offset="1" stop-color="#DA8517" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_33_462"
                            x1="0.413044"
                            y1="-2.34868"
                            x2="12.7002"
                            y2="20.793"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FFC881" />
                            <stop offset="1" stop-color="#DA8517" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="spantex ff_inter fs_lg fw_medium text_tertiary">
                      Dashboard
                    </span>
                  </a>
                  <a href="#" className=" btn_commn d-block">
                    <span className=" me-lg-3 me-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Iconly/Bulk/Buy">
                          <g id="Buy">
                            <path
                              id="Combined Shape"
                              opacity="0.4"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.43262 15.4413C4.43262 14.8113 4.94262 14.3013 5.57262 14.3013C6.19512 14.3013 6.70512 14.8113 6.70512 15.4413C6.70512 16.0638 6.19512 16.5738 5.57262 16.5738C4.94262 16.5738 4.43262 16.0638 4.43262 15.4413ZM12.8701 15.4413C12.8701 14.8113 13.3801 14.3013 14.0101 14.3013C14.6326 14.3013 15.1426 14.8113 15.1426 15.4413C15.1426 16.0638 14.6326 16.5738 14.0101 16.5738C13.3801 16.5738 12.8701 16.0638 12.8701 15.4413Z"
                              fill="#A8A8A8"
                            />
                            <path
                              id="Fill 7"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.1431 4.76151C15.6006 4.76151 15.9006 4.91901 16.2006 5.26401C16.5006 5.60901 16.5531 6.10401 16.4856 6.55326L15.7731 11.4733C15.6381 12.419 14.8281 13.1158 13.8756 13.1158H5.69306C4.69556 13.1158 3.87056 12.3508 3.78806 11.3615L3.09806 3.18576L1.96556 2.99076C1.66556 2.93826 1.45556 2.64576 1.50806 2.34576C1.56056 2.03826 1.85306 1.83576 2.16056 1.88076L3.94931 2.15076C4.20431 2.19651 4.39181 2.40576 4.41431 2.66076L4.55681 4.34076C4.57931 4.58151 4.77431 4.76151 5.01431 4.76151H15.1431ZM10.5981 8.66076H12.6756C12.9906 8.66076 13.2381 8.40576 13.2381 8.09826C13.2381 7.78326 12.9906 7.53576 12.6756 7.53576H10.5981C10.2831 7.53576 10.0356 7.78326 10.0356 8.09826C10.0356 8.40576 10.2831 8.66076 10.5981 8.66076Z"
                              fill="#A8A8A8"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="spantex ff_inter fs_lg fw_medium text_tertiary">
                      Market
                    </span>
                  </a>
                  <a href="#" className=" btn_commn d-block">
                    <span className=" me-lg-3 me-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Iconly/Bulk/Star">
                          <g id="Star">
                            <path
                              id="Fill 1"
                              opacity="0.4"
                              d="M9.73223 2.33521L11.4021 5.69092C11.5251 5.93404 11.7599 6.10288 12.0307 6.1404L15.7815 6.68667C16.0006 6.71744 16.1994 6.833 16.3336 7.00934C16.4664 7.18343 16.5234 7.40404 16.4912 7.6209C16.4649 7.80099 16.3802 7.96757 16.2504 8.09514L13.5325 10.7297C13.3337 10.9136 13.2437 11.186 13.2917 11.4523L13.9609 15.1562C14.0321 15.6035 13.7358 16.0252 13.2917 16.11C13.1087 16.1392 12.9212 16.1085 12.7561 16.0244L9.41041 14.2813C9.1621 14.156 8.86879 14.156 8.62049 14.2813L5.27477 16.0244C4.86368 16.2428 4.35432 16.0942 4.12552 15.689C4.04075 15.5277 4.01075 15.3438 4.0385 15.1645L4.70765 11.4599C4.75566 11.1942 4.66489 10.9203 4.46685 10.7365L1.74901 8.10339C1.42569 7.79123 1.41594 7.27722 1.72726 6.95381C1.73401 6.94706 1.74151 6.93955 1.74901 6.93205C1.87804 6.80073 2.04758 6.71744 2.23062 6.69568L5.98142 6.14865C6.25148 6.11038 6.48628 5.94305 6.61006 5.69842L8.2199 2.33521C8.36318 2.04706 8.66025 1.86772 8.98282 1.87523H9.08334C9.36315 1.90899 9.60695 2.08233 9.73223 2.33521Z"
                              fill="#A8A8A8"
                            />
                            <path
                              id="Fill 4"
                              d="M8.99401 14.1878C8.84873 14.1923 8.7072 14.2314 8.5799 14.3012L5.25054 16.0404C4.84317 16.2348 4.35567 16.0839 4.12728 15.6943C4.04266 15.5352 4.01195 15.3528 4.04041 15.1741L4.70538 11.4774C4.75031 11.2086 4.66045 10.9354 4.465 10.7463L1.74595 8.11386C1.4232 7.79785 1.41721 7.27917 1.73322 6.95566C1.73772 6.95115 1.74146 6.9474 1.74595 6.94365C1.87475 6.81604 2.041 6.73197 2.21997 6.7057L5.97392 6.15325C6.24575 6.11872 6.48164 5.94908 6.60145 5.70288L8.23318 2.29734C8.3882 2.02261 8.68549 1.85898 9 1.87624C8.99401 2.09918 8.99401 14.0362 8.99401 14.1878Z"
                              fill="#A8A8A8"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="spantex ff_inter fs_lg fw_medium text_tertiary">
                      Favorites
                    </span>
                  </a>
                </div>
                <div className=" d-flex flex-column gap-2 mt-5">
                  <h2 className=" ff_inter fw-bold fs_md pb-3 ms-3">
                    MY PROFILE
                  </h2>

                  <a href="#" className=" btn_commn d-block">
                    <span className=" me-lg-3 me-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Iconly/Bulk/Activity">
                          <g id="Activity">
                            <path
                              id="Path_34168"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4321 3.55317C11.4321 5.21892 12.7844 6.56927 14.4526 6.56927C14.6363 6.56836 14.8195 6.55073 15 6.51659V12.4961C15 15.0117 13.5161 16.5 10.9968 16.5H5.50977C2.98388 16.5 1.5 15.0117 1.5 12.4961V7.01707C1.5 4.50146 2.98388 3 5.50977 3H11.4849C11.4494 3.18225 11.4317 3.36751 11.4321 3.55317ZM9.86248 11.1724L12.0059 8.40659V8.39341C12.1894 8.14685 12.1425 7.79917 11.9003 7.60976C11.7831 7.51926 11.6342 7.48009 11.4875 7.50119C11.3408 7.52229 11.209 7.60185 11.1221 7.72171L9.3151 10.0463L7.25745 8.42634C7.13997 8.33482 6.99053 8.29441 6.84286 8.31424C6.69519 8.33406 6.56174 8.41245 6.47264 8.53171L4.25672 11.3898C4.17883 11.4868 4.13689 11.6078 4.13801 11.7322C4.12515 11.9836 4.2839 12.212 4.52428 12.2879C4.76466 12.3637 5.02603 12.268 5.16023 12.0549L7.01343 9.6578L9.07108 11.2712C9.18811 11.3656 9.33854 11.4083 9.4878 11.3897C9.63705 11.3711 9.77231 11.2927 9.86248 11.1724Z"
                              fill="#A8A8A8"
                            />
                            <circle
                              id="Ellipse_742"
                              opacity="0.4"
                              cx="14.625"
                              cy="3.375"
                              r="1.875"
                              fill="#A8A8A8"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="spantex ff_inter fs_lg fw_medium text_tertiary">
                      Insight
                    </span>
                  </a>
                  <a href="#" className=" btn_commn d-block">
                    <span className=" me-lg-3 me-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Iconly/Bulk/Wallet">
                          <g id="Wallet">
                            <path
                              id="Fill 1"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16.4973 6.28134H13.3213C11.8433 6.28394 10.646 7.45136 10.6433 8.89242C10.6413 10.3367 11.84 11.5094 13.3213 11.5113H16.5V11.7408C16.5 14.2602 14.9727 15.75 12.388 15.75H5.61267C3.02733 15.75 1.5 14.2602 1.5 11.7408V6.25339C1.5 3.73397 3.02733 2.25 5.61267 2.25H12.3853C14.97 2.25 16.4973 3.73397 16.4973 6.25339V6.28134ZM5.05467 6.2755H9.28467H9.28733H9.29267C9.60933 6.27419 9.86533 6.02264 9.864 5.71324C9.86267 5.40448 9.604 5.15488 9.28733 5.15618H5.05467C4.74 5.15748 4.48467 5.40644 4.48333 5.71389C4.482 6.02264 4.738 6.27419 5.05467 6.2755Z"
                              fill="#A8A8A8"
                            />
                            <path
                              id="Fill 4"
                              opacity="0.4"
                              d="M12.0281 9.22231C12.1849 9.93569 12.8104 10.4376 13.5244 10.4246H15.9619C16.259 10.4246 16.5 10.1785 16.5 9.87434V7.97567C16.4994 7.67217 16.259 7.42546 15.9619 7.4248H13.4671C12.6548 7.42742 11.9987 8.10164 12 8.93251C12 9.02976 12.0096 9.12701 12.0281 9.22231Z"
                              fill="#A8A8A8"
                            />
                            <circle
                              id="Oval"
                              cx="13.5"
                              cy="8.9248"
                              r="0.75"
                              fill="#A8A8A8"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="spantex ff_inter fs_lg fw_medium text_tertiary">
                      Wallet
                    </span>
                  </a>
                  <a href="#" className=" btn_commn d-block">
                    <span className=" me-lg-3 me-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Iconly/Bulk/Profile">
                          <g id="Profile">
                            <path
                              id="Fill 1"
                              d="M8.99775 11.3813C5.763 11.3813 3 11.8913 3 13.9313C3 15.9721 5.74575 16.5001 8.99775 16.5001C12.2325 16.5001 14.9955 15.9908 14.9955 13.9501C14.9955 11.9093 12.2505 11.3813 8.99775 11.3813Z"
                              fill="#A8A8A8"
                            />
                            <path
                              id="Fill 4"
                              opacity="0.4"
                              d="M8.99732 9.438C11.2008 9.438 12.9663 7.67175 12.9663 5.469C12.9663 3.26625 11.2008 1.5 8.99732 1.5C6.79457 1.5 5.02832 3.26625 5.02832 5.469C5.02832 7.67175 6.79457 9.438 8.99732 9.438Z"
                              fill="#A8A8A8"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="spantex ff_inter fs_lg fw_medium text_tertiary">
                      Profile
                    </span>
                  </a>
                  <a href="#" className=" btn_commn d-block">
                    <span className=" me-lg-3 me-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Iconly/Bulk/Setting">
                          <g id="Setting">
                            <path
                              id="Path"
                              d="M9.0088 11.1223C7.80545 11.1223 6.83203 10.1848 6.83203 9.00727C6.83203 7.82977 7.80545 6.88477 9.0088 6.88477C10.2122 6.88477 11.1626 7.82977 11.1626 9.00727C11.1626 10.1848 10.2122 11.1223 9.0088 11.1223Z"
                              fill="#A8A8A8"
                            />
                            <path
                              id="Path_2"
                              opacity="0.4"
                              d="M15.9226 10.7775C15.777 10.5525 15.57 10.3275 15.3018 10.185C15.0871 10.08 14.9492 9.9075 14.8265 9.705C14.4356 9.06 14.6656 8.2125 15.3171 7.83C16.0836 7.4025 16.3288 6.45 15.8843 5.7075L15.3707 4.8225C14.9339 4.08 13.9758 3.8175 13.217 4.2525C12.5425 4.6125 11.6764 4.3725 11.2855 3.735C11.1628 3.525 11.0938 3.3 11.1092 3.075C11.1322 2.7825 11.0402 2.505 10.9022 2.28C10.6186 1.815 10.1051 1.5 9.53792 1.5H8.4572C7.89768 1.515 7.38414 1.815 7.10055 2.28C6.95492 2.505 6.87061 2.7825 6.88594 3.075C6.90127 3.3 6.83229 3.525 6.70965 3.735C6.31875 4.3725 5.45264 4.6125 4.78582 4.2525C4.01935 3.8175 3.06893 4.08 2.62438 4.8225L2.11084 5.7075C1.67396 6.45 1.91923 7.4025 2.67803 7.83C3.32953 8.2125 3.55947 9.06 3.17623 9.705C3.04594 9.9075 2.90797 10.08 2.69336 10.185C2.43276 10.3275 2.20282 10.5525 2.08019 10.7775C1.79659 11.2425 1.81192 11.8275 2.09551 12.315L2.62438 13.215C2.90797 13.695 3.43683 13.995 3.98869 13.995C4.24929 13.995 4.55588 13.92 4.80115 13.77C4.99276 13.6425 5.2227 13.5975 5.47564 13.5975C6.23444 13.5975 6.87061 14.22 6.88594 14.9625C6.88594 15.825 7.59109 16.5 8.48019 16.5H9.52259C10.404 16.5 11.1092 15.825 11.1092 14.9625C11.1322 14.22 11.7683 13.5975 12.5271 13.5975C12.7724 13.5975 13.0024 13.6425 13.2016 13.77C13.4469 13.92 13.7458 13.995 14.0141 13.995C14.5583 13.995 15.0871 13.695 15.3707 13.215L15.9073 12.315C16.1832 11.8125 16.2062 11.2425 15.9226 10.7775Z"
                              fill="#A8A8A8"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="spantex ff_inter fs_lg fw_medium text_tertiary">
                      Setting
                    </span>
                  </a>
                </div>
                <div className=" d-flex flex-column gap-2 mt-5">
                  <a href="#" className=" btn_commn d-block">
                    <span className=" me-lg-3 me-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M0.5 3.83525C0.5 1.997 2.02268 0.5 3.8934 0.5H7.61423C9.48114 0.5 11 1.9925 11 3.82775V12.1648C11 14.0037 9.47732 15.5 7.60584 15.5H3.88653C2.01886 15.5 0.5 14.0075 0.5 12.1722V11.4672V3.83525Z"
                          fill="#A8A8A8"
                        />
                        <path
                          d="M15.3339 7.59104L13.1996 5.40929C12.979 5.18429 12.624 5.18429 12.4041 5.41079C12.185 5.63729 12.1857 6.00254 12.4056 6.22754L13.575 7.42229H12.4538H6.16107C5.85063 7.42229 5.59863 7.68104 5.59863 7.99979C5.59863 8.31929 5.85063 8.57729 6.16107 8.57729H13.575L12.4056 9.77204C12.1857 9.99704 12.185 10.3623 12.4041 10.5888C12.5144 10.702 12.6583 10.759 12.803 10.759C12.9461 10.759 13.09 10.702 13.1996 10.5903L15.3339 8.40929C15.4398 8.30054 15.4997 8.15354 15.4997 7.99979C15.4997 7.84679 15.4398 7.69979 15.3339 7.59104Z"
                          fill="#A8A8A8"
                        />
                      </svg>
                    </span>
                    <span className="spantex ff_inter fs_lg fw_medium text_tertiary">
                      Log out
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-grow-1 bg_light_gray w-100  ">
            <div className=" container">
              {" "}
              <nav className="w-100 ">
                <div className=" d-flex justify-content-between">
                  {" "}
                  <label className="">
                    <span className="search_input py-3 px-3 ">
                      <a href="#">
                        <img
                          style={{ width: "16px", height: "16px" }}
                          src={LeftIcon}
                          alt="icon"
                        />
                      </a>

                      <input
                        type="search"
                        placeholder="Search..."
                        className="ff_liber "
                      />

                      <a href="#">
                        <img
                          style={{ height: "16px" }}
                          src={RightIcon}
                          alt="img"
                        />
                      </a>
                    </span>
                  </label>
                  <article className="d-flex gap-4 align-items-center d-none d-lg-flex ">
                    <div className="me-4 d-flex gap-4">
                      {" "}
                      <span>
                        <a href="#">
                          <img
                            style={{ height: "18px" }}
                            src={wheel}
                            alt="icon"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <img
                            style={{ height: "18px" }}
                            src={bell}
                            alt="icon"
                          />
                        </a>
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="#">
                        <img style={{ width: "48px" }} src={user} alt="icon" />
                      </a>

                      <span className=" ms-3">
                        <span className="ff_liber fs_lg fw-bold text_tertiary mb-0 ">
                          Cody Fisher
                          <span className="d-block">
                            <a
                              href="#mailto: kenzi.lawson@example.com"
                              className="ff_liber fs_md fw-semibold text_secondary mb-0"
                            >
                              kenzi.lawson@example.com
                            </a>
                          </span>
                        </span>
                      </span>
                    </div>
                  </article>
                </div>
              </nav>
              <div className=" container">
                <div className="row">
                  <div className="col-xl-8 bg-white rounded-4 position-relative pt-4">
                    <div className=" d-flex justify-content-end gap-3 position-absolute btns_lftryt">
                      <img
                        style={{ width: "24px" }}
                        src={Btn_slideLeft}
                        alt="error to slide left"
                      />
                      <img
                        style={{ width: "24px" }}
                        src={Btn_slideRight}
                        alt="error to slide right"
                      />
                    </div>
                    <div className="row pb-xl-0 pb-3 ">
                      <div className="col-lg-6 ">
                        <div className=" d-flex flex-column justify-co ntent-evenly h-100 mt-3 pb-xl-3">
                          {" "}
                          <h2 className=" ps-1 ff_inter fw_500 fs_xl pt-4 mb-0  text-center text-lg-start text_primary">
                            Create MetroVerse Genesis
                          </h2>
                          <p className="pt-3 pb-4 mb-0 ff_inter fw_medium fs_lg">
                            physical claim for issue #1 now live. please check
                            that the token is available for claim via website
                          </p>
                          <span>
                            {" "}
                            <a
                              className="btn_explore d-inline-block ff_inter fs_lg fw_medium"
                              href="#"
                            >
                              Explorer Now
                            </a>
                          </span>
                          <div className="row items_border mt-4 w-100 ms-1 d-lg-none d-xl-flex">
                            <div className="col-2 py-3 p-0  border_end">
                              <div className="">
                                <p className="ff_inter fw-bold fs_md genesis_text_gradient mb-0 text-center">
                                  24.8K
                                </p>
                                <p className="ff_inter fw_500 fs_xsm text_secondary mb-0 text-center pt-1">
                                  Items
                                </p>
                              </div>
                            </div>
                            <div className="col-2 py-3 p-0  border_end">
                              <div className="">
                                <p className="ff_inter fw-bold fs_md genesis_text_gradient mb-0 text-center">
                                  4.1K
                                </p>
                                <p className="ff_inter fw_500 fs_xsm text_secondary mb-0 text-center pt-1">
                                  Owners
                                </p>
                              </div>
                            </div>
                            <div className="col-3 p-0 py-3 border_end">
                              {" "}
                              <div className="">
                                <p className="ff_inter fw-bold fs_md genesis_text_gradient mb-0 text-center">
                                  0.221
                                </p>
                                <p className="ff_inter fw_500 fs_xsm text_secondary mb-0 text-center pt-1">
                                  Floor Price
                                </p>
                              </div>
                            </div>
                            <div className="col-5 p-0">
                              <div className="py-3  ">
                                <p className="ff_inter fw-bold fs_md genesis_text_gradient mb-0 text-center">
                                  43.1K
                                </p>
                                <p className="ff_inter fw_500 fs_xsm text_secondary mb-0 text-center pe-xx-l2 pt-1">
                                  Volumn Traded
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <img
                          className="width_custom px-xl-3 img_overflow mt-lg-0 mt-4"
                          src={DASHBORDMAIN}
                          alt=""
                        />
                      </div>
                      <div
                        className="row items_border mt-4  mx-auto  d-none d-lg-flex d-xl-none"
                        style={{ width: "90%" }}
                      >
                        <div className="col-2 py-3 p-0  border_end">
                          <div className="">
                            <p className="ff_inter fw-bold fs_md genesis_text_gradient mb-0 text-center">
                              24.8K
                            </p>
                            <p className="ff_inter fw_500 fs_xsm text_secondary mb-0 text-center pt-1">
                              Items
                            </p>
                          </div>
                        </div>
                        <div className="col-2 py-3 p-0  border_end">
                          <div className="">
                            <p className="ff_inter fw-bold fs_md genesis_text_gradient mb-0 text-center">
                              4.1K
                            </p>
                            <p className="ff_inter fw_500 fs_xsm text_secondary mb-0 text-center pt-1">
                              Owners
                            </p>
                          </div>
                        </div>
                        <div className="col-3 p-0 py-3 border_end">
                          {" "}
                          <div className="">
                            <p className="ff_inter fw-bold fs_md genesis_text_gradient mb-0 text-center">
                              0.221
                            </p>
                            <p className="ff_inter fw_500 fs_xsm text_secondary mb-0 text-center pt-1">
                              Floor Price
                            </p>
                          </div>
                        </div>
                        <div className="col-5 p-0">
                          <div className="py-3  ">
                            <p className="ff_inter fw-bold fs_md genesis_text_gradient mb-0 text-center">
                              43.1K
                            </p>
                            <p className="ff_inter fw_500 fs_xsm text_secondary mb-0 text-center pe-xx-l2 pt-1">
                              Volumn Traded
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="h-100 ps-3">
                      <p className="ff_inter fw_semibold fs_xl text_tertiary mt-4 pt-2 pt-md-0 mt-lg-0 mb-0">
                        New NFTs
                      </p>
                      <div className="d-flex flex-xl-column flex-wrap gap-3 mt-3 w-100 pb-xl-0 pb-4 d-none d-md-flex">
                        <div className="d-flex  bg-white px-2 py-2 rounded-4 align-items-center">
                          <img className="Block_img" src={Block1} alt="Block" />
                          <div className=" ms-3  w-100 me-2">
                            <p className=" ff_inter fw_medium fs_sm text_secondary mb-0">
                              Metroverse Genesis
                            </p>
                            <p className=" ff_inter fw-bold fs_xl text_tertiary mb-0 mt-1">
                              Block #1460
                            </p>
                            <p className=" ff_inter fw_medium fs_sm text_secondary mt-1 mb-0">
                              Owned by
                              <span className="ps-1 ff_inter fw-bold fs_sm genesis_text_gradient">
                                BabyKee
                              </span>
                            </p>
                            <div className="d-flex justify-content-between mt-1">
                              <div className="d-flex">
                                <img
                                  style={{ height: "12px", width: "12px" }}
                                  src={BlackHeart}
                                  alt="Error TO loAd!!.//"
                                />
                                <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue">
                                  1K
                                </p>
                              </div>
                              <div className="d-flex">
                                <img src={LinerS} alt="Error to load!..." />
                                <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue ms-1">
                                  21
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex bg-white px-2 py-2 rounded-4 mt-1 align-items-center">
                          <img
                            className="Block_img"
                            src={Block2}
                            alt="block_2"
                          />
                          <div className=" ms-3  w-100 me-2">
                            <p className=" ff_inter fw_medium fs_sm text_secondary mb-0">
                              Metroverse Genesis
                            </p>
                            <p className=" ff_inter fw-bold fs_xl text_tertiary mb-0 mt-1">
                              Block #1460
                            </p>
                            <p className=" ff_inter fw_medium fs_sm text_secondary mt-1 mb-0">
                              Owned by
                              <span className="ps-1 ff_inter fw-bold fs_sm genesis_text_gradient">
                                BabyKee
                              </span>
                            </p>
                            <div className="d-flex mt-2 justify-content-between">
                              <div className="d-flex">
                                <img
                                  style={{ height: "12px", width: "12px" }}
                                  src={BlackHeart}
                                  alt="Error TO loAd!!.//"
                                />
                                <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue">
                                  1K
                                </p>
                              </div>
                              <div className="d-flex">
                                <img src={LinerS} alt="Error to load!..." />
                                <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue ms-1">
                                  21
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex bg-white px-2 py-2 rounded-4 mt-1 align-items-center">
                          <img
                            className="Block_img"
                            src={Block3}
                            alt="block_3"
                          />
                          <div className=" ms-3 w-100 me-2">
                            <p className=" ff_inter fw_medium fs_sm text_secondary mb-0">
                              Metroverse Genesis
                            </p>
                            <p className=" ff_inter fw-bold fs_xl text_tertiary mb-0 mt-1">
                              Block #1460
                            </p>
                            <p className=" ff_inter fw_medium fs_sm text_secondary mt-1 mb-0">
                              Owned by
                              <span className="ps-1 ff_inter fw-bold fs_sm genesis_text_gradient">
                                BabyKee
                              </span>
                            </p>
                            <div className="d-flex mt-2 justify-content-between w-100">
                              <div className="d-flex">
                                <img
                                  style={{ height: "12px", width: "12px" }}
                                  src={BlackHeart}
                                  alt="Error TO loAd!!.//"
                                />
                                <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue">
                                  1K
                                </p>
                              </div>
                              <div className="d-flex ">
                                <img src={LinerS} alt="Error to load!..." />
                                <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue ms-1">
                                  21
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="my-3">
                        {" "}
                        <Carousel className=" d-md-none">
                          <Carousel.Item>
                            {" "}
                            <div className="d-flex  bg-white px-2 py-2 rounded-4 align-items-center">
                              <img
                                className="Block_img"
                                src={Block1}
                                alt="Block"
                              />
                              <div className=" ms-3  w-100 me-2">
                                <p className=" ff_inter fw_medium fs_sm text_secondary mb-0">
                                  Metroverse Genesis
                                </p>
                                <p className=" ff_inter fw-bold fs_xl text_tertiary mb-0 mt-1">
                                  Block #1460
                                </p>
                                <p className=" ff_inter fw_medium fs_sm text_secondary mt-1 mb-0">
                                  Owned by
                                  <span className="ps-1 ff_inter fw-bold fs_sm genesis_text_gradient">
                                    BabyKee
                                  </span>
                                </p>
                                <div className="d-flex justify-content-between mt-1">
                                  <div className="d-flex">
                                    <img
                                      style={{ height: "12px", width: "12px" }}
                                      src={BlackHeart}
                                      alt="Error TO loAd!!.//"
                                    />
                                    <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue">
                                      1K
                                    </p>
                                  </div>
                                  <div className="d-flex">
                                    <img src={LinerS} alt="Error to load!..." />
                                    <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue ms-1">
                                      21
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Carousel.Item>
                          <Carousel.Item>
                            {" "}
                            <div className="d-flex  bg-white px-2 py-2 rounded-4 align-items-center">
                              <img
                                className="Block_img"
                                src={Block1}
                                alt="Block"
                              />
                              <div className=" ms-3  w-100 me-2">
                                <p className=" ff_inter fw_medium fs_sm text_secondary mb-0">
                                  Metroverse Genesis
                                </p>
                                <p className=" ff_inter fw-bold fs_xl text_tertiary mb-0 mt-1">
                                  Block #1460
                                </p>
                                <p className=" ff_inter fw_medium fs_sm text_secondary mt-1 mb-0">
                                  Owned by
                                  <span className="ps-1 ff_inter fw-bold fs_sm genesis_text_gradient">
                                    BabyKee
                                  </span>
                                </p>
                                <div className="d-flex justify-content-between mt-1">
                                  <div className="d-flex">
                                    <img
                                      style={{ height: "12px", width: "12px" }}
                                      src={BlackHeart}
                                      alt="Error TO loAd!!.//"
                                    />
                                    <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue">
                                      1K
                                    </p>
                                  </div>
                                  <div className="d-flex">
                                    <img src={LinerS} alt="Error to load!..." />
                                    <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue ms-1">
                                      21
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Carousel.Item>

                          <Carousel.Item>
                            {" "}
                            <div className="d-flex  bg-white px-2 py-2 rounded-4 align-items-center">
                              <img
                                className="Block_img"
                                src={Block1}
                                alt="Block"
                              />
                              <div className=" ms-3  w-100 me-2">
                                <p className=" ff_inter fw_medium fs_sm text_secondary mb-0">
                                  Metroverse Genesis
                                </p>
                                <p className=" ff_inter fw-bold fs_xl text_tertiary mb-0 mt-1">
                                  Block #1460
                                </p>
                                <p className=" ff_inter fw_medium fs_sm text_secondary mt-1 mb-0">
                                  Owned by
                                  <span className="ps-1 ff_inter fw-bold fs_sm genesis_text_gradient">
                                    BabyKee
                                  </span>
                                </p>
                                <div className="d-flex justify-content-between mt-1">
                                  <div className="d-flex">
                                    <img
                                      style={{ height: "12px", width: "12px" }}
                                      src={BlackHeart}
                                      alt="Error TO loAd!!.//"
                                    />
                                    <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue">
                                      1K
                                    </p>
                                  </div>
                                  <div className="d-flex">
                                    <img src={LinerS} alt="Error to load!..." />
                                    <p className=" mb-0 ff_inter fw_medium fs_xl text_dark_blue ms-1">
                                      21
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" row mt-5">
                  <div className="col-xl-8 mt-5 mt-sm-0 pb-4">
                    <div className="row pt-4 pb-3 mx-2 d-none d-md-flex justify-content-center">
                      <div className="d-flex justify-content-between align-content-center">
                        <h2 className="ff_inter fw-semibold fs_xl text_tertiary mb-0">
                          Top Collections
                        </h2>
                        <p className="ff_inter fw-semibold fs_md text_tertiary mb-0">
                          View All
                          <span>
                            <img src={arrow} alt="arrow-right" />
                          </span>
                        </p>
                      </div>
                      <div className="col-md-4  mt-3">
                        <div className=" position-relative overflow-hidden rounded-4 ">
                          <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                            <img
                              className="dragan_img position-absolute  "
                              src={dragn}
                              alt="imgg-dragn"
                            />
                            <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-4 mt-2 ">
                              Jozo Gators
                            </h3>
                            <p className="ff_inter fw-normal fs_12 text-white pb-4">
                              1.1K
                            </p>
                          </div>
                          <img
                            className="w-100 "
                            src={surfing}
                            alt="img-surfing"
                          />
                        </div>
                      </div>
                      <div className="col-md-4  mt-3">
                        <div className=" position-relative overflow-hidden rounded-4">
                          <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                            <img
                              className="dragan_img position-absolute "
                              src={division}
                              alt="imgg-dragn"
                            />
                            <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-4 mt-2 ">
                              Jozo Gators
                            </h3>
                            <p className="ff_inter fw-normal fs_12 text-white pb-4">
                              1.1K
                            </p>
                          </div>
                          <img
                            className="w-100 "
                            src={resist}
                            alt="img-surfing"
                          />
                        </div>
                      </div>
                      <div className="col-md-4  mt-3">
                        <div className=" position-relative overflow-hidden rounded-4 ">
                          <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                            <img
                              className="dragan_img position-absolute "
                              src={meta}
                              alt="imgg-dragn"
                            />
                            <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-4 mt-2 ">
                              Jozo Gators
                            </h3>
                            <p className="ff_inter fw-normal fs_12 text-white pb-4">
                              1.1K
                            </p>
                          </div>
                          <img
                            className="w-100 "
                            src={ragnorak}
                            alt="img-surfing"
                          />
                        </div>
                      </div>
                    </div>
                    <Carousel className="d-md-none ">
                      <Carousel.Item>
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 mt-3 d-flex">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={dragn}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={surfing}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 mt-3  d-none d-sm-flex">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={division}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={resist}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 mt-3">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={division}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={resist}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 mt-3  d-none d-sm-flex">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={meta}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={ragnorak}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 mt-3">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={meta}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={ragnorak}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 mt-3 d-flex d-none d-sm-flex">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={dragn}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={surfing}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                    <div className="row pt-4 mx-2 d-none d-md-flex justify-content-center  ">
                      <div className="d-flex justify-content-between ">
                        <h2 className="ff_inter fw-semibold fs_xl text_tertiary mb-0">
                          Trendings NFTs
                        </h2>
                        <p className="ff_inter fw-semibold fs_md text_tertiary mb-0">
                          View All
                          <span>
                            <img src={arrow} alt="arrow-right" />
                          </span>
                        </p>
                      </div>
                      <div className="col-md-4  mt-3">
                        <div className=" position-relative overflow-hidden rounded-4">
                          <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                            <img
                              className="dragan_img position-absolute "
                              src={noryoz}
                              alt="imgg-dragn"
                            />
                            <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-4 mt-2 ">
                              Jozo Gators
                            </h3>
                            <p className="ff_inter fw-normal fs_12 text-white pb-4">
                              1.1K
                            </p>
                          </div>
                          <img
                            className="w-100"
                            src={noryoj}
                            alt="img-surfing"
                          />
                        </div>
                      </div>
                      <div className="col-md-4  mt-3">
                        <div className=" position-relative overflow-hidden rounded-4">
                          <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                            <img
                              className="dragan_img position-absolute "
                              src={clubavtar}
                              alt="imgg-dragn"
                            />
                            <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-4 mt-2 ">
                              Jozo Gators
                            </h3>
                            <p className="ff_inter fw-normal fs_12 text-white pb-4">
                              1.1K
                            </p>
                          </div>
                          <img
                            className="w-100 "
                            src={club}
                            alt="img-surfing"
                          />
                        </div>
                      </div>
                      <div className="col-md-4  mt-3">
                        <div className=" position-relative overflow-hidden rounded-4">
                          <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                            <img
                              className="dragan_img position-absolute "
                              src={last}
                              alt="imgg-dragn"
                            />
                            <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-4 mt-2 ">
                              Jozo Gators
                            </h3>
                            <p className="ff_inter fw-normal fs_12 text-white pb-4">
                              1.1K
                            </p>
                          </div>
                          <img
                            className="w-100 "
                            src={dragonz}
                            alt="img-surfing"
                          />
                        </div>
                      </div>
                    </div>
                    <Carousel className="d-md-none">
                      <Carousel.Item>
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 mt-3">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={noryoz}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100"
                                src={noryoj}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 mt-3 d-none d-sm-block">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={clubavtar}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={club}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Row>
                          <div className="col-lg-4 col-sm-6 mt-3">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={clubavtar}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={club}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 mt-3 d-none d-sm-block">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={last}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={dragonz}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                        </Row>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className=" row">
                          <div className="col-lg-4 col-sm-6 mt-3">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={last}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100 "
                                src={dragonz}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 mt-3 d-none d-sm-block">
                            <div className=" position-relative overflow-hidden rounded-4">
                              <div className="overlay position-absolute d-flex justify-content-between h-50 flex-column align-items-center pb-2 ">
                                <img
                                  className="dragan_img position-absolute "
                                  src={noryoz}
                                  alt="imgg-dragn"
                                />
                                <h3 className="ff_inter fw-semibold fs_xl text-center text-white mb-0 pt-1">
                                  Jozo Gators
                                </h3>
                                <p className="ff_inter fw-normal fs_12 text-white pb-4">
                                  1.1K
                                </p>
                              </div>
                              <img
                                className="w-100"
                                src={noryoj}
                                alt="img-surfing"
                              />
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="col-xl-4 ps-4">
                    <div className="mt-4 ms-1 bg-white rounded-4 pb-4 ">
                      <div className="d-flex justify-content-between align-items-center px-4 py-3">
                        <p className=" ff_inter fw_medium fs_xl text_tertiary mb-0">
                          History
                        </p>
                        <div className="d-flex align-items-center px-2 py-1 border border-2 border-dark border-opacity-25 rounded-2">
                          <p className=" mb-0 ff_inter fw_regular fs_md text_tertiary ">
                            Last Month
                          </p>
                          <a className="mt_neg_5 ms-2" href="#">
                            <img src={dropdown_img} alt="dropdown_img" />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between pe-4 px-3 mt-3 ">
                        <div className=" d-flex align-items-center">
                          <img
                            className="dragan_img_c "
                            src={cat_img}
                            alt="cat_img"
                          />
                          <div className=" ms-3 d-flex justify-content-between">
                            <div>
                              <p className=" ff_inter fw-bold fs_lg text_tertiary mb-0">
                                Cet #6882
                              </p>
                              <p className=" ff_inter fw_regular fs_md text_tertiary mb-0 mt-1">
                                Cets on Creck
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src={s_img} alt="s_img" />
                          <p className=" ff_inter fw_regular fs_md text_tertiary mb-0">
                            250
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between pe-4 px-3 mt-3">
                        <div className=" d-flex align-items-center">
                          <img
                            className="dragan_img_c "
                            src={monkey_img}
                            alt="monkey_img"
                          />
                          <div className=" ms-3 d-flex justify-content-between">
                            <div>
                              <p className=" ff_inter fw-bold fs_lg text_tertiary mb-0">
                                Bored Ape #981
                              </p>
                              <p className=" ff_inter fw_regular fs_md text_tertiary mb-0 mt-1">
                                Bored Ape Solana Club
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src={s_img} alt="s_img" />
                          <p className=" ff_inter fw_regular fs_md text_tertiary mb-0">
                            38
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between pe-4 px-3 mt-3 pb-2">
                        <div className=" d-flex align-items-center">
                          <img
                            className="dragan_img_c"
                            src={children_img}
                            alt="children_img"
                          />
                          <div className=" ms-3 d-flex justify-content-between">
                            <div>
                              <p className=" ff_inter fw-bold fs_lg text_tertiary mb-0">
                                SolPunk #7803
                              </p>
                              <p className=" ff_inter fw_regular fs_md text_tertiary mb-0 mt-1">
                                SolPunks
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src={s_img} alt="s_img" />
                          <p className=" ff_inter fw_regular fs_md text_tertiary mb-0">
                            15
                          </p>
                        </div>
                      </div>
                      <a
                        className=" ff_inter fw_medium fs_lg text-white d-flex justify-content-center py-3 mt-5 d-inline-block btn_show mx-3"
                        href="#"
                      >
                        Show All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
