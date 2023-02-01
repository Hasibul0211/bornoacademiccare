import initialFirebaseUse from "../../src/components/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, deleteUser, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

initialFirebaseUse();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const auth = getAuth()

    // register code 

    const userRegistration = (email, password, name, location, history) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                // send name to fire base after creation 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);
                });
                const destination = location.state?.from || '/home';
                history(destination)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            }).finally(() => { })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [])

    //login code here
    const loginUser = (email, password, location, history) => {
        console.log('history', history);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const destination = location.state?.from || '/home';
                history(destination)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally()
    }
    //logout code here
    const history = useNavigate()
    const logOut = () => {
        signOut(auth).then(() => {
            history('/')
            setError('')
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
            .finally()
    }




    return {
        userRegistration, loginUser, error, user, logOut
    }
}

export default useFirebase;