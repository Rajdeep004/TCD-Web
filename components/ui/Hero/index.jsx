import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-800">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-accent font-extrabold mx-auto sm:text-6xl">
                    Build and scale your next business idea faster
                </h1>
                <p className="max-w-xl mx-auto text-gray-800">
                    TCD making it simple for you to build and grow your SaaS applications, or any business idea.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-primary hover:bg-secondary active:bg-gray-900 "
                    >
                        Start building
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-accent  active:bg-gray-900 hover:text-white"
                        scroll={false}  
                    >
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero