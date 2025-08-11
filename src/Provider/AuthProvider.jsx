import { useState } from "react";
import app from "../firebase/firebase.init";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updatePassword,
} from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import { useEffect } from "react";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const signUpUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const singInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGooglePopUp = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const resetPassword = (newPassword) => {
        return updatePassword(auth.currentUser, newPassword);
    };

    const resetForgottenPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const signOutUser = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        setUser,
        isLoading,
        singInUser,
        signUpUser,
        signInWithGooglePopUp,
        resetPassword,
        resetForgottenPassword,
        signOutUser,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
