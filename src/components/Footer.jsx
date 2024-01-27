const Footer = () => {
    return (
        <footer className="pt-10 p-3 md:p-10 bg-white flex flex-col md:flex-row justify-center">
            <section className="flex-1">
                <h1 className="text-blue-600 text-2xl font-bold mr-20 mb-5">MORENT</h1>
                <p className="text-sm w-72 text-gray-500">Our vision is to provide convenience and help increase your sales business.</p>
            </section>
            <section className="flex-1 mt-8 grid grid-cols-12 gap-y-8 gap-x-5 justify-between items-center">
                <div className="flex flex-col col-span-6 md:col-span-4 mr-2">
                    <h3 className="font-bold text-lg mb-6">About</h3>
                    <a className="text-sm text-gray-500 mb-3">How it works</a>
                    <a className="text-sm text-gray-500 mb-3">Featured</a>
                    <a className="text-sm text-gray-500 mb-3">Partnership</a>
                    <a className="text-sm text-gray-500 mb-3">Bussiness</a>
                </div>
                <div className="flex flex-col col-span-6 md:col-span-4">
                    <h3 className="font-bold text-lg mb-6">Community</h3>
                    <a className="text-sm text-gray-500 mb-3">Events</a>
                    <a className="text-sm text-gray-500 mb-3">Blog</a>
                    <a className="text-sm text-gray-500 mb-3">Podcast</a>
                    <a className="text-sm text-gray-500 mb-3">Invite</a>
                </div>
                <div className="flex flex-col col-span-6 md:col-span-4">
                    <h3 className="font-bold text-lg mb-6">Socials</h3>
                    <a className="text-sm text-gray-500 mb-3">Discord</a>
                    <a className="text-sm text-gray-500 mb-3">Instagram</a>
                    <a className="text-sm text-gray-500 mb-3">Twitter</a>
                    <a className="text-sm text-gray-500 mb-3">Facebook</a>
                </div>
            </section>
        </footer>
    );
}
 
export default Footer;