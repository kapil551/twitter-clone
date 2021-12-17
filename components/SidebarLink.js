    // access props using destructuring
function SidebarLink({ Icon, text, active }) {
    return (

        /* creating my own custom class named "hoverAnimation" */
        <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation
                            ${active && "font-bold"}`}>
            
            <Icon className="h-7" />
            <span className="hidden xl:inline" > { text } </span>
            
        </div>
    )
}

export default SidebarLink;
