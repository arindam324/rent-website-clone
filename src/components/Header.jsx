const Header = () => {
    return (
        <header className="h-16 fixed w-full  px-20 bg-white shadow-lg flex items-center ">
            <div className={"max-w-[1028px] mx-auto flex w-full items-center justify-between "}>
                <div>
                    <h2 className="text-2xl font-bold">Logo</h2>
                </div>

                <nav className="space-x-10">
                    <a href="#">About</a>
                    <a href="#">Pricing & Services</a>
                    <button className="bg-green-600 px-8 py-2 rounded-md text-white">Add Listing</button>
                    <a href="#">Sign In</a>
                </nav>
            </div>
        </header>
    )
}


export default Header