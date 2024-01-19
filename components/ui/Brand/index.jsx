import Link from "next/link";

const Brand = () => (
    <Link href="/">
        <img
            src="/TCD Logo.png"
            width={120}
            // height={30}
            className="scale-75 sm:scale-100"
            alt="TCD logo"
        />
    </Link>
)
export default Brand