import Banner from "../banner/Banner";
import CardService from "../card-service/CardService";
import Service from "../service/Service";


const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <CardService></CardService>
           <Service></Service>
        </div>
    );
};

export default Home;