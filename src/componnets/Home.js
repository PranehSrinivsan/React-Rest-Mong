import Head from './Head'
import Cities from './Cities';
function Home() {
    return (
        <>
            <Head />
            <div className="cities.container">
                <Cities />
            </div>
        </>
    );
}

export default Home;