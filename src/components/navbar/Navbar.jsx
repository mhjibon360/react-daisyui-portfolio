import React from "react";
import { navLinks } from "../../assets";
import { motion } from "motion/react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <header className=" sticky top-0 z-50 py-4 backdrop-blur-sm">
      <div className="navbar  container mx-auto border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map(({ id, label, link, delay }) => (
                <motion.li
                  key={id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: delay }}
                >
                  <Link
                    className="capitalize hover:bg-transparent"
                    to={link}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={200}
                    isDynamic={true}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <a
            href="#" arial-label='social media link'
            className="text-xl font-semibold hover:text-darkblue duration-500"
          >
            John Doe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
            {navLinks.map(({ id, label, link, delay }) => (
              <motion.li
                key={id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: delay }}
              >
                <Link
                  className="capitalize hover:bg-transparent"
                  to={link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 gapy-1 md:gap-4">
            <li>
              <a className="hover:bg-transparent capitalize" href="#" arial-label='social media link'>
                <svg
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_39)">
                    <path
                      d="M7.33281 0.0325928C11.3828 0.0325928 14.6656 3.38789 14.6656 7.52642C14.6656 11.6651 11.3825 15.02 7.33281 15.02C3.28331 15.02 0 11.6651 0 7.52642C0 3.38799 3.28301 0.0325928 7.33281 0.0325928ZM19.043 0.471526C21.0679 0.471526 22.7095 3.62983 22.7095 7.52642H22.7098C22.7098 11.4221 21.0682 14.5813 19.0434 14.5813C17.0185 14.5813 15.3769 11.4221 15.3769 7.52642C15.3769 3.63086 17.0181 0.471526 19.0431 0.471526H19.043ZM24.7105 1.20642C25.4225 1.20642 26 4.03598 26 7.52652C26 11.0159 25.4227 13.8466 24.7105 13.8466C23.9982 13.8466 23.4212 11.0168 23.4212 7.52652C23.4212 4.03619 23.9985 1.20642 24.7105 1.20642Z"
                      fill="#03045E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_39">
                      <rect width="26" height="15.0526" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent capitalize" href="#" arial-label='social media link'>
                <svg
                  width="26"
                  height="17"
                  viewBox="0 0 26 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_24)">
                    <path
                      d="M7.70193 0C8.48097 0 9.19121 0.067562 9.83278 0.202942C10.4744 0.338194 11.0242 0.560074 11.4824 0.867814C11.9406 1.17594 12.2958 1.58553 12.5478 2.0966C12.7999 2.60766 12.9259 3.23875 12.9259 3.99013C12.9259 4.80177 12.7388 5.47803 12.3646 6.01891C11.9902 6.55991 11.4366 7.00316 10.7035 7.34891C11.7116 7.63451 12.4638 8.13444 12.9604 8.84794C13.4564 9.56195 13.7052 10.4225 13.7052 11.4291C13.7052 12.2406 13.5449 12.9434 13.2239 13.5371C12.9033 14.131 12.4715 14.6155 11.9296 14.9907C11.3872 15.3667 10.7685 15.6444 10.0736 15.8251C9.3744 16.0058 8.65431 16.0967 7.93135 16.0954H0.003479V0H7.70193ZM7.24374 6.515C7.88531 6.515 8.41217 6.36478 8.82471 6.06408C9.23712 5.76363 9.44326 5.27508 9.44326 4.59882C9.44326 4.22327 9.37459 3.91501 9.23712 3.67458C9.09965 3.43427 8.9164 3.24605 8.68724 3.11105C8.45808 2.97567 8.19459 2.88213 7.89676 2.82916C7.59042 2.77594 7.27988 2.74956 6.9688 2.75034H3.60072V6.51513H7.24374V6.515ZM7.44988 13.3452C7.80103 13.3452 8.13723 13.3113 8.45795 13.2437C8.77867 13.176 9.06115 13.0633 9.30579 12.9054C9.54991 12.7479 9.74473 12.5335 9.89001 12.2629C10.035 11.9925 10.1076 11.6469 10.1076 11.2259C10.1076 10.3997 9.87063 9.8098 9.39735 9.45651C8.92368 9.10334 8.29746 8.92663 7.51855 8.92663H3.60072V13.3449L7.44988 13.3452ZM18.2321 13.0071C18.7209 13.4734 19.4236 13.7059 20.3401 13.7059C20.9966 13.7059 21.562 13.5447 22.0354 13.2213C22.5089 12.8986 22.7992 12.5564 22.9061 12.1956H25.7701C25.312 13.5931 24.6091 14.5928 23.6622 15.1937C22.7149 15.7949 21.5692 16.0954 20.2252 16.0954C19.2935 16.0954 18.4532 15.9489 17.7049 15.6557C16.9562 15.3628 16.3222 14.9457 15.8033 14.4047C15.2839 13.8638 14.8829 13.218 14.6003 12.4662C14.3175 11.715 14.1765 10.8882 14.1765 9.98651C14.1765 9.11512 14.3213 8.3036 14.6118 7.5521C14.9017 6.80086 15.314 6.15083 15.8492 5.60202C16.3835 5.05372 17.0214 4.6216 17.7623 4.30593C18.503 3.99025 19.3241 3.83261 20.2254 3.83261C21.2336 3.83261 22.1117 4.02416 22.8604 4.4074C23.6087 4.79051 24.2236 5.30579 24.7049 5.95147C25.186 6.59779 25.5332 7.33432 25.7476 8.16055C25.9614 8.98729 26.0375 9.85126 25.9767 10.753H17.4304C17.4761 11.7897 17.743 12.5415 18.2321 13.0071ZM21.9095 6.87559C21.5201 6.45499 20.9279 6.24437 20.1339 6.24437C19.6145 6.24437 19.1831 6.331 18.8395 6.50361C18.4957 6.67674 18.2207 6.89043 18.0144 7.14609C17.8084 7.40175 17.663 7.67238 17.5792 7.9576C17.4951 8.24321 17.4454 8.49874 17.4302 8.72408H22.7228C22.5702 7.91244 22.2991 7.29644 21.9095 6.87559ZM16.8746 0.81727H23.4874V2.62123H16.8746V0.81727Z"
                      fill="#03045E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_24">
                      <rect width="26" height="16.0952" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent capitalize" href="#" arial-label='social media link'>
                <svg
                  width="26"
                  height="18"
                  viewBox="0 0 26 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_26)">
                    <path
                      d="M9.93414 17.7895C17.2106 17.7895 21.1898 11.664 21.1898 6.3522C21.1898 6.17824 21.1864 6.00507 21.1786 5.83262C21.9529 5.26334 22.6211 4.55847 23.152 3.75107C22.4431 4.07129 21.6804 4.28681 20.8802 4.38398C21.6969 3.88634 22.3239 3.09906 22.6198 2.16063C21.8432 2.62873 20.9937 2.95871 20.1078 3.13636C19.3859 2.35501 18.3581 1.86633 17.2201 1.86633C15.0355 1.86633 13.2639 3.66652 13.2639 5.88553C13.2639 6.201 13.2987 6.50776 13.3666 6.8021C10.0787 6.63399 7.16322 5.03444 5.21204 2.60222C4.86062 3.21567 4.67577 3.91287 4.67639 4.62263C4.67639 6.01725 5.37476 7.24839 6.43682 7.96867C5.8086 7.94917 5.19417 7.77675 4.64519 7.4659C4.6446 7.48278 4.6446 7.49922 4.6446 7.51725C4.6446 9.46397 6.0082 11.0894 7.81833 11.4577C7.47836 11.5517 7.12755 11.5993 6.77519 11.5991C6.52073 11.5991 6.27273 11.5737 6.03171 11.5267C6.53535 13.1238 7.99574 14.2861 9.72722 14.3186C8.37323 15.3969 6.66762 16.0392 4.81387 16.0392C4.49852 16.0395 4.18343 16.0209 3.87024 15.9835C5.62103 17.1238 7.69993 17.7892 9.93434 17.7892"
                      fill="#03045E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_26">
                      <rect width="26" height="17.7895" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
