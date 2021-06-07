import { useLocation, useParams } from "react-router";
import Form from "../Form/Form";

export default function FormUpdate(){
    // const params = useParams();
    // console.log(params);
    //TODO: why doesn't work useParams???
    const location = useLocation();
    const id = location.hash.replace("#/update/", "");
    // console.log("update");
    // console.log(params);
    // console.log("location");
    // console.log(location);
    return <Form id={id} />
}