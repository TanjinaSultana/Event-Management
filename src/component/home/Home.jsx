import Banner from "../banner/Banner";
import CardService from "../card-service/CardService";
import PlanningService from "../planningService/PlanningService";
import Service from "../service/Service";


const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <CardService></CardService>
           <Service></Service>
           <PlanningService></PlanningService>
        </div>
    );
};

export default Home;