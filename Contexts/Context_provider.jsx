import { useContext, useState } from "react";
import AuthContext from "./Auth_context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebaseConfig";


const Context_provider = ({ children }) => {

    const [user, Setuser] = useState(null);
    const [loading, setLoading] = useState(true);


    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        user,
        loading,
        creatUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context_provider;