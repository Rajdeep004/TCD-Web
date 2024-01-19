import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-primary text-3xl font-semibold sm:text-4xl">
                    Get started with TCD today
                </h2>
                <p className="mt-3 text-gray-800">
                    Hire experts to create your next idea, follow best practices, remove roadblocks, and delivery on schedule.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-primary hover:bg-secondary active:bg-secondary"
                >
                    Start building
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA