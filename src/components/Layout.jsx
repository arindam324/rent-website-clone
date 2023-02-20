import Header from "./Header"

const Layout = ({children}) => {
    return (
        <main className="flex flex-col min-h-screen bg-gray-100">
            <Header/>
            <div className="max-w-[1028px] w-full mx-auto pt-20">
                {children}
            </div>
        </main>
    )
}


export default Layout