import Image from 'next/image'
import Lottie from "lottie-react";
import { Linkedin, Github, Twitter } from "../components/icons";

import style from '../styles/home.module.scss'
import Waitlist from "../components/waitlist";
import flagAnimation from '../public/flag.json'


function Content() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <ContentLogo/>
      <div
        className="text-white text-opacity-75 text-lg leading-6"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-anchor="body"
      >
          Where art meets artificial intelligence
      </div>
      <div
        className="flex items-center gap-3"
        data-aos="fade-up"
        data-aos-delay={800}
        data-aos-anchor="body"
      >
        <ContentSocial/>
      </div>
    </div>
  )
}
function ContentLogo() {
  return (
    <div className="flex flex-col items-center gap-1 pointer-events-none select-none" data-aos="fade-up" data-aos-anchor="body">

        <div id="atom">
            <div className="App">
                <svg width="70" height="70">
                    <circle
                        cx={32}
                        cy={32}
                        r={4}
                        style={{
                            fill: "#ea4747",
                        }}
                    />
                    <path
                        d="M43 32a72.869 72.869 0 0 1-1.33 14.07c-.13.67-.28 1.32-.43 1.95C39.26 56.36 35.82 62 32 62c-5.18 0-9.67-10.39-10.75-23.79-.07-.84-.12-1.69-.16-2.55Q21 33.86 21 32a73.316 73.316 0 0 1 1.32-14.07c.63.19 1.26.39 1.91.61A71.947 71.947 0 0 0 23 32c0 1.77.06 3.47.16 5.1q.09 1.29.21 2.52C24.64 52.27 28.91 60 32 60c2.39 0 5.48-4.62 7.35-12.57.15-.63.29-1.29.42-1.97A70.124 70.124 0 0 0 41 32c0-1.77-.06-3.47-.16-5.1q-.09-1.29-.21-2.52C39.36 11.73 35.09 4 32 4h-1V2h1c5.18 0 9.67 10.39 10.75 23.79.07.85.12 1.7.16 2.57.06 1.2.09 2.41.09 3.64Z"
                        style={{
                            fill: "#538723",
                        }}
                    />
                    <path
                        d="m18.5 47.122-.44-1.951.975-.22A65.059 65.059 0 0 0 36.5 37.8a62 62 0 0 0 16.022-12.79c3.272-3.869 4.7-7.319 3.727-9s-4.673-2.174-9.661-1.275A62.019 62.019 0 0 0 27.5 22.212C12.7 30.758 5.917 40.828 7.751 44.006l.5.866-1.732 1-.5-.866c-2.981-5.164 6.4-16.4 20.481-24.527a64.051 64.051 0 0 1 19.734-7.716c6.1-1.1 10.276-.3 11.747 2.243s.074 6.558-3.931 11.295A64.036 64.036 0 0 1 37.5 39.532 67.062 67.062 0 0 1 19.473 46.9Z"
                        style={{
                            fill: "#4dbdef",
                        }}
                    />
                    <path
                        d="M40 35.655q2.087-1.356 4-2.793v2.48Q42.1 36.709 40.044 38Z"
                        style={{
                            fill: "#4dbdef",
                        }}
                    />
                    <path
                        d="M24.66 16.57c-.16.64-.3 1.3-.43 1.97-.65-.22-1.28-.42-1.91-.61.13-.67.27-1.32.43-1.96.63.18 1.27.39 1.91.6Z"
                        style={{
                            fill: "#538723",
                        }}
                    />
                    <path
                        d="M36.5 24.21a71.823 71.823 0 0 0-12.27-5.67c.13-.67.27-1.33.43-1.97a72.612 72.612 0 0 1 12.84 5.9c1.06.61 2.11 1.25 3.13 1.91.72.46 1.43.93 2.12 1.41A61.7 61.7 0 0 1 52.9 34.4l.67.74-1.47 1.35-.67-.73a56.692 56.692 0 0 0-8.52-7.4c-.67-.5-1.36-.98-2.07-1.46q-2.1-1.395-4.34-2.69Z"
                        style={{
                            fill: "#ffc200",
                        }}
                    />
                    <path
                        d="m58.48 46.13-.5.87c-1.04 1.8-3.43 2.73-6.89 2.73a27.086 27.086 0 0 1-4.86-.49 45.135 45.135 0 0 1-4.99-1.22c-.62-.18-1.25-.38-1.89-.59a72.692 72.692 0 0 1-12.85-5.9c-1.07-.62-2.12-1.26-3.13-1.91-.72-.46-1.43-.93-2.12-1.41C10.18 30.57 3.43 21.49 6.02 17c1.47-2.55 5.64-3.34 11.75-2.24a44.335 44.335 0 0 1 4.98 1.21c-.16.64-.3 1.29-.43 1.96a42.6 42.6 0 0 0-4.91-1.2c-4.98-.9-8.69-.42-9.66 1.27-1.54 2.68 3.02 10.24 13.34 17.66q.99.72 2.07 1.44 2.04 1.35 4.34 2.69a71.823 71.823 0 0 0 12.27 5.67c.64.21 1.28.42 1.9.61a42.252 42.252 0 0 0 4.92 1.2c4.98.9 8.69.42 9.66-1.27l.5-.87Z"
                        style={{
                            fill: "#ffc200",
                        }}
                    />
                    <path
                        d="M24.66 16.57c-.64-.21-1.28-.42-1.91-.6.26-1.14.56-2.23.88-3.27l.3-.95 1.91.59-.3.96c-.32 1.04-.62 2.13-.88 3.27Z"
                        style={{
                            fill: "#31a469",
                        }}
                    />
                    <circle
                        cx={12.784}
                        cy={46.722}
                        r={2}
                        style={{
                            fill: "#2f9bcc",
                        }}
                    />
                    <circle
                        cx={56.085}
                        cy={40.284}
                        r={2}
                        style={{
                            fill: "#e6af00",
                        }}
                    />
                    <circle
                        cx={27.132}
                        cy={7}
                        r={2}
                        style={{
                            fill: "#355a15",
                        }}
                    />
                    <path
                        d="M21.529 41q-.165-1.369-.279-2.79c-.07-.84-.12-1.69-.16-2.55q-.016-.328-.03-.66h2q.04 1.068.1 2.1.09 1.29.21 2.52.07.7.153 1.38Z"
                        style={{
                            fill: "#538723",
                        }}
                    />
                    <path
                        d="M46 31.3q1.588-1.29 3-2.612L50.523 30A62.255 62.255 0 0 1 46 33.851ZM33 41.939a72.518 72.518 0 0 1-6 2.636 54.681 54.681 0 0 1-7.527 2.325l-.976.22-.44-1.951.975-.22A53.688 53.688 0 0 0 27 42.428c1.982-.79 4-1.7 6-2.726Z"
                        style={{
                            fill: "#4dbdef",
                        }}
                    />
                    <path
                        d="M39.452 17a46.246 46.246 0 0 0-1.087-4h2.071a50.83 50.83 0 0 1 1.037 4ZM21.16 27c.109-1.7.273-3.373.489-5h2.014a71.82 71.82 0 0 0-.5 5Z"
                        style={{
                            fill: "#538723",
                        }}
                    />
                </svg>

            </div>
        </div>


      <svg width="342" height="58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M41.128,48.288c0,0.368-0.276,0.552-0.69,0.552l-4.186,0c-0.828,0-1.38-0.23-1.794-0.92l-6.624-10.81l-3.542,0l0,10.58c0,0.69-0.276,1.15-1.058,1.15l-3.772,0c-0.782,0-1.104-0.368-1.104-1.15l0-29.348c0-1.012,0.23-1.334,1.242-1.334l6.808,0c4.002,0,8.234,0.598,10.672,3.404c1.472,1.702,2.208,3.956,2.208,6.44c0,4.232-2.254,7.544-5.934,9.154l7.544,11.638c0.138,0.23,0.23,0.46,0.23,0.644z M33.262,26.944c0-4.002-2.668-5.428-6.67-5.428l-2.3,0l0,11.132l2.852,0c3.68,0,6.118-1.978,6.118-5.704z M67.371,37.616c0,1.104-0.368,1.334-1.518,1.334l-13.478,0c0.368,3.542,2.944,5.98,6.578,5.98c1.932,0,3.956-0.46,5.658-1.104c0.184-0.046,0.322-0.138,0.506-0.138c0.322,0,0.552,0.184,0.644,0.552l0.644,2.346c0.046,0.23,0.092,0.414,0.092,0.552c0,0.322-0.184,0.552-0.736,0.782c-2.254,1.012-5.336,1.472-7.728,1.472c-7.222,0-11.5-4.6-11.5-11.776c0-6.9,4.554-11.684,11.408-11.684c2.806,0,5.106,1.058,6.716,2.76c2.116,2.208,2.714,5.106,2.714,8.234l0,0.69z M61.897,35.316l0-0.506c-0.092-2.392-1.472-4.6-4.278-4.6c-2.99,0-4.784,2.392-5.152,5.106l9.43,0z M95.96,47.966c0,0.552-0.368,0.874-0.92,0.874l-2.208,0c-2.392,0-3.45-1.15-3.772-2.714l-0.092,0c-1.15,1.702-4.14,3.266-6.67,3.266c-6.486,0-9.43-5.336-9.43-11.316c0-7.958,4.784-12.144,9.936-12.144c2.438,0,4.738,1.104,5.888,2.668l0.092-1.242c0.046-0.506,0.414-0.828,0.966-0.828l3.22,0c0.598,0,0.966,0.322,0.966,1.012l0,15.962c0,0.644,0.092,1.104,0.276,1.334c0.138,0.138,0.322,0.184,0.552,0.184l0.368,0c0.552,0,0.828,0.184,0.828,0.782l0,2.162z M88.37,41.71l0-8.878c-0.92-1.334-2.806-2.346-4.554-2.346c-2.806,0-5.198,2.392-5.198,7.222c0,3.864,1.472,7.13,4.876,7.13c2.254,0,4.186-1.702,4.876-3.128z M119.489,47.276c0,0.368-0.23,0.552-0.644,0.736c-2.208,1.012-4.232,1.38-6.67,1.38c-7.084,0-10.994-4.416-10.994-11.5c0-7.13,4.278-11.96,11.408-11.96c2.07,0,4.232,0.414,6.164,1.288c0.368,0.184,0.552,0.276,0.552,0.644c0,0.138-0.046,0.414-0.092,0.552l-0.598,2.438c-0.092,0.414-0.276,0.644-0.552,0.644c-0.138,0-0.322-0.092-0.506-0.184c-1.334-0.552-2.806-1.012-4.416-1.012c-3.956,0-6.21,2.806-6.21,7.314c0,4.416,2.024,7.452,5.98,7.452c1.978,0,3.22-0.368,4.83-1.012c0.138-0.046,0.322-0.138,0.46-0.138c0.276,0,0.46,0.23,0.552,0.552l0.598,2.024c0.092,0.322,0.138,0.598,0.138,0.782z M139.89,47.46c0,0.46-0.23,0.69-0.69,0.874c-1.426,0.598-3.312,1.058-5.152,1.058c-2.346,0-4.37-0.598-5.52-1.932c-1.426-1.61-1.472-3.496-1.472-6.854l0-10.258l-2.162,0c-0.874,0-1.012-0.184-1.012-1.15l0-1.748c0-0.552,0.276-0.92,0.828-0.92l2.346,0l0-5.014c0-0.782,0.414-1.012,1.15-1.104l3.312-0.414l0.23,0c0.598,0,0.874,0.322,0.874,1.012l0,5.52l5.198,0c0.552,0,0.874,0.184,0.874,0.782l0,2.162c0,0.552-0.368,0.874-0.92,0.874l-5.152,0l0,10.534c0,1.38,0.092,2.392,0.598,3.128c0.414,0.598,1.058,0.966,2.162,0.966c1.15,0,2.116-0.276,2.944-0.552c0.184-0.046,0.322-0.092,0.46-0.092c0.322,0,0.506,0.184,0.598,0.552l0.46,2.3c0.046,0.138,0.046,0.184,0.046,0.276z M172.527,48.104c0,0.46-0.23,0.736-0.828,0.736l-4.094,0c-0.966,0-1.288-0.368-1.564-1.104l-2.392-6.762l-11.638,0l-2.392,6.9c-0.184,0.598-0.506,0.966-1.242,0.966l-4.094,0c-0.46,0-0.644-0.23-0.644-0.598c0-0.138,0-0.322,0.092-0.506l11.224-29.808c0.23-0.552,0.552-0.92,1.242-0.92l3.68,0c0.69,0,1.104,0.322,1.288,0.828l11.27,29.67c0.092,0.23,0.092,0.414,0.092,0.598z M162.085,36.512l-3.266-9.706c-0.414-1.288-0.69-2.254-0.92-2.99l-0.092,0c-0.23,0.782-0.506,1.748-0.966,3.036l-3.266,9.66l8.51,0z M192.422,47.46c0,0.46-0.23,0.69-0.69,0.874c-1.426,0.598-3.312,1.058-5.152,1.058c-2.346,0-4.37-0.598-5.52-1.932c-1.426-1.61-1.472-3.496-1.472-6.854l0-10.258l-2.162,0c-0.874,0-1.012-0.184-1.012-1.15l0-1.748c0-0.552,0.276-0.92,0.828-0.92l2.346,0l0-5.014c0-0.782,0.414-1.012,1.15-1.104l3.312-0.414l0.23,0c0.598,0,0.874,0.322,0.874,1.012l0,5.52l5.198,0c0.552,0,0.874,0.184,0.874,0.782l0,2.162c0,0.552-0.368,0.874-0.92,0.874l-5.152,0l0,10.534c0,1.38,0.092,2.392,0.598,3.128c0.414,0.598,1.058,0.966,2.162,0.966c1.15,0,2.116-0.276,2.944-0.552c0.184-0.046,0.322-0.092,0.46-0.092c0.322,0,0.506,0.184,0.598,0.552l0.46,2.3c0.046,0.138,0.046,0.184,0.046,0.276z M219.585,37.662c0,6.624-4.048,11.73-11.224,11.73c-7.498,0-10.948-5.06-10.948-11.776c0-6.624,4.048-11.684,11.224-11.684c7.498,0,10.948,4.968,10.948,11.73z M213.835,37.662c0-3.772-1.196-7.36-5.244-7.36c-4.094,0-5.428,3.542-5.428,7.222c0,3.772,1.15,7.498,5.244,7.498c4.048,0,5.428-3.588,5.428-7.36z M260.088,47.69c0,0.828-0.322,1.15-1.104,1.15l-3.22,0c-0.828,0-1.196-0.322-1.196-1.15l0-12.604c0-2.484-0.644-4.37-3.45-4.37c-1.748,0-3.772,0.92-5.198,2.07c0.092,0.414,0.184,6.578,0.184,7.222l0,7.682c0,0.828-0.322,1.15-1.104,1.15l-3.036,0c-0.828,0-1.196-0.322-1.196-1.15l0-12.604c0-2.438-0.506-4.37-3.312-4.37c-1.794,0-3.634,1.012-5.106,2.3l0,14.674c0,0.828-0.368,1.15-1.15,1.15l-3.22,0c-0.828,0-1.196-0.322-1.196-1.15l0-20.102c0-0.736,0.414-1.058,1.104-1.058l2.99,0c0.69,0,1.104,0.23,1.15,0.874l0.046,1.15c1.886-1.656,4.37-2.622,6.762-2.622c2.806,0,4.784,1.242,5.842,2.99c2.07-1.978,5.06-2.99,7.866-2.99c3.358,0,5.474,1.656,6.44,3.45c0.874,1.702,1.104,3.726,1.104,6.67l0,11.638z M274.831,20.688c0,1.794-1.564,2.898-3.082,2.898s-3.128-1.012-3.128-2.852s1.518-2.944,3.128-2.944c1.564,0,3.082,1.058,3.082,2.898z M274.555,47.69c0,0.828-0.368,1.15-1.15,1.15l-3.22,0c-0.828,0-1.196-0.322-1.196-1.15l0-20.102c0-0.782,0.46-1.058,1.196-1.058l3.22,0c0.736,0,1.15,0.23,1.15,1.058l0,20.102z M300.154,47.276c0,0.368-0.23,0.552-0.644,0.736c-2.208,1.012-4.232,1.38-6.67,1.38c-7.084,0-10.994-4.416-10.994-11.5c0-7.13,4.278-11.96,11.408-11.96c2.07,0,4.232,0.414,6.164,1.288c0.368,0.184,0.552,0.276,0.552,0.644c0,0.138-0.046,0.414-0.092,0.552l-0.598,2.438c-0.092,0.414-0.276,0.644-0.552,0.644c-0.138,0-0.322-0.092-0.506-0.184c-1.334-0.552-2.806-1.012-4.416-1.012c-3.956,0-6.21,2.806-6.21,7.314c0,4.416,2.024,7.452,5.98,7.452c1.978,0,3.22-0.368,4.83-1.012c0.138-0.046,0.322-0.138,0.46-0.138c0.276,0,0.46,0.23,0.552,0.552l0.598,2.024c0.092,0.322,0.138,0.598,0.138,0.782z M321.521,42.262c0,4.83-4.186,7.13-8.878,7.13c-2.392,0-5.014-0.69-7.084-1.61c-0.414-0.184-0.552-0.46-0.552-0.736c0-0.138,0.046-0.276,0.092-0.414l0.736-2.346c0.138-0.46,0.368-0.644,0.644-0.644c0.138,0,0.276,0,0.506,0.092c2.024,0.828,4.186,1.426,5.796,1.426c2.024,0,3.404-0.92,3.404-2.438c0-1.288-0.874-1.978-2.76-2.714l-3.634-1.38c-2.622-0.966-4.738-2.99-4.738-6.118c0-4.508,4.232-6.578,8.326-6.578c2.208,0,4.37,0.368,6.67,1.38c0.368,0.184,0.552,0.368,0.552,0.644c0,0.138-0.046,0.276-0.092,0.46l-0.782,2.484c-0.092,0.322-0.322,0.506-0.644,0.506c-0.138,0-0.322-0.046-0.46-0.092c-1.518-0.598-3.496-1.104-4.968-1.104c-1.932,0-2.898,1.058-2.898,2.116c0,1.012,0.506,1.656,2.254,2.346l4.14,1.702c2.438,1.012,4.37,2.898,4.37,5.888z"/><path fill="#0095ff" d=""/>
    </svg>
    </div>
  )
}
function ContentSocial() {
  let social = [
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/georgekhananaev/',
    },
    {
      icon: Github,
      url: 'https://github.com/georgekhananaev',
    }
  ]

  return (
    <div className="flex gap-3">
      {social.map((item, index) => (
        <a
          href={item.url}
          key={index}
          target="_blank"
          rel="noreferrer"
          className="h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 bg-white bg-opacity-0 ring-1 ring-white ring-inset ring-opacity-0 hover:ring-opacity-20 hover:bg-opacity-10"
        >
          <item.icon
            width="20"
            height="20"
          />
        </a>
      ))}
    </div>
  )
}

function Creators() {
  return (
    <div
      className="flex items-center gap-3"
      data-aos="fade-up"
      data-aos-delay={1700}
      data-aos-anchor="body"
    >
      <CreatorsItem link="https://george.khananaev.com" badge="All rights reserved" name="George Khananaev"/>
    </div>
  )
}
function CreatorsItem({ name, link, badge }) {
  return (
    <div className="flex gap-1">
      <span className="hidden sm:inline text-white text-opacity-25">{badge}</span>
      <a
        className="text-white text-opacity-50 hover:text-opacity-100 transition-colors duration-200"
        href={link}
        target="_blank"
        rel="noreferrer"
      >{name}</a>
    </div>
  )
}

function Circle() {
  return (
    <div className={style.circle}>
      <div className={style.circle__inner}>
        <div className={style.circle__image}>
          <Image
            src="/circle.jpg"
            alt="Circle"
            width={1920}
            height={1920}
            loading="eager"
            draggable={false}
            unoptimized={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Circle/>
      <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden px-4 relative overflow-hidden">
        <div className="max-w-[552px] w-full flex flex-col items-center gap-[72px]">
          <Content/>
          <div className="flex flex-col items-center gap-6 w-full">
            <Waitlist/>
            <Creators/>
          </div>
        </div>
      </div>
    </>
  )
}
