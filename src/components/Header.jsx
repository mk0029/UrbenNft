import React, { useState } from "react";
import LogoUrbanNft from "../assets/img/png/Urben-Nft-Logo.png";
import search from "../assets/img/png/SeArchICON.png";
import SettingSearchIcon from "../assets/img/png/Setting-Search-Icon.png";
import wheel from "../assets/img/png/Wheel.png";
import bell from "../assets/img/png/Bell.png";
import ImageUser from "../assets/img/png/ImageUser.png";
// import avtar from "../assets/img/svg/avtar.svg";
import arrow from "../assets/img/svg/Arrow - Right.svg";
// import waves from "../assets/img/webp/waves.webp";
import scoreimg from "../assets/img/webp/score.webp";
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
import block_1 from "../assets/img/png/block1.png";
import block_2 from "../assets/img/png/block2.png";
import block_3 from "../assets/img/png/block3.png";
import heart from "../assets/img/svg/Heart.svg";
import s_img from "../assets/img/svg/s_img.svg";
import dropdown_img from "../assets/img/svg/Arrow - Down 2.svg";
import cat_img from "../assets/img/png/cat.png";
import monkey_img from "../assets/img/png/monkey.png";
import children_img from "../assets/img/png/children.png";
import Carousel from "react-bootstrap/Carousel";
import Try from "./Try";
function Header() {
  const [nav, setNav] = useState(true);
  return (
    <>
      <section className=" min-vh-100 ">
        <div className=" containe container-fluid ">
          <div className="row">
            <div className="col-3 px-0  overflow-custom d-none d-md-block h_100_vh ">
              <div className="hight_1024">
                {" "}
                <div className=" d-flex justify-content-between flex-column ">
                  <div className=" d-flex justify-content-center mb-3 mb-xl-5 py-xl-5 py-lg-3 py-2 position-relative">
                    <svg
                      style={{ zIndex: "-1" }}
                      className="bg_img_log0 position-absolute start-0"
                      width="371"
                      height="229"
                      viewBox="0 0 371 229"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.0833333"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M89.758 123.514C74.9842 137.96 49.0536 136.498 29.3912 131.675C10.7928 127.113 1.91618 107.623 -14.2463 98.0046C-30.9601 88.0579 -54.23 88.7414 -66.923 74.3564C-80.5284 58.9374 -85.7895 37.6344 -85.7976 16.9155C-85.806 -4.77359 -86.557 -33.6313 -66.9694 -45.3288C-44.3425 -58.8413 -15.2813 -30.3707 9.29758 -39.8742C30.1622 -47.9415 28.3974 -92.9223 50.2501 -90.6519C72.9504 -88.2933 58.4708 -42.8587 78.337 -32.7011C101.443 -20.887 136.596 -51.429 157.155 -35.9909C174.103 -23.265 167.982 7.51404 157.143 26.473C146.377 45.3033 114.175 43.0254 101.741 60.9315C89.1002 79.1354 105.748 107.879 89.758 123.514Z"
                        stroke="url(#paint0_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.166667"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M83.214 109.539C66.8922 122.04 41.4509 117.388 22.6037 110.177C4.77625 103.356 -1.66231 82.9308 -16.4787 71.3955C-31.8005 59.4667 -54.8698 57.2708 -65.6889 41.437C-77.2857 24.465 -79.9359 2.68821 -77.4665 -17.8607C-74.8815 -39.3717 -72.173 -68.0839 -51.4243 -77.2658C-27.4563 -87.8723 -2.15171 -56.0477 23.2654 -62.4373C44.8415 -67.8612 48.4763 -112.689 69.7925 -107.738C91.9355 -102.596 72.199 -59.3243 90.6097 -46.7971C112.023 -32.227 150.401 -58.1755 168.865 -40.3258C184.086 -25.6119 174.359 4.15713 161.384 21.6209C148.497 38.9661 116.959 32.7301 102.534 48.9528C87.8704 65.4453 100.879 96.0076 83.214 109.539Z"
                        stroke="url(#paint1_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.25"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M78.6064 95.1056C60.9886 105.502 36.4259 97.7577 18.6816 88.2853C1.89748 79.3255 -2.00735 58.2684 -15.2522 45.0015C-28.9488 31.282 -51.4644 26.2663 -60.246 9.2261C-69.6589 -9.03895 -69.6607 -30.9709 -64.7548 -51.0551C-59.6192 -72.0795 -53.4969 -100.233 -31.9066 -106.792C-6.96628 -114.368 14.1985 -79.6806 40.0632 -82.8943C62.0193 -85.6223 70.9914 -129.651 91.4451 -122.118C112.692 -114.293 88.0076 -73.7879 104.682 -59.0948C124.077 -42.0056 165.088 -63.031 181.177 -43.0504C194.439 -26.5801 181.26 1.75929 166.351 17.4905C151.543 33.1149 121.15 23.0492 104.959 37.3709C88.4991 51.9307 97.6742 83.8532 78.6064 95.1056Z"
                        stroke="url(#paint2_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.333333"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M75.9647 80.4571C57.3191 88.6194 34.0077 77.9278 17.6353 66.3557C2.14884 55.4099 0.835767 34.0342 -10.6372 19.2469C-22.5015 3.95515 -44.1215 -3.77781 -50.7334 -21.7637C-57.8205 -41.0425 -55.1752 -62.8088 -47.9085 -82.1408C-40.3016 -102.378 -30.8602 -129.57 -8.75654 -133.437C16.7767 -137.903 33.4823 -100.889 59.4016 -100.913C81.404 -100.934 95.5745 -143.532 114.855 -133.553C134.884 -123.187 105.629 -86.0089 120.316 -69.3865C137.397 -50.0533 180.418 -65.9014 193.888 -44.1032C204.992 -26.1345 188.562 0.377924 171.946 14.1658C155.444 27.8601 126.657 14.1515 108.946 26.3836C90.9409 38.8192 96.1449 71.6231 75.9647 80.4571Z"
                        stroke="url(#paint3_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.416667"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M75.2917 65.8346C55.8987 71.6671 34.1888 58.218 19.4343 44.7396C5.47813 31.9906 6.77632 10.6141 -2.75243 -5.45944C-12.6062 -22.0813 -33.0059 -32.3878 -37.3488 -51.0445C-42.0038 -71.0424 -36.7515 -92.3249 -27.2334 -110.629C-17.2697 -129.79 -4.6515 -155.63 17.6332 -156.778C43.3756 -158.105 55.3712 -119.332 80.9555 -116.202C102.674 -113.545 121.829 -154.102 139.647 -141.851C158.157 -129.125 124.771 -95.7833 137.249 -77.4972C151.762 -56.2291 196.145 -66.7238 206.794 -43.4485C215.572 -24.2623 196.139 0.0535651 178.067 11.7169C160.117 23.301 133.37 6.19109 114.405 16.177C95.1258 26.3289 96.2809 59.5221 75.2917 65.8346Z"
                        stroke="url(#paint4_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.5"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.5576 51.4777C56.7054 54.9198 36.9197 38.9443 24.0024 23.7813C11.784 9.43882 15.6741 -11.6207 8.23117 -28.727C0.534324 -46.4169 -18.3417 -59.1148 -20.3511 -78.1575C-22.5049 -98.5691 -14.7236 -119.057 -3.09571 -136.072C9.0766 -153.884 24.6841 -178.004 46.8186 -176.447C72.3874 -174.648 79.4949 -134.715 104.364 -128.512C125.475 -123.247 149.33 -161.182 165.421 -146.867C182.136 -131.996 145.117 -102.944 155.2 -83.2845C166.928 -60.4194 212.014 -65.4649 219.684 -41.0751C226.006 -20.9701 203.858 0.812212 184.598 10.2014C165.469 19.5269 141.158 -0.691762 121.222 6.92459C100.955 14.6676 98.0436 47.7522 76.5576 51.4777Z"
                        stroke="url(#paint5_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.583333"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M79.7045 37.619C59.6851 38.6456 42.114 20.4119 31.2232 3.81094C20.9217 -11.8917 27.3459 -32.3211 22.0976 -50.1916C16.6703 -68.6717 -0.405069 -83.5436 -0.0519993 -102.682C0.326449 -123.195 10.5216 -142.589 24.0879 -158.074C38.2893 -174.284 56.6559 -196.341 78.3149 -192.132C103.334 -187.27 105.451 -146.788 129.239 -137.64C149.432 -129.875 177.636 -164.648 191.764 -148.506C206.439 -131.738 166.331 -107.364 173.872 -86.6428C182.644 -62.542 227.769 -62.123 232.348 -36.9977C236.122 -16.2866 211.586 2.66298 191.421 9.66217C171.394 16.6138 149.876 -6.37504 129.262 -1.2164C108.305 4.02803 101.372 36.5079 79.7045 37.619Z"
                        stroke="url(#paint6_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.666667"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M84.6473 24.4816C64.7519 23.1028 49.649 2.91194 40.9414 -14.8593C32.7051 -31.669 41.5678 -51.1646 38.5887 -69.5196C35.5079 -88.5007 20.48 -105.297 23.1884 -124.239C26.0915 -144.542 38.5503 -162.559 53.856 -176.295C69.8784 -190.674 90.7347 -210.354 111.603 -203.585C135.71 -195.766 132.809 -155.357 155.171 -143.435C174.154 -133.314 206.292 -164.43 218.253 -146.726C230.677 -128.336 188.066 -108.961 192.958 -87.5033C198.648 -62.5464 243.157 -56.7274 244.58 -31.2563C245.753 -10.26 219.188 5.59897 198.413 10.1272C177.779 14.6247 159.365 -10.7556 138.373 -8.10686C117.031 -5.41411 106.18 25.974 84.6473 24.4816Z"
                        stroke="url(#paint7_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.75"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M91.2735 12.2738C71.7886 8.53444 59.3672 -13.2845 52.9646 -31.942C46.9085 -49.5899 58.078 -67.8618 57.4071 -86.415C56.7133 -105.601 43.9459 -124.046 48.9666 -142.503C54.3482 -162.286 68.8874 -178.663 85.7092 -190.456C103.319 -202.801 126.36 -219.826 146.139 -210.627C168.988 -200.001 161.118 -160.283 181.736 -145.796C199.237 -133.499 234.84 -160.516 244.465 -141.537C254.463 -121.823 209.966 -107.695 212.143 -85.8378C214.675 -60.4159 257.927 -49.3395 256.179 -23.9167C254.739 -2.96022 226.531 9.5954 205.445 11.6077C184.503 13.6063 169.453 -13.7525 148.386 -13.6296C126.968 -13.5046 112.362 16.321 91.2735 12.2738Z"
                        stroke="url(#paint8_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.833333"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M99.4498 1.18894C80.6526 -4.83229 71.0828 -27.9276 67.0703 -47.1751C63.2749 -65.381 76.5851 -82.1577 78.2255 -100.62C79.922 -119.713 69.5912 -139.506 76.846 -157.197C84.6224 -176.159 101.028 -190.658 119.121 -200.343C138.062 -210.482 162.953 -224.611 181.363 -213.146C202.63 -199.901 189.919 -161.483 208.501 -144.678C224.275 -130.413 262.825 -152.95 269.982 -133.002C277.418 -112.28 231.677 -103.571 231.115 -81.6553C230.462 -56.1656 271.842 -40.0495 266.958 -15.0675C262.932 5.52551 233.489 14.6129 212.395 14.1003C191.445 13.5912 179.964 -15.3056 159.124 -17.688C137.936 -20.1101 119.794 7.70574 99.4498 1.18894Z"
                        stroke="url(#paint9_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.916667"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M109.018 -8.59917C91.1729 -16.7913 84.5792 -40.7944 83.004 -60.3281C81.5141 -78.8049 96.7671 -93.8369 100.686 -111.923C104.739 -130.626 96.9818 -151.45 106.359 -168.105C116.409 -185.958 134.441 -198.367 153.543 -205.81C173.54 -213.602 199.919 -224.638 216.705 -211.101C236.094 -195.464 218.743 -158.933 235.033 -140.089C248.862 -124.093 289.798 -141.834 294.397 -121.233C299.175 -99.8331 252.846 -96.6373 249.564 -75.0044C245.747 -49.8436 284.676 -28.9765 276.737 -4.82035C270.193 15.092 239.938 20.5962 219.136 17.5859C198.476 14.5961 190.714 -15.378 170.394 -20.2097C149.737 -25.1218 128.332 0.267232 109.018 -8.59917Z"
                        stroke="url(#paint10_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M119.801 -16.9382C103.156 -27.1601 99.616 -51.6911 100.487 -71.2049C101.311 -89.6627 118.28 -102.727 124.41 -120.156C130.749 -138.181 125.661 -159.704 137.016 -175.071C149.186 -191.543 168.579 -201.682 188.414 -206.781C209.178 -212.118 236.664 -219.91 251.595 -204.525C268.842 -186.753 247.121 -152.667 260.902 -132.091C272.601 -114.624 315.33 -127.322 317.319 -106.394C319.386 -84.6534 273.128 -86.9862 267.188 -65.9714C260.279 -41.5297 296.217 -16.2665 285.353 6.69245C276.398 25.6179 245.764 27.4755 225.547 22.03C205.468 16.6214 201.514 -13.956 182.001 -21.1464C162.165 -28.4565 137.817 -5.87497 119.801 -16.9382Z"
                        stroke="url(#paint11_linear_33_720)"
                        stroke-opacity="0.83"
                        stroke-width="2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_33_720"
                          x1="252.052"
                          y1="109.148"
                          x2="-58.6578"
                          y2="-141.478"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_33_720"
                          x1="245.257"
                          y1="115.335"
                          x2="-32.9251"
                          y2="-170.419"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_33_720"
                          x1="237.916"
                          y1="120.784"
                          x2="-3.80448"
                          y2="-195.909"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_33_720"
                          x1="230.122"
                          y1="125.436"
                          x2="28.2628"
                          y2="-217.572"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_33_720"
                          x1="221.98"
                          y1="129.239"
                          x2="62.7978"
                          y2="-235.091"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_33_720"
                          x1="213.597"
                          y1="132.158"
                          x2="99.2847"
                          y2="-248.208"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_33_720"
                          x1="205.083"
                          y1="134.171"
                          x2="137.182"
                          y2="-256.727"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_33_720"
                          x1="196.551"
                          y1="135.269"
                          x2="175.931"
                          y2="-260.518"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint8_linear_33_720"
                          x1="188.114"
                          y1="135.456"
                          x2="214.959"
                          y2="-259.523"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint9_linear_33_720"
                          x1="179.884"
                          y1="134.753"
                          x2="253.698"
                          y2="-253.749"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint10_linear_33_720"
                          x1="171.97"
                          y1="133.191"
                          x2="291.578"
                          y2="-243.271"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                        <linearGradient
                          id="paint11_linear_33_720"
                          x1="164.474"
                          y1="130.818"
                          x2="328.048"
                          y2="-228.233"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC881" />
                          <stop offset="1" stop-color="#DA8517" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <img
                      className=" "
                      style={({ width: "92px" }, { height: " 85.37px" })}
                      src={LogoUrbanNft}
                      alt=""
                    />
                  </div>

                  <div className="d-flex  gap-xl-4 gap-4  d-lg-none mb-3 px-lg-4 px-2  ">
                    <span>
                      <a href="#">
                        <img
                          style={({ width: "18px" }, { height: "19px" })}
                          src={wheel}
                          alt="icon"
                        />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <img
                          style={({ width: "18px" }, { height: "19px" })}
                          src={bell}
                          alt="icon"
                        />
                      </a>
                    </span>
                  </div>
                  <div className="px-lg-4 px-2">
                    <h3 className=" ff_inter fs_md fw-semibold text-black">
                      MARKETPLACE
                    </h3>
                    <div className=" d-flex flex-column gap-xl-4 gap-lg-3 gap-2">
                      <div className="px-3 d-flex align-items-center gap-lg-3 gap-2 hover_btn_SideNav py_14 transition300 ">
                        <span>
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
                        <p className="m-0 ff_inter fs_lg fw_medium transition300 pt-1">
                          Dashboard
                        </p>
                      </div>
                      <div className="px-3 d-flex align-items-center gap-lg-3 gap-2 hover_btn_SideNav py_14 transition300 ">
                        <span>
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
                        <p className="m-0 ff_inter fs_lg fw_medium transition300 pt-1">
                          Market
                        </p>
                      </div>
                      <div className="px-3 d-flex align-items-center gap-lg-3 gap-2 hover_btn_SideNav py_14 transition300 ">
                        <span>
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
                                  d="M9.73223 2.33521L11.4021 5.69092C11.5251 5.93404 11.7599 6.10288 12.0307 6.1404L15.7815 6.68667C16.0006 6.71744 16.1994 6.833 16.3336 7.00934C16.4664 7.18343 16.5234 7.40404 16.4912 7.6209C16.4649 7.80099 16.3802 7.96757 16.2504 8.09514L13.5325 10.7297C13.3337 10.9136 13.2437 11.186 13.2917 11.4523L13.9609 15.1562C14.0321 15.6035 13.7358 16.0252 13.2917 16.11C13.1087 16.1392 12.9212 16.1085 12.7561 16.0244L9.41041 14.2813C9.1621 14.156 8.86879 14.156 8.62049 14.2813L5.27477 16.0244C4.86368 16.2428 4.35432 16.0942 4.12552 15.689C4.04075 15.5277 4.01075 15.3438 4.0385 15.1645L4.70765 11.4599C4.75566 11.1942 4.66489 10.9203 4.46685 10.7365L1.74901 8.10339C1.42569 7.79123 1.41594 7.27722 1.72726 6.95381C1.73401 6.94706 1.74151 6.93955 1.74901 6.93205C1.87804 6.80073 2.04758 6.71744 2.23062 6.69568L5.98142 6.14865C6.25148 6.11038 6.48628 5.94305 6.61006 5.69842L8.2199 2.33521C8.36318 2.04706 8.66025 1.86772 8.98282 1.87523H9.08334C9.36315 1.90899 9.60695 2.08233 9.73223 2.33521"
                                  fill="#A8A8A8"
                                />
                                <path
                                  id="Fill 4"
                                  d="M8.99401 14.1878C8.84873 14.1923 8.7072 14.2314 8.5799 14.3012L5.25054 16.0404C4.84317 16.2348 4.35567 16.0839 4.12728 15.6943C4.04266 15.5352 4.01195 15.3528 4.04041 15.1741L4.70538 11.4774C4.75031 11.2086 4.66045 10.9354 4.465 10.7463L1.74595 8.11386C1.4232 7.79785 1.41721 7.27917 1.73322 6.95566C1.73772 6.95115 1.74146 6.9474 1.74595 6.94365C1.87475 6.81604 2.041 6.73197 2.21997 6.7057L5.97392 6.15325C6.24575 6.11872 6.48164 5.94908 6.60145 5.70288L8.23318 2.29734C8.38819 2.02261 8.68549 1.85898 9 1.87624C8.99401 2.09918 8.99401 14.0362 8.99401 14.1878"
                                  fill="#A8A8A8"
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                        <p className="m-0 ff_inter fs_lg fw_medium transition300 pt-1">
                          Favorites
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-lg-4 px-2 pt-xl-5 pt-lg-4 pt-3">
                    <h3 className=" ff_inter fs_md fw-semibold text-black">
                      MY PROFILE
                    </h3>
                    <div className="pt-4 d-flex flex-column gap-xl-4 gap-lg-3 gap-2">
                      <div className="px-3 d-flex align-items-center gap-lg-3 gap-2 hover_btn_SideNav py_14 transition300 ">
                        <span>
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
                        <p className="m-0 ff_inter fs_lg fw_medium transition300 pt-1">
                          Insight
                        </p>
                      </div>
                      <div className="px-3 d-flex align-items-center gap-lg-3 gap-2 hover_btn_SideNav py_14 transition300 ">
                        <span>
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
                        <p className="m-0 ff_inter fs_lg fw_medium transition300 pt-1">
                          Wallet
                        </p>
                      </div>
                      <div className="px-3 d-flex align-items-center gap-lg-3 gap-2 hover_btn_SideNav py_14 transition300 ">
                        <span>
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
                        <p className="m-0 ff_inter fs_lg fw_medium transition300 pt-1">
                          Profile
                        </p>
                      </div>
                      <div className="px-3 d-flex align-items-center gap-lg-3 gap-2 hover_btn_SideNav py_14 transition300 ">
                        <span>
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
                        <p
                          id="settings"
                          className="m-0 ff_inter fs_lg fw_medium transition300 pt-1"
                        >
                          Setting
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" px-2 pt-xl-5">
                    <div className="px-3 d-flex align-items-center gap-lg-3 gap-2 hover_btn_SideNav py_14 transition300 ">
                      <span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Iconly/Bulk/Logout">
                            <g id="Logout">
                              <path
                                id="Fill 1"
                                opacity="0.4"
                                d="M1.5 4.83525C1.5 2.997 3.02268 1.5 4.8934 1.5H8.61423C10.4811 1.5 12 2.9925 12 4.82775V13.1648C12 15.0037 10.4773 16.5 8.60584 16.5H4.88653C3.01886 16.5 1.5 15.0075 1.5 13.1722V12.4672V4.83525Z"
                                fill="#A8A8A8"
                              />
                              <path
                                id="Fill 3"
                                d="M16.3339 8.59104L14.1996 6.40929C13.979 6.18429 13.624 6.18429 13.4041 6.41079C13.185 6.63729 13.1857 7.00254 13.4056 7.22754L14.575 8.42229H13.4538H7.16107C6.85063 8.42229 6.59863 8.68104 6.59863 8.99979C6.59863 9.31929 6.85063 9.57729 7.16107 9.57729H14.575L13.4056 10.772C13.1857 10.997 13.185 11.3623 13.4041 11.5888C13.5144 11.702 13.6583 11.759 13.803 11.759C13.9461 11.759 14.09 11.702 14.1996 11.5903L16.3339 9.40929C16.4398 9.30054 16.4997 9.15354 16.4997 8.99979C16.4997 8.84679 16.4398 8.69979 16.3339 8.59104Z"
                                fill="#A8A8A8"
                              />
                            </g>
                          </g>
                        </svg>
                      </span>
                      <p className="m-0 ff_inter fs_lg fw_medium transition300 pt-1">
                        Log out
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              {" "}
              <Try />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
