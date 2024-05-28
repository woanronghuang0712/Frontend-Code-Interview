import {useState} from 'react';
import Link from 'next/link'

function NavButton({children,url}){
	return(<Link href={url}>
		<button className="p-2 w-full hover:bg-opacity-70 hover:bg-gray-100 bg-opacity-90">
			
		{children}
		
		</button>
		</Link>
		)
}

export function Sidebar(){
	const [showNav,setShowNav] = useState(false)
	function onClick(){
		setShowNav(!showNav)
	}
	return(
<div className="relative">
  <button className="text-2xl m-2 fixed top-3 left-3 z-20" onClick={onClick}>
    {showNav ? "x" : "≣"}
  </button>
  <div
    className={`fixed top-0 left-0 w-1/5 h-full p-4 transition-transform duration-300 ease-in-out transform ${
      showNav ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"
    } bg-white bg-opacity-90 z-10`}
  >
    <div className="flex flex-col mt-10">
      <NavButton url="/">Home</NavButton>
      <NavButton url="/find-the-cheese">Find the Cheese</NavButton>
    </div>
  </div>
</div>

		)
}