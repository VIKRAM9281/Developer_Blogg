import Header from "../components/Header"
import Welcome from "../subcomponents/WelcomePage"
const Home = () => {
    return (
        <>
            <section><Header /></section>
            <section><Welcome/></section>
            <section>
                <div className="container">
                </div>
            </section>
        </>
    )
}
export default Home