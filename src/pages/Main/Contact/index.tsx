import Tittle from "../../../components/Tittle";
import "./styles.css";

export default function Contact() {
  return (
    <main>
      <section className="pf-container">
        <Tittle text={"CONTATO"} />
        <div className="pf-contact-container">
          <a id="email" className="pf-contact-card" href="mailto:rudersonvf@gmail.com?subject=Contato via portfolio" target="_blanck">
            <svg viewBox="287.118 45.507 100 100" x="0px" y="0px">
              <path
                d="M 20 0 C 8.9199922 0 0 8.9199922 0 20 L 0 80 C 0 91.080006 8.9199922 100 20 100 L 80 100 C 91.080006 100 100 91.080006 100 80 L 100 20 C 100 8.9199922 91.080006 0 80 0 L 20 0 z M 18.626953 21.095703 L 81.373047 21.095703 C 85.014567 21.095703 88.054688 24.137775 88.054688 27.779297 L 88.054688 72.222656 C 88.054688 75.864178 85.014567 78.904297 81.373047 78.904297 L 18.626953 78.904297 C 14.985434 78.904297 11.945312 75.864178 11.945312 72.222656 L 11.945312 27.779297 C 11.945314 24.137775 14.985434 21.095703 18.626953 21.095703 z M 22.652344 28.095703 L 50.003906 56.40625 L 77.478516 28.095703 L 22.652344 28.095703 z M 18.945312 31.455078 L 18.945312 67.894531 L 36.851562 49.988281 L 18.945312 31.455078 z M 81.054688 31.589844 L 63.050781 50.140625 L 81.054688 68.144531 L 81.054688 31.589844 z M 40.326172 53.583984 L 22.005859 71.904297 L 77.744141 71.904297 L 59.568359 53.728516 L 51.794922 61.740234 A 2.500251 2.500251 0 0 1 48.201172 61.736328 L 40.326172 53.583984 z "
                id="rect4208"
                transform="matrix(1, 0, 0, 1, 287.117706, 45.507145)"
              ></path>
            </svg>
            <span>Email</span>
          </a>
          <a id="whatsapp" className="pf-contact-card" href="https://api.whatsapp.com/send?phone=5544991057251&text=Ol%C3%A1%2C%20vamos%20marcar%20uma%20call%20%3F" target="_blanck">
            <svg viewBox="-8.397 14.118 512 512.001" x="0px" y="0px">
              <path d="M 373.555 14.118 C 376.628 14.118 382.771 14.118 387.379 14.63 C 398.643 14.63 413.491 15.654 420.147 17.19 C 430.387 19.238 440.115 22.31 447.795 26.406 C 457.523 31.014 465.715 37.158 473.395 44.838 C 480.563 52.006 486.707 60.198 491.315 69.926 C 495.411 77.606 498.483 87.334 500.531 97.574 C 502.067 104.23 503.091 119.078 503.603 130.342 L 503.603 396.071 C 503.603 399.143 503.603 405.287 503.091 409.895 C 503.091 421.159 502.067 436.007 500.531 442.663 C 498.483 452.903 495.411 462.631 491.315 470.311 C 486.707 480.039 480.563 488.231 472.883 495.911 C 465.715 503.079 457.523 509.223 447.795 513.831 C 440.115 517.927 430.387 520.999 420.147 523.047 C 413.491 524.583 398.643 525.607 387.379 526.119 L 121.651 526.119 C 118.579 526.119 112.435 526.119 107.827 525.607 C 96.563 525.607 81.715 524.583 75.059 523.047 C 64.819 520.999 55.091 517.927 47.411 513.831 C 37.683 509.223 29.491 503.079 21.811 495.399 C 14.643 488.231 8.499 480.039 3.891 470.311 C -0.205 462.631 -3.277 452.903 -5.325 442.663 C -6.861 436.007 -7.885 421.159 -8.397 409.895 L -8.397 144.166 C -8.397 141.094 -8.397 134.95 -7.885 130.342 C -7.885 119.078 -6.861 104.23 -5.325 97.574 C -3.277 87.334 -0.205 77.606 3.891 69.926 C 8.499 60.198 14.643 52.006 22.323 44.326 C 29.491 37.158 37.683 31.014 47.411 26.406 C 55.091 22.31 64.819 19.238 75.059 17.19 C 81.715 15.654 96.562 14.63 107.827 14.118 L 373.555 14.118 L 373.555 14.118 Z M 382.251 136.681 C 347.794 102.195 301.97 83.194 253.148 83.174 C 152.553 83.174 70.68 165.015 70.64 265.611 C 70.627 297.767 79.03 329.157 95.001 356.823 L 69.109 451.368 L 165.859 425.998 C 192.516 440.533 222.529 448.192 253.075 448.205 L 253.15 448.205 C 353.736 448.205 435.615 366.353 435.656 265.757 C 435.675 217.006 416.71 171.167 382.251 136.681 L 382.251 136.681 Z M 253.149 417.39 L 253.088 417.39 C 225.868 417.379 199.171 410.07 175.881 396.253 L 170.342 392.966 L 112.929 408.022 L 128.254 352.063 L 124.646 346.327 C 109.462 322.182 101.443 294.276 101.454 265.623 C 101.487 182.012 169.537 113.988 253.21 113.988 C 293.727 114.004 331.813 129.799 360.453 158.462 C 389.093 187.125 404.857 225.226 404.842 265.745 C 404.807 349.362 336.759 417.39 253.149 417.39 L 253.149 417.39 Z M 336.356 303.817 C 331.796 301.535 309.376 290.506 305.195 288.985 C 301.015 287.464 297.976 286.703 294.936 291.267 C 291.895 295.831 283.156 306.099 280.496 309.142 C 277.836 312.184 275.176 312.565 270.616 310.282 C 266.055 308.001 251.362 303.187 233.944 287.655 C 220.388 275.568 211.235 260.638 208.575 256.074 C 205.915 251.51 208.292 249.043 210.575 246.77 C 212.626 244.729 215.135 241.446 217.415 238.784 C 219.695 236.122 220.455 234.22 221.975 231.178 C 223.495 228.136 222.735 225.473 221.595 223.191 C 220.455 220.909 211.335 198.471 207.535 189.343 C 203.834 180.454 200.074 181.657 197.275 181.517 C 194.618 181.385 191.575 181.357 188.535 181.357 C 185.494 181.357 180.555 182.498 176.374 187.061 C 172.194 191.625 160.414 202.655 160.414 225.093 C 160.414 247.531 176.754 269.209 179.034 272.252 C 181.315 275.295 211.191 321.341 256.936 341.088 C 267.816 345.785 276.31 348.589 282.933 350.691 C 293.857 354.16 303.799 353.671 311.656 352.497 C 320.417 351.188 338.636 341.468 342.437 330.82 C 346.236 320.171 346.236 311.043 345.096 309.142 C 343.957 307.24 340.917 306.099 336.356 303.817 Z"></path>
            </svg>
            <span>WhatsApp</span>
          </a>
          <a id="linkedin" className="pf-contact-card" href="https://www.linkedin.com/in/rudersonvf" target="_blanck">
            <svg x="0px" y="0px" viewBox="-115.998 -87.396 512 512">
              <path
                d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"
                transform="matrix(1, 0, 0, 1, -115.998314, -87.396156)"
              ></path>
            </svg>
            <span>Linkedin</span>
          </a>
          <a id="instagram" className="pf-contact-card" href="https://www.instagram.com/rudersonvf" target="_blanck">
            <svg viewBox="67.31 -176.17 448 448" x="0px" y="0px">
              <path
                d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
                transform="matrix(1, 0, 0, 1, 67.310066, -208.170181)"
              ></path>
            </svg>
            <span>Instagram</span>
          </a>
          <a id="github" className="pf-contact-card" href="https://github.com/Rudersonvf" target="_blanck">
            <svg viewBox="-40.961 79.095 448 448" x="0px" y="0px">
              <path
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
                transform="matrix(1, 0, 0, 1, -40.961117, 47.095123)"
              ></path>
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </section>
    </main>
  );
}
