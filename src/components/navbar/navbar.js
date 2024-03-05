
import { Link } from "react-router-dom";
// import Allwine from "../Sorting/All wines";
import "./navbar.css"


const Navbar=()=>{



    return(
<div id="button">

<Link style={{textDecoration:"none"}} to={"/Allwine"}>

<button class="button-49" >Allwine
<svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={40}
      viewBox="0 0 24 24"
      width={40}
      
    >
      <g>
        <rect fill="none" height={24} width={24}  />
      </g>
      <g>
        <g>
          <g>
            <path d="M3,14c0,1.3,0.84,2.4,2,2.82V20H3v2h6v-2H7v-3.18C8.16,16.4,9,15.3,9,14V6H3V14z M5,8h2v3H5V8z" />
          </g>
          <g>
            <path d="M20.63,8.54l-0.95-0.32C19.28,8.09,19,7.71,19,7.28V3c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v4.28 c0,0.43-0.28,0.81-0.68,0.95l-0.95,0.32C11.55,8.82,11,9.58,11,10.44V20c0,1.1,0.9,2,2,2h7c1.1,0,2-0.9,2-2v-9.56 C22,9.58,21.45,8.82,20.63,8.54z M16,4h1v1h-1V4z M13,10.44l0.95-0.32C15.18,9.72,16,8.57,16,7.28V7h1v0.28 c0,1.29,0.82,2.44,2.05,2.85L20,10.44V12h-7V10.44z M20,20h-7v-2h7V20z" />
          </g>
        </g>
      </g>
    </svg>
</button>
</Link>

<Link style={{textDecoration:"none"}} to={"/Brandy"}>
<button class="button-49" >Brandy
<svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={40}
      viewBox="0 0 24 24"
      width={40}
    >
      <rect fill="none" height={24} width={24} />
      <path d="M6,3l0,6c0,2.97,2.16,5.43,5,5.91V19H8v2h8v-2h-3v-4.09c2.84-0.48,5-2.94,5-5.91l0-6H6z M16,8H8l0-3h8C16,5,16,8,16,8z" />
     </svg>

</button>

</Link>

<Link style={{textDecoration:"none"}} to={"/Wine"}>
<button class="button-49" >Wine
<svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={40}
      viewBox="0 0 24 24"
      width={40}
    >
      <g>
        <rect fill="none" height={24} width={24} />
      </g>
      <g>
        <g>
          <g>
            <path d="M3,14c0,1.3,0.84,2.4,2,2.82V20H3v2h6v-2H7v-3.18C8.16,16.4,9,15.3,9,14V6H3V14z M5,8h2v3H5V8z" />
          </g>
          <g>
            <path d="M20.63,8.54l-0.95-0.32C19.28,8.09,19,7.71,19,7.28V3c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v4.28 c0,0.43-0.28,0.81-0.68,0.95l-0.95,0.32C11.55,8.82,11,9.58,11,10.44V20c0,1.1,0.9,2,2,2h7c1.1,0,2-0.9,2-2v-9.56 C22,9.58,21.45,8.82,20.63,8.54z M16,4h1v1h-1V4z M13,10.44l0.95-0.32C15.18,9.72,16,8.57,16,7.28V7h1v0.28 c0,1.29,0.82,2.44,2.05,2.85L20,10.44V12h-7V10.44z M20,20h-7v-2h7V20z" />
          </g>
        </g>
      </g>
    </svg>

</button>

</Link>

<Link style={{textDecoration:"none"}} to={"/Whiskey"}>
<button class="button-49" >Whiskey
<svg
      xmlns="http://www.w3.org/2000/svg"
      height={40}
      viewBox="0 0 24 24"
      width={40}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
    </svg>

</button>
</Link>

<Link style={{textDecoration:"none"}} to={"/Gin"}>
<button class="button-49" >Gin
<svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={40}
      viewBox="0 0 24 24"
      width={40}
    >
      <rect fill="none" height={24} width={24} />
      <path d="M6,3l0,6c0,2.97,2.16,5.43,5,5.91V19H8v2h8v-2h-3v-4.09c2.84-0.48,5-2.94,5-5.91l0-6H6z M16,8H8l0-3h8C16,5,16,8,16,8z" />
     </svg>


</button>
</Link>

<Link style={{textDecoration:"none"}} to={"/Beer"}>
<button class="button-49" >Beer
<svg
      xmlns="http://www.w3.org/2000/svg"
      height={40}
      viewBox="0 0 24 24"
      width={40}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
    </svg>

</button>

</Link>



<Link style={{textDecoration:"none"}} to={"/Liqueur"}>
<button class="button-49" >Liqueur
<svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={40}
      viewBox="0 0 24 24"
      width={40}
    >
      <g>
        <rect fill="none" height={24} width={24} />
      </g>
      <g>
        <g>
          <g>
            <path d="M3,14c0,1.3,0.84,2.4,2,2.82V20H3v2h6v-2H7v-3.18C8.16,16.4,9,15.3,9,14V6H3V14z M5,8h2v3H5V8z" />
          </g>
          <g>
            <path d="M20.63,8.54l-0.95-0.32C19.28,8.09,19,7.71,19,7.28V3c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v4.28 c0,0.43-0.28,0.81-0.68,0.95l-0.95,0.32C11.55,8.82,11,9.58,11,10.44V20c0,1.1,0.9,2,2,2h7c1.1,0,2-0.9,2-2v-9.56 C22,9.58,21.45,8.82,20.63,8.54z M16,4h1v1h-1V4z M13,10.44l0.95-0.32C15.18,9.72,16,8.57,16,7.28V7h1v0.28 c0,1.29,0.82,2.44,2.05,2.85L20,10.44V12h-7V10.44z M20,20h-7v-2h7V20z" />
          </g>
        </g>
      </g>
    </svg>

</button>
</Link>







</div>


 )
}



export default Navbar;